<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <HeroGallery />
      <Gallery />
    </main>

    <Footer />

  </div>
</template>

<script setup>
import Header from '@/partials/Header.vue'
import Gallery from '@/partials/Gallery.vue'
import HeroGallery from '@/partials/HeroGallery.vue'
import Footer from '@/partials/Footer.vue'



</script>
