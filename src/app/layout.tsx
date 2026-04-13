import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Rajam Property | Chennai's #1 Property Management Service",
  description: "Award-winning property management in Chennai. Trusted by 300+ NRIs. No signup fee, verified tenants, 12+ services in one.",
  icons: {
    icon: [
      { url: '/fav_32.png', sizes: '32x32', type: 'image/png' },
      { url: '/fav_256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/fav_256.png', sizes: '256x256', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
