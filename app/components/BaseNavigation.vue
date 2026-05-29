<template>
    <header 
        class="py-1 bg-sky-50/80 text-2b backdrop-blur-lg shadow-md fixed 
        top-0 left-0 w-full z-50"
    >
        <nav class="grid grid-flow-row grid-cols-6 lg:grid-cols-9 container items-center">
            <div class="gap-1 content-center place-self-center col-span-4 h-12 sm:h-16">
                <NuxtLink to="/" class="flex gap-1 items-center h-12 sm:h-16">
                    <h1 class="text-base sm:text-3xl font-bold">PT Della Fadhil Anugrah</h1>
                </NuxtLink>
            </div>
            
            <div class="hidden lg:flex mx-auto lg:place-self-center h-16">
                <NuxtLink to="/" class="flex gap-1 items-center h-16">
                    <NuxtImg width="42px" src="/Logo_DAF.png" format="webp" alt="" />
                </NuxtLink>
            </div>

            <ul class="hidden md:flex items-center ml-auto text-lg md:text-base font-bold col-span-5 lg:col-span-4 capitalize">
                <!-- about us -->
                <li>
                    <NuxtLink to="/about" 
                        class="hover:bg-slate-50 hover:outline-none hover:outline-blue-200
                        rounded-md transition duration-300 p-2 flex items-center"
                    >
                        About Us
                    </NuxtLink>
                </li>

                <!-- our blog -->
                <li>
                    <NuxtLink to="/" 
                        class="hover:bg-slate-50 hover:outline-none hover:outline-blue-200
                        rounded-md transition duration-300 p-2 flex items-center"
                    >
                        Blog
                    </NuxtLink>
                </li>

                <!-- Our Services -->
                <li class="relative">
                    <button 
                        class="hover:bg-slate-50 hover:outline-none hover:outline-blue-200 
                        rounded-md transition duration-300 p-2 flex items-center gap-1"
                        @click="toggleServices"
                    >
                        Our Services
                        <Icon :name="isServicesVisible ? 'gridicons:chevron-up' : 'gridicons:chevron-down'" class="w-4 h-4" />
                    </button>
                    <!-- Dropdown Menu -->
                    <Transition 
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100" 
                        leave-active-class="transition ease-in duration-100"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <ul 
                            class="absolute left-0 mt-4 w-40 bg-gray-50/55 rounded-md shadow-lg backdrop-blur-lg opacity-0 z-10"
                            :class="{ 'opacity-100': isServicesVisible }"
                            v-show="isServicesVisible"
                        >
                            <li>
                                <NuxtLink to="/engineering" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Skill & Non-Skill Training
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/healthcare" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Language Training
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/it" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Job Placement
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/construction" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    CV & Interview Preparation
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/hospitality" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Concultation
                                </NuxtLink>
                            </li>
                        </ul>
                    </Transition>
                </li>

                <!-- Our Industries -->
                <li class="relative">
                    <button 
                        class="hover:bg-slate-50 hover:outline-none hover:outline-blue-200 
                        rounded-md transition duration-300 p-2 flex items-center gap-1"
                        @click="toggleIndustries"
                    >
                        Our Industry
                        <Icon :name="isIndustriesVisible ? 'gridicons:chevron-up' : 'gridicons:chevron-down'" class="w-4 h-4" />
                    </button>

                    <Transition 
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100" 
                        leave-active-class="transition ease-in duration-100"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                    
                        <!-- Dropdown Menu -->
                        <ul 
                            class="absolute left-0 mt-4 w-40 bg-gray-50/55 rounded-md shadow-lg backdrop-blur-lg opacity-0 z-10"
                            :class="{ 'opacity-100': isIndustriesVisible }"
                            v-show="isIndustriesVisible"
                        >
                            <li>
                                <NuxtLink to="/engineering" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Engineering
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/healthcare" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Healthcare
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/it" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    IT
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/construction" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Construction
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/hospitality" class="block px-4 py-2 
                                    hover:bg-gray-100 hover:text-sky-400 transition duration-300 rounded-md">
                                    Hospitality
                                </NuxtLink>
                            </li>
                        </ul>
                    </Transition>
                </li>

                <!-- Contact Us -->
                <li>
                    <NuxtLink to="/" 
                        class="hover:bg-slate-50 hover:outline-none hover:outline-blue-200
                        rounded-md transition duration-300 p-2 flex items-center"
                    >
                        Contact Us
                    </NuxtLink>
                </li>

                <!-- Register -->
                <li>
                    <NuxtLink to="/" 
                        class="hover:bg-slate-50 hover:outline-none hover:outline-blue-200
                        rounded-md transition duration-300 p-2 flex items-center"
                    >
                        Register
                    </NuxtLink>
                </li>

            </ul>

        </nav>

    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isServicesVisible = ref(false)
const isIndustriesVisible = ref(false)
const mobileNav = ref()

const toggleServices = () => {
    isServicesVisible.value = !isServicesVisible.value
    // Close other menu if open
    if (isIndustriesVisible.value) isIndustriesVisible.value = false
}

const toggleIndustries = () => {
    isIndustriesVisible.value = !isIndustriesVisible.value
    // Close other menu if open
    if (isServicesVisible.value) isServicesVisible.value = false
}

const closeAllMenus = () => {
    isServicesVisible.value = false
    isIndustriesVisible.value = false
    mobileNav.value?.closeMobileMenu()
}

// Expose the close method to parent components
defineExpose({
    closeAllMenus
})
</script>
