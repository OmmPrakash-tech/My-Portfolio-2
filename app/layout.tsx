import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Omm Prakash Debata - 3D Portfolio',
  description: 'Full Stack Engineer | DevOps | Cloud - Building scalable web apps, REST APIs & CI/CD pipelines.',
  keywords: ['React', 'Next.js', 'Spring Boot', 'Docker', 'AWS', 'Full Stack'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Cabinet+Grotesk:wght@400;500;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
