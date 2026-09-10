'use client'

import { useLayout } from '@/components/LayoutProvider'

export default function LayoutToggle({ className }: { className?: string }) {
  const { layout, toggleLayout } = useLayout()
  const isClassic = layout === 'classic'

  return (
    <button
      onClick={toggleLayout}
      aria-label={isClassic ? 'Switch to motion layout' : 'Switch to classic layout'}
      title={isClassic ? 'Motion layout' : 'Classic layout'}
      className={className}
    >
      {isClassic ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 5h16v4H4zM4 11h7v8H4zM13 11h7v8h-7z" />
        </svg>
      )}
    </button>
  )
}
