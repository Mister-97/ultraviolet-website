import Nav from "@/components/Nav"
import ShopContent from "@/components/ShopContent"
import { getProducts } from "@/lib/shopify"

export const metadata = { title: "Shop | UltraViolet" }

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <>
      <Nav />
      <ShopContent products={products} />
    </>
  )
}
