const items = [
  'Capture The Flag',
  'ICPC',
  'Cyber Fair',
  'Hackathons',
  'Workshops',
  'Guest Speakers',
  'Hardware Hacking',
  'Weekly Meetings',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-gray-200 bg-white py-6 dark:border-white/10 dark:bg-gray-950">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-950" />
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap" aria-hidden="true">
        {row.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-10 text-2xl font-medium tracking-tight text-gray-400 sm:text-3xl dark:text-gray-500">
            {label}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
        ))}
      </div>
      <p className="sr-only">{items.join(', ')}</p>
    </div>
  )
}
