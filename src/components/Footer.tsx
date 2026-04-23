import config from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-200">
              Meeting Information
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              📅 Every {config.meeting.day.replace(/s$/, '')} at {config.meeting.time}
            </p>
            <p className="text-gray-300 text-sm">📍 {config.meeting.location}</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-200">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              📧{' '}
              <a
                href={`mailto:${config.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {config.email}
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              💬{' '}
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
              Colorado Mesa University
            </h3>
            <p className="text-gray-300 text-sm">Computer Science Clubs</p>
            <p className="text-gray-400 text-sm">Building Tomorrow&apos;s Tech Leaders</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 CMU Tech Clubs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
