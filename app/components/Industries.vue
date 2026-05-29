<template>
    <section class="relative bg-gray-900/80 bg-cover bg-center min-h-svh text-white overflow-hidden flex-col">
      <!-- Background Image (Dynamic per category) -->
      <transition name="fade" mode="out-in">
        <NuxtImg
          :key="currentSection.selectedCategory.image"
          :src="currentSection.selectedCategory.image"
          :alt="currentSection.selectedCategory.title"
          class="absolute inset-0 w-full h-full object-cover brightness-50"
          format="webp" densities="x1 x2" loading="lazy"
          width="1920" height="1080" 
        />
      </transition>

      <!-- Content -->
      <div class="relative z-10 px-4 py-8 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">

        <!-- section switcher -->
        <div class="flex justify-center items-center gap-6 py-6">
          <button
            v-for="section in sections"
            :key="section.name"
            @click="switchSection(section.name)"
            class="text-base md:text-4xl font-bold transition duration-300"
            :class="{
            'text-white underline decoration-blue-500 underline-offset-2 drop-shadow-glow transition-colors duration-300': section.name === currentSection.name,
            'text-gray-100/60 hover:text-white hover:drop-shadow-glow ': section.name !== currentSection.name
          }">
            {{ section.name }}
          </button>
        </div>

        <div class="flex flex-col-reverse flex-auto">

          <div></div>
          <div></div>

          <!-- Category Content -->
          <div class="space-y-4 pt-96">
            <!-- Dynamic Title + Description -->
            <div class="py-4 gap-4">
              <NuxtLink 
                :to="currentSection.selectedCategory.link" 
                class="py-3 text-4xl md:text-5xl lg:text-8xl font-bold hover:text-sky-200 transition duration-300">
                  {{ currentSection.selectedCategory.title }}
              </NuxtLink>
              <p class="text-sm sm:text-xl lg:text-3xl text-gray-300 pt-0 md:pt-4 hover:text-gray-50 transition duration-300">
                {{ currentSection.selectedCategory.description }}
              </p>
            </div>
    
            <!-- Category Buttons -->
            <div class="flex flex-wrap gap-4 md:pb-4">
              <button
                v-for="category in currentSection.categories"
                :key="category.title"
                @click="selectCategory(category)"
                class="px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base font-medium bg-black/60 hover:bg-white hover:text-black transition-colors duration-300"
                :class="{ 'bg-sky-100 hover:bg-sky-300 hover:text-blue-700 text-blue-700 font-extrabold': currentSection.selectedCategory.title === category.title }"
              >
                {{ category.title }}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'

  const industries = [
    {
      title: 'Engineering',
      description: 'Hands-on training in mechanical and electrical fields to prepare skilled engineers ready for global industries.',
      image: '/images/engineer_2.jpg',
      link: '/engineering'
    },
    {
      title: 'Healthcare',
      description: 'Caregiver training with compassion and competence, tailored for international healthcare needs.',
      image: '/images/healthcare_2.jpg',
      link: '/healthcare',
    },
    {
      title: 'IT',
      description: 'Practical IT skills in programming and networking, opening pathways to global tech careers.',
      image: '/images/it_2.jpg',
      link: '/it',
    },
    {
      title: 'Construction',
      description: 'Job-ready training in welding, carpentry, and site work—built for overseas construction demands.',
      image: '/images/construction_2.jpg',
      link: '/construction',
    },
    {
      title: 'Hospitality',
      description: 'Service-focused hospitality training for careers in hotels, tourism, and cruise industries worldwide.',
      image: '/images/hospitality_2.jpg',
      link: '/hospitality',
    },
  ]

  const services = [
    {
      title: 'Skill & Non-Skill Training',
      description: 'Enhance your skills with our specialized training programs.',
      image: '/images/skill.jpg',
      link: '/skill',
    },
    {
      title: 'Language Training',
      description: 'Improve your language skills for better job prospects.',
      image: '/images/language.png',
      link: '/language',
    },
    {
      title: 'Job Placement',
      description: 'We connect you with top employers in your field.',
      image: '/images/jobplacement.jpeg',
      link: '/jobplacement',
    },
    {
      title: 'CV & Interview Preparation',
      description: 'Get ready for your dream job with our expert guidance.',
      image: '/images/interview.jpg',
      link: '/interview',
    },
    {
      title: 'Consultation',
      description: 'Personalized advice for your career path and opportunities.',
      image: '/images/consultation.jpg',
      link: '/consultation',
    },
  ]

  const facility = [
    
    {
      title: 'Training Center',
      description: 'State-of-the-art facilities for skill development.',
      image: '/images/weldingcenter.jpg',
      link: '/training',
    },
    {
      title: 'Classroom',
      description: 'Modern classrooms equipped for effective learning.',
      image: '/images/classroom.jpeg',
      link: '/classroom',
    },
  ]

  // 
  // Define sections with categories
  // 

  interface Category {
      title: string
      description: string
      image: string
      link: string
  }

  interface Section {
      name: string
      categories: Category[]
  }
  
  const sections : Section[] =[
    {
      name: 'Industries',
      categories: industries,
    },
    {
      name: 'Services',
      categories: services,
    },
    {
      name: 'Training Center',
      categories: facility,
    },
  ]

  const currentSection = ref({
    name: sections[0]?.name ?? '',
    categories: sections[0]?.categories ?? [],
    selectedCategory: sections[0]?.categories?.[0] ?? {
      title: '',
      description: '',
      image: '',
      link: '',
    }
  })

  function switchSection(name: string) {
    const target = sections.find((section) => section.name === name)
    if (target) {
      currentSection.value = {
        name: target.name,
        categories: target.categories,
        selectedCategory: target.categories?.[0]?? {
          title: '',
          description: '',
          image: '',
          link: '',
        } 
      }
    }
  }

  function selectCategory(category: typeof industries[0]) {
    currentSection.value.selectedCategory = category
  }

  </script>

  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.727s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .duration-800 {
    transition-duration: 800ms;
  }
  </style>
