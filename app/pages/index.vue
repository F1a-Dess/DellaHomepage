<template>
    <NuxtLayout>
        <main class="font-inter text-2b">
            <!-- HeroSection is kept eager loaded for better initial paint -->
            <SectionsHeroSection />

            <!-- Vision Section with loading state -->
            <Suspense>
                <template #default>
                    <SectionsVisionSection />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[400px]" />
                </template>
            </Suspense>

            <!-- IndonesianManpower Section with loading state -->
            <Suspense>
                <template #default>
                    <LazySectionsIndonesianManpowerSection />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[500px]" />
                </template>
            </Suspense>

            <!-- Industries Section with loading state -->
            <Suspense>
                <template #default>
                    <LazyIndustries />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[600px]" />
                </template>
            </Suspense>

            <Suspense>
                <template #default>
                    <LazySectionsManpowerPlacementSection />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[400px]" />
                </template>
            </Suspense>

            <!-- Country Section with loading state -->
            <Suspense>
                <template #default>
                    <LazySectionsCountrySection />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[400px]" />
                </template>
            </Suspense>

            <!-- Testimonial Section with loading state -->
            <Suspense>
                <template #default>
                    <LazySectionsTestimonialSection />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[300px]" />
                </template>
            </Suspense>

            <!-- Partner Section with loading state -->
             <Suspense>
                <template #default>
                    <LazySectionsPartnerSection />
                </template>
                <template #fallback>
                    <LoadingSkeleton className="h-[300px]" />
                </template>
             </Suspense>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Professional Indonesian Human Resource Services - PT Della Fadhil Anugrah',
    meta: [
        { name: 'description', content: 'PT Della Fadhil Anugrah is a manpower supply company based in Indonesia, specializing in providing skilled and unskilled labor for various industries.' },
        { name: 'keywords', content: 'manpower supply, Indonesia, skilled labor, unskilled labor, PT Della Fadhil Anugrah' },
        { name: 'author', content: 'PT Della Fadhil Anugrah' },
    ],
})
</script>