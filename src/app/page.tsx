import Hero from '@/components/landing/Hero'
import Marquee from '@/components/landing/Marquee'
import Bento from '@/components/landing/Bento'
import ScrubText from '@/components/landing/ScrubText'
import ClubsSplit from '@/components/landing/ClubsSplit'
import FinalCta from '@/components/landing/FinalCta'

export default function Home() {
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
