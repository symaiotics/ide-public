<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroMyEcosystem />
      <MyEcosystemExamples/>
      <!-- <D3GC title= "Books on my Mind" description="Some of the literary influences and their authors" :darkMode="true" :glow="true"/> -->

      <!-- <FeaturedPosts /> -->
      <!-- <BlogList /> -->

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script setup>


// import D3GC from '@symaiotics/d3-graph-creator-tailwind'
// import '@symaiotics/d3-graph-creator-tailwind/dist/style.css';

import Header from '@/partials/Header.vue'
import HeroMyEcosystem from '@/partials/HeroMyEcosystem.vue'
import MyEcosystemExamples from '@/partials/MyEcosystemExamples.vue'
import Footer from '@/partials/Footer.vue'
</script>
