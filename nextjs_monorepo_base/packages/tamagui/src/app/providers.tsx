'use client'

import { NextTamaguiProvider } from '../../NextTamaguiProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextTamaguiProvider>
      {children}
    </NextTamaguiProvider>
  )
}