import { useFavoritesStore } from '@/stores/favorites'

export function useFavorite() {
  const favoriteStore = useFavoritesStore()

  const toggleFavorite = (launch: any) => {
    const rocket = launch?.rocket?.rocket
    if (!rocket?.id) return

    favoriteStore.toggle({
      id: rocket.id,
      name: launch.rocket.rocket_name,
    })
  }

  const isFavorite = (launch: any) => {
    if (!import.meta.client) return false

    const rocketId = launch?.rocket?.rocket?.id
    return rocketId ? favoriteStore.isFavorite(rocketId) : false
  }

  return { toggleFavorite, isFavorite }
}
