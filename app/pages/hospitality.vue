<template>
    <NuxtLayout>
        <main class="bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <section class="container py-28 font-inter text-2b">

                <!-- Hero Image -->
                <div class="flex items-center justify-center">
                    <NuxtImg 
                        src="/images/hospitality.jpg" 
                        alt="Hospitality" format="webp" 
                        class="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                </div>

                <!-- Content -->
                <div class="flex flex-col items-start justify-center gap-4 px-10 py-10">
                    <h1 class="text-4xl font-bold text-gray-800">Hospitality</h1>
                    <p class="text-lg text-gray-600 mt-2">
                        We deliver training in hotel services, food and beverage, housekeeping, 
                        and tourism management with a strong focus on international etiquette, 
                        communication, and customer service. 
                        Role-playing, simulations, and English practice are essential parts of our 
                        curriculum to build global confidence.
                    </p><br>
                    <p class="text-lg text-gray-600 mt-2">
                        To expand career pathways, we seek partnerships with hotels, restaurants, and tourism agencies abroad. 
                        We aim to match the rising demand for reliable hospitality support and digital talent with skilled Indonesian workers ready to grow internationally.
                    </p>
                    <p class="text-lg text-gray-600 mt-2">
                        We collaborate with hotel chains, cruise lines, and tourism operators in 
                        Asia and Europe to provide exciting work placements. 
                        Our mission is to shape workers who not only serve but elevate 
                        the standards of the hospitality industry abroad.
                    </p>
                </div>

            </section>
        </main>

    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Hospitality - PT Della Fadhil Anugrah',
    meta: [
        {
            name: 'description',
            content: 'Explore the Hospitality industry with PT Della Fadhil Anugrah. We provide comprehensive manpower solutions tailored to your needs.'
        },
        {
            name: 'keywords',
            content: 'Hospitality, Manpower, Recruitment, PT Della Fadhil Anugrah'
        }
    ]
})
</script>
