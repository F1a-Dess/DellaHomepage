<template>

  <section class="bg-2b">
    <div class="container inset-x-0 top-0
      grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 pt-6 pb-8 gap-8 text-gray-400
      place-items-start text-capitalize">
      
      <!-- R1 -->
      <!-- <div class="justify-self-start align-top">
        <h1 
          class="text-xl font-bold underline 
          decoration-emerald-800 hover:decoration-emerald-500
          hover:text-gray-200
          transition-colors duration-300 decoration-2 underline-offset-8
          shadow-md">
          PT Della Fadhil Anugerah
        </h1>
        <h1 class="text-sm text-gray-400 py-4">
          Our company is based on Indonesia, we are the leading provider of training and job placement services.<br> <br>
          We are committed to helping individuals and organizations achieve their goals through our comprehensive training programs and job placement services.
        </h1>
      </div> -->

      <!-- R2 -->
      <div class="justify-self-center self-center">
        <NuxtImg src="/Logo_DAF.png" alt="PT Della Fadhil Anugrah" format="webp" class=" max-h-[165px]" />
      </div>

      
      <div class="justify-self-start">
        <h1 
          class="text-xl font-bold underline 
          decoration-sky-800 hover:decoration-sky-500
          hover:text-gray-200
          transition-colors duration-300 decoration-2 underline-offset-8
          ">
          Our Services
        </h1>
        <ul class="gap-2 py-4">
          <li>
            <NuxtLink to="/" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Skill & Non-Skill Training
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Language Training
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Job Placement
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              CV & Interview Preparation
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Consultation
            </NuxtLink>
          </li>
        </ul>
      </div>
      
      <div class="justify-self-start">
        <h1 
          class="text-xl font-bold underline 
          decoration-sky-800 hover:decoration-sky-500
          hover:text-gray-200
          transition-colors duration-300 decoration-2 underline-offset-8
          ">
          Our Industries
        </h1>
        <ul class="gap-2 py-4">
          <li>
            <NuxtLink to="/engineering" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Engineering
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/healthcare" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Healthcare
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/it" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              IT
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/construction" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Construction
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hospitality" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Hospitality
            </NuxtLink>
          </li>
        </ul>
      </div>
      
      <div class="justify-self-start">
        <h1 
          class="text-xl font-bold underline 
          decoration-sky-800 hover:decoration-sky-500
          hover:text-gray-200
          transition-colors duration-300 decoration-2 underline-offset-8
          ">
          Contact Us
        </h1>
        <ul class="gap-2 py-4">
          <li class="items-center">
            <Icon name="material-symbols:phone-in-talk" class="h-4 w-4 text-gray-400" />
            <a href="tel:+6281234567890" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              +62 812 3456 7890
            </a>
          </li>
          <li class="items-center">
            <Icon name="material-symbols:mail" class="h-4 w-4 text-gray-400" />
            <a href="mailto:info@della.com" class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              info@dellafadhilanugerah.co.id
            </a>
          </li>
          <li class="items-center">
            <Icon name="material-symbols:location-on" class="h-4 w-4 text-gray-400" />
            <span class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              Jl. Caman Raya No.55, Bekasi City, West Java, Indonesia
            </span>
          </li>
        </ul>
      </div>

    </div>

  </section>
  
  <!-- Our Socials -->
  <section class="bg-2b">
    
    <div class="container flex flex-row justify-center lg:justify-normal text-gray-400 py-6 gap-4">
      
      <div class="px-5">
        <h1 class="text-xl font-bold text-gray-400">Our Socials</h1>
      </div>
      
      <div class="justify-items-end gap-6 px-5">
        <a href="#" class="text-gray-400 hover:text-gray-200 px-2">
          <Icon href="#" name="entypo-social:facebook-with-circle" class="h-8 w-8" />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-200 px-2">
          <Icon href="#" name="entypo-social:twitter-with-circle" class="h-8 w-8" />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-200 px-2">
          <Icon href="#" name="entypo-social:instagram-with-circle" class="h-8 w-8" />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-200 px-2">
          <Icon href="#" name="entypo-social:linkedin-with-circle" class="h-8 w-8" />
        </a>
      </div>
    </div>
    
    
  </section>

  <footer class="bg-neutral-800 text-gray-400 text-center py-6 ">
    <p class="text-xs md:text-sm">
      © 2025 PT DELLA FADHIL ANUGERAH. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
// no logic needed
</script>