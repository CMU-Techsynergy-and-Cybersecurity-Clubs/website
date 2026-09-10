'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { clubThemes, type ClubKey } from '@/lib/clubs'
import { navLinks } from '@/lib/nav'
import { tierOrder, type ClubData, type Tier } from '@/lib/types'
import StaticImage from '@/components/StaticImage'
import ImageGallery from '@/components/ImageGallery'
import OfficerAvatar from '@/components/OfficerAvatar'
import SponsorLogo from '@/components/SponsorLogo'

type Palette = {
  surface: string
  accentText: string
  accentBar: string
  cta: string
  ctaText: string
  tabActive: string
  tabActiveText: string
  tabBar: string
  chip: string
  cardTop: string
  ring: string
}

const palettes: Record<ClubKey, Palette> = {
  cybersecurity: {
    surface: 'bg-gradient-to-br from-cybersecurity-dark via-[#3a1a2e] to-cybersecurity-red',
    accentText: 'text-cybersecurity-gold',
    accentBar: 'bg-cybersecurity-red',
    cta: 'bg-cybersecurity-gold hover:bg-yellow-300',
    ctaText: 'text-cybersecurity-dark',
    tabActive: 'bg-cybersecurity-red',
    tabActiveText: 'text-white',
    tabBar: 'bg-cybersecurity-dark',
    chip: 'bg-cybersecurity-red/10 text-cybersecurity-red dark:bg-cybersecurity-red/20 dark:text-red-300',
    cardTop: 'border-t-cybersecurity-red',
    ring: 'focus-visible:ring-cybersecurity-gold',
  },
  compsci: {
    surface: 'bg-gradient-to-br from-compsci-purple-dark via-[#4a2f75] to-compsci-purple',
    accentText: 'text-purple-200',
    accentBar: 'bg-compsci-purple',
    cta: 'bg-white hover:bg-purple-100',
    ctaText: 'text-compsci-purple-dark',
    tabActive: 'bg-compsci-purple',
    tabActiveText: 'text-white',
    tabBar: 'bg-compsci-purple-dark',
    chip: 'bg-compsci-purple/10 text-compsci-purple dark:bg-compsci-purple/25 dark:text-purple-200',
    cardTop: 'border-t-compsci-purple',
    ring: 'focus-visible:ring-purple-200',
  },
}

const tierBadge: Record<Tier, string> = {
  Platinum: 'bg-gray-200 text-gray-800',
  Gold: 'bg-yellow-300 text-yellow-900',
  Silver: 'bg-gray-400 text-gray-950',
  Bronze: 'bg-orange-300 text-orange-950',
}

type Cell = boolean | number

const benefits: { label: string; tiers: [Cell, Cell, Cell, Cell] }[] = [
  { label: 'Logo on website', tiers: [true, true, true, true] },
  { label: 'Social media features', tiers: [true, true, 1, false] },
  { label: 'Logo on event banners', tiers: [true, true, false, false] },
  { label: 'Newsletter spotlight', tiers: [true, true, false, false] },
  { label: 'Company presentation', tiers: [true, false, false, false] },
]

const sections = [
  { id: 'events', label: 'Events' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'officers', label: 'Officers' },
  { id: 'sponsors', label: 'Sponsors' },
] as const

type SectionId = (typeof sections)[number]['id']

const card =
  'rounded-2xl border border-gray-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-gray-900'

