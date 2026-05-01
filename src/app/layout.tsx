import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Clubs @ CMU - Cybersecurity & Computer Science',
  description:
    'Colorado Mesa University Tech Clubs - Cybersecurity Club and Computer Science Club. Empowering students through technology, innovation, and collaboration.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Runs before hydration to apply saved theme without flash */}
      <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')})()` }} />
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
