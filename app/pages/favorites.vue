<script setup lang="ts">
const favoritesStore = useFavoritesStore()
const favorites = computed(() => favoritesStore.rockets)

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

const removeFavorite = (id: string) => {
  favoritesStore.remove(id)
}

const clearFavorites = () => {
  favoritesStore.clear()
}
</script>

<template>
  <v-container fluid class="py-10 bg-grey-lighten-4 fill-height align-start">
    <v-container>
      <PageHeader
        title-main="Favorite"
        title-accent="Rockets"
        subtitle="Your saved SpaceX rockets"
        icon="mdi-heart"
      />

      <template v-if="isMounted">
        <v-row class="mb-6 align-center justify-space-between">
          <v-col cols="12" md="4" class="text-md-left">
            <v-btn v-if="favorites.length" color="red" variant="tonal" size="small" @click="clearFavorites">
              <v-icon start size="small">mdi-delete-outline</v-icon>
              Clear All
            </v-btn>
          </v-col>
        </v-row>

        <v-alert v-if="favorites.length === 0" type="info" variant="tonal" icon="mdi-heart-outline">
          You have no favorite rockets yet.
        </v-alert>

        <v-row v-else>
          <v-col v-for="rocket in favorites" :key="rocket.id" cols="12" sm="6" md="4">
            <v-card flat class="rounded-xl border border-opacity-50 h-100">
              <v-sheet height="6" color="pink-lighten-2" />

              <v-card-title class="d-flex align-center justify-space-between">
                <span class="font-weight-bold text-blue-darken-3">
                  {{ rocket.name }}
                </span>
                <v-icon color="pink">mdi-heart</v-icon>
              </v-card-title>

              <v-card-actions class="justify-space-between">
                <v-btn size="small" variant="tonal" color="blue" @click="navigateTo(`/rockets/${rocket.id}`)">
                  View Details
                </v-btn>

                <v-btn size="small" variant="text" color="red" @click="removeFavorite(rocket.id)">
                  <v-icon size="small">mdi-delete-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </v-container>
</template>
