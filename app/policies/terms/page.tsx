import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"

export const metadata = { title: "Terms of Use | UltraViolet" }

export default function TermsOfUse() {
  return (
    <>
      <Nav />
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>Legal</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Terms of Use
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Acceptance of Terms
            </h2>
            <p className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              By accessing and using this website you accept and agree to be bound by these terms. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Products & Pricing
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>All prices are displayed in the applicable currency and are subject to change without notice. We reserve the right to limit quantities or refuse orders at our discretion.</p>
              <p>Product images are for reference only. Slight variations in color or appearance may occur due to photography and screen settings.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Returns & Exchanges
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>All sales are final unless the item arrives damaged or defective. If you receive a damaged item, contact us within 7 days of delivery with photos and your order number.</p>
              <p>We do not accept returns or exchanges for sizing issues, so please review sizing information carefully before purchasing.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Intellectual Property
            </h2>
            <p className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              All content on this site including logos, images, text, and design is the property of UltraViolet and may not be reproduced, distributed, or used without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Contact
            </h2>
            <p className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              Questions about these terms? Reach us at <a href="mailto:ultravioletofficial@gmail.com" style={{ color: "var(--gold)" }}>ultravioletofficial@gmail.com</a>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
