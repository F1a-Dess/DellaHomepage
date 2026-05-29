<template>
    <div class="min-h-screen flex flex-col">
        <!-- Desktop Navigation -->
        <BaseNavigation ref="desktopNavRef" class="hidden md:block" />
        <!-- Mobile Navigation -->
        <MobileBaseNavigation ref="mobileNavRef" class="md:hidden" />
        <main class="flex-grow" @click="closeMenus">
        <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const desktopNavRef = ref(null)
const mobileNavRef = ref(null)

const closeMenus = () => {
    if (desktopNavRef.value) {
        desktopNavRef.value.closeAllMenus()
    }
    if (mobileNavRef.value) {
        mobileNavRef.value.closeMobileMenu()
    }
}
</script>
