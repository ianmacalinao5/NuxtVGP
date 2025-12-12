<script setup lang="ts">
definePageMeta({
	layout: 'default',
})
</script>

<template>
	<v-container class="fill-height">
		<v-row align="center" justify="center">
			<v-col cols="12" md="8" lg="6" class="text-center">
				<v-icon size="100" color="primary" class="mb-6">mdi-rocket-launch-outline</v-icon>

				<h1 class="text-h4 mb-4">SpaceX Explorer</h1>

				<p class="text-h6 text-grey mb-8">
					Explore SpaceX launches, rockets, and missions. Browse historical data and save your
					favorite rockets.
				</p>

				<v-row justify="center" class="mb-6">
					<v-col cols="12" sm="6" md="4">
						<v-card elevation="2" class="pa-4">
							<v-icon size="40" color="primary">mdi-rocket-outline</v-icon>
							<h3 class="mt-2">Launches</h3>
							<p class="text-body-2">View all SpaceX launches</p>
						</v-card>
					</v-col>

					<v-col cols="12" sm="6" md="4">
						<v-card elevation="2" class="pa-4">
							<v-icon size="40" color="red">mdi-heart</v-icon>
							<h3 class="mt-2">Favorites</h3>
							<p class="text-body-2">Save your favorite rockets</p>
						</v-card>
					</v-col>
				</v-row>

				<v-btn to="/launches" size="default" color="primary" prepend-icon="mdi-rocket-launch">
					Explore Launches
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>
