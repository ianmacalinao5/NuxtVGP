import type { Pinia } from 'pinia'
import { indexedDbStorage } from '@/utils/indexedDbStorage'
import { createStatePersistence } from 'pinia-plugin-state-persistence'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as Pinia

  pinia.use(
    createStatePersistence({
      key: 'spacex-app',
      storage: indexedDbStorage,
    }),
  )
})
