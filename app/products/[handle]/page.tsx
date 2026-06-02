import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ProductPageContent from "@/components/ProductPageContent"
import { getProduct, getCheckoutUrl } from "@/lib/shopify"

const BASE = "https://ultravioletofficial.com"

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const product = await getProduct(handle)
  if (!product) return {}

  const description = product.body_html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160) || `${product.title} — UltraViolet SS26 collection. Premium streetwear built with intention.`

  const image = product.images[0]?.src

  return {
    title: product.title,
    description,
    openGraph: {
      title: `${product.title} | Ultraviolet`,
      description,
      url: `${BASE}/products/${handle}`,
      images: image ? [{ url: image, alt: product.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Ultraviolet`,
      description,
      images: image ? [image] : [],
    },
    alternates: { canonical: `${BASE}/products/${handle}` },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getProduct(handle)
  if (!product) notFound()

  const checkoutUrl = getCheckoutUrl(product.variants[0].id)

  const description = product.body_html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: { "@type": "Brand", name: "UltraViolet" },
    description: description || `${product.title} — UltraViolet SS26 collection.`,
    image: product.images.map((img) => img.src),
    url: `${BASE}/products/${handle}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: product.variants[0].price,
      availability: product.variants[0].inventory_quantity > 0
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: checkoutUrl,
      seller: { "@type": "Organization", name: "UltraViolet" },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Nav light />
      <main style={{ backgroundColor: "var(--cream)" }}>
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
