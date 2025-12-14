<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import GET_ROCKET_QUERY from '../../graphql/rocket.gql'

const route = useRoute()
const rocketId = route.params.id

const { result, loading, error } = useQuery(GET_ROCKET_QUERY, {
  id: rocketId,
})
</script>

<template>
  <v-container fluid class="py-10 bg-grey-lighten-4 fill-height align-start">
    <v-container>
      <v-btn
        variant="text"
        color="blue-darken-2"
        prepend-icon="mdi-arrow-left"
        class="mb-6"
        @click="$router.back()"
      >
        Back to Missions
      </v-btn>

      <v-row v-if="loading">
        <v-col cols="12">
          <v-skeleton-loader
            class="rounded-xl"
            type="heading, subtitle, paragraph, image, paragraph"
            color="white"
          />
        </v-col>
      </v-row>

      <v-alert
        v-if="error"
        type="error"
        variant="tonal"
        class="mb-6 rounded-lg"
        icon="mdi-alert-circle-outline"
      >
        Unable to retrieve rocket details. {{ error.message }}
      </v-alert>

      <v-row v-if="!loading && result?.rocket">
        <v-col cols="12">
          <v-card flat class="rounded-xl" color="white">
            <v-sheet height="8" color="blue-darken-2" class="w-100"></v-sheet>

            <div class="pa-8">
              <div class="d-flex align-center justify-space-between mb-6">
                <div>
                  <div class="text-overline text-blue-grey mb-1">Rocket Vehicle</div>
                  <h1 class="text-h4 font-weight-bold text-blue-darken-3 mb-2">
                    {{ result.rocket.name }}
                  </h1>
                </div>
                <v-avatar color="blue-lighten-5" rounded="lg" size="80">
                  <v-icon color="blue-darken-2" size="48">mdi-rocket</v-icon>
                </v-avatar>
              </div>

              <div class="mb-8">
                <h3 class="text-h6 font-weight-bold text-blue-grey-darken-3 mb-3">Description</h3>
                <p class="text-body-1 text-grey-darken-2">
                  {{ result.rocket.description || 'No description available.' }}
                </p>
              </div>

              <v-divider class="mb-8"></v-divider>

              <h3 class="text-h6 font-weight-bold text-blue-grey-darken-3 mb-4">Technical Specifications</h3>

              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-card flat color="blue-lighten-5" class="pa-4 rounded-lg">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="blue-darken-2" class="mr-2">mdi-calendar-clock</v-icon>
                      <div class="text-caption text-blue-grey-darken-1 font-weight-bold text-uppercase">
                        First Flight
                      </div>
                    </div>
                    <div class="text-h6 font-weight-bold text-blue-darken-3">
                      {{
                        result.rocket.first_flight
                          ? new Date(result.rocket.first_flight).toLocaleDateString()
                          : 'N/A'
                      }}
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-card flat color="blue-lighten-5" class="pa-4 rounded-lg">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="blue-darken-2" class="mr-2">mdi-arrow-up-bold</v-icon>
                      <div class="text-caption text-blue-grey-darken-1 font-weight-bold text-uppercase">
                        Height
                      </div>
                    </div>
                    <div class="text-h6 font-weight-bold text-blue-darken-3">
                      {{ result.rocket.height?.meters ? `${result.rocket.height.meters} m` : 'N/A' }}
                      <span v-if="result.rocket.height?.feet" class="text-body-2 text-grey-darken-1">
                        ({{ result.rocket.height.feet }} ft)
                      </span>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-card flat color="blue-lighten-5" class="pa-4 rounded-lg">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="blue-darken-2" class="mr-2">mdi-diameter</v-icon>
                      <div class="text-caption text-blue-grey-darken-1 font-weight-bold text-uppercase">
                        Diameter
                      </div>
                    </div>
                    <div class="text-h6 font-weight-bold text-blue-darken-3">
                      {{ result.rocket.diameter?.meters ? `${result.rocket.diameter.meters} m` : 'N/A' }}
                      <span v-if="result.rocket.diameter?.feet" class="text-body-2 text-grey-darken-1">
                        ({{ result.rocket.diameter.feet }} ft)
                      </span>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-card flat color="blue-lighten-5" class="pa-4 rounded-lg">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="blue-darken-2" class="mr-2">mdi-weight-kilogram</v-icon>
                      <div class="text-caption text-blue-grey-darken-1 font-weight-bold text-uppercase">
                        Mass
                      </div>
                    </div>
                    <div class="text-h6 font-weight-bold text-blue-darken-3">
                      {{ result.rocket.mass?.kg ? `${result.rocket.mass.kg.toLocaleString()} kg` : 'N/A' }}
                      <span v-if="result.rocket.mass?.lb" class="text-body-2 text-grey-darken-1">
                        ({{ result.rocket.mass.lb.toLocaleString() }} lb)
                      </span>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-card flat color="blue-lighten-5" class="pa-4 rounded-lg">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="blue-darken-2" class="mr-2">mdi-layers-triple</v-icon>
                      <div class="text-caption text-blue-grey-darken-1 font-weight-bold text-uppercase">
                        Stages
                      </div>
                    </div>
                    <div class="text-h6 font-weight-bold text-blue-darken-3">
                      {{ result.rocket.stages || 'N/A' }}
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="!loading && !error && !result?.rocket">
        <v-col cols="12">
          <v-alert type="info" variant="tonal" icon="mdi-information-outline">
            Rocket details not found.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
