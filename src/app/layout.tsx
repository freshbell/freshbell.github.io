import './globals.css'
import Link from 'next/link'
import Menu from '@/components/menu'

export const metadata = {
title: 'Create Next App',
description: 'Generated by create next app',
}

// page는 옆의 layout.js와 상위의 layout.js를 모두 참조함
export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Menu></Menu>
        {children}
      </body>
    </html>
  )
}
