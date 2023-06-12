<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <div class="absolute mr-12  pointer-events-none -z-1 opacity-0 dark:opacity-60"
      style="box-shadow: inset 0px 0px 100px 100px #111827;" id="effectParent">
    </div>

    <Header />

    <!-- Page content -->
    <main class="grow">
       <HeroHome />
      <Stats />
      <Reviews />
      <HeroAbout />
      <Timeline />
      <BuyBook />
    </main>

    <Footer/>

  </div>
</template>
 

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from '@/partials/Header.vue'
import HeroHome from '@/partials/HeroHome.vue'
import HeroAbout from '@/partials/HeroAbout.vue'
import Stats from '@/partials/Stats.vue'
import Reviews from '@/partials/Reviews.vue'
import BuyBook from '@/partials/BuyBook.vue'
import Footer from '@/partials/Footer.vue'


import { effectVisualizer } from "@/services/effectVisualizer.js"
import Timeline from "../partials/Timeline.vue";

let items = ref([
  { description: "The three blind men and the elephant, a story which reminds us to not build upon faulty assumptions.", height: 800, img: "../src/images/JPEG/Chapter.01.01.jpg", tags: ['generative', 'elephant', 'chapterTitle'], part: 1 },
  { description: "In our daily actions, we mimic these blind men and recreate the world around us based on a machine mindset", height: 800, img: "../src//images/JPEG/Chapter.01.02.jpg", tags: ['generative', 'elephant', 'robot', 'machine'], part: 1 },
  { description: "In our current state, our interactions with machines leave us in periods of stalled productivity", height: 800, img: "../src//images/JPEG/Chapter.01.03.jpg", tags: ['diagram', 'productivity', 'machine', 'mutually exclusive'], part: 1 },
  { description: "The more machines and apps we add, the worse this scenario becomes", height: 800, img: "../src//images/JPEG/Chapter.01.04.jpg", tags: ['diagram', 'productivity', 'mutually exclusive'], part: 1 },
  { description: "Moore predicted the exponential growth of transistor density which roughly maps to performance but also mobility", height: 800, img: "../src//images/JPEG/Chapter.01.05.jpg", tags: ['diagram', 'moore', 'exponential growth'], part: 1 },
  { description: "Descrtiption", height: 800, img: "../src//images/JPEG/Chapter.01.06.jpg", tags: [], part: 1 },
  { description: "Descrtiption", height: 800, img: "../src//images/JPEG/Chapter.02.01.jpg", tags: [], part: 1 },
  { description: "Descrtiption", height: 800, img: "../src//images/JPEG/Chapter.02.02.jpg", tags: [], part: 1 },
  { description: "Descrtiption", height: 800, img: "../src//images/JPEG/Chapter.02.03.jpg", tags: [], part: 1 },

])


onMounted(() => {
  // effectVisualizer('effect1', 'effectParent')

});

</script>
 
