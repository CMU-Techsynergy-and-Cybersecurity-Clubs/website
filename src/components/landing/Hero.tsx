'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { withBasePath } from '@/lib/basePath'
import { sharedClubConfig } from '@/lib/sharedConfig'

export default function Hero() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-hero-bg]', { scale: 1.12, duration: 2.4, ease: 'power2.out' }, 0)
          .from('[data-hero-word]', { yPercent: 110, opacity: 0, duration: 1, stagger: 0.07 }, 0.2)
          .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.9)
      })
    },
    { scope },
  )

  const line1 = ['Learn', 'by', 'doing.']
  const line2 = ['Then', 'compete.']

  return (
    <section ref={scope} className="relative flex min-h-[100svh] items-center overflow-hidden bg-gray-950 text-white">
      <div
        data-hero-bg
        className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-60"
        style={{ backgroundImage: `url(${withBasePath('/cyber-fair/IMG_1917.jpg')})` }}
        role="img"
        aria-label="Students working through security challenges at Cyber Fair 2025"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,7,18,0.25)_0%,rgba(3,7,18,0.85)_60%,rgba(3,7,18,1)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/70" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40 text-center sm:px-8">
        <h1
          className="mx-auto w-full max-w-6xl font-semibold leading-[0.98] tracking-[-0.035em]"
          style={{ fontSize: 'clamp(3rem, 6.5vw, 5.75rem)' }}
        >
          <span className="block overflow-hidden pb-[0.08em]">
            {line1.map((w) => (
              <span key={w} className="mr-[0.22em] inline-block last:mr-0">
                <span data-hero-word className="inline-block">{w}</span>
              </span>
            ))}
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            {line2.map((w) => (
              <span key={w} className="mr-[0.22em] inline-block last:mr-0">
                <span data-hero-word className="inline-block">{w}</span>
              </span>
            ))}
          </span>
        </h1>

        <p data-hero-fade className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
          Cybersecurity Club and Computer Science Club at Colorado Mesa University. One weekly meeting,
          two disciplines, and a room full of people who build things.
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={sharedClubConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center rounded-full bg-cyan-400 px-8 text-base font-semibold text-gray-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Join the Discord
          </a>
          <a
            href="#clubs"
            className="inline-flex h-14 items-center rounded-full border border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Meet the clubs
          </a>
        </div>
      </div>

      <div data-hero-fade className="absolute inset-x-0 bottom-8 flex justify-center text-xs uppercase tracking-[0.3em] text-gray-500">
        Scroll
      </div>
    </section>
  )
}
