<template>
  <section class="relative">
    <!-- Background gradient (light version only) -->
    <div class="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
    <!-- End background gradient (light version only) -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-3 text-center" data-aos-id-stats>
          <!-- 1st item -->
          <div class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
            <div class="font-red-hat-display text-3xl font-black tracking-tighter mb-1">448</div>
            <div class="text-gray-600 dark:text-gray-400">Pages</div>
          </div>
          <!-- 2nd item -->
          <div class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
            <div class="font-red-hat-display text-3xl font-black tracking-tighter mb-1">200+</div>
            <div class="text-gray-600 dark:text-gray-400">Images</div>
          </div>
          <!-- 3rd item -->
          <div class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
            <div class="font-red-hat-display text-3xl font-black tracking-tighter mb-1">Full</div>
            <div class="text-gray-600 dark:text-gray-400">Color Interior</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats'
}
</script>