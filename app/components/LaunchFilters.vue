<script setup lang="ts">
defineProps<{
  year: string
  order: 'asc' | 'desc'
  search: string
}>()

defineEmits<{
  'update:year': [value: string]
  'update:order': [value: 'asc' | 'desc']
  'update:search': [value: string]
}>()
</script>

<template>
  <v-row align="center" class="mb-4">
    <v-col cols="12">
      <v-text-field
        :model-value="search"
        label="Search missions..."
        placeholder="Search by mission name, rocket, launch site, or details"
        variant="outlined"
        density="compact"
        hide-details
        prepend-inner-icon="mdi-magnify"
        clearable
        @update:model-value="$emit('update:search', $event || '')"
      ></v-text-field>
    </v-col>

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
          { title: 'Latest', value: 'desc' },
          { title: 'Oldest', value: 'asc' },
        ]"
        variant="outlined"
        density="compact"
        hide-details
        @update:model-value="$emit('update:order', $event)"
      ></v-select>
    </v-col>
  </v-row>
</template>
