import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Archivo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _archivo = Archivo({ subsets: ["latin"], weight: ["400", "700", "900"] })
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quick Lift Junk Removal | Premium Hauling Services in MD, WV, PA",
  description:
    "Fast, affordable junk removal and hauling in Western Maryland, West Virginia, and Pennsylvania. Same-day service available. Licensed & insured.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quickliftjunkremoval.com",
    siteName: "Quick Lift Junk Removal",
    title: "Premium Junk Removal & Hauling Services",
    description: "Fast, affordable junk removal in MD, WV, PA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quick Lift Junk Removal",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
