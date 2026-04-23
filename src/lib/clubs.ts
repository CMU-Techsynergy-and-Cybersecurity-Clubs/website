export type ClubKey = 'cybersecurity' | 'compsci'

export type ClubTheme = {
  name: string
  slogan: string
  logo: string
  basePath: string
  heroBg: string
  headerBg: string
  titleClass: string
  taglineClass: string
  tabActiveClass: string
  tabInactiveClass: string
  accentBar: string
  goldBar: string
  roleText: string
  accentText: string
  ctaBg: string
  ctaSubtext: string
  ctaButton: string
  avatarGradient: string
  hoverBorder: string
  linkClass: string
  noticeClass: string
}

export const clubThemes: Record<ClubKey, ClubTheme> = {
  cybersecurity: {
    name: 'Cybersecurity Club',
    slogan: 'Protecting the Digital Frontier',
    logo: '/cybersecurity/CyberSecLogoComplex.png',
    basePath: '/cybersecurity',
    heroBg: 'bg-gradient-to-br from-cybersecurity-dark to-cybersecurity-red',
    headerBg: 'bg-gradient-to-br from-cybersecurity-dark to-cybersecurity-red',
    titleClass: 'text-cybersecurity-gold',
    taglineClass: 'text-gray-200',
    tabActiveClass: 'border-cybersecurity-red text-cybersecurity-red',
    tabInactiveClass: 'border-transparent text-gray-500 hover:text-cybersecurity-red',
    accentBar: 'bg-cybersecurity-red',
    goldBar: 'bg-cybersecurity-gold',
    roleText: 'text-cybersecurity-red',
    accentText: 'text-cybersecurity-gold',
    ctaBg: 'bg-cybersecurity-red',
    ctaSubtext: 'text-red-100',
    ctaButton: 'bg-cybersecurity-gold hover:bg-yellow-400 text-cybersecurity-dark',
    avatarGradient: 'from-cybersecurity-red to-cybersecurity-dark',
    hoverBorder: 'hover:border-cybersecurity-red/30',
    linkClass: 'text-cybersecurity-red hover:underline',
    noticeClass: 'bg-cybersecurity-gold/10 border-cybersecurity-gold/30',
  },
  compsci: {
    name: 'Computer Science Club',
    slogan: 'Purpose Driven Programming',
    logo: '/compsci/TechSynergyLogoMinimalist.png',
    basePath: '/ComputerScienceClub',
    heroBg: 'bg-gradient-to-br from-compsci-purple-dark to-compsci-purple',
    headerBg: 'bg-compsci-purple-dark',
    titleClass: 'text-white',
    taglineClass: 'text-purple-100',
    tabActiveClass: 'border-compsci-purple text-compsci-purple',
    tabInactiveClass: 'border-transparent text-gray-500 hover:text-compsci-purple',
    accentBar: 'bg-compsci-purple',
    goldBar: 'bg-compsci-purple',
    roleText: 'text-compsci-purple',
    accentText: 'text-compsci-purple',
    ctaBg: 'bg-compsci-purple',
    ctaSubtext: 'text-purple-100',
    ctaButton: 'bg-white hover:bg-gray-100 text-compsci-purple-dark',
    avatarGradient: 'from-compsci-purple to-compsci-purple-dark',
    hoverBorder: 'hover:border-compsci-purple/30',
    linkClass: 'text-compsci-purple hover:underline',
    noticeClass: 'bg-compsci-purple/10 border-compsci-purple/30',
  },
}
