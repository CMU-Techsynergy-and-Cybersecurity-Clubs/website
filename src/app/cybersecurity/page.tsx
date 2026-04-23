import ClubHero from '@/components/ClubHero'
import TabContainer, { type Tab } from '@/components/TabContainer'
import ImageGallery from '@/components/ImageGallery'
import config from '@/lib/config'
import { clubThemes } from '@/lib/clubs'
import {
  logo,
  intro,
  cyberFair,
  upcomingEvents,
  projects,
  activities,
  cyberFairGallery,
} from '@/lib/cybersecurity'

export default function CybersecurityPage() {
  const theme = clubThemes.cyber

  const tabs: Tab[] = [
    {
      label: 'Events',
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-xl border-l-4 border-cyber-red shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {cyberFair.emoji} {cyberFair.title}
            </h3>
            <p className="text-cyber-red font-medium text-sm mb-4">{cyberFair.date}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{cyberFair.description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cyberFair.highlights.map((h) => (
                <div key={h.title} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <strong className="block text-gray-900 text-sm mb-1">{h.title}</strong>
                  <p className="text-gray-500 text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <ImageGallery images={cyberFairGallery} title="Cyber Fair 2025 Gallery" />

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Upcoming Events</h3>
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
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-cyber-red/30 transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {p.emoji} {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cyber-red/10 text-cyber-red text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cyber-gold/10 border border-cyber-gold/30 rounded-xl p-5 text-center">
            <p className="text-gray-700 text-sm">
              💡 <strong>Have a project idea?</strong> We&apos;re always looking for new security
              projects! Bring your ideas to our weekly meetings.
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
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-cyber-red/30 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-cyber-dark text-white rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-cyber-gold mb-2">Join Us!</h3>
            <p className="text-gray-200 text-sm">
              All skill levels welcome - from complete beginners to experienced security
              enthusiasts. We meet every {config.meeting.day.replace(/s$/, '')} at {config.meeting.time} in{' '}
              {config.meeting.location}.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div>
      <ClubHero
        logo={logo}
        title="Cybersecurity Club"
        tagline="Protecting the Digital Frontier"
        theme="cyber"
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
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

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
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
                    className="text-cyber-red hover:underline break-all"
                  >
                    {config.email}
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href={config.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-red hover:underline font-medium"
                  >
                    Join our Discord →
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">👨‍🏫 Faculty Advisor</h3>
                <p className="text-gray-500 text-sm italic">Information coming soon</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
