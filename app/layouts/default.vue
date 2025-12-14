<template>
  <v-app>
    <ClientOnly>
      <Navbar />
    </ClientOnly>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
