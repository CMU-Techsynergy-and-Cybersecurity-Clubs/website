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
  const slug = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const tabId = (i: number) => `tab-${slug(tabs[i].label)}`
  const panelId = 'tabpanel'

  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-800 mb-8" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            id={tabId(i)}
            role="tab"
            aria-selected={active === i}
            aria-controls={panelId}
            onClick={() => setActive(i)}
            className={`px-5 py-3 -mb-px text-sm md:text-base font-semibold border-b-2 transition-colors duration-200 ${
              active === i ? activeClass : inactiveClass
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id={panelId} role="tabpanel" aria-labelledby={tabId(active)} className="animate-fade-in">
        {tabs[active].content}
      </div>
    </div>
  )
}
