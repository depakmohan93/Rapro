import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Rajam Property | Chennai's #1 Property Management Service",
  description: "Award-winning property management in Chennai. Trusted by 300+ NRI's. No signup fee, verified tenants, 12+ services in one.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
