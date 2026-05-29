<template>
    <NuxtLayout>
        <main class="bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <section class="container py-28 font-inter text-2b">

                <!-- Hero image -->
                 <div class="flex items-center justify-center">
                    <NuxtImg 
                        src="/images/IT.jpg" 
                        alt="IT" format="webp" 
                        class="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                 </div>
    
                <!-- Content -->
                 <div class="flex flex-col items-start justify-center gap-4 px-10 py-10">
                    <h1 class="text-4xl font-bold text-gray-800">Information Technology(IT)</h1>
                    <p class="text-lg text-gray-600 mt-2">
                        In the fast-evolving digital world, our IT program focuses on building core skills in 
                        programming, networking, system administration, and tech support. 
                        We blend classroom learning with project-based training to help participants develop confidence in real-world tasks.
                    </p><br>
                    <p class="text-lg text-gray-600 mt-2">
                        Our IT program is designed to equip participants with the skills and knowledge needed to excel in the technology sector. 
                        We cover a wide range of topics, including programming languages, database management, cybersecurity, and cloud computing.
                        Participants will gain hands-on experience through practical exercises and projects, allowing them to apply their knowledge in real-world scenarios.
                    </p>
                    <p class="text-lg text-gray-600 mt-2">
                        To expand career pathways, we seek partnerships with tech companies, outsourcing firms, and startup ecosystems abroad. 
                        We aim to match the rising demand for reliable IT support and digital talent with skilled Indonesian workers ready to grow internationally.
                    </p>
                </div>

            </section>
        </main>
    </NuxtLayout>


</template>

<script setup lang="ts">

useHead({
    title: 'IT - PT Della Fadhil Anugrah',
    meta: [
        {
            name: 'description',
            content: 'Explore the IT industry with PT Della Fadhil Anugrah. We provide comprehensive manpower solutions tailored to your needs.'
        },
        {
            name: 'keywords',
            content: 'IT, Information Technology, Manpower, Recruitment, PT Della Fadhil Anugrah'
        }
    ]
})
</script>