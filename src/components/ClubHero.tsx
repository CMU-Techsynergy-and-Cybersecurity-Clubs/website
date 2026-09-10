import { clubThemes, type ClubKey } from '@/lib/clubs'
import type { GalleryImage } from '@/lib/types'
import StaticImage from '@/components/StaticImage'

export default function ClubHero({
  theme,
  image,
  discord,
  email,
}: {
  theme: ClubKey
  image?: GalleryImage
  discord: string
  email: string
}) {
  const t = clubThemes[theme]

  return (
    <section className={`${t.heroBg} py-14 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-11 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 flex flex-col items-start gap-6">
            <StaticImage
              src={t.logo}
              alt={`${t.name} logo`}
              className="w-24 h-24 md:w-28 md:h-28 drop-shadow-2xl object-contain"
            />
            <div className="flex flex-col gap-3">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-balance ${t.titleClass}`}
              >
                {t.name}
              </h1>
              <p className={`text-lg md:text-xl ${t.taglineClass}`}>{t.slogan}</p>
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <a
                href={discord}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center h-12 px-6 rounded-lg font-bold text-[15px] transition-colors active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${t.ctaButton}`}
              >
                Join the Discord
              </a>
              <a
                href={t.campusGroupsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-6 rounded-lg border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                CMU club page
              </a>
              <a
                href={`mailto:${email}`}
                className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
          {image && (
            <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <StaticImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
