'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { withBasePath } from '@/lib/basePath'
import { clubThemes, type ClubKey } from '@/lib/clubs'
import { navLinks } from '@/lib/nav'
import { tierOrder, type ClubData, type Tier } from '@/lib/types'
import StaticImage from '@/components/StaticImage'
import OfficerAvatar from '@/components/OfficerAvatar'
import SponsorLogo from '@/components/SponsorLogo'

type Palette = {
  wash: string
  glow: string
  accentText: string
  accentBg: string
  accentBgHover: string
  onAccent: string
  ring: string
  tint: string
}

const palettes: Record<ClubKey, Palette> = {
  cybersecurity: {
    wash: 'from-cybersecurity-red/70 via-gray-950/70 to-gray-950',
    glow: 'bg-cybersecurity-red/30',
    accentText: 'text-cybersecurity-gold',
    accentBg: 'bg-cybersecurity-gold',
    accentBgHover: 'hover:bg-yellow-300',
    onAccent: 'text-gray-950',
    ring: 'focus-visible:ring-cybersecurity-gold',
    tint: 'bg-cybersecurity-red',
  },
  compsci: {
    wash: 'from-compsci-purple/80 via-gray-950/70 to-gray-950',
    glow: 'bg-compsci-purple/40',
    accentText: 'text-purple-300',
    accentBg: 'bg-white',
    accentBgHover: 'hover:bg-purple-200',
    onAccent: 'text-compsci-purple-dark',
    ring: 'focus-visible:ring-purple-300',
    tint: 'bg-compsci-purple',
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

const sectionTitle = 'max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl'
const sectionLead = 'max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400'
const pillButton =
  'inline-flex h-14 items-center rounded-full px-8 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950'
const ghostButton =
  'inline-flex h-14 items-center rounded-full border border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80'

export default function MotionClubPage({ data }: { data: ClubData }) {
  const scope = useRef<HTMLDivElement>(null)
  const t = clubThemes[data.key]
  const p = palettes[data.key]
  const { featuredEvent, config } = data
  const heroImage = data.gallery[0]
  const eventImage = data.gallery[1] ?? data.gallery[0]
  const bandImages = data.gallery.slice(2, 5)
  const meetingDay = config.meeting.day.replace(/s$/, '')

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean }

          gsap
            .timeline({ defaults: { ease: 'power3.out' } })
            .from('[data-hero-bg]', { scale: 1.12, duration: 2.4, ease: 'power2.out' }, 0)
            .from('[data-hero-word]', { yPercent: 110, opacity: 0, duration: 1, stagger: 0.08 }, 0.2)
            .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.8)

          gsap.fromTo(
            '[data-scrub-word]',
            { opacity: 0.1 },
            {
              opacity: 1,
              stagger: 0.4,
              ease: 'none',
              scrollTrigger: { trigger: '[data-scrub]', start: 'top 70%', end: 'bottom 45%', scrub: true },
            },
          )

          gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
            gsap.from(group.querySelectorAll('[data-reveal]'), {
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.1,
              scrollTrigger: { trigger: group, start: 'top 78%' },
            })
          })

          gsap.utils.toArray<HTMLElement>('[data-scale-img]').forEach((el) => {
            gsap.fromTo(
              el,
              { scale: 0.8, opacity: 0.4 },
              {
                scale: 1,
                opacity: 1,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top 95%', end: 'center 55%', scrub: true },
              },
            )
            gsap.to(el, {
              opacity: 0.2,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'center 30%', end: 'bottom top', scrub: true },
            })
          })

          if (desktop) {
            gsap.utils.toArray<HTMLElement>('[data-pin]').forEach((el) => {
              const container = el.closest('[data-pin-container]') as HTMLElement | null
              if (!container) return
              ScrollTrigger.create({
                trigger: container,
                start: 'top 112px',
                end: 'bottom bottom',
                pin: el,
                pinSpacing: false,
              })
            })
          }
        },
      )
    },
    { scope },
  )

  return (
    <div ref={scope} className="text-gray-900 dark:text-gray-100">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gray-950 text-white">
        {heroImage && (
          <div
            data-hero-bg
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-50"
            style={{ backgroundImage: `url(${withBasePath(heroImage.src)})` }}
            role="img"
            aria-label={heroImage.alt}
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-b ${p.wash}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,7,18,0)_0%,rgba(3,7,18,0.7)_60%,rgba(3,7,18,1)_100%)]" />
        <div className="grain absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-40 text-center sm:px-8">
          <div data-hero-fade className="mb-8 h-20 w-20 overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40 sm:h-24 sm:w-24">
            <StaticImage src={t.logo} alt={`${t.name} logo`} className="h-full w-full object-cover" />
          </div>
          <h1
            className="mx-auto w-full max-w-6xl font-semibold leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            <span className="block overflow-hidden pb-[0.08em]">
              {t.name.split(' ').map((w) => (
                <span key={w} className="mr-[0.22em] inline-block last:mr-0">
                  <span data-hero-word className="inline-block">{w}</span>
                </span>
              ))}
            </span>
          </h1>
          <p data-hero-fade className={`mt-6 text-xl font-medium sm:text-2xl ${p.accentText}`}>
            {t.slogan}
          </p>
          <div data-hero-fade className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={config.discord}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pillButton} ${p.accentBg} ${p.accentBgHover} ${p.onAccent} ${p.ring}`}
            >
              Join the Discord
            </a>
            <a href={t.campusGroupsUrl} target="_blank" rel="noopener noreferrer" className={ghostButton}>
              CMU club page
            </a>
            <a
              href={`mailto:${config.email}`}
              className="text-base font-medium text-white/80 transition-colors hover:text-white"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      <section data-scrub className="bg-gray-50 py-32 md:py-48 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <p className="text-3xl font-medium leading-[1.2] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            {data.intro.split(' ').map((word, i) => (
              <span key={i} data-scrub-word className="mr-[0.25em] inline-block">
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="bg-white py-32 md:py-48 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className={sectionTitle}>{featuredEvent.title}</h2>
            <p className={sectionLead}>{featuredEvent.date}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-flow-dense md:grid-cols-6 md:auto-rows-[240px]">
            <div
              data-reveal
              className="group relative overflow-hidden rounded-3xl bg-gray-900 text-white md:col-span-4 md:row-span-2"
            >
              {eventImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${withBasePath(eventImage.src)})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              <div className="relative flex h-full min-h-[360px] flex-col justify-end p-8 md:p-10">
                <p className="max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">{featuredEvent.description}</p>
              </div>
            </div>

            {featuredEvent.highlights.map((h, i) => (
              <div
                key={h.title}
                data-reveal
                className={`relative flex flex-col justify-end overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-white/10 dark:bg-gray-900 ${
                  i < 2 ? 'md:col-span-2' : 'md:col-span-3'
                }`}
              >
                <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${p.glow} blur-3xl`} />
                <h3 className="relative text-2xl font-semibold leading-snug tracking-tight">{h.title}</h3>
                <p className="relative mt-4 text-base text-gray-600 dark:text-gray-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {bandImages.length > 0 && (
        <section className="bg-gray-50 py-32 md:py-48 dark:bg-gray-900">
          <div data-pin-container className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div data-pin className="flex flex-col gap-6">
                <h2 className={sectionTitle}>{data.galleryTitle}</h2>
                <p className={sectionLead}>Photos from the room where it happens.</p>
              </div>
            </div>
            <div className="flex flex-col gap-24 lg:col-span-8">
              {bandImages.map((img, i) => (
                <figure key={img.src} data-scale-img className={`overflow-hidden rounded-3xl ${i % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}>
                  <StaticImage
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover contrast-125 saturate-[0.85]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-32 md:py-48 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className={sectionTitle}>What we build.</h2>
            <p className={sectionLead}>{data.projectsCta.body}</p>
          </div>

          <div className="mt-16 flex flex-col gap-6">
            {data.projects.map((project, i) => (
              <article
                key={project.title}
                className="sticky overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl shadow-black/5 md:p-12 dark:border-white/10 dark:bg-gray-900 dark:shadow-black/40"
                style={{ top: `${7 + i * 1.25}rem` }}
              >
                <div className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full ${p.glow} blur-3xl`} />
                <div className="relative grid gap-8 md:grid-cols-12">
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight md:col-span-5 md:text-4xl">{project.title}</h3>
                  <div className="md:col-span-7">
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 dark:border-white/15 dark:text-gray-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden border-y border-gray-200 bg-white py-6 dark:border-white/10 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-950" />
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap" aria-hidden="true">
          {[...data.upcomingEvents, ...data.upcomingEvents].map((label, i) => (
            <span key={`${label}-${i}`} className="flex items-center gap-10 text-2xl font-medium tracking-tight text-gray-400 sm:text-3xl dark:text-gray-500">
              {label}
              <span className={`h-1.5 w-1.5 rounded-full ${p.tint}`} />
            </span>
          ))}
        </div>
        <p className="sr-only">Upcoming: {data.upcomingEvents.join(', ')}</p>
      </div>

      <section className="bg-gray-50 py-32 md:py-48 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <h2 className={sectionTitle}>What a semester looks like.</h2>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {data.activities.map((a) => (
              <div key={a.title} data-reveal className="border-t border-gray-300 pt-6 dark:border-white/15">
                <h3 className="text-2xl font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32 md:py-48 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className={sectionTitle}>The people running it.</h2>
            <p className={sectionLead}>
              Officer elections are held each spring. Interested in running? Email{' '}
              <a href={`mailto:${config.email}`} className="font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-gray-100">
                {config.email}
              </a>
              .
            </p>
          </div>

          {data.officers.length === 0 ? (
            <p className="mt-16 text-lg text-gray-500">Officer information coming soon.</p>
          ) : (
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.officers.map((officer) => (
                <div
                  key={officer.name}
                  data-reveal
                  className="relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-white/10 dark:bg-gray-900"
                >
                  <div className={`pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full ${p.glow} blur-3xl`} />
                  <div className="relative flex items-center gap-5">
                    <div className="[&>div]:mx-0 [&>div]:mb-0 [&>div]:h-16 [&>div]:w-16">
                      <OfficerAvatar name={officer.name} photo={officer.photo} theme={data.key} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{officer.name}</h3>
                      <p className={`text-sm font-medium ${t.roleText} dark:opacity-90`}>{officer.role}</p>
                    </div>
                  </div>
                  {(officer.major || officer.year) && (
                    <p className="relative mt-6 text-sm text-gray-500 dark:text-gray-400">
                      {[officer.major, officer.year].filter(Boolean).join(', ')}
                    </p>
                  )}
                  {officer.bio && <p className="relative mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">{officer.bio}</p>}
                  <div className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                    {officer.email && (
                      <a href={`mailto:${officer.email}`} className="break-all text-gray-700 underline-offset-4 hover:underline dark:text-gray-300">
                        Email
                      </a>
                    )}
                    {officer.linkedin && (
                      <a
                        href={officer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 underline-offset-4 hover:underline dark:text-gray-300"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {data.advisor && (
            <div data-reveal className="mt-4 rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-white/10 dark:bg-gray-900">
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                <div className="[&>div]:mx-0 [&>div]:mb-0">
                  <OfficerAvatar name={data.advisor.name} photo={data.advisor.photo} theme={data.key} size="lg" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Faculty advisor</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{data.advisor.name}</h3>
                  <p className={`text-sm font-medium ${t.roleText}`}>{data.advisor.role}</p>
                  {data.advisor.department && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{data.advisor.department}</p>}
                  {data.advisor.bio && <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">{data.advisor.bio}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-32 md:py-48 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8" data-reveal-group>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className={sectionTitle}>Partners who back the work.</h2>
            <p className={sectionLead}>
              Interested in sponsoring? Email{' '}
              <a href={`mailto:${config.email}`} className="font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-gray-100">
                {config.email}
              </a>{' '}
              for the full prospectus.
            </p>
          </div>

          {data.sponsors.length === 0 ? (
            <p data-reveal className="mt-16 text-2xl font-medium text-gray-500 dark:text-gray-400">
              No sponsors yet. Be the first to partner with us.
            </p>
          ) : (
            <div className="mt-16 flex flex-col gap-10">
              {tierOrder.map((tier) => {
                const tierSponsors = data.sponsors.filter((s) => s.tier === tier)
                if (tierSponsors.length === 0) return null
                return (
                  <div key={tier} data-reveal className="flex flex-col gap-5">
                    <span className={`w-fit rounded-full px-3 py-1 text-sm font-bold ${tierBadge[tier]}`}>{tier}</span>
                    <div className="flex flex-wrap gap-5">
                      {tierSponsors.map((s) => (
                        <SponsorLogo
                          key={s.name + s.logo}
                          name={s.name}
                          logo={s.logo}
                          tier={s.tier}
                          website={s.website}
                          bgColor={s.bgColor}
                          size={s.size}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div data-reveal className="mt-16 overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-gray-950 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                  {tierOrder.map((tier) => (
                    <th key={tier} className="px-4 py-4 text-center font-semibold">
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-white/10 dark:bg-gray-950">
                {benefits.map((benefit) => (
                  <tr key={benefit.label}>
                    <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">{benefit.label}</td>
                    {benefit.tiers.map((cell, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        {cell === true ? (
                          <span className={`inline-block h-2.5 w-2.5 rounded-full ${p.tint}`} aria-label="Included" />
                        ) : cell === false ? (
                          <span className="text-gray-300 dark:text-gray-600" aria-label="Not included">
                            &mdash;
                          </span>
                        ) : (
                          <span className="font-semibold" aria-label={`${cell} included`}>
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

      <section className="relative overflow-hidden bg-gray-950 py-32 text-white md:py-48">
        <div className={`pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full ${p.glow} blur-[120px]`} />
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center sm:px-8">
          <h2 className="w-full font-semibold leading-[0.95] tracking-[-0.04em]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            {data.closingBanner.title}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">{data.closingBanner.body}</p>
          <p className="mt-10 text-2xl font-medium text-gray-200 sm:text-3xl">
            Every {meetingDay}, {config.meeting.time}
          </p>
          <p className="mt-2 text-lg text-gray-400">{config.meeting.location}</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={config.discord}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pillButton} ${p.accentBg} ${p.accentBgHover} ${p.onAccent} ${p.ring}`}
            >
              Join the Discord
            </a>
            <a href={t.campusGroupsUrl} target="_blank" rel="noopener noreferrer" className={ghostButton}>
              CMU club page
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-gray-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              <span className="text-sm text-gray-500">{t.slogan}</span>
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
                CampusGroups
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
