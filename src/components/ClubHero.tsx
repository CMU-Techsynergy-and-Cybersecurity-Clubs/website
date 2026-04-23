import { clubThemes, type ClubKey } from '@/lib/clubs'

export default function ClubHero({ theme }: { theme: ClubKey }) {
  const t = clubThemes[theme]
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <section className={`${t.heroBg} py-20 md:py-28`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${base}${t.logo}`}
          alt={t.name}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl object-contain"
        />
        <h1 className={`text-4xl md:text-6xl font-black mb-3 ${t.titleClass}`}>{t.name}</h1>
        <p className={`text-lg md:text-xl font-light ${t.taglineClass}`}>{t.slogan}</p>
      </div>
    </section>
  )
}
