import type { Metadata } from "next"
import { Bebas_Neue, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import { LanguageProvider } from "@/context/LanguageContext"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
})

const BASE = "https://ultravioletofficial.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Ultraviolet | Hard Streetwear SS26",
    template: "%s | Ultraviolet",
  },
  description: "UltraViolet is a Vietnamese streetwear brand built for those who move with intention. Shop the SS26 collection — premium caps, cinematic drops, and a visual language entirely our own.",
  keywords: ["ultraviolet streetwear", "UV streetwear Vietnam", "SS26 collection", "streetwear caps", "Vietnamese streetwear brand", "UV signature cap", "hard streetwear"],
  authors: [{ name: "UltraViolet", url: BASE }],
  creator: "UltraViolet",
  publisher: "UltraViolet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Ultraviolet",
    title: "Ultraviolet | Hard Streetwear SS26",
    description: "UltraViolet is a Vietnamese streetwear brand built for those who move with intention. Shop the SS26 collection.",
    images: [{ url: "/og-image.jpg", width: 1280, height: 693, alt: "Ultraviolet SS26 Collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultraviolet | Hard Streetwear SS26",
    description: "UltraViolet is a Vietnamese streetwear brand built for those who move with intention.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UltraViolet",
  url: BASE,
  logo: `${BASE}/uv-logo.png`,
  description: "Vietnamese streetwear brand built for those who move with intention.",
  email: "ultravioletofficial@gmail.com",
  sameAs: ["https://www.instagram.com/ultraviolet_vn/"],
  foundingDate: "2026",
  foundingLocation: { "@type": "Place", name: "Vietnam" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable} h-full`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider><CartProvider>{children}</CartProvider></LanguageProvider>
      </body>
    </html>
  )
}
