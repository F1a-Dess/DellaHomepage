<template>
    <section
        class="flex flex-col items-center justify-center py-16 gap-7 shadow-lg
        min-h-32 bg-blue-200">

        <div 
            class="container flex flex-col items-center justify-center gap-5">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-[#2B2B2B]">
                Our Partners
            </h2>

            <div class="w-full overflow-hidden relative">
                <div class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-200 to-transparent z-15"></div>
                <div class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-200 to-transparent z-15"></div>

                <div class="carousel-track">
                    <div class="carousel-content">
                        <NuxtImg 
                            v-for="(logo, index) in partnerLogos" 
                            :key="index"
                            :src="logo.src" 
                            :alt="logo.alt"
                            class="carousel-item"
                            loading="lazy"
                        />
                        <NuxtImg 
                            v-for="(logo, index) in partnerLogos" 
                            :key="`duplicate-${index}`"
                            :src="logo.src" 
                            :alt="logo.alt"
                            class="carousel-item"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const partnerLogos = [
    { src: '/images/partners/Chungcheong.png', alt: 'Chungcheong' },
    { src: '/images/partners/deniel.png', alt: 'Deniel' },
    { src: '/images/partners/heesung.png', alt: 'Heesung' },
    { src: '/images/partners/hrdk.png', alt: 'HRDK' },
    { src: '/images/partners/Hyundai_Mipo_Dockyard-Logo.wine.png', alt: 'Hyundai Mipo Dockyard' },
    { src: '/images/partners/koshipa.png', alt: 'Koshipa' },
    { src: '/images/partners/lg.png', alt: 'LG' },
    { src: '/images/partners/lx.png', alt: 'LX' },
    { src: '/images/partners/koba.png', alt: 'koba' },
    { src: '/images/partners/Samsung-Logo-768x195.webp', alt: 'Samsung' },
    { src: '/images/partners/tokyubus.png', alt: 'Tokyu Bus' },
    { src: '/images/partners/unisky.png', alt: 'Unisky' },
];
</script>

<style>
.carousel-track {
    overflow: hidden;
    position: relative;
    width: 100%;
}

.carousel-content {
    display: flex;
    gap: 3rem;
    animation: scroll 30s linear infinite;
    width: max-content;
}

.carousel-item {
    width: 12rem;
    height: 6rem;
    object-fit: contain;
    transition: all 1s ease;
    flex-shrink: 0;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% / 2));
    }
}

/* Smooth pause on hover */
.carousel-content:hover {
    animation-play-state: paused;
}
</style>