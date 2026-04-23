import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Clubs @ CMU - Cybersecurity & Computer Science',
  description:
    'Colorado Mesa University Tech Clubs - Cybersecurity Club and Computer Science Club. Empowering students through technology, innovation, and collaboration.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
