import { notFound } from "next/navigation"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ProductPageContent from "@/components/ProductPageContent"
import { getProduct, getCheckoutUrl } from "@/lib/shopify"

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getProduct(handle)
  if (!product) notFound()

  const checkoutUrl = getCheckoutUrl(product.variants[0].id)

  const description = product.body_html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  return (
    <>
      <Nav light />
      <main style={{ backgroundColor: "var(--cream)", overflowX: "clip" }}>
        <ProductPageContent
          product={product}
          handle={handle}
          checkoutUrl={checkoutUrl}
          description={description}
        />
      </main>
      <Footer />
    </>
  )
}
