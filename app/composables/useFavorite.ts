import type { Launch } from '@/types'
import { useFavoritesStore } from '@/stores/favorites'

export function useFavorite() {
  const favoriteStore = useFavoritesStore()

  const toggleFavorite = (launch: Launch): void => {
    const rocket = launch?.rocket?.rocket
    if (!rocket?.id) return

    favoriteStore.toggle({
      id: rocket.id,
      name: launch.rocket?.rocket_name || 'Unknown',
    })
  }

  const isFavorite = (launch: Launch): boolean => {
    if (!import.meta.client) return false

    const rocketId = launch?.rocket?.rocket?.id
    return rocketId ? favoriteStore.isFavorite(rocketId) : false
  }

  return { toggleFavorite, isFavorite }
}
