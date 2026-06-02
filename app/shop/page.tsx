import Nav from "@/components/Nav"
import ShopContent from "@/components/ShopContent"
import { getProducts } from "@/lib/shopify"

export const metadata = {
  title: "Shop",
  description: "Shop the UltraViolet SS26 collection. Premium streetwear caps and accessories built with intention. Limited runs, gold embroidery, and cinematic design.",
  openGraph: {
    title: "Shop SS26 | Ultraviolet",
    description: "Shop the UltraViolet SS26 collection — premium caps and accessories built with intention.",
    url: "https://ultravioletofficial.com/shop",
  },
  alternates: { canonical: "https://ultravioletofficial.com/shop" },
}

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <>
      <Nav />
      <ShopContent products={products} />
    </>
  )
}
