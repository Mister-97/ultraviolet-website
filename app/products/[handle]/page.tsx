import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"
import { getProduct, formatPrice, getCheckoutUrl } from "@/lib/shopify"

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getProduct(handle)
  if (!product) notFound()

  const checkoutUrl = getCheckoutUrl(product.variants[0].id)
  const isPreOrder = product.tags.includes("pre-order")

  const description = product.body_html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  return (
    <>
      <Nav />

      <main style={{ backgroundColor: "var(--cream)" }}>
        {/* back link */}
        <div className="pt-28 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
          <Link
            href="/shop"
            className="font-body text-xs tracking-[0.3em] uppercase inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{ color: "var(--gray)" }}
          >
            Back to Shop
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* image column */}
            <div className="flex flex-col gap-3 sticky top-24">
              <div className="relative overflow-hidden" style={{ backgroundColor: "#ECEAE3", aspectRatio: "1/1" }}>
                <Image
                  src={product.images[0].src}
                  alt={product.title}
                  fill
                  className="object-contain p-12"
                  priority
                  unoptimized
                />
                {isPreOrder && (
                  <span className="absolute top-5 left-5 font-body text-xs tracking-[0.25em] uppercase px-3 py-1.5" style={{ backgroundColor: "var(--gold)", color: "var(--black)" }}>
                    Pre-Order
                  </span>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.images.slice(1, 4).map((img) => (
                    <div key={img.id} className="relative overflow-hidden" style={{ backgroundColor: "#ECEAE3", aspectRatio: "1/1" }}>
                      <Image
                        src={img.src}
                        alt={product.title}
                        fill
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* details column */}
            <div className="pt-4 md:pt-10">
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                {product.vendor}
              </p>
              <h1
                className="font-display leading-none mb-6"
                style={{ fontSize: "clamp(48px, 7vw, 96px)", letterSpacing: "0.01em" }}
              >
                {product.title}
              </h1>

              <p className="font-body text-3xl font-light mb-8">{formatPrice(product.variants[0].price)}</p>

              <div className="mb-8 h-px" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />

              <p className="font-body text-base leading-relaxed mb-10" style={{ color: "var(--gray)" }}>
                {description}
              </p>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body block w-full py-5 text-center text-xs tracking-[0.4em] uppercase font-medium transition-all hover:opacity-80 mb-4"
                style={{ backgroundColor: "var(--black)", color: "var(--cream)" }}
              >
                {isPreOrder ? "Pre-Order Now" : "Add to Cart"}
              </a>

              {isPreOrder && (
                <p className="font-body text-xs text-center tracking-wide" style={{ color: "var(--gray)" }}>
                  Pre-order. Ships when ready. You will be notified.
                </p>
              )}

              <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <p className="font-body text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "var(--gold)" }}>Details</p>
                <div className="flex flex-col gap-3">
                  {["Adjustable snapback closure", "Gold script embroidery", "One size fits most", "Premium structured crown"].map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                      <p className="font-body text-sm" style={{ color: "var(--gray)" }}>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Marquee dark />
      <Footer />
    </>
  )
}
