import type { Launch } from '@/types'

export function useSearch(launches: Ref<Launch[]> | ComputedRef<Launch[]>) {
  const searchQuery = ref('')

  const searched = computed(() => {
    const launchList = launches.value
    if (!launchList || !Array.isArray(launchList) || launchList.length === 0) {
      return []
    }

    if (!searchQuery.value.trim()) {
      return launchList
    }

    const query = searchQuery.value.toLowerCase().trim()

    return launchList.filter((launch) => {
      if (launch.mission_name?.toLowerCase().includes(query)) {
        return true
      }

      if (launch.launch_site?.site_name_long?.toLowerCase().includes(query)) {
        return true
      }

      if (launch.rocket?.rocket_name?.toLowerCase().includes(query)) {
        return true
      }

      if (launch.details?.toLowerCase().includes(query)) {
        return true
      }

      return false
    })
  })

  return {
    searchQuery,
    searched,
  }
}
