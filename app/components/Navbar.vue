<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const navItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Launches', to: '/launches', icon: 'mdi-rocket-launch' },
]
</script>

<template>
  <v-app-bar color="blue-darken-2" elevation="2" height="64">
    <v-container class="d-flex align-center px-4">
      <NuxtLink to="/" class="text-decoration-none d-flex align-center">
        <v-icon color="white" size="32" class="mr-2">mdi-rocket</v-icon>
        <span class="text-h6 font-weight-bold text-white d-none d-sm-inline">SpaceX Missions</span>
      </NuxtLink>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex align-center ga-2">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          variant="text"
          color="white"
          :prepend-icon="item.icon"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-btn icon="mdi-menu" variant="text" color="white" class="d-md-none" @click="drawer = !drawer"></v-btn>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
        @click="drawer = false"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
