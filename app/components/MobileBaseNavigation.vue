<template>

    <div class="sm:hidden py-1 grid grid-flow-cols grid-cols-11 bg-lime-50/55 text-2b backdrop-blur-lg shadow-md fixed top-0 left-0 w-full z-50">

        <h1 class="col-start-2 col-end-8 col-span-7 content-center text-base font-bold text-2b">
                PT Della Fadhil Anugerah
        </h1>

        <!-- Mobile Menu Button -->
        <button 
            class="col-start-10 col-end-11 content-center md:hidden ml-auto col-span-2 p-2 rounded-md hover:bg-gray-100"
            @click="toggleMobileMenu"
            aria-label="Toggle Menu"
        >
            <Icon 
                :name="isMobileMenuOpen ? 'gridicons:cross' : 'gridicons:menu'" 
                class="w-6 h-6"
            />
        </button>
    </div>
    
        <!-- Mobile Menu Background Overlay -->
        <Transition
            enter-active-class="transition-opacity duration-300 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-in-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            class=" bg-gray-50/55 z-30"
        >
            <div 
                v-show="isMobileMenuOpen"
                class="fixed inset-0 bg-black/50 z-30"
                @click="closeMobileMenu"
            >
    
            </div>
        </Transition>
    
        <!-- Mobile Menu -->
        <Transition
            enter-active-class="transition-transform duration-300 ease-in-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-transform duration-300 ease-in-out"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
            
        >
            <div 
                v-show="isMobileMenuOpen"
                class="md:hidden fixed inset-y-0 right-0 w-[240px] bg-lime-50/95 backdrop-blur-lg z-40 shadow-xl overflow-y-auto"
            >
                <!-- Close Button -->
                <button 
                    class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200/50 transition-colors"
                    @click="closeMobileMenu"
                    aria-label="Close Menu"
                >
                    <Icon name="gridicons:cross" class="w-6 h-6" />
                </button>
    
                <ul class="pt-20 px-4 space-y-4 text-lg font-bold">
                    <li>
                        <NuxtLink 
                            to="/" 
                            class="block p-3 hover:bg-gray-100 rounded-md"
                            @click="closeMobileMenu"
                        >
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/about" 
                            class="block p-3 hover:bg-gray-100 rounded-md"
                            @click="closeMobileMenu"
                        >
                            About Us
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/" 
                            class="block p-3 hover:bg-gray-100 rounded-md"
                            @click="closeMobileMenu"
                        >
                            Blog
                        </NuxtLink>
                    </li>
                    <li>
                        <button 
                            class="flex items-center justify-between w-full p-3 hover:bg-gray-100 rounded-md"
                            @click="toggleMobileServices"
                        >
                            Our Services
                            <Icon :name="isMobileServicesVisible ? 'gridicons:chevron-up' : 'gridicons:chevron-down'" class="w-4 h-4" />
                        </button>
                        <ul 
                            v-show="isMobileServicesVisible"
                            class="pl-4 mt-2 space-y-2"
                        >
                            <li v-for="service in services" :key="service.path">
                                <NuxtLink 
                                    :to="service.path"
                                    class="block p-3 hover:bg-gray-100 rounded-md"
                                    @click="closeMobileMenu"
                                >
                                    {{ service.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button 
                            class="flex items-center justify-between w-full p-3 hover:bg-gray-100 rounded-md"
                            @click="toggleMobileIndustries"
                        >
                            Our Industry
                            <Icon :name="isMobileIndustriesVisible ? 'gridicons:chevron-up' : 'gridicons:chevron-down'" class="w-4 h-4" />
                        </button>
                        <ul 
                            v-show="isMobileIndustriesVisible"
                            class="pl-4 mt-2 space-y-2"
                        >
                            <li v-for="industry in industries" :key="industry.path">
                                <NuxtLink 
                                    :to="industry.path"
                                    class="block p-3 hover:bg-gray-100 rounded-md"
                                    @click="closeMobileMenu"
                                >
                                    {{ industry.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const isMobileServicesVisible = ref(false)
const isMobileIndustriesVisible = ref(false)

const services = [
    { name: 'Engineering', path: '/engineering' },
    { name: 'Healthcare', path: '/healthcare' },
    { name: 'IT', path: '/it' },
    { name: 'Construction', path: '/construction' },
    { name: 'Hospitality', path: '/hospitality' }
]

const industries = [
    { name: 'Engineering', path: '/engineering' },
    { name: 'Healthcare', path: '/healthcare' },
    { name: 'IT', path: '/it' },
    { name: 'Construction', path: '/construction' },
    { name: 'Hospitality', path: '/hospitality' }
]

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (!isMobileMenuOpen.value) {
        isMobileServicesVisible.value = false
        isMobileIndustriesVisible.value = false
    }
}

const toggleMobileServices = () => {
    isMobileServicesVisible.value = !isMobileServicesVisible.value
    if (isMobileIndustriesVisible.value) isMobileIndustriesVisible.value = false
}

const toggleMobileIndustries = () => {
    isMobileIndustriesVisible.value = !isMobileIndustriesVisible.value
    if (isMobileServicesVisible.value) isMobileServicesVisible.value = false
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    isMobileServicesVisible.value = false
    isMobileIndustriesVisible.value = false
}

defineExpose({
    closeMobileMenu
})
</script>
