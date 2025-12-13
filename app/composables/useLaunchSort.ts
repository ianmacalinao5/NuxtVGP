import { computed, ref } from 'vue'

export function useLaunchSort(itemsRef: { value: any }) {
  const order = ref<'asc' | 'desc'>('desc')
  const sorted = computed(() => {
    return [...itemsRef.value].sort((a, b) => {
      const ta = new Date(a.launch_date_utc).getTime()
      const tb = new Date(b.launch_date_utc).getTime()
      return order.value === 'asc' ? ta - tb : tb - ta
    })
  })
  return { order, sorted }
}
