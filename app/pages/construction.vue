<template>
    <NuxtLayout>
        <main class="bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <section class="container py-28 font-inter text-2b">

                <!-- Hero Image -->
                 <div class="flex items-center justify-center">
                    <NuxtImg 
                        src="/images/construction.jpg" 
                        alt="Construction" format="webp" 
                        class="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                 </div>

                 <!-- Content -->
                <div class="flex flex-col items-start justify-center gap-4 px-10 py-10">
                    <h1 class="text-4xl font-bold text-gray-800">Healthcare</h1>
                    <p class="text-lg text-gray-600 mt-2">
                        Our Construction training prepares workers for hands-on roles 
                        in building, carpentry, welding, electrical installation, and masonry. 
                        The program stresses safety, teamwork, and worksite discipline—essential 
                        qualities for success in global projects.
                    </p><br>
                    <p class="text-lg text-gray-600 mt-2">
                        To expand career pathways, we seek partnerships with construction firms, 
                        engineering companies, and project management agencies abroad. 
                        We aim to match the rising demand for reliable construction support and 
                        digital talent with skilled Indonesian workers ready to grow internationally.
                    </p>
                    <p class="text-lg text-gray-600 mt-2">
                        We partner with construction firms, labor suppliers, 
                        and government-linked initiatives in countries experiencing labor shortages. 
                        Through direct cooperation, we ensure our graduates can meet 
                        the physical and technical demands of international construction jobs.
                    </p>
                </div>

            </section>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Construction - PT Della Fadhil Anugrah',
    meta: [
        {
            name: 'description',
            content: 'Explore the Construction industry with PT Della Fadhil Anugrah. We provide comprehensive manpower solutions tailored to your needs.'
        },
        {
            name: 'keywords',
            content: 'Construction, Manpower, Recruitment, PT Della Fadhil Anugrah'
        }
    ]
})
</script>