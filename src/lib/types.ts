import type { ClubKey } from '@/lib/clubs'

export type EventHighlight = { title: string; desc: string }

export type FeaturedEvent = {
  emoji?: string
  title: string
  date: string
  description: string
  highlights: EventHighlight[]
}

export type Project = {
  emoji?: string
  title: string
  description: string
  tags: string[]
}

export type Activity = {
  icon?: string
  title: string
  description: string
}

export type GalleryImage = { src: string; alt: string; width: number; height: number }

export type Officer = {
  name: string
  role: string
  major?: string
  year?: string
  bio?: string
  email?: string
  photo?: string
  linkedin?: string
}

export type Advisor = {
  name: string
  role: string
  department?: string
  bio?: string
  email?: string
  photo?: string
  linkedin?: string
}

export type Tier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze'

export const tierOrder: Tier[] = ['Platinum', 'Gold', 'Silver', 'Bronze']

export type Sponsor = {
  name: string
  tier: Tier
  website?: string
  logo?: string
  bgColor?: string
  size?: string
}

export type ClubConfig = {
  email: string
  discord: string
  meeting: { day: string; time: string; location: string }
}

export type ProjectsCta = { heading: string; body: string }

export type ClosingBanner = {
  bgClass: string
  titleClass: string
  title: string
  textClass: string
  body: string
}

export type ClubData = {
  key: ClubKey
  config: ClubConfig
  intro: string
  featuredEvent: FeaturedEvent
  gallery: GalleryImage[]
  galleryTitle: string
  upcomingEvents: string[]
  projects: Project[]
  projectsCta: ProjectsCta
  activities: Activity[]
  closingBanner: ClosingBanner
  officers: Officer[]
  advisor: Advisor | null
  sponsors: Sponsor[]
}
