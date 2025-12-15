<script setup lang="ts">
import GET_LAUNCHES_QUERY from '@/graphql/launches.gql'
import { useQuery } from '@vue/apollo-composable'

const { result, loading, error } = useQuery(GET_LAUNCHES_QUERY)

const launches = computed(() => result.value?.launchesPast || [])

const { year, filtered } = useLaunchFilter(launches)

const { searchQuery, searched } = useSearch(filtered)

const { order, sorted } = useLaunchSort(searched)

const { toggleFavorite, isFavorite } = useFavorite()
</script>

<template>
  <v-container fluid class="py-10 bg-grey-lighten-4 fill-height align-start">
    <v-container>
      <PageHeader
        title-main="SpaceX"
        title-accent="Missions"
        subtitle="Recent launch data and mission parameters"
        icon="mdi-rocket-outline"
      />
      <ClientOnly>
        <LaunchFilters v-model:year="year" v-model:order="order" v-model:search="searchQuery" />
      </ClientOnly>

      <ResultsCounter v-if="!loading" :count="sorted.length" :year="year" />

      <v-row v-if="loading">
        <v-col v-for="i in 3" :key="i" cols="12" md="6" lg="4">
          <v-skeleton-loader class="rounded-xl" type="list-item-two-line, text, chip" color="white" />
        </v-col>
      </v-row>

      <v-alert
        v-if="error"
        type="error"
        variant="tonal"
        class="mb-6 rounded-lg"
        icon="mdi-alert-circle-outline"
      >
        Unable to retrieve mission data. {{ error.message }}
      </v-alert>

      <v-row v-if="!loading && sorted.length > 0">
        <v-col v-for="launch in sorted" :key="launch.mission_name" cols="12" md="6" lg="4">
          <v-card
            flat
            class="rounded-xl border border-opacity-50 h-100 transition-swing card-hover-blue"
            color="white"
          >
            <v-sheet height="6" color="blue-lighten-2" class="w-100"></v-sheet>

            <div class="pa-5">
              <div class="d-flex justify-space-between align-start mb-2">
                <div>
                  <div class="text-overline text-blue-grey mb-0">Mission</div>
                  <h3 class="text-h5 font-weight-bold text-blue-darken-3">
                    {{ launch.mission_name }}
                  </h3>
                </div>
                <v-avatar color="blue-lighten-5" rounded="lg" size="48">
                  <v-icon color="blue-darken-2">mdi-rocket-launch-outline</v-icon>
                </v-avatar>
              </div>

              <div class="text-subtitle-2 text-blue-grey-lighten-1 mb-4 d-flex align-center">
                <v-icon size="small" class="mr-1">mdi-calendar-blank-outline</v-icon>
                {{ new Date(launch.launch_date_utc).toLocaleDateString() }}
              </div>

              <v-divider class="mb-4 border-opacity-50"></v-divider>

              <v-row dense>
                <v-col cols="12">
                  <div class="text-caption text-blue-grey-lighten-2 font-weight-bold text-uppercase">
                    Launch Site
                  </div>
                  <div class="text-body-2 text-grey-darken-3 font-weight-medium">
                    {{ launch.launch_site?.site_name_long || 'N/A' }}
                  </div>
                </v-col>

                <v-col cols="12" class="mt-3">
                  <div class="text-caption text-blue-grey-lighten-2 font-weight-bold text-uppercase">
                    Rocket Vehicle
                  </div>
                  <div class="d-flex align-center justify-space-between">
                    <v-chip
                      v-if="launch.rocket?.rocket?.id"
                      size="small"
                      color="blue"
                      variant="tonal"
                      class="font-weight-bold rocket-chip"
                      @click="$router.push(`/rockets/${launch.rocket.rocket.id}`)"
                    >
                      {{ launch.rocket?.rocket_name || 'N/A' }}
                      <v-icon end size="x-small">mdi-arrow-right</v-icon>
                    </v-chip>
                    <v-chip v-else size="small" color="blue" variant="tonal" class="font-weight-bold">
                      {{ launch.rocket?.rocket_name || 'N/A' }}
                    </v-chip>
                    <ClientOnly>
                      <v-btn size="small" color="pink" variant="tonal" @click="toggleFavorite(launch)">
                        <v-icon start size="x-small">
                          {{ isFavorite(launch) ? 'mdi-heart' : 'mdi-heart-outline' }}
                        </v-icon>
                        {{ isFavorite(launch) ? 'Favorited' : 'Favorite' }}
                      </v-btn>
                    </ClientOnly>
                  </div>
                </v-col>

                <v-col cols="12" class="mt-4">
                  <v-expand-transition>
                    <div class="text-body-2 text-grey-darken-1 details-text">
                      {{
                        launch.details
                          ? launch.details.substring(0, 120) + (launch.details.length > 120 ? '...' : '')
                          : 'No mission details available.'
                      }}
                    </div>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="!loading && !error && sorted.length === 0">
        <v-col cols="12">
          <v-alert type="info" variant="tonal" icon="mdi-information-outline">
            No missions found{{ searchQuery ? ' matching your search' : ' for the selected year' }}.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.card-hover-blue {
  transition: all 0.3s ease;
  border-color: #e3f2fd !important;
}

.card-hover-blue:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(33, 150, 243, 0.2) !important;
  border-color: #bbdefb !important;
}

.rocket-chip {
  cursor: pointer;
  transition: all 0.2s ease;
}

.rocket-chip:hover {
  transform: scale(1.05);
}
</style>
