<template>
    <div :class="['animate-pulse', className]">
        <div class="bg-gray-200 rounded-lg h-full w-full"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    className?: string
}>()
</script>