<template>
    <NuxtLayout>
        <main class="bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <section class="container py-28 font-inter text-2b">
                
                <!-- Hero image -->
                 <div class="flex items-center justify-center">
                    <NuxtImg 
                        src="/images/healthcare.jpg" 
                        alt="Healthcare" format="webp" 
                        class="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                 </div>
    
                <!-- Content -->
                <div class="flex flex-col items-start justify-center gap-4 px-10 py-10">
                    <h1 class="text-4xl font-bold text-gray-800">Healthcare</h1>
                    <p class="text-lg text-gray-600 mt-2">
                        Our Healthcare program, particularly in caregiving, 
                        prepares trainees to serve with compassion, competence, and 
                        cultural sensitivity. The training covers basic medical knowledge, 
                        patient handling, elderly care, communication, and emotional intelligence.
                    </p><br>
                    <p class="text-lg text-gray-600 mt-2">
                        To expand career pathways, we seek partnerships with healthcare providers, hospitals, and clinics abroad. 
                        We aim to match the rising demand for reliable healthcare support and digital talent with skilled Indonesian workers ready to grow internationally.
                    </p>
                    <p class="text-lg text-gray-600 mt-2">
                        We work closely with hospitals, care homes, and healthcare organizations 
                        in countries like Japan and South Korea to understand their expectations 
                        and ensure our graduates are well-prepared. Our team provides full assistance in 
                        certification, language readiness, and placement procedures.
                    </p>
                </div>
            
            </section>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Healthcare - PT Della Fadhil Anugrah',
    meta: [
        {
            name: 'description',
            content: 'Explore the Healthcare industry with PT Della Fadhil Anugrah. We provide comprehensive manpower solutions tailored to your needs.'
        },
        {
            name: 'keywords',
            content: 'Healthcare, Manpower, Recruitment, PT Della Fadhil Anugrah'
        }
    ]
})
</script>