import type { FavoriteRocket } from '@/types'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    rockets: [] as FavoriteRocket[],
  }),

  getters: {
    isFavorite: (state) => {
      return (id: string): boolean => state.rockets.some((r) => r.id === id)
    },
  },

  actions: {
    add(rocket: FavoriteRocket) {
      if (!this.isFavorite(rocket.id)) {
        this.rockets.push(rocket)
      }
    },

    remove(id: string) {
      this.rockets = this.rockets.filter((r) => r.id !== id)
    },

    toggle(rocket: FavoriteRocket) {
      this.isFavorite(rocket.id) ? this.remove(rocket.id) : this.add(rocket)
    },

    clear() {
      this.rockets = []
    },
  },

  persist: {
    key: 'favorite-rockets',
  },
})
