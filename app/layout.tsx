import type { Metadata } from "next"
import { Bebas_Neue, Space_Grotesk } from "next/font/google"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "UltraViolet",
  description: "Hard streetwear. Built different.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
