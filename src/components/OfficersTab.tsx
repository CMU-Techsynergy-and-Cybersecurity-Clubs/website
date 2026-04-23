import OfficerAvatar from '@/components/OfficerAvatar'
import { clubThemes, type ClubKey } from '@/lib/clubs'
import type { Officer, Advisor } from '@/lib/cybersecurity'

export default function OfficersTab({
  theme,
  officers,
  advisor,
  contactEmail,
}: {
  theme: ClubKey
  officers: Officer[]
  advisor: Advisor | null
  contactEmail: string
}) {
  const t = clubThemes[theme]

  return (
    <div className="space-y-8">
      {officers.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
          <p className="text-gray-500 italic">Officer information coming soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {officers.map((officer) => (
            <div
              key={officer.name}
              className={`bg-white rounded-xl p-6 text-center border border-gray-200 ${t.hoverBorder} hover:shadow-md transition-all duration-200`}
            >
              <OfficerAvatar name={officer.name} photo={officer.photo} theme={theme} />
              <h3 className="font-bold text-gray-900 text-base mb-0.5">{officer.name}</h3>
              <p className={`${t.roleText} font-semibold text-sm mb-2`}>{officer.role}</p>
              {officer.major && <p className="text-gray-500 text-xs mb-1">{officer.major}</p>}
              {officer.year && <p className="text-gray-400 text-xs mb-4">{officer.year}</p>}
              {officer.bio && (
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{officer.bio}</p>
              )}
              {officer.email && (
                <a
                  href={`mailto:${officer.email}`}
                  className={`${t.roleText} hover:opacity-80 text-xs font-medium transition-opacity break-all`}
                >
                  {officer.email}
                </a>
              )}
              {officer.linkedin && (
                <a
                  href={officer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {advisor && (
        <div className="bg-white rounded-xl border-l-4 border-gray-400 shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍🏫 Faculty Advisor</h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="flex-shrink-0">
              <OfficerAvatar name={advisor.name} photo={advisor.photo} theme={theme} size="lg" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-0.5">{advisor.name}</h4>
              <p className={`${t.roleText} font-semibold text-sm mb-1`}>{advisor.role}</p>
              {advisor.department && (
                <p className="text-gray-500 text-sm mb-3">{advisor.department}</p>
              )}
              {advisor.bio && (
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{advisor.bio}</p>
              )}
              {advisor.email && (
                <a
                  href={`mailto:${advisor.email}`}
                  className={`${t.roleText} hover:opacity-80 text-sm font-medium transition-opacity`}
                >
                  {advisor.email}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={`${t.noticeClass} border rounded-xl p-5 text-center`}>
        <p className="text-gray-700 text-sm">
          🗳️ <strong>Interested in running for office?</strong> Officer elections are held each
          spring semester. Reach out at{' '}
          <a href={`mailto:${contactEmail}`} className={`${t.roleText} font-semibold hover:underline`}>
            {contactEmail}
          </a>{' '}
          to learn more.
        </p>
      </div>
    </div>
  )
}
