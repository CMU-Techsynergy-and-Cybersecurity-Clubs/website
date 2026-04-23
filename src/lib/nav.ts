import { clubThemes } from '@/lib/clubs'

export type NavLink = {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/cybersecurity', label: clubThemes.cybersecurity.name },
  { href: '/ComputerScienceClub', label: clubThemes.compsci.name },
]
