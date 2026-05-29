<template>
    <section class="place-items-center bg-gradient-to-b from-white to-sky-50 rounded-lg shadow-lg flex-auto gap-5 justify-center md:flex-row md:gap-10 md:justify-between">
        <h1 class="title text-4xl font-extrabold text-balance text-center pt-7">
            Partnered Countries
        </h1>
        
        <div class="py-20 gap-4 md:gap-6 grid grid-flow-rows grid-cols-2 sm:grid-cols-3 place-items-center">
            <template v-for="country in countries" :key="country.code">
                <div class="justify-center items-center bg-blue-200 hover:bg-blue-300 transition-colors duration-300 rounded-lg shadow-lg p-2 md:p-6 
                    max-w-[162px] md:max-w-[193px] lg:max-w-[342px]">
                    <NuxtImg 
                        :src="country.image" 
                        :alt="`${country.name} representation`"
                        format="webp"
                        loading="lazy"
                        placeholder
                        height="240"
                        width="300"
                        class="rounded-xl object-cover transform transition-transform hover:scale-105 place-self-center"
                    />
                    <div class="grid grid-flow-row place-items-center py-2 gap-2">
                        <Icon :name="country.flag" class="w-8 md:w-12 h-8 md:h-12"/>
                        <h2 class="text-xl font-bold text-center flex gap-2">
                            {{ country.name }}
                        </h2>
                    </div>
                    <p class="text-sm md:text-base text-gray-800">
                        {{ country.description }}
                    </p>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Country {
    code: string;
    name: string;
    flag: string;
    image: string;
    description: string;
}

const countries: Country[] = [
    {
        code: 'kr',
        name: 'South Korea',
        flag: 'flag:kr-4x3',
        image: '/images/country/sk_2.jpg',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
        code: 'jp',
        name: 'Japan',
        flag: 'flag:jp-4x3',
        image: '/images/country/jp_2.jpg',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
        code: 'cz',
        name: 'Czech Republic',
        flag: 'flag:cz-4x3',
        image: '/images/country/cz_2.jpg',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
        code: 'hr',
        name: 'Croatia',
        flag: 'flag:hr-4x3',
        image: '/images/country/hr_2.jpg',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
        code: 'pl',
        name: 'Poland',
        flag: 'flag:pl-4x3',
        image: '/images/country/pl_2.jpg',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
        code: 'hu',
        name: 'Hungary',
        flag: 'flag:hu-4x3',
        image: '/images/country/hg_2.jpg',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    }
]
</script>

<style scoped>
.grid {
    view-timeline-name: --image;
    view-timeline-axis: block;
}

.title {
    animation: fade linear both;
    animation-range: entry 25% cover 35%;
}

.grid > * {
    animation: fade linear both;
    animation-timeline: --image;
    animation-range: entry 25% cover 35%;
}

@keyframes fade {
    from { 
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
