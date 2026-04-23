'use client'

import { useState } from 'react'

export type Tab = {
  label: string
  content: React.ReactNode
}

export default function TabContainer({
  tabs,
  activeClass,
  inactiveClass,
}: {
  tabs: Tab[]
  activeClass: string
  inactiveClass: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-8" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`px-5 py-3 -mb-px text-sm md:text-base font-semibold border-b-2 transition-colors duration-200 ${
              active === i ? activeClass : inactiveClass
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="animate-fade-in">
        {tabs[active].content}
      </div>
    </div>
  )
}
