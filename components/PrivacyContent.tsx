"use client"
import Marquee from "./Marquee"
import Footer from "./Footer"
import { useLang } from "@/context/LanguageContext"
import { useT } from "@/lib/translations"

export default function PrivacyContent() {
  const { lang } = useLang()
  const tr = useT(lang)

  return (
    <>
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>{tr("legal")}</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            {tr("privacyTitle")}
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("privacyS1Title")}
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>{tr("privacyS1P1")}</p>
              <p>{tr("privacyS1P2")}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("privacyS2Title")}
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              <p>{tr("privacyS2P1")}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("privacyS3Title")}
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              <p>{tr("privacyS3P1")}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              {tr("privacyS4Title")}
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              <p>{tr("privacyS4P1")} <a href="mailto:ultravioletofficial@gmail.com" style={{ color: "var(--gold)" }}>ultravioletofficial@gmail.com</a>.</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
