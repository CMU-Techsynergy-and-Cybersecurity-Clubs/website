'use client'

import { useLayout } from '@/components/LayoutProvider'
import ClubPage from '@/components/ClubPage'
import MotionClubPage from '@/components/club/MotionClubPage'
import type { ClubData } from '@/lib/types'

export default function ClubPageSwitch({ data }: { data: ClubData }) {
  const { layout } = useLayout()
  return layout === 'classic' ? <ClubPage data={data} /> : <MotionClubPage data={data} />
}
