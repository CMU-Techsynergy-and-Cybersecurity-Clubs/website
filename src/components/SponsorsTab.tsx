import SponsorLogo from '@/components/SponsorLogo'
import { clubThemes, type ClubKey } from '@/lib/clubs'
import { tierOrder, type Sponsor, type Tier } from '@/lib/cybersecurity'

const tierBadge: Record<Tier, string> = {
  Platinum: 'bg-gray-200 text-gray-700',
  Gold: 'bg-yellow-300 text-yellow-900',
  Silver: 'bg-gray-400 text-white',
  Bronze: 'bg-orange-300 text-orange-900',
}

type Cell = boolean | number

const benefits: { label: string; tiers: [Cell, Cell, Cell, Cell] }[] = [
  //                                   Platinum  Gold   Silver  Bronze
  { label: 'Logo on website',          tiers: [true,  true,  true,  true]  },
  { label: 'Social media features',    tiers: [true,  true,  1,     false] },
  { label: 'Logo on event banners',    tiers: [true,  true,  false, false] },
  { label: 'Newsletter spotlight',     tiers: [true,  true,  false, false] },
  { label: 'Company presentation',     tiers: [true,  false, false, false] },
]

export default function SponsorsTab({
  theme,
  sponsors,
  contactEmail,
}: {
  theme: ClubKey
  sponsors: Sponsor[]
  contactEmail: string
}) {
  const t = clubThemes[theme]
  const byTier = (tier: Tier) => sponsors.filter((s) => s.tier === tier)

  return (
    <div className="space-y-8">
      {sponsors.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
          <p className="text-gray-500 italic">
            We don&apos;t have any sponsors yet — be the first to partner with us!
          </p>
        </div>
      ) : (
        tierOrder.map((tier) => {
          const tierSponsors = byTier(tier)
          if (tierSponsors.length === 0) return null
          return (
            <div
              key={tier}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${tierBadge[tier]}`}>
                  {tier}
                </span>
              </div>
              <div className="flex flex-wrap gap-5">
                {tierSponsors.map((sponsor) => (
                  <SponsorLogo
                    key={sponsor.name + sponsor.logo}
                    name={sponsor.name}
                    logo={sponsor.logo}
                    tier={sponsor.tier}
                    website={sponsor.website}
                    bgColor={sponsor.bgColor}
                    size={sponsor.size}
                  />
                ))}
              </div>
            </div>
          )
        })
      )}

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💼 Sponsorship Benefits</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className={`${t.headerBg} text-white`}>
                <th className="text-left px-4 py-3 font-semibold">Benefit</th>
                {tierOrder.map((tier) => (
                  <th key={tier} className="px-3 py-3 font-semibold text-center">
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {benefits.map((benefit, i) => (
                <tr key={benefit.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-700 font-medium">{benefit.label}</td>
                  {benefit.tiers.map((cell, j) => (
                    <td key={j} className="px-3 py-3 text-center">
                      {cell === true ? (
                        <Check />
                      ) : cell === false ? (
                        <X />
                      ) : (
                        <Partial text={String(cell)} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${t.noticeClass} border rounded-xl p-5 text-center`}>
        <p className="text-gray-700 text-sm">
          🤝 <strong>Interested in sponsoring?</strong> Reach out at{' '}
          <a
            href={`mailto:${contactEmail}`}
            className={`${t.roleText} font-semibold hover:underline`}
          >
            {contactEmail}
          </a>{' '}
          for our full sponsorship prospectus.
        </p>
      </div>
    </div>
  )
}

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
      <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  )
}

function Partial({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full text-yellow-700 text-xs font-bold">
      {text}
    </span>
  )
}

function X() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6">
      <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  )
}
