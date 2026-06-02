"use client"
import Marquee from "./Marquee"
import Footer from "./Footer"
import { useLang } from "@/context/LanguageContext"
import { useT } from "@/lib/translations"

export default function ShippingContent() {
  const { lang } = useLang()
  const tr = useT(lang)

  return (
    <>
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>{tr("legal")}</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            {tr("shippingTitle")}
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--black)", marginBottom: "24px", letterSpacing: "0.02em" }}>
            {tr("shippingSection")}
          </h2>
          <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>{tr("shippingP1")}</p>
            <p>{tr("shippingP2")}</p>
            <p>{tr("shippingP3")}</p>
            <p>{tr("shippingP4")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