export default function MotionClubPage({ data }: { data: ClubData }) {
  const scope = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<SectionId>('events')
  const t = clubThemes[data.key]
  const p = palettes[data.key]
  const { featuredEvent, config } = data
  const heroImage = data.gallery[0]
  const meetingDay = config.meeting.day.replace(/s$/, '')

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id as SectionId)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-hero-text]', { y: 40, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.1)
          .from('[data-hero-card]', { x: 60, opacity: 0, rotate: 4, duration: 1.2, ease: 'expo.out' }, 0.3)

        gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
          gsap.from(group.querySelectorAll('[data-reveal]'), {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: 'top 80%' },
          })
        })
      })
    },
    { scope },
  )

  return (
    <div ref={scope} className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <section className={`relative overflow-hidden ${p.surface} text-white`}>
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-black/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-start gap-7 lg:col-span-7">
            <div data-hero-text className="flex items-center gap-4">
              <StaticImage
                src={t.logo}
                alt={`${t.name} logo`}
                className="h-16 w-16 rounded-xl border border-white/15 object-cover shadow-lg sm:h-20 sm:w-20"
              />
              <p className={`text-lg font-medium sm:text-xl ${p.accentText}`}>{t.slogan}</p>
            </div>
            <h1
              data-hero-text
              className="max-w-4xl font-black leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)' }}
            >
              {t.name}
            </h1>
            <p data-hero-text className="max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {data.intro}
            </p>
            <div data-hero-text className="flex flex-wrap items-center gap-4">
              <a
                href={config.discord}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-13 items-center rounded-xl px-7 py-3.5 text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${p.cta} ${p.ctaText} ${p.ring}`}
              >
                Join the Discord
              </a>
              <a
                href={t.campusGroupsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                MavLife
              </a>
              <a href={`mailto:${config.email}`} className="text-base font-medium text-white/80 transition-colors hover:text-white">
                Email us
              </a>
            </div>
            <dl data-hero-text className="mt-2 grid w-full max-w-xl grid-cols-2 gap-6 border-t border-white/20 pt-6">
              <div>
                <dt className="text-sm text-white/60">Meets</dt>
                <dd className="mt-1 text-lg font-semibold">
                  {config.meeting.day}, {config.meeting.time}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Where</dt>
                <dd className="mt-1 text-lg font-semibold">{config.meeting.location}</dd>
              </div>
            </dl>
          </div>

          {heroImage && (
            <div data-hero-card className="lg:col-span-5">
              <div className="rotate-2 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40 transition-transform duration-700 ease-out hover:rotate-0">
                <StaticImage
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="aspect-[4/5] w-full object-cover lg:aspect-[4/5]"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <nav
        aria-label="Club sections"
        className={`sticky top-20 z-40 ${p.tabBar} text-white shadow-lg shadow-black/20`}
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8" role="tablist">
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setActive(s.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                  isActive ? `${p.tabActive} ${p.tabActiveText} shadow-md` : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {s.label}
              </a>
            )
          })}
        </div>
      </nav>

      <section id="events" className="scroll-mt-40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <SectionHeading bar={p.accentBar} title={featuredEvent.title} lead={featuredEvent.date} />

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-5">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">{featuredEvent.description}</p>
              <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Upcoming
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {data.upcomingEvents.map((e) => (
                  <li key={e} className={`rounded-full px-4 py-2 text-sm font-semibold ${p.chip}`}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {featuredEvent.highlights.map((h) => (
                <div key={h.title} data-reveal className={`${card} border-t-4 ${p.cardTop}`}>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">{h.title}</h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="mt-8">
            <ImageGallery images={data.gallery} title={data.galleryTitle} />
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-40 bg-gray-50 py-20 md:py-28 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <SectionHeading bar={p.accentBar} title="Projects" lead={`${data.projectsCta.heading} ${data.projectsCta.body}`} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project) => (
              <article key={project.title} data-reveal className={`${card} flex flex-col border-t-4 ${p.cardTop}`}>
                <h3 className="text-2xl font-bold leading-tight tracking-tight">{project.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className={`rounded-full px-3 py-1 text-xs font-semibold ${p.chip}`}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="scroll-mt-40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <SectionHeading bar={p.accentBar} title="Activities" lead={`What a typical semester looks like. Every ${meetingDay} at ${config.meeting.time} in ${config.meeting.location}.`} />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {data.activities.map((a) => (
              <div key={a.title} data-reveal className="flex gap-5">
                <span className={`mt-1.5 h-10 w-1.5 flex-shrink-0 rounded-full ${p.accentBar}`} aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{a.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-400">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="officers" className="scroll-mt-40 bg-gray-50 py-20 md:py-28 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <SectionHeading
            bar={p.accentBar}
            title="Officers"
            lead={
              <>
                Elections are held each spring. Interested in running? Email{' '}
                <a href={`mailto:${config.email}`} className="font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-gray-100">
                  {config.email}
                </a>
                .
              </>
            }
          />

          {data.officers.length === 0 ? (
            <p className="mt-12 text-lg text-gray-500">Officer information coming soon.</p>
          ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.officers.map((officer) => (
                <div key={officer.name} data-reveal className={`${card} flex flex-col`}>
                  <div className="flex items-center gap-5">
                    <div className="[&>div]:mx-0 [&>div]:mb-0 [&>div]:h-16 [&>div]:w-16">
                      <OfficerAvatar name={officer.name} photo={officer.photo} theme={data.key} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{officer.name}</h3>
                      <p className={`text-sm font-semibold ${t.roleText}`}>{officer.role}</p>
                    </div>
                  </div>
                  {(officer.major || officer.year) && (
                    <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                      {[officer.major, officer.year].filter(Boolean).join(', ')}
                    </p>
                  )}
                  {officer.bio && <p className="mt-2 flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">{officer.bio}</p>}
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                    {officer.email && (
                      <a href={`mailto:${officer.email}`} className={`${t.roleText} underline-offset-4 hover:underline`}>
                        Email
                      </a>
                    )}
                    {officer.linkedin && (
                      <a href={officer.linkedin} target="_blank" rel="noopener noreferrer" className={`${t.roleText} underline-offset-4 hover:underline`}>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {data.advisor && (
            <div data-reveal className={`${card} mt-5`}>
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                <div className="[&>div]:mx-0 [&>div]:mb-0">
                  <OfficerAvatar name={data.advisor.name} photo={data.advisor.photo} theme={data.key} size="lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Faculty advisor</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">{data.advisor.name}</h3>
                  <p className={`text-sm font-semibold ${t.roleText}`}>{data.advisor.role}</p>
                  {data.advisor.department && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{data.advisor.department}</p>}
                  {data.advisor.bio && <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">{data.advisor.bio}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="sponsors" className="scroll-mt-40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <SectionHeading
            bar={p.accentBar}
            title="Sponsors"
            lead={
              <>
                Interested in sponsoring? Email{' '}
                <a href={`mailto:${config.email}`} className="font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-gray-100">
                  {config.email}
                </a>{' '}
                for the full prospectus.
              </>
            }
          />

          {data.sponsors.length === 0 ? (
            <p data-reveal className={`${card} mt-12 text-lg text-gray-600 dark:text-gray-400`}>
              No sponsors yet. Be the first to partner with us.
            </p>
          ) : (
            <div className="mt-12 flex flex-col gap-8">
              {tierOrder.map((tier) => {
                const tierSponsors = data.sponsors.filter((s) => s.tier === tier)
                if (tierSponsors.length === 0) return null
                return (
                  <div key={tier} data-reveal className={card}>
                    <span className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${tierBadge[tier]}`}>{tier}</span>
                    <div className="mt-5 flex flex-wrap gap-5">
                      {tierSponsors.map((s) => (
                        <SponsorLogo key={s.name + s.logo} name={s.name} logo={s.logo} tier={s.tier} website={s.website} bgColor={s.bgColor} size={s.size} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div data-reveal className={`${card} mt-5 overflow-x-auto p-0`}>
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className={`${p.tabBar} text-white`}>
                  <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                  {tierOrder.map((tier) => (
                    <th key={tier} className="px-4 py-4 text-center font-semibold">
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {benefits.map((benefit) => (
                  <tr key={benefit.label}>
                    <td className="px-6 py-4 font-medium">{benefit.label}</td>
                    {benefit.tiers.map((cell, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        {cell === true ? (
                          <span className={`inline-block h-3 w-3 rounded-full ${p.accentBar}`} aria-label="Included" />
                        ) : cell === false ? (
                          <span className="text-gray-300 dark:text-gray-600" aria-label="Not included">
                            &mdash;
                          </span>
                        ) : (
                          <span className="font-bold" aria-label={`${cell} included`}>
                            {cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`relative overflow-hidden ${p.surface} py-20 text-white md:py-28`}>
        <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-black leading-[1] tracking-[-0.03em] sm:text-5xl md:text-6xl">{data.closingBanner.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{data.closingBanner.body}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
            <a
              href={config.discord}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-xl px-7 py-3.5 text-base font-bold transition-colors ${p.cta} ${p.ctaText}`}
            >
              Join the Discord
            </a>
            <a
              href={t.campusGroupsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              MavLife
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold tracking-tight">{t.name}</span>
              <span className="text-sm text-gray-400">{t.slogan}</span>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
              <a href={config.discord} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Discord
              </a>
              <a href={t.campusGroupsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                MavLife
              </a>
              <a href={`mailto:${config.email}`} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Email
              </a>
            </nav>
          </div>
          <p className="border-t border-white/10 pt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {t.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ bar, title, lead }: { bar: string; title: string; lead: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
      <div className="flex items-stretch gap-5">
        <span className={`w-2 flex-shrink-0 rounded-full ${bar}`} aria-hidden="true" />
        <h2 className="text-4xl font-black leading-[1] tracking-[-0.03em] sm:text-5xl">{title}</h2>
      </div>
      <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400">{lead}</p>
    </div>
  )
}
