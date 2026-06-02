"use client"
import Link from "next/link"
import Marquee from "./Marquee"
import Footer from "./Footer"
import PriceTag from "./PriceTag"
import { ShopifyProduct } from "@/lib/shopify"
import { useLang } from "@/context/LanguageContext"
import { useT } from "@/lib/translations"

export default function ShopContent({ products }: { products: ShopifyProduct[] }) {
  const { lang } = useLang()
  const tr = useT(lang)

  return (
    <>
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>{tr("shopLabel")}</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(80px, 14vw, 200px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            {tr("shopTitle")}
          </h1>
        </div>
      </section>

      <Marquee />

      <main className="shop-main">
        <div className="shop-grid">
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
              <p className="font-display shop-product-title" style={{ letterSpacing: "0.02em", color: "var(--black)", textAlign: "center", marginBottom: "4px" }}>
                {product.title}
              </p>
              <PriceTag priceVnd={product.variants[0].price} className="font-body text-sm" style={{ color: "var(--gray)", textAlign: "center", display: "block" }} />
            </Link>
          ))}

          {/* belt coming soon */}
          <div style={{ opacity: 0.45 }}>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/belt.png"
                alt="UV Signature Belt"
                style={{ width: "100%", height: "auto", display: "block", marginBottom: "-36%" }}
              />
            </div>
            <p className="font-display shop-product-title" style={{ letterSpacing: "0.02em", color: "var(--black)", textAlign: "center", marginBottom: "4px" }}>
              UV Signature Belt
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gray)", textAlign: "center" }}>
              {tr("comingSoon")}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
