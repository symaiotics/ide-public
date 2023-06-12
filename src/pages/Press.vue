<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">


      <section class="relative">

        <!-- Background image -->
        <div class="absolute inset-0 h-128 pt-16 box-content">
          <img class="absolute inset-0 w-full h-full object-cover opacity-25" src="/images//author/JPEG/IMG_0890_2.jpg"
            width="1440" height="577" alt="Press" />
          <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto">

              <article>

                <!-- Article header -->
                <header class="mb-8">
                  <!-- Title and excerpt -->
                  <div class="text-center md:text-left">
                    <h1 class="h1 font-red-hat-display mb-4" data-aos="fade-down">Press and Resources</h1>
                    <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Learn
                      about author Janak Alford and <i>Intelligent Digital Ecosystems</i></p>
                  </div>

                </header>
                <hr class="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" data-aos="fade-down"
                  data-aos-delay="450" />

                <!-- Article content -->
                <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="450">

                  <!-- Author Information-->
                  <figure class="mb-8">
                    <img class="w-full" src="/images/author/JPEG/IMG_0859.jpg" width="768" alt="Janak Alford" />
                    <figcaption class="text-sm text-center text-gray-500 mt-3">Photo by Sandy Alford</figcaption>
                  </figure>


                  <!-- About the Author-->
                  <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">1. About the Author</h3>
                  <p class="mb-8">
                    Janak Alford is a Chief Technology Officer and entrepreneur with a background in architectural and
                    environmental design. By day, he helps major public sector organizations adopt a digital mindset and
                    transform their business processes. By vocation he is a full-stack developer, innovator, product
                    designer, and a constant learner. His numerous successful start-ups have helped hundreds of companies
                    achieve success through rapid prototyping and development. He lives as sustainably as possible with
                    his family near Ottawa, Canada.

                    <br/>
                    <br/>
                    Janak holds a diploma as an Architectural Technician (2004) from Loyalist College and Bachelor and Masters degrees in Architecture (2009, 2011) from Carleton University.

                    <br/>
                    <br/>
                    He recently received the <a  class="hover underlined text-blue-500 dark:text-blue-200" href = "https://loyalistcollege.com/news/loyalist-college-to-honour-janak-alford-with-hugh-p-oneil-outstanding-alumni-award/"> Hugh P. O'Neil Outstanding Alumni Award</a> from Loyalist for his significant experience as an entrepreneur and as a technology leader within the public service.

                  </p>



                  <figure class="mb-8 md:float-left md:max-w-sm md:mr-8 lg:max-w-none lg:-ml-32">
                    <img class="mx-auto" src="/images/backgrounder.jpg" width="480" alt="Book Backgrounder" />
                  </figure>

                  <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">2. Book Backgrounder</h3>
                  <p class="mb-8">
                    The attached book backgrounder PDF provides context around the author's insights and motivations in
                    writing this book. <br />

                    <a class="hover underlined text-blue-500 dark:text-blue-200"
                      :href="backgrounder">Download the Book Backgrounder</a>
                  </p>

                  <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">3. Press Release
                  </h3>
                  <p class="mb-8">
                    The official press release for the book provides additional background, links of where to buy it, and how to
                    contact the author.

                    <br/>
                    <a class="hover underlined text-blue-500 dark:text-blue-200"
                      :href="pressRelease">Download the Press Release</a>
                  </p>

                  <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">4. Contact</h3>
                  <p class="mb-8">
                    You may contact Janak Alford by emailing info@intelligentdigitalecosystems.com or via the Twitter and
                    LinkedIn links in the footer below.
                  </p>
                </div>


              </article>

            </div>

          </div>
        </div>
      </section>


    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script setup>
import Header from '@/partials/Header.vue'
import Footer from '@/partials/Footer.vue'
import backgrounder from '/assets/Book Backgrounder.pdf'
import pressRelease from '/assets/Press Release - Intelligent Digital Ecosystems.pdf'
</script>
