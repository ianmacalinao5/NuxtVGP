<script setup lang="ts">
defineProps<{
  titleMain: string
  titleAccent: string
  subtitle?: string
  icon?: string
}>()
</script>

<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h4 mb-2 text-blue-grey-darken-3 font-weight-regular d-flex align-center flex-wrap ga-3">
        {{ titleMain }}
        <span class="font-weight-bold text-blue-darken-2">
          {{ titleAccent }}
        </span>
        <v-icon v-if="icon" color="blue-darken-2">
          {{ icon }}
        </v-icon>
      </h1>

      <p v-if="subtitle" class="text-subtitle-1 text-grey-darken-1 mb-0">
        {{ subtitle }}
      </p>
    </v-col>
  </v-row>
</template>
