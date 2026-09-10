'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { withBasePath } from '@/lib/basePath'
import { clubThemes } from '@/lib/clubs'
import { sharedClubConfig } from '@/lib/sharedConfig'

const meeting = sharedClubConfig.meeting

export default function Bento() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-bento-card]', {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '[data-bento-grid]', start: 'top 75%' },
        })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="bg-white py-32 text-gray-900 md:py-48 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Hands on keyboards every week.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Not lectures. Challenges, builds, and competitions you can actually enter.
          </p>
        </div>

        <div
          data-bento-grid
          className="mt-16 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-flow-dense md:grid-cols-6 md:auto-rows-[260px]"
        >
          <Link
            href={clubThemes.cybersecurity.basePath}
            data-bento-card
            className="group relative overflow-hidden rounded-3xl bg-gray-900 text-white md:col-span-4 md:row-span-2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${withBasePath('/cyber-fair/IMG_0501.jpg')})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
            <div className="relative flex h-full min-h-[360px] flex-col justify-end p-8 md:p-10">
              <p className="text-sm font-medium text-cyan-300">Cyber Fair, every spring</p>
              <h3 className="mt-2 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A full day of CTF, hardware hacking stations, and industry speakers.
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                See the Cybersecurity Club
                <Arrow />
              </span>
            </div>
          </Link>

          <div
            data-bento-card
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 md:col-span-2 dark:border-white/10 dark:bg-gray-900"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Every {meeting.day.replace(/s$/, '')}</p>
            <div>
              <p className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">{meeting.time}</p>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{meeting.location}</p>
            </div>
          </div>

          <Link
            href={clubThemes.compsci.basePath}
            data-bento-card
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-compsci-purple-dark p-8 text-white md:col-span-2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${withBasePath('/icpc/IMG_0641.jpg')})` }}
            />
            <div className="relative">
              <p className="text-sm font-medium text-purple-200">ICPC teams</p>
              <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight">
                Algorithms under a clock, against universities worldwide.
              </h3>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              See the Computer Science Club
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
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
  )
}
