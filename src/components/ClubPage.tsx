import ClubHero from '@/components/ClubHero'
import TabContainer, { type Tab } from '@/components/TabContainer'
import ImageGallery from '@/components/ImageGallery'
import OfficersTab from '@/components/OfficersTab'
import SponsorsTab from '@/components/SponsorsTab'
import Footer from '@/components/Footer'
import { clubThemes } from '@/lib/clubs'
import type { ClubData } from '@/lib/types'

export default function ClubPage({ data }: { data: ClubData }) {
  const theme = clubThemes[data.key]
  const { featuredEvent } = data

  const tabs: Tab[] = [
    {
      label: 'Events',
      content: (
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {featuredEvent.title}
            </h3>
            <p className={`${theme.eventDateClass} font-medium text-sm mb-4`}>{featuredEvent.date}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{featuredEvent.description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredEvent.highlights.map((h) => (
                <div key={h.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <strong className="block text-gray-900 dark:text-gray-100 text-sm mb-1">{h.title}</strong>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <ImageGallery images={data.gallery} title={data.galleryTitle} />

          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Upcoming events</h3>
            <ul className="flex flex-wrap gap-2">
              {data.upcomingEvents.map((e) => (
                <li key={e} className={`${theme.tagBadgeClass} text-sm font-medium px-3 py-1.5 rounded-full`}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: 'Projects',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((p) => (
              <div
                key={p.title}
                className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 hover:shadow-md ${theme.hoverBorder} transition-all duration-200`}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${theme.tagBadgeClass} text-xs font-semibold px-2.5 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`${theme.noticeClass} border rounded-xl p-5`}>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              <strong>{data.projectsCta.heading}</strong> {data.projectsCta.body}
            </p>
          </div>
        </div>
      ),
    },
    {
      label: 'Activities',
      content: (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {data.activities.map((a) => (
              <div key={a.title} className="pt-5 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{a.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>

          <div className={`${data.closingBanner.bgClass} text-white rounded-xl p-6 text-center`}>
            <h3 className={`text-xl font-bold ${data.closingBanner.titleClass} mb-2`}>{data.closingBanner.title}</h3>
            <p className={`${data.closingBanner.textClass} text-sm`}>{data.closingBanner.body}</p>
          </div>
        </div>
      ),
    },
    {
      label: 'Officers',
      content: (
        <OfficersTab
          theme={data.key}
          officers={data.officers}
          advisor={data.advisor}
          contactEmail={data.config.email}
        />
      ),
    },
    {
      label: 'Sponsors',
      content: (
        <SponsorsTab
          theme={data.key}
          sponsors={data.sponsors}
          contactEmail={data.config.email}
        />
      ),
    },
  ]

  return (
    <div>
      <ClubHero
        theme={data.key}
        image={data.gallery[0]}
        discord={data.config.discord}
        email={data.config.email}
      />

      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                About the club
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-[65ch]">{data.intro}</p>
            </div>

            <TabContainer
              tabs={tabs}
              activeClass={theme.tabActiveClass}
              inactiveClass={theme.tabInactiveClass}
            />
          </div>
        </div>
      </section>

      <Footer theme={data.key} />
    </div>
  )
}
