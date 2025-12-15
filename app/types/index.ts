export type FavoriteRocket = {
  id: string
  name: string
}

export interface Rocket {
  id: string
  rocket_name: string
}

export interface LaunchSite {
  site_name_long?: string
  site_name?: string
}

export interface LaunchRocket {
  rocket_name?: string
  rocket?: Rocket
}

export interface Launch {
  mission_name: string
  launch_date_utc: string
  launch_site?: LaunchSite
  rocket?: LaunchRocket
  details?: string | null
}

export type SortOrder = 'asc' | 'desc'

export type YearFilter = 'All' | string
