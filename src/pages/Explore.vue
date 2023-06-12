<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroExplore />
      <ExploreExamples/>
    </main>

    <Footer />

  </div>
</template>

<script setup>
import Header from '@/partials/Header.vue'
import HeroExplore from '@/partials/HeroExplore.vue'
import ExploreExamples from '@/partials/ExploreExamples.vue'
import Footer from '@/partials/Footer.vue'
</script>
