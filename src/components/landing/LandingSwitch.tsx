'use client'

import { useLayout } from '@/components/LayoutProvider'
import ClassicLanding from '@/components/landing/ClassicLanding'
import Hero from '@/components/landing/Hero'
import Marquee from '@/components/landing/Marquee'
import Bento from '@/components/landing/Bento'
import ScrubText from '@/components/landing/ScrubText'
import ClubsSplit from '@/components/landing/ClubsSplit'
import FinalCta from '@/components/landing/FinalCta'

export default function LandingSwitch() {
  const { layout } = useLayout()

  if (layout === 'classic') return <ClassicLanding />

  return (
    <>
      <Hero />
      <Marquee />
      <Bento />
      <ScrubText />
      <ClubsSplit />
      <FinalCta />
    </>
  )
}
