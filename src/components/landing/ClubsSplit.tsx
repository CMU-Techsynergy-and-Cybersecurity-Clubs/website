'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { withBasePath } from '@/lib/basePath'
import { clubThemes, type ClubKey } from '@/lib/clubs'
import StaticImage from '@/components/StaticImage'

type Slice = {
  key: ClubKey
  image: string
  blurb: string
  accent: string
}

const slices: Slice[] = [
  {
    key: 'cybersecurity',
    image: '/cyber-fair/IMG_1147.jpg',
    blurb: 'Weekly CTF challenges, vulnerability labs, and the Cyber Fair each spring.',
    accent: 'from-cybersecurity-dark to-cybersecurity-red',
  },
  {
    key: 'compsci',
    image: '/icpc/IMG_0642.jpg',
    blurb: 'ICPC teams, collaborative projects, and programming competitions all year.',
    accent: 'from-compsci-purple-dark to-compsci-purple',
  },
]

const gallery = [
  { src: '/cyber-fair/IMG_0500.jpg', alt: 'Cyber Fair team collaboration' },
  { src: '/icpc/IMG_0640.jpg', alt: 'Computer Science Club team at ICPC 2025' },
  { src: '/cyber-fair/IMG_1146.jpg', alt: 'Security demonstration at Cyber Fair' },
]

export default function ClubsSplit() {
  const scope = useRef<HTMLElement>(null)
  const [active, setActive] = useState<ClubKey>('cybersecurity')

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        { desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)', motion: '(prefers-reduced-motion: no-preference)' },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean }
          if (desktop) {
            ScrollTrigger.create({
              trigger: '[data-split]',
              start: 'top 112px',
              end: 'bottom bottom',
              pin: '[data-pin-title]',
              pinSpacing: false,
            })
          }
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
        },
      )
    },
    { scope },
  )

  return (
    <section id="clubs" ref={scope} className="bg-white py-32 text-gray-900 md:py-48 dark:bg-gray-950 dark:text-gray-100">
      <div data-split className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div data-pin-title className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              Two clubs. One room.
            </h2>
            <p className="max-w-sm text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Both clubs share the weekly meeting, so you can move between security and software
              without picking a side.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24 lg:col-span-8">
          <div className="flex h-[70vh] min-h-[520px] flex-col gap-3 md:flex-row">
            {slices.map((slice) => {
              const t = clubThemes[slice.key]
              const isActive = active === slice.key
              return (
                <Link
                  key={slice.key}
                  href={t.basePath}
                  onMouseEnter={() => setActive(slice.key)}
                  onFocus={() => setActive(slice.key)}
                  className={`group relative overflow-hidden rounded-3xl text-white transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 ${
                    isActive ? 'flex-[3]' : 'flex-[1]'
                  }`}
                  style={{ flexBasis: 0 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${withBasePath(slice.image)})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${slice.accent} opacity-80 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />

                  <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                    <StaticImage src={t.logo} alt="" className="h-14 w-14 object-contain drop-shadow-lg" />
                    <div>
                      <h3
                        className={`font-semibold leading-tight tracking-tight transition-all duration-500 ${
                          isActive ? 'text-3xl md:text-4xl' : 'text-2xl md:[writing-mode:vertical-rl] md:rotate-180 md:text-3xl'
                        }`}
                      >
                        {t.name}
                      </h3>
                      <div
                        className={`grid transition-all duration-500 ${
                          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-3 text-base italic text-white/80">{t.slogan}</p>
                          <p className="mt-3 max-w-sm text-base leading-relaxed text-white/90">{slice.blurb}</p>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                            Visit the club page
                            <svg
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="flex flex-col gap-24">
            {gallery.map((img, i) => (
              <figure
                key={img.src}
                data-scale-img
                className={`overflow-hidden rounded-3xl ${i % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}
              >
                <StaticImage
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[16/10] w-full object-cover contrast-125 saturate-[0.85]"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
