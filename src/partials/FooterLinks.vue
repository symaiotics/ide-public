<template>
  <footer class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">

        <!-- Footer illustration -->
        <div class="pointer-events-none -z-1" aria-hidden="true">
          <svg class="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40" width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fill-opacity=".4" />
            <defs>
              <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                <stop stop-color="#3ABAB4" />
                <stop offset="1" stop-color="#3ABAB4" stop-opacity=".01" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <!-- Top area: Blocks -->
        <div class="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

          <!-- 1st block -->
          <div class="md:col-span-2 lg:col-span-3">
            <!-- Logo -->
            <router-link class="inline-block" to="/" aria-label="Cruip">
              <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_a">
                    <stop stop-color="#3ABAB4" offset="0%" />
                    <stop stop-color="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_b">
                    <stop stop-color="#3ABAB4" offset="0%" />
                    <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)" />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)" />
              </svg>
            </router-link>
          </div>

          <!-- 2nd, 3rd, 4th and 5th blocks -->
          <div class="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">

            <!-- 2nd block -->
            <div class="text-sm">
              <h6 class="font-medium uppercase mb-2">Products</h6>
              <ul>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Drag And Drop</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Visual Studio X</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Easy Content</router-link>
                </li>
              </ul>
            </div>

            <!-- 3rd block -->
            <div class="text-sm">
              <h6 class="font-medium uppercase mb-2">Resources</h6>
              <ul>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Industries and tools</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Use cases</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Blog</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Online events</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Nostrud exercitation</router-link>
                </li>
              </ul>
            </div>

            <!-- 4th block -->
            <div class="text-sm">
              <h6 class="font-medium uppercase mb-2">Company</h6>
              <ul>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Diversity & inclusion</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">About us</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Press</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Customer stories</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Online communities</router-link>
                </li>
              </ul>
            </div>

            <!-- 5th block -->
            <div class="text-sm">
              <h6 class="font-medium uppercase mb-2">Support</h6>
              <ul>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Documentation</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Tutorials & guides</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Webinars</router-link>
                </li>
                <li class="mb-1">
                  <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Open-source</router-link>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
</script>