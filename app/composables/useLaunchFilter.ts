export function useLaunchFilter(launchesRef: { value: any[] }) {
  const year = ref('All')
  const filtered = computed(() => {
    if (!launchesRef.value || !Array.isArray(launchesRef.value)) {
      return []
    }

    if (year.value === 'All') return launchesRef.value

    return launchesRef.value.filter((l: { launch_date_utc: string | number | Date }) => {
      const y = new Date(l.launch_date_utc).getFullYear().toString()
      return y === year.value
    })
  })

  return { year, filtered }
}
