import ClubHero from '@/components/ClubHero'
import TabContainer, { type Tab } from '@/components/TabContainer'
import ImageGallery from '@/components/ImageGallery'
import OfficersTab from '@/components/OfficersTab'
import SponsorsTab from '@/components/SponsorsTab'
import Footer from '@/components/Footer'
import { clubThemes } from '@/lib/clubs'
import {
  config,
  intro,
  icpc,
  upcomingEvents,
  projects,
  activities,
  icpcGallery,
  officers,
  advisor,
  sponsors,
} from '@/lib/compsci'

export default function ComputerScienceClubPage() {
  const theme = clubThemes.compsci

  const tabs: Tab[] = [
    {
      label: 'Events',
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-xl border-l-4 border-compsci-purple shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {icpc.emoji ? `${icpc.emoji} ` : ''}{icpc.title}
            </h3>
            <p className="text-compsci-purple font-medium text-sm mb-4">{icpc.date}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{icpc.description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {icpc.highlights.map((h) => (
                <div key={h.title} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <strong className="block text-gray-900 text-sm mb-1">{h.title}</strong>
                  <p className="text-gray-500 text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <ImageGallery images={icpcGallery} title="ICPC 2025 Team" />

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <ul className="space-y-2">
              {upcomingEvents.map((e) => (
                <li key={e} className="flex items-start text-gray-600">
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
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-compsci-purple/30 transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {p.emoji ? `${p.emoji} ` : ''}{p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-compsci-purple/10 text-compsci-purple text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-compsci-purple/10 border border-compsci-purple/30 rounded-xl p-5 text-center">
            <p className="text-gray-700 text-sm">
              💡 <strong>Got an innovative idea?</strong> We welcome new project proposals! Share
              your vision at our weekly meetings and find teammates to collaborate with.
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
            {activities.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-compsci-purple/30 transition-all duration-200"
              >
                {a.icon && <div className="text-3xl mb-3">{a.icon}</div>}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-compsci-purple-dark text-white rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Where Innovation Meets Code</h3>
            <p className="text-purple-100 text-sm">
              Whether you&apos;re a beginner learning your first programming language or an
              experienced developer working on complex systems, the Computer Science Club has something for you.
              Join us every {config.meeting.day.replace(/s$/, '')} at {config.meeting.time} in{' '}
              {config.meeting.location}!
            </p>
          </div>
        </div>
      ),
    },
    {
      label: 'Officers',
      content: (
        <OfficersTab
          theme="compsci"
          officers={officers}
          advisor={advisor}
          contactEmail={config.email}
        />
      ),
    },
    {
      label: 'Sponsors',
      content: (
        <SponsorsTab
          theme="compsci"
          sponsors={sponsors}
          contactEmail={config.email}
        />
      ),
    },
  ]

  return (
    <div>
      <ClubHero theme="compsci" />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid lg:grid-cols-[1fr_300px] gap-10"> */}
            <div>
              <div className="mb-10">
                <div className="flex items-center mb-3">
                  <div className={`h-0.5 w-8 ${theme.accentBar} mr-3`} />
                  <h2 className="text-3xl font-bold text-gray-900">About Our Club</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{intro}</p>
              </div>

              <TabContainer
                tabs={tabs}
                activeClass={theme.tabActiveClass}
                inactiveClass={theme.tabInactiveClass}
              />
            </div>

            {/* <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">📍 Meeting Information</h3>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>When:</strong> Every {config.meeting.day.replace(/s$/, '')} at{' '}
                  {config.meeting.time}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Where:</strong> {config.meeting.location}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">📧 Contact</h3>
                <p className="text-sm mb-2">
                  <a
                    href={`mailto:${config.email}`}
                    className="text-compsci-purple hover:underline break-all"
                  >
                    {config.email}
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href={config.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-compsci-purple hover:underline font-medium"
                  >
                    Join our Discord →
                  </a>
                </p>
              </div>

            </aside> */}
          {/* </div> */}
        </div>
      </section>

      <Footer theme="compsci" />
    </div>
  )
}
