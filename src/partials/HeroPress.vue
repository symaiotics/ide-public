<template>
  <section class="relative">

    <!-- Background image -->
    <div class="absolute inset-0  -z-1">
      <img class="absolute inset-0 w-full h-full object-cover opacity-50" src="/images/author/JPEG/IMG_0890_2.jpg" width="1440" height="500" alt="About" />
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-16">

        <!-- Featured article -->
        <div class="max-w-8xl" data-aos="fade-down">
          <article>
            <header>
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <router-link to="/blog-post">
                  <h1 class="h1 font-red-hat-display mb-4">Press and Resources</h1>
                </router-link>
                <p class="text-xl text-gray-600 dark:text-gray-400">All they key information about the book and author.</p>
              </div>

            </header>
          </article>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
</script>