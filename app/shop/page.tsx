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
      <section style={{ backgroundColor: "var(--black)", paddingTop: "clamp(90px, 12vh, 140px)", paddingBottom: "10px", paddingLeft: "0px", paddingRight: "20px" }}>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(76px, 14vw, 236px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Shop
          </h1>
      </section>

      <Marquee />

      <main style={{ paddingTop: "60px", paddingBottom: "60px", paddingLeft: "40px", paddingRight: "40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>

          {products.map((product) => (
            <Link href={`/products/${product.handle}`} key={product.id} style={{ textDecoration: "none" }} className="group block">
              <div style={{ overflow: "hidden" }}>
                <img
                  src={product.images[0]?.src}
                  alt={product.title}
                  style={{ width: "100%", height: "auto", display: "block", marginBottom: "-25%", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                  className="group-hover:scale-105"
                />
              </div>
              {/* centered title + price */}
              <p className="font-display" style={{ fontSize: "clamp(20px, 2.2vw, 30px)", letterSpacing: "0.02em", color: "var(--black)", textAlign: "center", marginBottom: "4px" }}>
                {product.title}
              </p>
              <p className="font-body text-sm" style={{ color: "var(--gray)", textAlign: "center" }}>
                {formatPrice(product.variants[0].price)}
              </p>
            </Link>
          ))}

          {/* belt — coming soon */}
          <div style={{ opacity: 0.45 }}>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/belt.png"
                alt="UV Signature Belt"
                style={{ width: "100%", height: "auto", display: "block", marginBottom: "-36%" }}
              />
            </div>
            <p className="font-display" style={{ fontSize: "clamp(20px, 2.2vw, 30px)", letterSpacing: "0.02em", color: "var(--black)", textAlign: "center", marginBottom: "4px" }}>
              UV Signature Belt
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gray)", textAlign: "center" }}>
              Coming Soon
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
