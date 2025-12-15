import type { Launch, YearFilter } from '@/types'

export function useLaunchFilter(launchesRef: Ref<Launch[]> | ComputedRef<Launch[]>) {
  const year = ref<YearFilter>('All')

  const filtered = computed(() => {
    const launches = launchesRef.value
    if (!launches || !Array.isArray(launches) || launches.length === 0) {
      return []
    }

    if (year.value === 'All') return launches

    return launches.filter((launch) => {
      const launchYear = new Date(launch.launch_date_utc).getFullYear().toString()
      return launchYear === year.value
    })
  })

  return { year, filtered }
}
