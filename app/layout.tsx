import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GetLocalBuddy - Your Local Friend in Every City',
  description: 'Connect with authentic locals who\'ll show you their city like a true friend would. No tours, no scripts - just genuine experiences.',
  keywords: ['local guide', 'travel buddy', 'authentic travel', 'local experience'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
