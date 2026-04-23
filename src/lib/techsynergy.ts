import type { FeaturedEvent, Project, Activity, GalleryImage } from '@/lib/cybersecurity'

export const logo = '/techsynergy/TechSynergyLogo.png'

export const intro =
  "TechSynergy is Colorado Mesa University's premier club for students passionate about coding, innovation, and technology. We bring together aspiring developers, competitive programmers, and tech enthusiasts to learn, build, and compete together. From ICPC competitions to hackathons to collaborative projects, we're building the next generation of tech leaders."

export const icpc: FeaturedEvent = {
  emoji: '🏆',
  title: 'ICPC 2025',
  date: 'International Collegiate Programming Contest',
  description:
    'TechSynergy is proud to send competitive teams to the International Collegiate Programming Contest (ICPC), the premier global programming competition for university students. Our teams tackle complex algorithmic challenges and compete against the best programmers worldwide.',
  highlights: [
    {
      title: 'Algorithmic Problem Solving',
      desc: 'Master advanced algorithms and data structures',
    },
    {
      title: 'Team Collaboration',
      desc: 'Work together under pressure to solve challenging problems',
    },
    {
      title: 'Global Competition',
      desc: 'Compete against top universities from around the world',
    },
    {
      title: 'Career Opportunities',
      desc: 'Gain recognition from top tech companies',
    },
  ],
}

export const upcomingEvents: string[] = [
  'Weekly Coding Challenges - Every Wednesday',
  'Hackathons - Quarterly',
  'Tech Talks & Workshops - Monthly',
  'Programming Competitions - Regional & National',
  'Industry Networking Events - Bi-annually',
]

export const projects: Project[] = [
  {
    emoji: '💻',
    title: 'Full-Stack Web Applications',
    description:
      'Collaborative development of modern web applications using cutting-edge technologies like React, Node.js, and cloud platforms. Members gain hands-on experience with the complete software development lifecycle.',
    tags: ['React', 'Node.js', 'Cloud'],
  },
  {
    emoji: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Exploring artificial intelligence and machine learning applications through practical projects. From computer vision to natural language processing, members experiment with cutting-edge AI technologies.',
    tags: ['Python', 'TensorFlow', 'ML Algorithms'],
  },
  {
    emoji: '📱',
    title: 'Mobile App Development',
    description:
      'Creating innovative mobile applications for iOS and Android platforms. Members learn cross-platform development using React Native and Flutter, bringing their app ideas to life.',
    tags: ['React Native', 'Flutter', 'Mobile UX'],
  },
  {
    emoji: '🎮',
    title: 'Game Development',
    description:
      'Building interactive games and simulations using modern game engines. Perfect for members interested in game design, graphics programming, and interactive entertainment.',
    tags: ['Unity', 'C#', 'Game Design'],
  },
  {
    emoji: '🔗',
    title: 'Blockchain & Cryptocurrencies',
    description:
      'Exploring decentralized technologies through smart contract development and blockchain applications. Learn about Web3, DeFi, and the future of distributed systems.',
    tags: ['Solidity', 'Ethereum', 'Web3'],
  },
  {
    emoji: '🌐',
    title: 'Open Source Contributions',
    description:
      'Contributing to real-world open source projects and building a portfolio that showcases your skills. Learn collaborative development practices used in industry.',
    tags: ['Git', 'Open Source', 'Collaboration'],
  },
]

export const activities: Activity[] = [
  {
    icon: '💻',
    title: 'Weekly Coding Sessions',
    description:
      'Every Wednesday, we tackle algorithmic challenges, work on projects, and help each other level up our programming skills in a collaborative environment.',
  },
  {
    icon: '🏃',
    title: 'Hackathons',
    description:
      "Participate in local and national hackathons where you'll build amazing projects in 24-48 hours, win prizes, and network with industry professionals.",
  },
  {
    icon: '📚',
    title: 'Tech Workshops',
    description:
      "Hands-on workshops covering modern technologies, frameworks, and tools. From React to Docker, learn the skills that matter in today's tech industry.",
  },
  {
    icon: '🎯',
    title: 'Coding Competitions',
    description:
      'Prepare for and compete in ICPC, HackerRank contests, LeetCode challenges, and other programming competitions to sharpen your problem-solving skills.',
  },
  {
    icon: '👔',
    title: 'Industry Connections',
    description:
      'Network with tech companies through guest speakers, company visits, and recruitment events. Get insights into careers and internship opportunities.',
  },
  {
    icon: '🤝',
    title: 'Peer Learning',
    description:
      'Collaborate on projects, share knowledge, and learn from each other. From code reviews to pair programming, we grow together as developers.',
  },
  {
    icon: '🚀',
    title: 'Innovation Challenges',
    description:
      'Participate in innovation sprints where teams brainstorm and prototype solutions to real-world problems using technology.',
  },
  {
    icon: '📖',
    title: 'Tech Book Club',
    description:
      'Discuss influential tech books, research papers, and articles. Expand your knowledge beyond coding to understand the broader tech landscape.',
  },
]

export const icpcGallery: GalleryImage[] = [
  { src: '/icpc/IMG_0640.jpg', alt: 'ICPC 2025 - Team problem solving' },
  { src: '/icpc/IMG_0641.jpg', alt: 'ICPC 2025 - Coding competition' },
  { src: '/icpc/IMG_0642.jpg', alt: 'ICPC 2025 - Team collaboration' },
]
