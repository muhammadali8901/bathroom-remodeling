import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Best Bathroom Remodel Company Near Me in Chandler, Arizona`,
    template: `%s | ${siteConfig.name}`
  },
  description: 'Looking for the best bathroom remodel company near me? Expert bathroom remodeling services in Chandler, Arizona with financing options available. Free estimates for showers, tubs, vanities, tile, and full remodels.',
  keywords: ['best bathroom remodel company near me', 'bathroom remodelers near me', 'bathroom remodel financing near me', 'Bathroom Remodeling Chandler Arizona', 'shower remodeling Chandler AZ', 'bathroom vanity installation Chandler', 'bathroom tile installation Chandler'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Best Bathroom Remodelers Near Me in Chandler, Arizona`,
    description: 'Expert bathroom remodeling services in Chandler, Arizona. Best bathroom remodel company near me with financing options available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Best Bathroom Remodelers Near Me in Chandler, Arizona`,
    description: 'Expert bathroom remodeling services in Chandler, Arizona. Bathroom remodel financing near me available.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#6BB3D9',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Preload critical fonts only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
    </html>
  )
}
