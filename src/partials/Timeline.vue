<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">



        <!-- Section header -->
        <div class="max-w-3xl mx-auto justify-center text-center pb-12 md:pb-20">


          <div class="flex row  justify-center items-center">
            <div class="flex inline m-2 items-center">
              <img src="/images/JPEG/Chapter.09.01.jpg" width="400" style=" border-radius: 50%;" />
            </div>
          </div>
          <h2 class="h2 font-red-hat-display mb-4">Explore Big Ideas</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Take a glimpse inside the book's key concepts.</p>
        </div>


        <div class="max-w-3xl mx-auto justify-center text-center pb-12 md:pb-20 text-xl text-gray-300 ">
          What if the way we are <i>all</i> using technology is wrong?<br />
          What if we've harnessed the wrong concept and it has constrained our potential?<br /><br />
          Could there be a better way?
        </div>

        <!-- Section content -->
        <div>
          <div class="flex items-start">

            <!-- Timeline buttons -->
            <div class="relative mr-4 sm:mr-12 lg:mr-32">
              <div class="absolute inset-0 my-6 ml-16 pointer-events-none -z-1" aria-hidden="true">
                <div class="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
              </div>

              <!--Reactive timeline buttons-->
              <button v-for="(part, index) in bookDetails" :key="'partButton' + index"
                class="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                @click="partSelected = index">
                <span class="block w-12 truncate">{{ part.title }}</span>
                <span
                  class="block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full"
                  :class="{ 'bg-teal-500 text-gray-800 dark:bg-teal-500 dark:text-gray-100': partSelected === index }"></span>
              </button>

            </div>

            <!--Timeline content-->
            <template v-for="(part, index) in bookDetails" :key="'partContent' + index">
              <div class="grow" v-show="partSelected === index" data-aos="fade-down">
                <div class="grid md:grid-cols-2 gap-6">
                  <article v-for="(element, index2) in part.elements"
                    class=" p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col"
                    :class="{ 'md:col-span-2': element.width == 'full' }">


                    <!--Article Header-->
                    <header>
                      <h3 class="h4 font-red-hat-display mb-1">
                        {{ element.title }}
                      </h3>
                    </header>

                    <!-- Article Body-->
                    <div class="text-gray-600 dark:text-gray-400 grow">
                      <div class="md:flex md:flex-row ">
                        <div v-if="element.image" class="p-3"
                          style="min-width:100px;width:100px; min-height:100px;height:100px;border-radius:50%;background-size:cover;border-width:3px;border-color:white"
                          :style="{ 'background-image': `url(${element.image})` }"> </div>
                        <div class="p-3" v-html="element.description"> </div>
                      </div>
                    </div>

                    <!-- Article Footer-->
                    <div v-if="element.link" class="text-gray-600 dark:text-gray-400 grow">
                      <br />
                      Read more:
                      <a class="text-blue-600 dark:text-blue-400 grow" :href="element.link" target="_blank">{{
                        element.linkDescription }}</a>
                    </div>
                  </article>
                </div>
              </div>
            </template>



          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, onMounted, computed } from "vue";
import image0_0 from '/images/JPEG/Chapter.01.02.jpg';
import image0_1 from '/images/JPEG/Chapter.02.04.jpg';
import image0_2 from '/images/JPEG/Chapter.02.03.jpg';
import image0_3 from '/images/JPEG/Chapter.02.02.jpg';
import image0_4 from '/images/JPEG/Part.One.01.jpg';

import image1_0 from '/images/JPEG/Chapter.01.01.jpg';
import image1_1 from '/images/JPEG/Chapter.03.02.jpg';
import image1_2 from '/images/JPEG/Chapter.05.01.jpg';
import image1_3 from '/images/JPEG/Chapter.06.01.jpg';
import image1_4 from '/images/JPEG/Chapter.08.01_2.jpg';
import image1_5 from '/images/JPEG/Chapter.08.03.jpg';
import image1_6 from '/images/JPEG/Chapter.10.01.jpg';
import image1_7 from '/images/JPEG/Chapter.01.06.jpg';

