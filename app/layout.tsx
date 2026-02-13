import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.premiumlandingpagedesigner.com'),
  title: 'Premium Landing Page Designer | Muhammad Arslan',
  description: 'I help coaches and consultants attract premium clients and close faster through high-converting landing pages. Turn your expertise into authority.',
  keywords: ['landing page designer', 'premium website design', 'coaching website', 'consultant website', 'high-converting landing pages'],
  authors: [{ name: 'Muhammad Arslan' }],
  creator: 'Muhammad Arslan',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  openGraph: {
    title: 'Premium Landing Page Designer | Muhammad Arslan',
    description: 'I help coaches and consultants attract premium clients and close faster through high-converting landing pages.',
    url: 'https://www.premiumlandingpagedesigner.com',
    siteName: 'Premium Landing Page Designer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Landing Page Designer | Muhammad Arslan',
    description: 'I help coaches and consultants attract premium clients and close faster through high-converting landing pages.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/banda1.webp"
          type="image/webp"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}