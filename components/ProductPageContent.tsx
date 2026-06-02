"use client"
import { useRef, useState } from "react"
import Link from "next/link"
import ProductGallery from "@/components/ProductGallery"
import { formatPrice, ShopifyProduct } from "@/lib/shopify"
import { useCart } from "@/context/CartContext"

const SKULLCAP_VIDEO_START = 8.71
const CAP_VIDEO_END = 7

type Props = {
  product: ShopifyProduct
  handle: string
  checkoutUrl: string
  description: string
}

export default function ProductPageContent({ product, handle, checkoutUrl, description }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product.variants[0].id as unknown as number, product.title, product.variants[0].price)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const thumbnails =
    handle === "signature-adjustable-cap"
      ? [product.images[0].src, "/cap-back.png", "/cap-ed-1.jpg", "/cap-ed-2.jpg", "/cap-ed-3.jpg", "/cap-ed-4.jpg", "/cap-ed-5.jpg", "/cap-ed-6.jpg", "/cap-ed-8.jpg"]
      : handle === "uv-signature-skullcap"
      ? ["/skullcap-front.png", "/cap-ed-9.jpg", "/cap-ed-10.jpg", "/cap-ed-11.jpg", "/cap-ed-12.jpg"]
      : product.images.slice(1, 4).map((img) => img.src)

  return (
    <>
      <div className="product-back">
        <Link
          href="/shop"
          className="font-body text-xs tracking-[0.3em] uppercase inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
          style={{ color: "var(--gray)" }}
        >
          Back to Shop
        </Link>
      </div>

      <div className="product-wrap">
        <div className="product-cols">

          <ProductGallery
            mainSrc={product.images[0].src}
            alt={product.title}
            thumbnails={thumbnails}
          />

          <div className="product-info">
            <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", marginBottom: "16px" }}>
              {product.vendor}
            </p>
            <h1
              className="product-title font-display leading-none"
              style={{ letterSpacing: "0.01em", marginBottom: "24px" }}
            >
              {product.title}
            </h1>

            <p className="font-body text-3xl font-light" style={{ marginBottom: "32px" }}>
              {formatPrice(product.variants[0].price)}
            </p>

            <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.1)", marginBottom: "32px" }} />

            <p className="font-body text-base leading-relaxed" style={{ color: "var(--gray)", marginBottom: "40px" }}>
              {description}
            </p>

            <button
              onClick={handleAddToCart}
              className="font-body text-xs tracking-[0.4em] uppercase font-medium transition-all hover:opacity-80"
              style={{ display: "block", width: "100%", padding: "20px", textAlign: "center", backgroundColor: added ? "var(--gold)" : "var(--black)", color: added ? "var(--black)" : "var(--cream)", marginBottom: "12px", border: "none", cursor: "pointer" }}
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.4em] uppercase font-medium transition-all hover:opacity-80"
              style={{ display: "block", width: "100%", padding: "20px", textAlign: "center", backgroundColor: "transparent", color: "var(--black)", marginBottom: "48px", border: "1px solid var(--black)", cursor: "pointer", boxSizing: "border-box" }}
            >
              Buy Now
            </a>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "32px" }}>
              <p className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "var(--gold)", marginBottom: "20px" }}>Details</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {(handle === "uv-signature-skullcap"
                  ? ["Gold script embroidery", "One size fits most", "Premium structured crown"]
                  : ["Adjustable snapback closure", "Gold script embroidery", "One size fits most", "Premium structured crown"]
                ).map((d) => (
                  <div key={d} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--gold)", flexShrink: 0 }} />
                    <p className="font-body text-sm" style={{ color: "var(--gray)" }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {(handle === "uv-signature-skullcap" || handle === "signature-adjustable-cap") && (
              <div style={{ marginTop: "40px", overflow: "hidden" }}>
                <video
                  ref={videoRef}
                  src="/uvviolet2.mp4"
                  autoPlay
                  muted
                  playsInline
                  style={{ width: "100%", display: "block" }}
                  onLoadedMetadata={() => {
                    if (!videoRef.current) return
                    if (handle === "uv-signature-skullcap") videoRef.current.currentTime = SKULLCAP_VIDEO_START
                  }}
                  onTimeUpdate={() => {
                    if (!videoRef.current) return
                    if (handle === "signature-adjustable-cap" && videoRef.current.currentTime >= CAP_VIDEO_END) {
                      videoRef.current.currentTime = 0
                    }
                  }}
                  onEnded={() => {
                    if (!videoRef.current) return
                    if (handle === "uv-signature-skullcap") {
                      videoRef.current.currentTime = SKULLCAP_VIDEO_START
                      videoRef.current.play()
                    }
                  }}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
