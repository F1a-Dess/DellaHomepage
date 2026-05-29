<template>
    <NuxtLayout>
        <main>
            <!-- Hero -->
            <section 
                class="pt-60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-bl from-blue-100 via-white to-sky-200"></div>
                <div class="container relative z-10">
                    <h1 
                        class="text-6xl text-blue-700 text-shadow-lg font-extrabold mb-6 text-balance">
                        PT Della Fadhil Anugrah
                    </h1>
                    
                    <p class="text-2xl font-extrabold mb-6 pt-8 text-balance max-w-screen-lg mx-auto transform hover:translate-y-1 transition-all duration-300">
                        With such a large opportunity for projected work abroad, 
                        <a class="text-blue-500 hover:text-indigo-600 transition-colors">We</a> hopes to synergize with all parties, 
                        especially the Government in order to <a class="text-blue-500 hover:text-indigo-600 transition-colors">reduce the potential for unemployment</a>
                        by <a class="text-blue-500 hover:text-indigo-600 transition-colors">increasing foreign exchange</a> with Indonesian Migrant Worker Placement Program.
                    </p>
                </div>
            </section>
    
            <div class="grid grid-grid-cols-1 lg:grid-cols-2 gap-6 py-14 bg-gradient-to-br from-sky-200 via-white to-indigo-100">
                <NuxtImg 
                    src="/images/hero-img-1.jpg" alt="Nuxtcipes" 
                    class="rounded-xl hover:scale-105 transition-transform duration-300" 
                    format="webp" density="x1 x2"
                    width="800px" height="520px"
                    sizes="25vw, 33vw"
                />
                
                <p class="flex flex-col justify-center items-start gap-2 font-bold text-xl text-balance
                    sm:container sm:text-xl sm:p-4 hover:translate-x-2 transition-transform duration-300
                ">
                    <span class="text-4xl text-blue-500 text-shadow-md">Since 2021</span>
                    We have carried out effective and efficient service, provide technical and administrative support 
                    along with providing employment information.<br><br>
                    Until today we still improving the quality of P3MI's human resources and infrastructure.
                </p>
            </div>

            <!-- Our History -->
            <section class="py-32 relative overflow-hidden bg-gradient-to-bl from-indigo-100 via-white to-white">
                <div class="container relative z-10">
                    <div class="grid grid-cols-2 gap-20">
                        <div></div>
                        <div>
                            <h2 class="text-6xl font-extrabold text-blue-500 place-items-start pb-6">Our History</h2>
                        </div>
                        <div class="flex flex-col justify-center items-start gap-2 font-bold text-xl text-balance
                            sm:container sm:text-xl sm:p-4 
                        ">
                            <span class="text-3xl text-blue-500 text-shadow-md">2021</span>
                            PT Della Fadhil Anugrah was established in 2021, 
                            and has been registered as a legal entity in the Ministry of Law and Human Rights of the Republic of Indonesia.
                        </div>
                        <div class="flex flex-col justify-center items-start gap-2 font-bold text-xl text-balance
                            sm:container sm:text-xl sm:p-4 
                        ">
                            <span class="text-3xl text-blue-500 text-shadow-md">2022</span>
                            In 2022, we have been registered as a member of the Indonesian Manpower Association (APJATI)
                            and the Indonesian Migrant Workers Association (APJATI) in the province of East Java.
                        </div>
                        <div class="flex flex-col justify-center items-start gap-2 font-bold text-xl text-balance
                            sm:container sm:text-xl sm:p-4 
                        ">
                            <span class="text-3xl text-blue-500 text-shadow-md">2023</span>
                            In 2023, we expanded our services to include training programs for migrant workers.
                        </div>  
                    </div>
                </div>
            </section>

            <!-- Our Office -->
             <section class="py-32 relative overflow-hidden">
                 <div class="container relative z-10">
                     <h2 class="text-6xl font-extrabold text-blue-500 place-items-center pb-6">Our Office</h2>
                     <div class="grid grid-cols-1 lg:grid-cols-2 grid-flow-rows gap-8">
                        <div class="text-2xl font-extrabold text-balance">
                            <p class="mb-6 pt-8 max-w-screen-lg mx-auto">
                                PT Della Fadhil Anugrah<br>
                                Graha Pegasolln, Jl. Caman Raya No.55,<br>
                                Jatibening, Pondok Gede, Bekasi City, West Java 17142.<br>
                                Indonesia.<br><br>
                            </p>

                            <div class="flex items-center py-2 gap-2">
                                <Icon name="material-symbols:phone-in-talk" size="36" class="text-blue-500" />
                                <a href="tel:+6281234567890" class="text-blue-500 hover:text-indigo-600 transition-colors">+62 812 3456 7890</a><br>
                            </div>
                            <div class="flex items-center py-2 gap-2">
                                <Icon name="material-symbols:mail" size="36" class="text-blue-500" />
                                <a href="mailto:info@dellafadhilanugrah.com" class="text-blue-500 hover:text-indigo-600 transition-colors">info@dellafadhilanugrah.com</a>
                            </div>
                        </div>

                        <div 
                        class="flex flex-col justify-center items-start gap-2 font-bold text-xl text-balance
                            sm:text-xl sm:p-4">
                        
                            <NuxtImg 
                                src="/images/office.jpg" alt="PT Della Fadhil Anugrah Office" 
                                class="rounded-xl" 
                                format="webp" density="x1 x2"
                                width="800px" height="520px"
                                sizes="30vw, 45vw" />

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9784424652044!2d106.9439115!3d-6.2665653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d10e4c4f30f%3A0x98aa0e3d659920fc!2sGraha%20Pegasolln!5e0!3m2!1sen!2sid!4v1746602657373!5m2!1sen!2sid" 
                            width="700px" height="370px"
                            sizes="30vw, 45vw"
                            class="rounded-xl" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade" />

                        </div>
                    </div>
                </div>
            </section>

            <section class="py-32 relative overflow-hidden">
                <div class="container relative z-10">
                <!-- Video Gallery -->
                    <div class="mt-8">
                        <h3 class="text-2xl font-bold text-blue-500 mb-4">Our Activities</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <video 
                                class="w-full rounded-xl hover:scale-105 transition-transform duration-300" 
                                controls
                                preload="metadata"
                            >
                                <source src="/vid/DSCF4603.webm" type="video/webm">
                                <source src="/vid/DSCF4603.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <video 
                                class="w-full rounded-xl hover:scale-105 transition-transform duration-300" 
                                controls
                                preload="metadata"
                            >
                                <source src="/vid/DSCF4612.webm" type="video/webm">
                                <source src="/vid/DSCF4612.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <video 
                                class="w-full rounded-xl hover:scale-105 transition-transform duration-300" 
                                controls
                                preload="metadata"
                            >
                                <source src="/vid/DSCF4621.webm" type="video/webm">
                                <source src="/vid/DSCF4621.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact US -->
            <section class=" py-44 bg-gradient-to-b from-white via-indigo-100 to-white">
                <div class="container ">

                    <h2 
                        class="text-6xl font-extrabold text-blue-500 place-items-center pb-6">
                        Let's Get To Know Each Other!
                    </h2>
                    <p class="text-2xl font-extrabold mb-6 pt-8 text-balance max-w-screen-lg mx-auto">
                        If you have any questions or inquiries, please feel free to reach out to us.
                        
                    </p>
    
                    <div v-if="submitted" class="max-w-screen-lg mx-auto p-4 bg-indigo-100 text-indigo-700 rounded-lg mb-6">
                        Thank you for your message! We'll get back to you soon.
                    </div>
    
                    <form @submit.prevent="handleSubmit" class="max-w-screen-lg mx-auto flex flex-col gap-4">
                        <div v-if="error" class="p-4 bg-red-100 text-red-700 rounded-lg">
                            {{ error }}
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex flex-col">
                                <input 
                                    v-model="formData.name"
                                    type="text" 
                                    placeholder="Your Name" 
                                    class="border rounded p-2 mb-4 w-full
                                    focus:outline-none focus:ring-2 focus:ring-blue-700" 
                                    required 
                                    :disabled="isSubmitting"
                                />
                            </div>
                            <div class="flex flex-col">
                                <input 
                                    v-model="formData.email"
                                    type="email" 
                                    placeholder="Your Email" 
                                    class="border rounded p-2 mb-4 w-full
                                    focus:outline-none focus:ring-2 focus:ring-blue-700" 
                                    required
                                    :disabled="isSubmitting"
                                />
                            </div>
                            <div class="flex flex-col">
                                <input 
                                    v-model="formData.phone"
                                    type="number" 
                                    placeholder="Active Phone Number" 
                                    class="border rounded p-2 mb-4 w-full
                                    focus:outline-none focus:ring-2 focus:ring-blue-700
                                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                    [&::-webkit-inner-spin-button]:appearance-none" 
                                    required
                                    :disabled="isSubmitting"
                                />
                            </div>
                        </div>
                        <textarea 
                            v-model="formData.message"
                            placeholder="Your Message" 
                            class="border rounded p-2 mb-4 w-full
                            focus:outline-none focus:ring-2 focus:ring-blue-700" 
                            required
                            :disabled="isSubmitting"
                        ></textarea>
                        <button 
                        type="submit" 
                        class="bg-blue-400 text-white rounded p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="isSubmitting"
                        >
                            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'About Us',
    meta: [
        {
            name: 'description',
            content: 'PT Della Fadhil Anugrah is a trusted Indonesian manpower placement company.'
        },
        {
            name: 'keywords',
            content: 'PT Della Fadhil Anugrah, Indonesian manpower, trusted company, placement services'
        },
    ]
})

const formData = ref({
    name: '',
    email: '',
    message: '',
    phone: '',
})
const isSubmitting = ref(false)
const submitted = ref(false)
const error = ref('')

const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const handleSubmit = async () => {
    if (isSubmitting.value) return
    
    error.value = ''
    
    // Client-side validation
    if (!formData.value.name.trim()) {
        error.value = 'Please enter your name'
        return
    }
    
    if (!validateEmail(formData.value.email)) {
        error.value = 'Please enter a valid email address'
        return
    }
    
    if (formData.value.message.length < 10) {
        error.value = 'Message must be at least 10 characters long'
        return
    }
    
    isSubmitting.value = true
    
    try {
        const response = await $fetch('/api/contact', {
            method: 'POST',
            body: formData.value
        })
        submitted.value = true
        formData.value = { name: '', email: '', message: '', phone: '' }
    } catch (e: any) {
        error.value = e.data?.message || 'Failed to send message. Please try again.'
    } finally {
        isSubmitting.value = false
    }
}
</script>
