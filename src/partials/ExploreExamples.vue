<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="lg:flex lg:justify-between">

          <!-- Main content -->
          <div class="lg:grow" data-aos="fade-down" data-aos-delay="200">

            <!-- Section title -->
            <h4 class="h3 font-red-hat-display mb-8">Code and examples</h4>

            <!-- Articles container -->
            <div class="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">

              <!-- 1st article -->
              <article class="flex flex-col h-full">
                <header>
                  <!-- <router-link class="block mb-4" to="/blog-post"> -->
                    <figure class="relative h-0 pb-9/16">
                      <img class="absolute inset-0 w-full h-full object-cover" src="/images/JPEG/Chapter.08.03.jpg" width="352"   alt="Graph structures" />
                    </figure>
                  <!-- </router-link> -->
                  

                    <a class = "hover underline" href = "https://www.npmjs.com/package/@symaiotics/d3-graph-creator-tailwind">
                      <h3 class="h4 font-red-hat-display mb-2">
                      Generating graph structures
                    </h3>
                    </a>
                 
                </header>
                <p class="text-gray-600 dark:text-gray-400 grow">Leveraging D3.js, this example component will help you learn and build interactive graph structures, the underlying data structures within your digital ecosystems.</p>
                <footer class="flex items-center mt-4">
                  <a href="#0">
                    <img class="rounded-full shrink-0 mr-3" :src="author" width="32" height="32" alt="Author 03" />
                  </a>
                  <div class="text-sm text-gray-500">
                    By <a class="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Janak Alford</a> · <span class="text-gray-500">June 12th, 2023</span>
                  </div>
                </footer>
              </article>
 
            </div>

      

          </div>

      

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import author from "/images/JPEG/About the Author.01.jpg"

</script>