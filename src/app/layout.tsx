import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'
import LayoutProvider from '@/components/LayoutProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://techclubscmu.com'),
  title: 'Tech Clubs @ CMU - Cybersecurity & Computer Science',
  description:
    'Colorado Mesa University Tech Clubs - Cybersecurity Club and Computer Science Club. Empowering students through technology, innovation, and collaboration.',
  openGraph: {
    title: 'Tech Clubs @ CMU',
    description: 'Cybersecurity Club and Computer Science Club at Colorado Mesa University.',
    url: 'https://techclubscmu.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.variable}>
      <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');if(localStorage.getItem('layout')==='classic')document.documentElement.classList.add('classic')})()` }} />
      <body className="font-sans flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-cyan-400 focus:text-gray-950 focus:font-semibold"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <LayoutProvider>
            <Navbar />
            <main id="main" className="-mt-20 flex-1 overflow-x-clip w-full max-w-full classic:mt-0">{children}</main>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
