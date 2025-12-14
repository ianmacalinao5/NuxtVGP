import type { Pinia } from 'pinia'
import { createStatePersistence } from 'pinia-plugin-state-persistence'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as Pinia

  pinia.use(
    createStatePersistence({
      key: 'nuxt-app',
    }),
  )
})
