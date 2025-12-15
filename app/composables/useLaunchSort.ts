import type { Launch, SortOrder } from '@/types'

export function useLaunchSort(itemsRef: Ref<Launch[]> | ComputedRef<Launch[]>) {
  const order = ref<SortOrder>('desc')

  const sorted = computed(() => {
    const items = itemsRef.value
    if (!items || !Array.isArray(items) || items.length === 0) {
      return []
    }

    return [...items].sort((a, b) => {
      const ta = new Date(a.launch_date_utc).getTime()
      const tb = new Date(b.launch_date_utc).getTime()
      return order.value === 'asc' ? ta - tb : tb - ta
    })
  })

  return { order, sorted }
}
