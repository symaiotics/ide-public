<template>
  <section class="relative border-t border-transparent dark:border-gray-800">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
      aria-hidden="true"></div>
    <!-- End background gradient -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">


        <!-- Section content -->
        <div data-aos="fade-down">
          <div class="grid lg:grid-cols-3 gap-12 lg:gap-6">

            <!-- Category buttons -->
            <div class="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
              <button v-for="(category, index) in categories" :key="'imageCategory' + index"
                class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0"
                :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': selectedCategory === index }"
                @click="selectedCategory = index">
                <span
                  :class="selectedCategory === index ? 'text-gray-600 dark:text-teal-700' : 'text-black dark:text-teal-400'">{{
                    category.title }}</span>
              </button>

            </div>


            <div class="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="relative" v-for="(image, index) in imagesFiltered" :key="'image' + index">
                  <img class="w-full" :src="getImageUrl(image.image)" width="352" :alt="image.description" />
                  <div class="inset-0 flex flex-col">
                    <div
                      class="w-full bottom-0 px-6 py-3 bg-white opacity-80 dark:bg-gray-900 flex justify-between items-center">
                      {{ image.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, onMounted, computed } from "vue";


const getImageUrl = (url) => {
  return new URL(url, import.meta.url).href
}

let selectedCategory = ref(0)
let categories = ref([
  { id: 0, title: "Chapter Images", tags: ['chapter'] },
  { id: 1, title: "The Productivity Paradox", tags: ['productivity'] },
  { id: 2, title: "The Microbiome", tags: ['microbiome'] },
  { id: 3, title: "Data Reservoirs", tags: ['data'] },
  { id: 4, title: "Patterns and Cycles", tags: ['patterns'] },
  { id: 5, title: "The Hybrid Mind", tags: ['hybrid'] },
  { id: 6, title: "Abstraction", tags: ['abstraction'] },
  { id: 7, title: "Flora", tags: ['flora'] },
  { id: 8, title: "Fauna", tags: ['fauna'] },
  { id: 9, title: "Moons", tags: ['moon'] },
  { id: 10, title: "Endogenes and Avatars", tags: ['avatar'] },
  { id: 11, title: "The Explorer", tags: ['explorer'] },
  { id: 12, title: "Diagrams", tags: ['diagram'] },
  { id: 13, title: "Generative", tags: ['generative'] },
  // { id: 10, title: "Extras", tags: ['extra'] },
])

var imagesFiltered = computed(() => {
  var imagesArray = images.value.filter((image) => {
    return image.tags.includes(categories.value[selectedCategory.value].tags[0])
  });
  return imagesArray;
})

let images = ref([

  //Preface and Intro
  { description: "Part One presents the tremendous opportunity presented by the microbiome.", height: 800, image: "/images/JPEG/Part.One.01.jpg", tags: ['chapter', 'part', 'generative'] },
  { description: "Part Two paints a visual world where complex systems are abstracted into beautiful worlds.", height: 800, image: "/images/JPEG/Part.Two.01.jpg", tags: ['chapter', 'part', 'generative'] },
  { description: "Part Three addresses the great inherent risks in exploring these systems and how to avoid them.", height: 800, image: "/images/JPEG/Part.Three.01.jpg", tags: ['chapter', 'part', 'generative'] },
  { description: "We can identify two very different modes of interaction: the machine and the microbiome.", height: 800, image: "/images/JPEG/Introduction.01.jpg", tags: ['chapter', 'intro', 'generative'] },
  { description: "A great adventure awaits those willing to embark.", height: 800, image: "/images/JPEG/Preface.01.jpg", tags: ['chapter', 'preface', 'generative'] },

  //Chapters
  { description: "The three blind men and the elephant, a story which reminds us to not build upon faulty assumptions.", height: 800, image: "/images/JPEG/Chapter.01.01.jpg", tags: ['chapter', 'elephant'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.01.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.02.01.jpg", tags: ['chapter', 'generative', 'microbiome'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.03.01.jpg", tags: ['chapter', 'generative', 'microbiome'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.04.01.jpg", tags: ['chapter', 'generative', 'data'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.05.01.jpg", tags: ['chapter', 'generative', 'data'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.06.01.jpg", tags: ['chapter', 'generative', 'patterns'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.07.01.jpg", tags: ['chapter', 'generative', 'patterns'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.08.01.jpg", tags: ['chapter', 'generative', 'hybrid'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.09.01.jpg", tags: ['chapter', 'generative', 'hybrid'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.10.01.jpg", tags: ['chapter', 'generative', 'abstraction'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.11.01.jpg", tags: ['chapter', 'generative', 'abstraction'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.12.01.jpg", tags: ['chapter', 'generative', 'abstraction'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.13.01.jpg", tags: ['chapter', 'generative', 'flora'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.14.01.jpg", tags: ['chapter', 'generative', 'fauna'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.15.01.jpg", tags: ['chapter', 'generative', 'fauna'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.16.01.jpg", tags: ['chapter', 'generative', 'moon'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.17.01.jpg", tags: ['chapter', 'generative', 'avatar'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.18.01.jpg", tags: ['chapter', 'generative', 'avatar'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.19.01.jpg", tags: ['chapter', 'generative', 'avatar'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.20.01.jpg", tags: ['chapter', 'generative', 'avatar'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.21.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.22.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.23.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.24.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.25.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.26.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.27.01.jpg", tags: ['chapter', 'generative', 'abstraction'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.28.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.29.01.jpg", tags: ['chapter', 'generative'] },
  { description: "", height: 800, image: "/images/JPEG/Chapter.30.01.jpg", tags: ['chapter', 'generative'] },

  //Productivity Paradox
  { description: "In our daily actions, we mimic the three blind men and recreate the world around us based on a machine mindset", height: 800, image: "/images/JPEG/Chapter.01.02.jpg", tags: ['productivity', 'generative', 'elephant', 'robot', 'machine'], part: 1 },
  { description: "In our current state, our interactions with machines leave us in periods of stalled productivity", height: 800, image: "/images/JPEG/Chapter.01.03.jpg", tags: ['productivity', 'diagram', 'machine', 'mutually exclusive'], part: 1 },
  { description: "The more machines and apps we add, the worse this scenario becomes", height: 800, image: "/images/JPEG/Chapter.01.04.jpg", tags: ['productivity', 'diagram', 'mutually exclusive'], part: 1 },
  { description: "Moore predicted the exponential growth of transistor density which roughly maps to performance but also mobility", height: 800, image: "/images/JPEG/Chapter.01.05.jpg", tags: ['productivity', 'diagram', 'moore', 'exponential growth'], part: 1 },
  { description: "Despite such great advancements, productivity remains low and is even beginning to fall for the first time in 75 years", height: 800, image: "/images/JPEG/Chapter.01.06.jpg", tags: ['productivity', 'diagram', 'moore', 'exponential growth'], part: 1 },

  //The Microniome
  { description: " ", height: 800, image: "/images/JPEG/Chapter.02.02.jpg", tags: ['microbiome', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.02.03.jpg", tags: ['microbiome', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.02.04.jpg", tags: ['microbiome', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.12.jpg", tags: ['microbiome', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.02.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.03.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.04.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.05.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.06.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.07.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.08.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.09.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.10.jpg", tags: ['microbiome', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.03.11.jpg", tags: ['microbiome', 'diagram'] },

  //Data Reservoirs
  { description: " ", height: 800, image: "/images/JPEG/Chapter.04.02.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.04.03.jpg", tags: ['data', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.04.04.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.04.05.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.04.06.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.04.07.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.05.02.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.05.03.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.05.04.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.05.05.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.05.06.jpg", tags: ['data', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.05.07.jpg", tags: ['data', 'diagram'] },

  //Patterns and Cycles
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.02.jpg", tags: ['patterns', 'photo'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.03.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.04.jpg", tags: ['patterns', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.05.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.06.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.07.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.08.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.09.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.10.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.11.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.12.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.13.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.06.14.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.07.02.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.07.03.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.07.04.jpg", tags: ['patterns', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.07.05.jpg", tags: ['patterns', 'diagram'] },

  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.02.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.03.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.04.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.05.jpg", tags: ['hybrid', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.06.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.07.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.08.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.08.09.jpg", tags: ['hybrid', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.09.02.jpg", tags: ['hybrid', 'diagram'] },

  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.02.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.03.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.04.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.05.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.06.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.07.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.08.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.10.09.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.12.02.jpg", tags: ['abstraction', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.12.03.jpg", tags: ['abstraction', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Chapter.13.02.jpg", tags: ['flora', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.13.03.jpg", tags: ['flora', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.13.04.jpg", tags: ['flora', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.13.05.jpg", tags: ['flora', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.02.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.03.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.04.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.05.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.06.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.07.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.08.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.09.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.10.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.11.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.12.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.13.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.14.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.15.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.16.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.17.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.18.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.19.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.20.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.21.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.22.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.23.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.24.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.25.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.26.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.27.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.28.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.29.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.30.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.31.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.32.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.14.33.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.15.02.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.15.03.jpg", tags: ['fauna', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.15.04.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.15.05.jpg", tags: ['fauna', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Chapter.27.02.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.27.03.jpg", tags: ['fauna', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.27.04.jpg", tags: ['fauna', 'generative'] },


  { description: " ", height: 800, image: "/images/JPEG/Chapter.16.02.jpg", tags: ['moon', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.16.03.jpg", tags: ['moon', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.16.04.jpg", tags: ['moon', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.26.02.jpg", tags: ['moon', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.26.03.jpg", tags: ['moon', 'diagram'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.26.04.jpg", tags: ['moon', 'diagram'] },

  { description: " ", height: 800, image: "/images/JPEG/Chapter.17.02.jpg", tags: ['avatar', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.17.03.jpg", tags: ['avatar', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.17.04.jpg", tags: ['avatar', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.17.05.jpg", tags: ['avatar', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.19.02.jpg", tags: ['avatar', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.20.01.jpg", tags: ['avatar', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Chapter.28.02.jpg", tags: ['avatar', 'generative'] },


  { description: " ", height: 800, image: "/images/JPEG/Journey 01.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.01.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.01.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.01.04.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.02.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.02.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.02.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.03.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.03.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.03.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.04.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.04.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.04.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.04.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.05.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.06.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.07.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.08.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.05.09.jpg", tags: ['explorer', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Journey.06.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.04.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.05.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.06.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.07.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.06.08.jpg", tags: ['explorer', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Journey.07.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.04.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.05.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.06.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.07.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.08.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.09.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.10.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.11.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.12.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.07.13.jpg", tags: ['explorer', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Journey.08.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.08.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.08.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.08.04.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.08.05.jpg", tags: ['explorer', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Journey.09.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.09.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.09.03.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.09.04.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.09.05.jpg", tags: ['explorer', 'generative'] },

  { description: " ", height: 800, image: "/images/JPEG/Journey.10.01.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.10.02.jpg", tags: ['explorer', 'generative'] },
  { description: " ", height: 800, image: "/images/JPEG/Journey.10.03.jpg", tags: ['explorer', 'generative'] },

])


</script>