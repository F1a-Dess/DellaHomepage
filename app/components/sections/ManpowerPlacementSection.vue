<template>
    <section class="
        flex-col gap-6 md:gap-16 p-12 justify-center
        bg-gradient-to-b from-blue-100 to-white shadow-xl">
        <div class="md:container flex flex-col justify-center items-center">
            <h2 class="text-4xl font-extrabold">Our Services Accross the Globe</h2>
            
            <div class="py-20 gap-10
                grid grid-flow-rows grid-cols-3 
                place-items-center 
                text-2xl font-bold text-balance text-center">

                <div 
                    class="justify-center items-center
                    flex flex-col md:gap-5 
                    ">
                    <Icon name="material-symbols:location-on" class="w-14 md:w-24 h-14 md:h-24" style="color: #2b2b2b"/>
                    <h1 class="text-base md:text-2xl">
                        Manpower Placement<br><a class="text-2xl md:text-3xl text-blue-900">1000+</a>
                    </h1>
                </div>

                <div 
                    class="justify-center items-center
                    flex flex-col md:gap-5
                    ">
                    <Icon name="material-symbols-light:handshake-rounded" class="w-14 md:w-24 h-14 md:h-24" style="color: #2b2b2b" />
                    <h1 class="text-base md:text-2xl">
                        Partnered Industries<br><a class="text-2xl md:text-3xl text-blue-900">50+</a>
                    </h1>
                </div>

                <div 
                    class="justify-center items-center
                    flex flex-col md:gap-5
                    ">
                    <Icon name="cil:industry" class="w-14 md:w-24 h-14 md:h-24" style="color: #2b2b2b" />
                    <h1 class="text-base md:text-2xl">
                        Industry Programs<br><a class="text-2xl md:text-3xl text-blue-900">10+</a>
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>