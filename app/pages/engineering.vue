<template>
    <NuxtLayout>
        <main class="bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <section class="container py-28 font-inter text-2b">

                <!-- Hero image -->
                 <div class="flex items-center justify-center">
                    <NuxtImg 
                        src="/images/enginer.jpg" 
                        alt="Engineering" format="webp" 
                        class="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                 </div>
    
                <!-- Content -->
                 <div class="flex flex-col items-start justify-center gap-4 px-10 py-10">
                    <h1 class="text-4xl font-bold text-gray-800">Engineering</h1>
                    <p class="text-lg text-gray-600 mt-2">
                        Our Engineering training program equips participants with practical, 
                        job-ready skills in fields such as mechanical, electrical, 
                        and industrial engineering. 
                        We emphasize real-world application through hands-on workshops, 
                        guided by experienced instructors who have worked both locally and overseas. 
                        Safety standards, precision, and problem-solving are core to our curriculum.
                    </p><br>
                    <p class="text-lg text-gray-600 mt-2">
                        To expand career pathways, we seek partnerships with engineering firms, construction companies, and technology startups abroad. 
                        We aim to match the rising demand for reliable engineering support and digital talent with skilled Indonesian workers ready to grow internationally.
                    </p>
                    <p class="text-lg text-gray-600 mt-2">
                        We actively collaborate with international companies and 
                        placement agencies to ensure that our graduates are matched with 
                        suitable job opportunities abroad. By maintaining close ties with 
                        industry partners, we align our training with actual workforce needs.
                    </p>
                 </div>

            </section>
        </main>

    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Engineering - PT Della Fadhil Anugrah',
    meta: [
        {
            name: 'description',
            content: 'Explore the Engineering industry with PT Della Fadhil Anugrah. We provide comprehensive manpower solutions tailored to your needs.'
        },
        {
            name: 'keywords',
            content: 'Engineering, Manpower, Recruitment, PT Della Fadhil Anugrah'
        }
    ]
})
</script>