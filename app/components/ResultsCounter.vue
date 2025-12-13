<script setup lang="ts">
defineProps<{
  count: number
  year: string
}>()
</script>

<template>
  <v-row class="mb-4">
    <v-col cols="12">
      <div class="text-body-1 text-blue-grey-darken-1">
        <v-icon size="small" class="mr-1">mdi-information-outline</v-icon>
        <span class="font-weight-medium">{{ count }}</span>
        {{ count === 1 ? 'mission' : 'missions' }} found
        <span v-if="year !== 'All'" class="font-weight-medium">in {{ year }}</span>
      </div>
    </v-col>
  </v-row>
</template>
