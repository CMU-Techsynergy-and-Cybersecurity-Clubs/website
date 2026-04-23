export type ClubTheme = {
  heroBg: string
  titleClass: string
  taglineClass: string
  tabActiveClass: string
  tabInactiveClass: string
  accentBar: string
}

export const clubThemes: Record<'cybersecurity' | 'compsci', ClubTheme> = {
  cybersecurity: {
    heroBg: 'bg-gradient-to-br from-cyber-dark to-cyber-red',
    titleClass: 'text-cyber-gold',
    taglineClass: 'text-gray-200',
    tabActiveClass: 'border-cyber-red text-cyber-red',
    tabInactiveClass: 'border-transparent text-gray-500 hover:text-cyber-red',
    accentBar: 'bg-cyber-red',
  },
  compsci: {
    heroBg: 'bg-gradient-to-br from-synergy-purple-dark to-synergy-purple',
    titleClass: 'text-white',
    taglineClass: 'text-purple-100',
    tabActiveClass: 'border-synergy-purple text-synergy-purple',
    tabInactiveClass: 'border-transparent text-gray-500 hover:text-synergy-purple',
    accentBar: 'bg-synergy-purple',
  },
}
