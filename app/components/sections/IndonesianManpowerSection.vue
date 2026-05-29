<template>
    <section class="flex-col gap-20 justify-center md:flex-row md:gap-10 md:justify-between
        bg-gradient-to-bl from-white via-sky-100 to-blue-200">
        <div class="relative h-5/6 md:max-h-[770px] lg:h-[900px]">
            <!-- Background Layer with optimized image loading -->
            <NuxtImg 
                src="/images/worker.jpg"
                alt="Background worker image"
                class="absolute inset-0 w-full h-full object-cover blur-sm opacity-20"
                format="webp" density="x1 x2"
            />

            <!-- Foreground Content Layer -->
            <div class="relative grid place-content-center pt-8 md:pt-20 gap-4">
                <div class="space-y-6">
                    <h2 class="container font-medium text-balance text-center drop-shadow-md
                        sm:text-xl sm:p-4
                        md:text-2xl md:p-4
                        lg:text-4xl lg:p-4">
                        We strive to empower Indonesian manpower with integrity, transparency, and professionalism, ensuring better opportunities and <a class="font-bold">a brighter future for them and their families.</a>
                    </h2>
                    <h2 class="container font-medium text-balance text-center 
                        sm:text-xl sm:p-4
                        md:text-2xl md:p-4
                        lg:text-4xl lg:p-4">
                        We believe Indonesian manpower could bring many industries to improve with their strong work ethic, cultural adaptability, and willingness to continuously learn and improve. 
                    </h2>
                </div>

                <!-- Gallery Section with optimized image loading -->
                <div class="container py-6">
                    <div class="grid grid-cols-3 lg:grid-cols-4 gap-3">
                        <template v-for="(image) in images" :key="index">
                            <div class="relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                                <ClientOnly>
                                    <NuxtImg 
                                        :key="image.id"
                                        :src="image.src"
                                        :alt="image.alt"
                                        class="rounded-xl shadow-lg h-[130px] md:h-[170px] lg:h-[240px] w-full object-cover"
                                        loading="lazy"
                                        placeholder
                                        format="webp"
                                        @error="handleImageError(image.id)"
                                    />
                                    <div v-if="failedImages.includes(image.id)" 
                                         class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
                                        <p class="text-gray-500 text-sm">Image failed to load</p>
                                    </div>
                                </ClientOnly>
                            </div>
                        </template>
                        <div 
                            class="bg-indigo-900 rounded-xl shadow-lg flex items-center justify-center col-span-3 lg:col-span-1 h-[80px] lg:h-[240px]
                            transform transition-transform duration-300 ease-in-out hover:scale-105">
                            <h3 class="text-center text-white font-bold text-xl">
                                View More
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const failedImages = ref<number[]>([])

const images = [
    { id: 1, src: '/images/fisher_2.jpg', alt: 'fisherman' },
    { id: 2, src: '/images/worker_2.jpg', alt: 'worker' },
    { id: 3, src: '/images/welder_2.jpg', alt: 'welder' }
]

const handleImageError = (id: number) => {
    if (!failedImages.value.includes(id)) {
        failedImages.value.push(id)
    }
}
</script>

<style scoped>
.snap-x {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.snap-x::-webkit-scrollbar {
    display: none;
}
</style>
