<template>
    <section 
        class="flex-col bg-gradi gap-20 p-12 justify-center
        bg-gradient-to-bl from-blue-200 via-gray-50 to-white
        sm:p-6
        md:flex-row md:gap-10 md:justify-between
        "
    >
        <div class="container flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center">
            <!-- create like corousel -->
            <NuxtImg 
                src="/images/farmer_2.jpg" 
                alt="PT Della Fadhil Anugrah"
                loading="lazy"
                format="webp" density="1"
                width="400" height="520"
                class="rounded-xl shadow-lg"
            />
            <p 
                class="font-extrabold text-balance
                    sm:text-xl sm:font-extrabold
                    md:text-3xl md:font-extrabold">
                As one of the largest economies in Southeast Asia, Indonesia produces dedicated professionals across a wide range of industries,
                        from construction and manufacturing to hospitality, healthcare, and maritime sectors.
            </p>
        </div>
    </section>
</template>

<script lang="ts">
</script>
