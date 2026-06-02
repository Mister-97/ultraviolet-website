"use client"
import Marquee from "./Marquee"
import Footer from "./Footer"
import { useLang } from "@/context/LanguageContext"
import { useT } from "@/lib/translations"

export default function TermsContent() {
  const { lang } = useLang()
  const tr = useT(lang)

  return (
    <>
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>{tr("legal")}</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            {tr("termsTitle")}
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("termsS1Title")}
            </h2>
            <p className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>{tr("termsS1P1")}</p>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("termsS2Title")}
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>{tr("termsS2P1")}</p>
              <p>{tr("termsS2P2")}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("termsS3Title")}
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>{tr("termsS3P1")}</p>
              <p>{tr("termsS3P2")}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("termsS4Title")}
            </h2>
            <p className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>{tr("termsS4P1")}</p>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("termsS5Title")}
            </h2>
            <p className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              {tr("termsS5P1")} <a href="mailto:ultravioletofficial@gmail.com" style={{ color: "var(--gold)" }}>ultravioletofficial@gmail.com</a>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
