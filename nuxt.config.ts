// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    },
    viewTransition: true,
    componentIslands: true,
  },

  image: {
    provider: 'ipx',
    inject: true,
    format: ['webp', 'avif', 'jpg', 'png'],
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 1920,
          height: 1080,
          quality: 90
        }
      }
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './icon_DAF.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    },
  },
  
  css: [
    '@/assets/css/main.css',
  ],
  
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
      'Roboto Mono': true,
      'Space Mono': true,
    }
  },

  vite: {
    plugins: [
      // Add any Vite plugins here
        tailwindcss(),
      ],
  },

  runtimeConfig: {
    // Server-side environment variables
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
  },
});