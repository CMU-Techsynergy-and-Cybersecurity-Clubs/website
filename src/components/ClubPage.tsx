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
          <div className={`bg-white dark:bg-gray-900 rounded-xl border-l-4 ${theme.eventBorderClass} shadow-sm p-6`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {featuredEvent.emoji ? `${featuredEvent.emoji} ` : ''}{featuredEvent.title}
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Upcoming Events</h3>
            <ul className="space-y-2">
              {data.upcomingEvents.map((e) => (
                <li key={e} className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className={`${theme.accentBar} w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0`} />
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
                  {p.emoji ? `${p.emoji} ` : ''}{p.title}
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

          <div className={`${theme.noticeClass} border rounded-xl p-5 text-center`}>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              💡 <strong>{data.projectsCta.heading}</strong> {data.projectsCta.body}
            </p>
          </div>
        </div>
      ),
    },
    {
      label: 'Activities',
      content: (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.activities.map((a) => (
              <div
                key={a.title}
                className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 hover:shadow-md ${theme.hoverBorder} transition-all duration-200`}
              >
                {a.icon && <div className="text-3xl mb-3">{a.icon}</div>}
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
      <ClubHero theme={data.key} />

      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-10">
              <div className="flex items-center mb-3">
                <div className={`h-0.5 w-8 ${theme.accentBar} mr-3`} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About Our Club</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{data.intro}</p>
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
