import type { Metadata } from "next"
import { Bebas_Neue, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/CartContext"

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
  openGraph: {
    title: "UltraViolet",
    description: "Hard streetwear. Built different.",
    images: [{ url: "/og-image.jpg", width: 800, height: 1000 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
