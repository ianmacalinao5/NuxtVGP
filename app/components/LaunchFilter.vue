<script setup lang="ts">
defineProps<{
  year: string
  order: 'asc' | 'desc'
}>()

defineEmits<{
  'update:year': [value: string]
  'update:order': [value: 'asc' | 'desc']
}>()
</script>

<template>
  <v-row align="center">
    <v-col cols="12" md="6">
      <v-select
        :model-value="year"
        label="Filter by Year"
        :items="[
          'All',
          '2020',
          '2019',
          '2018',
          '2017',
          '2016',
          '2015',
          '2014',
          '2013',
          '2012',
          '2011',
          '2010',
          '2009',
          '2008',
          '2007',
          '2006',
          '2005',
          '2004',
          '2003',
          '2002',
          '2001',
          '2000',
        ]"
        variant="outlined"
        density="compact"
        hide-details
        @update:model-value="$emit('update:year', $event)"
      ></v-select>
    </v-col>

    <v-col cols="12" md="6">
      <v-select
        :model-value="order"
        label="Sort by Date"
        :items="[
          { title: 'Newest First', value: 'desc' },
          { title: 'Oldest First', value: 'asc' },
        ]"
        variant="outlined"
        density="compact"
        hide-details
        @update:model-value="$emit('update:order', $event)"
      ></v-select>
    </v-col>
  </v-row>
</template>