import image2_0 from '/images/JPEG/Chapter.12.01.jpg'; //Abstraction
import image2_1 from '/images/JPEG/Chapter.12.03.jpg'; //Data as topography
import image2_2 from '/images/JPEG/Chapter.13.05.jpg'; //Flora
import image2_3 from '/images/JPEG/Chapter.14.01.jpg'; //Fauna
import image2_4 from '/images/JPEG/Chapter.14.09.jpg'; //The lab
import image2_5 from '/images/JPEG/Chapter.14.31.jpg'; //Marketplace
import image2_6 from '/images/JPEG/Chapter.17.03.jpg'; //New empathy
import image2_7 from '/images/JPEG/Chapter.20.01.jpg'; //Avatars
import image2_8 from '/images/JPEG/Chapter.20.04.jpg'; //Sharing the digital self

import image3_0 from '/images/JPEG/Chapter.21.01.jpg';
import image3_1 from '/images/JPEG/Chapter.25.01.jpg';
import image3_2 from '/images/JPEG/Chapter.26.01.jpg';
import image3_3 from '/images/JPEG/Chapter.24.02.jpg';
import image3_4 from '/images/JPEG/Chapter.23.01.jpg';
import image3_5 from '/images/JPEG/Chapter.30.01.jpg';

let partSelected = ref(0);

