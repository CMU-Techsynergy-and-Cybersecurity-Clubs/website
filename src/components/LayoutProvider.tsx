'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type LayoutStyle = 'motion' | 'classic'
type LayoutContextType = { layout: LayoutStyle; toggleLayout: () => void }

const STORAGE_KEY = 'layout'

const LayoutContext = createContext<LayoutContextType>({
  layout: 'motion',
  toggleLayout: () => {},
})

export function useLayout() {
  return useContext(LayoutContext)
}

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [layout, setLayout] = useState<LayoutStyle>('motion')

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'classic') {
      setLayout('classic')
      document.documentElement.classList.add('classic')
    }
  }, [])

  const toggleLayout = () => {
    setLayout((prev) => {
      const next: LayoutStyle = prev === 'motion' ? 'classic' : 'motion'
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.classList.toggle('classic', next === 'classic')
      return next
    })
  }

  return <LayoutContext.Provider value={{ layout, toggleLayout }}>{children}</LayoutContext.Provider>
}
