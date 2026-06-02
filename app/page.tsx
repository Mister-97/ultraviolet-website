import Nav from "@/components/Nav"
import HomeContent from "@/components/HomeContent"
import { getProducts } from "@/lib/shopify"

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Nav />
      <HomeContent products={products} />
    </>
  )
}