let bookDetails = ref(
  [
    {
      part: 0,
      title: "Intro",
      elements: [
        { width: "full", image: image0_0, title: "The Machine Metaphor", description: `<p>We've harnessed a flawed understanding of the potential of technology by casting it as a machine. How would technology be different if we leveraged a different template to model our relationship to tech?</p>`, link: 'https://unherd.com/thepost/paul-kingsnorth-how-to-resist-the-machine/', linkDescription: "UnHerd - How to resist the machine" },
        { width: "full", image: image0_1, title: "The Microbiome", description: `<p>Through our microbiome we already possess such a model. We live in a harmonious relationship with a vast ecosystem of organisms which occupy our body and every part of our world.</p>`, link: "https://edyong.me/i-contain-multitudes", linkDescription: "Ed Yong - I Contain Multitudes" },
        { width: "half", image: image0_2, title: "38 trillion processes", description: "Our bodies contain 38 trillion non-human cells working in harmony with us to regulate our biological systems.", link: "https://www.popularmechanics.com/science/health/a42735157/human-microbiome-going-extinct/", linkDescription: "Popular Mechanics - The Human Microbiome Is Going Extinct, Scientists Say. The End Will Be Devastating." },
        { width: "half", image: image0_3, title: "Sourced from our environment", description: "Every breath and bite of food brings in these organisms from the world around us.", link: "https://www.richroll.com/podcast/mastering-the-microbiome-575/", linkDescription: 'Rich Roll - Mastering the Microbiome' },
        { width: "full", image: image0_4, title: "A new ethos", description: "Could this blueprint serve as a healthier and more productive template for how we interact with technology? Could we find ourselves healthier, happier, and more fulfilled by leveraging this new way of thinking? And what might be the impacts on our society?" },
      ]
    },
    {
      part: 1,
      title: "Part 1",
      elements: [
        { width: "full", image: image1_0, title: "A flawed relationship", description: "Despite phenomenal enhancements in our technologies, productivity and wellbeing are falling across many sectors. Our systems become more complex, and we are forced to adapt to the machine. The answer lies in our flawed relationship to our technology. ", linkDescription: "The Washington Post: U.S. workers have gotten way less productive. No one is sure why.", link: "https://www.washingtonpost.com/business/2022/10/31/productivity-down-employers-worried-recession/" },
        { width: "half", image: image1_7, title: "Technology follows industrial patterns", description: "We've been obsessed with digitization of existing industrial processes. We need to find new ways of working. Nature holds many clues of how to do this better." },
        { width: "half", image: image1_1, title: "Ten new concepts emerge", description: "From nature, we can find 10 concepts which help us design and interact new patterns of technology." },
        { width: "half", image: image1_2, title: "New data reservoirs", description: "We must abandon the file and folder paradigm. The first step is to rethink our relationship with data and adopt semantic, network structures to store and visualize data." },
        { width: "half", image: image1_3, title: "Pattern-triggered ecosystems", description: "Freeing ourselves from the machine, we use the patterns inherent in our data to activate a thriving ecosystem of competitive processes." },
        { width: "half", image: image1_4, title: "Hybrid minds emerge", description: "As we learn to build systems and differently, new models emerge which mimic our mental structures, expanding cognition through the creation of a hybrid mind." },
        { width: "half", image: image1_5, title: "Redefining intelligence", description: "We can replace our flawed definitions of intelligence with an objective measure that applies to human, animal, and digital beings. This drives new insight and helps us build a more sustainable world." },
        { width: "full", image: image1_6, title: "Abstractions", description: "To better visualize this complexity, we can leverage the visual metaphors of nature and present this technology as an immersive, interactive environment." , link:"https://techhq.com/2019/12/why-technology-abstraction-is-a-route-to-clarity/", linkDescription:"TechHQ - Why technology abstraction is a route to clarity" }
      ]
    },

    {
      part: 2,
      title: "Part 2",
      elements: [
        { width: "full", image: image2_0, title: "A new visual world", description: "We replace our operating systems, keyboards, and apps with an immersive visual world to capture and represent complexity. This provides a new way of seeing technology as a complete garden ecosystem.", },
        { width: "half", image: image2_1, title: "New geographies of data", description: "Data becomes traversable land, open for exploration and finding new insights. We can index the nature of our digital selves like explorers on a new world.", },
        { width: "half", image: image2_2, title: "Flora", description: "Network structures emerge as trees and plants on a verdant landscape, each concept and relationship emerging to show the boundaries of our knowledge.", },
        { width: "full", image: image2_3, title: "Fauna", description: "Apps are replaced by fauna, representations of complex digital processes which can consume, evolve, and grow.", },
        { width: "half", image: image2_4, title: "The Outpost", description: "Your digital world is designed in your outpost, part laboratory, hatchery, and library, bringing together the tools for managing change.", },
        { width: "half", image: image2_5, title: "The Marketplace", description: "Bold new economic opportunities await for entrepreneurs in creating fauna, building worlds, and growing human potential.", },
        { width: "half", image: image2_6, title: "Spirits of the Land", description: "From your data emerge the many faces and personalities which structure your world, avatars and representations of the people in your life.", },
        { width: "half", image: image2_7, title: "Avatar as Interface", description: "Your own connection to the world is expanded exponentially. Our own digital avatars become our ambassadors to unlimited opportunities.", },
        { width: "full", image: image2_8, title: "Sharing the Digital Mind", description: "The unique self emerges as a unique and beautiful artifact to tell your story in countless new ways.", },
      ]
    },

    {
      part: 3,
      title: "Part 3",
      elements: [
        { width: "full", image: image3_0, title: "Real dangers lurk", description: "We must balance the dangers posed by the use of this technology. We can face the monster at the gate while harnessing its power for positive change.", },
        { width: "half", image: image3_1, title: "Facing abuse and violence", description: "We must balance the dangers posed by the use of this technology. We can face the monster at the gate while harnessing its power for positive change.", },
        { width: "half", image: image3_3, title: "Who owns your skills? ", description: "Amongst the hardest issue to address is who will own the future of work? Will you remain in control of your skills or become replaced?", },
        { width: "full", image: image3_2, title: "Death of a giant", description: "One of the major casualties of this coming digital age is the death of the Internet as we know it. Will we be ready for this impending collapse, and what will come after it?", },
        { width: "half", image: image3_4, title: "Wisdom across generations", description: "As we contend with this loss, new ways of sharing and preserving also emerge. Multi-generational knowledge springs forth to guide future generations.", },
        { width: "half", image: image3_5, title: "Life after technology", description: "Finding equanimity and balance with nature and technology opens new doors for the future. We have a choice.", },
      ]
    }

  ]
)


</script>