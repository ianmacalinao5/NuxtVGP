import localforage from 'localforage'

const store = localforage.createInstance({
  name: 'spacex-app',
  storeName: 'pinia',
})

export const indexedDbStorage = {
  getItem: (key: string) => store.getItem(key),
  setItem: (key: string, value: any) => store.setItem(key, value),
  removeItem: (key: string) => store.removeItem(key),
}
