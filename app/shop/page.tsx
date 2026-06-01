import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"
import { getProducts, formatPrice } from "@/lib/shopify"

export const metadata = { title: "Shop | UltraViolet" }

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <>
      <Nav />

      {/* header */}
      <section className="pt-36 pb-10 px-6 md:px-10" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>SS26</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(80px, 18vw, 240px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Shop
          </h1>
        </div>
      </section>

      <Marquee />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <Link href={`/products/${product.handle}`} key={product.id} className="product-card group block">
              <div className="relative overflow-hidden mb-4" style={{ backgroundColor: "#ECEAE3", aspectRatio: "4/5" }}>
                <Image
                  src={product.images[0]?.src}
                  alt={product.title}
                  fill
                  className="object-contain p-8"
                  unoptimized
                />
                <div className="card-overlay absolute inset-0 flex flex-col justify-end p-6" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 55%)" }}>
                  <p className="font-display text-3xl tracking-wide mb-1" style={{ color: "var(--cream)" }}>{product.title}</p>
                  <p className="font-body text-sm" style={{ color: "var(--gold)" }}>{formatPrice(product.variants[0].price)}</p>
                </div>
                {product.tags.includes("pre-order") && (
                  <span className="absolute top-4 left-4 font-body text-xs tracking-[0.25em] uppercase px-3 py-1.5" style={{ backgroundColor: "var(--gold)", color: "var(--black)" }}>
                    Pre-Order
                  </span>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-display text-xl tracking-wide leading-none mb-1">{product.title}</p>
                  <p className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--gray)" }}>
                    {product.product_type || "Headwear"}
                  </p>
                </div>
                <p className="font-body text-sm font-medium">{formatPrice(product.variants[0].price)}</p>
              </div>
            </Link>
          ))}

        </div>
      </main>

      <Footer />
    </>
  )
}
