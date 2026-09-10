import Link from 'next/link'
import { navLinks } from '@/lib/nav'
import { sharedClubConfig } from '@/lib/sharedConfig'

const meeting = sharedClubConfig.meeting

export default function FinalCta() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-950 py-32 text-white md:py-48">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] translate-x-1/3 translate-y-1/3 rounded-full bg-compsci-purple/25 blur-[120px]" />
        <div className="grain absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center sm:px-8">
          <p className="text-lg text-gray-400">Every {meeting.day.replace(/s$/, '')}</p>
          <h2
            className="mt-4 w-full font-semibold leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            {meeting.time}
          </h2>
          <p className="mt-4 text-2xl font-medium text-gray-200 sm:text-3xl">{meeting.location}</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            No sign-up, no prerequisites. Walk in, sit down, and pick a challenge.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={sharedClubConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center rounded-full bg-white px-8 text-base font-semibold text-gray-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Join the Discord
            </a>
            <a
              href={`mailto:${sharedClubConfig.email}`}
              className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-gray-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold tracking-tight">Tech Clubs @ CMU</span>
              <span className="text-sm text-gray-500">Colorado Mesa University, Grand Junction</span>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
              <a href={sharedClubConfig.discord} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Discord
              </a>
              <a href={`mailto:${sharedClubConfig.email}`} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Email
              </a>
            </nav>
          </div>
          <p className="border-t border-white/10 pt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tech Clubs @ CMU. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
