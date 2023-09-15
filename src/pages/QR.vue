<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <div style="position: relative"  >

        <qrcode-vue :value="value" :size="400" level="H" render-as="svg" background="#000000" foreground="#ffffff" />

        <input type="text" v-model="value" />
      </div>
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script setup>

import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue'


import Header from '@/partials/Header.vue'
import Footer from '@/partials/Footer.vue'

var value = ref("https://myth.cards/tap/empress")
</script>
