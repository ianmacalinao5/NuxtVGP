<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <v-app>
    <Navbar />

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
