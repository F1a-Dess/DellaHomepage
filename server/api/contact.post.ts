import { defineEventHandler, readBody, getRequestIP } from 'h3'
import { appendFile } from 'fs/promises'
import { join } from 'path'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import { promisify } from 'util'

// Rate limiter setup
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: 'Too many contact requests, please try again later'
})

// Convert rate limit middleware to async function
const rateLimitAsync = promisify(limiter)

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Get runtime config
const config = useRuntimeConfig()

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: 'anzio.id.rapidplex.com',
  port: 465,
  secure: true,
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass
  }
})

export default defineEventHandler(async (event) => {
  try {
    // Apply rate limiting
    const ip = getRequestIP(event)
    await rateLimitAsync(event.node.req, event.node.res)
    
    const body = await readBody(event)
    
    // Validate input
    if (!body.name || !body.email || !body.message) {
      throw new Error('Missing required fields')
    }

    // Validate email format
    if (!emailRegex.test(body.email)) {
      throw new Error('Invalid email format')
    }

    // Validate message length
    if (body.message.length < 10) {
      throw new Error('Message must be at least 10 characters long')
    }

    // Create contact entry with GMT+7 timestamp
    const date = new Date()
    // Add 7 hours for GMT+7
    date.setHours(date.getHours() + 7)
    
    const contactEntry = {
      time: date.toISOString(),
      name: body.name,
      email: body.email,
      message: body.message
    }

    // Format the entry as specified
    const formattedEntry = `{\n    time: '${contactEntry.time}',\n    name: '${contactEntry.name}',\n    email: '${contactEntry.email}',\n    message: '${contactEntry.message}'\n},\n`

    // Path to contact_us.txt in public folder
    const filePath = join(process.cwd(), 'public', 'contact_us.txt')    // Append the entry to the file
    await appendFile(filePath, formattedEntry, { encoding: 'utf8' })

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'hr@jobkorea.co.id',
      subject: `New Contact Form Submission from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Message:

${body.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Message received and sent successfully'
    }
  } catch (error: any) {
    console.error('Error saving contact form:', error)
    return {
      success: false,
      message: error.message || 'An error occurred while processing your request'
    }
  }
})