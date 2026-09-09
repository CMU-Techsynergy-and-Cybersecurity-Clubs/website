import Link from 'next/link'
import { clubThemes } from '@/lib/clubs'
import { sharedClubConfig } from '@/lib/sharedConfig'
import { navLinks } from '@/lib/nav'
import StaticImage from '@/components/StaticImage'

const meeting = sharedClubConfig.meeting

const primaryCta =
  'inline-flex items-center h-12 px-6 rounded-lg bg-cyan-400 text-gray-950 font-bold text-[15px] hover:bg-cyan-300 active:translate-y-px transition-colors'

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Home() {
  const cybersec = clubThemes.cybersecurity
  const compsci = clubThemes.compsci

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cybersecurity-dark via-gray-900 to-compsci-purple-dark">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cybersecurity-gold/10 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-11 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 flex flex-col items-start gap-6">
              <h1 className="text-[44px] md:text-6xl lg:text-[64px] leading-[1.05] font-black tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Tech Clubs @ CMU
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-[34ch]">
                Cybersecurity Club and Computer Science Club at Colorado Mesa University. Learn by
                doing, then compete.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={sharedClubConfig.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryCta}
                >
                  Join the Discord
                </a>
                <a
                  href="#clubs"
                  className="inline-flex items-center h-12 px-6 rounded-lg border border-white/20 text-gray-100 font-semibold text-[15px] hover:bg-white/5 transition-colors"
                >
                  See the clubs
                </a>
              </div>
            </div>
            <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <StaticImage
                src="/cyber-fair/IMG_1917.jpg"
                alt="Students working through security challenges at Cyber Fair 2025"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Clubs ── */}
      <section id="clubs" className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Explore our clubs
            </h2>
            <p className="text-[17px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[60ch]">
              Two clubs, one meeting. Come for the one you want and stay for both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={cybersec.basePath}
              className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-cybersecurity-dark to-cybersecurity-red p-8 flex items-center gap-6">
                <StaticImage
                  src={cybersec.logo}
                  alt={`${cybersec.name} logo`}
                  className="h-24 w-24 object-contain drop-shadow-lg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-white leading-tight">{cybersec.name}</h3>
                  <p className="text-[15px] font-medium italic text-cybersecurity-gold">{cybersec.slogan}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-5 flex-grow">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Learn the art of protecting digital assets through hands-on challenges, CTF
                  competitions, and real-world security scenarios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Security Training', 'CTF Competitions', 'Cyber Fair'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cybersecurity-red/10 dark:bg-cybersecurity-red/15 text-cybersecurity-red dark:text-red-400 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-auto text-cybersecurity-red dark:text-red-400 font-semibold text-[15px]">
                  Visit the club page
                  <ArrowIcon />
                </span>
              </div>
            </Link>

            <Link
              href={compsci.basePath}
              className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-compsci-purple-dark to-compsci-purple p-8 flex items-center gap-6">
                <StaticImage
                  src={compsci.logo}
                  alt={`${compsci.name} logo`}
                  className="h-24 w-24 object-contain drop-shadow-lg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-white leading-tight">{compsci.name}</h3>
                  <p className="text-[15px] font-medium italic text-purple-200">{compsci.slogan}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-5 flex-grow">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Collaborate on innovative projects, compete in programming competitions, and
                  build the future of technology together.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Code Competitions', 'Innovation Projects', 'ICPC Teams'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-compsci-purple/10 dark:bg-compsci-purple/20 text-compsci-purple dark:text-purple-400 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-auto text-compsci-purple dark:text-purple-400 font-semibold text-[15px]">
                  Visit the club page
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Meeting ── */}
      <section className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-11 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 flex flex-col items-start gap-7">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Come to a meeting
                </h2>
                <p className="text-[17px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[50ch]">
                  Both clubs meet together every week. No experience needed, just show up.
                </p>
              </div>
              <dl className="w-full grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <dt className="text-[13px] font-semibold text-gray-500 dark:text-gray-400">When</dt>
                  <dd className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {meeting.day}, {meeting.time}
                  </dd>
                </div>
                <div className="flex flex-col gap-1.5 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <dt className="text-[13px] font-semibold text-gray-500 dark:text-gray-400">Where</dt>
                  <dd className="text-xl font-bold text-gray-900 dark:text-gray-100">{meeting.location}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={sharedClubConfig.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryCta}
                >
                  Join the Discord
                </a>
                <a
                  href={`mailto:${sharedClubConfig.email}`}
                  className="text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Email us
                </a>
              </div>
            </div>
            <div className="md:col-span-6 aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <StaticImage
                src="/icpc/IMG_0640.jpg"
                alt={`${compsci.name} team at ICPC 2025`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div className="flex flex-col gap-2">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold text-lg tracking-tight">
                Tech Clubs @ CMU
              </span>
              <span className="text-sm text-gray-500">Colorado Mesa University</span>
            </div>
            <div className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${sharedClubConfig.email}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <p className="border-t border-white/10 pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Tech Clubs @ CMU. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
