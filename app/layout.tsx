import React from 'react'
import { Inter as FontSans } from '@next/font/google'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="de"
      className={cn(
        'bg-neutral-900 font-sans text-white antialiased',
        fontSans.variable
      )}
    >
      <head />
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
