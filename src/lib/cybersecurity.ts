import type { ClubData } from '@/lib/types'
import { sharedClubConfig } from '@/lib/sharedConfig'

const config = sharedClubConfig
const meetingPhrase = `${config.meeting.day.replace(/s$/, '')} at ${config.meeting.time} in ${config.meeting.location}`

export const clubData: ClubData = {
  key: 'cybersecurity',
  config,
  intro:
    'The Cybersecurity Club at Colorado Mesa University is dedicated to fostering a passion for information security among students. Through hands-on challenges, real-world projects, and collaborative learning, we prepare the next generation of cybersecurity professionals.',
  featuredEvent: {
    emoji: '🎯',
    title: 'Cyber Fair 2025',
    date: 'Spring 2025',
    description:
      'Our flagship annual event bringing together students, professionals, and security enthusiasts for a day of hands-on cybersecurity challenges, workshops, and networking opportunities.',
    highlights: [
      {
        title: 'Capture The Flag (CTF) Competition',
        desc: 'Test your skills in real-world security scenarios',
      },
      {
        title: 'Hardware Hacking Stations',
        desc: 'Hands-on experience with IoT security and embedded systems',
      },
      {
        title: 'Industry Speakers',
        desc: 'Learn from cybersecurity professionals',
      },
      {
        title: 'Networking Opportunities',
        desc: 'Connect with potential employers and sponsors',
      },
    ],
  },
  gallery: [
    { src: '/cyber-fair/IMG_1917.jpg', alt: 'Cyber Fair 2025 - Students working on security challenges' },
    { src: '/cyber-fair/IMG_0501.jpg', alt: 'Cyber Fair 2025 - Hardware hacking station' },
    { src: '/cyber-fair/IMG_0500.jpg', alt: 'Cyber Fair 2025 - Team collaboration' },
    { src: '/cyber-fair/IMG_1146.jpg', alt: 'Cyber Fair 2025 - Security demonstration' },
    { src: '/cyber-fair/IMG_1147.jpg', alt: 'Cyber Fair 2025 - CTF competition' },
    { src: '/cyber-fair/IMG_1150.jpg', alt: 'Cyber Fair 2025 - Networking activities' },
  ],
  galleryTitle: 'Cyber Fair 2025 Gallery',
  upcomingEvents: [
    'Weekly CTF Challenges',
    'Guest Speaker',
    'Security Workshops',
    'Regional CTF Competitions',
  ],
  projects: [
    {
      title: 'Vulnerability Assessment Lab',
      description:
        'Building a comprehensive lab environment for students to practice identifying and exploiting common security vulnerabilities in a safe, controlled setting.',
      tags: ['Penetration Testing', 'Web Security', 'Network Security'],
    },
    {
      title: 'Security Awareness Campaign',
      description:
        'Creating educational materials and conducting workshops to raise cybersecurity awareness across campus. Topics include phishing, password security, and social engineering.',
      tags: ['Education', 'Social Engineering', 'Best Practices'],
    },
    {
      title: 'CTF Challenge Development',
      description:
        'Designing and developing custom Capture The Flag challenges for club competitions and external events. Covers cryptography, forensics, reverse engineering, and more.',
      tags: ['CTF Design', 'Cryptography', 'Forensics'],
    },
    {
      title: 'Honeypot Network',
      description:
        'Deploying and monitoring honeypot systems to study attack patterns and emerging threats. Analyzing collected data to improve defensive strategies.',
      tags: ['Threat Intelligence', 'Network Analysis', 'Research'],
    },
  ],
  projectsCta: {
    heading: 'Have a project idea?',
    body: "We're always looking for new security projects! Bring your ideas to our weekly meetings.",
  },
  activities: [
    {
      title: 'Weekly CTF Challenges',
      description:
        'Every Wednesday, we host mini Capture The Flag challenges covering various security domains. Perfect for beginners and experienced players alike!',
    },
    {
      title: 'Security Workshops',
      description:
        'Hands-on workshops on topics like web application security, malware analysis, network forensics, and secure coding practices.',
    },
    {
      title: 'Study Groups',
      description:
        'Collaborative learning sessions for security certifications (Security+, CEH, OSCP) and competition preparation.',
    },
    {
      title: 'Hack Labs',
      description:
        'Open lab sessions where members can work on personal security projects, practice pentesting, or experiment with new tools and techniques.',
    },
    {
      title: 'Guest Speakers',
      description:
        'Monthly presentations from industry professionals sharing real-world cybersecurity experiences and career insights.',
    },
    {
      title: 'Competition Teams',
      description:
        'Participate in regional and national cybersecurity competitions, including CCDC, NCL, and online CTF events.',
    },
  ],
  closingBanner: {
    bgClass: 'bg-cybersecurity-dark',
    titleClass: 'text-cybersecurity-gold',
    title: 'Join Us!',
    textClass: 'text-gray-200',
    body: `All skill levels welcome - from complete beginners to experienced security enthusiasts. We meet every ${meetingPhrase}.`,
  },
  officers: [
    // {
    //   name: 'Example Name',
    //   role: 'President',
    //   major: 'Cybersecurity',
    //   year: 'Senior',
    //   bio: 'Short bio goes here.',
    //   email: 'example@mavs.coloradomesa.edu',
    //   photo: '/officers/example.jpg',
    //   linkedin: 'https://www.linkedin.com/in/example/',
    // },
    {
      name: 'Jayden Alonzo-Estrada',
      role: 'Outgoing President',
      major: 'Computer Science and Cybersecurity',
      year: 'Senior',
      bio: 'Served as club President. Now mentoring incoming leadership to ensure a seamless transition.',
      email: 'jjalonzo-estra@mavs.coloradomesa.edu',
      photo: '/cybersecurity/jayden.jpg',
      linkedin: 'https://www.linkedin.com/in/jayae',
    },
    {
      name: 'Anika Rierson',
      role: 'President',
      major: 'Computer Science and Music',
      year: 'Junior',
      bio: 'Leading our club in protecting our digital frontier.',
      email: 'arierson@mavs.coloradomesa.edu',
    },
    {
      name: 'Jason Bryant',
      role: 'Vice President',
      major: 'Computer Science',
      year: 'Junior',
      bio: "Coordinates events and supports the President in executing our club's vision.",
      email: 'jebryant@mavs.coloradomesa.edu',
    },
  ],
  advisor: null,
  sponsors: [
    // {
    //   name: 'Example Sponsor',
    //   tier: 'Platinum',
    //   website: 'https://example.com',
    //   logo: '/sponsors/example.png',
    // },
  ],
}
