'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const copy =
  'You do not need a background in security or a semester of programming to sit down with us. Most people show up curious, pick a challenge, and leave with something they built. The ones who stick around end up on a competition team.'

export default function ScrubText() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-scrub-word]',
          { opacity: 0.1 },
          {
            opacity: 1,
            stagger: 0.4,
            ease: 'none',
            scrollTrigger: { trigger: scope.current, start: 'top 70%', end: 'bottom 45%', scrub: true },
          },
        )
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="bg-gray-50 py-32 md:py-48 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <p className="text-3xl font-medium leading-[1.2] tracking-[-0.02em] text-gray-900 sm:text-4xl md:text-5xl lg:text-[3.5rem] dark:text-gray-100">
          {copy.split(' ').map((word, i) => (
            <span key={i} data-scrub-word className="inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
