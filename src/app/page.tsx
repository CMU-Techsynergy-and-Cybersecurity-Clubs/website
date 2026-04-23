import Link from 'next/link'
import config from '@/lib/config'
import { logo as cyberLogo } from '@/lib/cybersecurity'
import { logo as synergyLogo } from '@/lib/techsynergy'

export default function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-cyber-dark via-gray-900 to-synergy-purple-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyber-gold/10 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to CMU Tech Clubs
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Empowering students through technology, innovation, and collaboration
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-black text-cyber-gold">2</div>
              <div className="text-gray-300 text-sm font-medium mt-1">Active Clubs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-cyber-gold">100+</div>
              <div className="text-gray-300 text-sm font-medium mt-1">Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-cyber-gold">Weekly</div>
              <div className="text-gray-300 text-sm font-medium mt-1">Meetings</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clubs ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Explore Our Clubs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/cybersecurity"
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-cyber-dark to-cyber-red p-8 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${base}${cyberLogo}`}
                  alt="Cybersecurity Club"
                  className="h-32 w-32 object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cybersecurity Club</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Learn the art of protecting digital assets through hands-on challenges, CTF
                  competitions, and real-world security scenarios.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-cyber-red/10 text-cyber-red text-xs font-semibold px-3 py-1 rounded-full">
                    🛡️ Security Training
                  </span>
                  <span className="bg-cyber-red/10 text-cyber-red text-xs font-semibold px-3 py-1 rounded-full">
                    🏆 CTF Competitions
                  </span>
                  <span className="bg-cyber-red/10 text-cyber-red text-xs font-semibold px-3 py-1 rounded-full">
                    🎯 Cyber Fair
                  </span>
                </div>
                <span className="inline-flex items-center text-cyber-red font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>

            <Link
              href="/techsynergy"
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-synergy-purple-dark to-synergy-purple p-8 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${base}${synergyLogo}`}
                  alt="TechSynergy Club"
                  className="h-32 w-32 object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">TechSynergy Club</h3>
                <p className="text-synergy-purple font-medium italic mb-3">
                  Where Innovation Meets Code
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Collaborate on innovative projects, compete in programming competitions, and
                  build the future of technology together.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-synergy-purple/10 text-synergy-purple text-xs font-semibold px-3 py-1 rounded-full">
                    💻 Code Competitions
                  </span>
                  <span className="bg-synergy-purple/10 text-synergy-purple text-xs font-semibold px-3 py-1 rounded-full">
                    🚀 Innovation Projects
                  </span>
                  <span className="bg-synergy-purple/10 text-synergy-purple text-xs font-semibold px-3 py-1 rounded-full">
                    🌟 ICPC Teams
                  </span>
                </div>
                <span className="inline-flex items-center text-synergy-purple font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-cyber-dark to-synergy-purple-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join?</h2>
          <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
            Join us every {config.meeting.day.replace(/s$/, '')} at {config.meeting.time} in{' '}
            {config.meeting.location} and become part of a thriving community of tech enthusiasts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={config.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cyber-gold hover:bg-yellow-400 text-cyber-dark px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg"
            >
              Join Discord
            </a>
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-cyber-dark px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
