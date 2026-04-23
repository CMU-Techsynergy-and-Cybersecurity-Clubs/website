import { config as cyberConfig } from '@/lib/cybersecurity'
import { config as compsciConfig } from '@/lib/compsci'
import { clubThemes, type ClubKey } from '@/lib/clubs'

const configs = {
  cybersecurity: cyberConfig,
  compsci: compsciConfig,
}

export default function Footer({ theme }: { theme: ClubKey }) {
  const config = configs[theme]
  const t = clubThemes[theme]

  return (
    <footer className={`${t.headerBg} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-200">
              Meeting Information
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              Every {config.meeting.day.replace(/s$/, '')} at {config.meeting.time}
            </p>
            <p className="text-gray-300 text-sm">{config.meeting.location}</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-200">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              <a
                href={`mailto:${config.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {config.email}
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              <a
                href={config.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Join our Discord
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-200">
              {t.name}
            </h3>
            <p className="text-gray-300 text-sm italic">{t.slogan}</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
