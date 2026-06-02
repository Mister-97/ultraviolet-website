import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"

export const metadata = { title: "Refund Policy | UltraViolet" }

export default function RefundPolicy() {
  return (
    <>
      <Nav />
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>Legal</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Refund Policy
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--black)", marginBottom: "24px", letterSpacing: "0.02em" }}>
            Return
          </h2>
          <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>All sales are final. We do NOT accept returns or issue refunds.</p>
            <p>For any further inquiries, please contact us at:</p>
            <p>
              <a
                href="mailto:ultra.violet.uvlt@gmail.com"
                style={{ color: "var(--black)", textDecoration: "underline", textUnderlineOffset: "4px" }}
              >
                ultra.violet.uvlt@gmail.com
              </a>
            </p>
            <p>
              Direct message on{" "}
              <a
                href="https://www.instagram.com/ultraviolet_vn/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--black)", textDecoration: "underline", textUnderlineOffset: "4px" }}
              >
                Instagram
              </a>
              {" "}or Facebook.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
