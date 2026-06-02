import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"

export const metadata = { title: "Privacy Policy | UltraViolet" }

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>Legal</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Privacy Policy
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Information We Collect
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>When you place an order we collect your name, email address, shipping address, phone number, and payment information. Payment details are processed securely through our payment provider and are never stored on our servers.</p>
              <p>We may also collect browsing data such as your IP address, browser type, and pages visited to help us improve the site experience.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              How We Use Your Information
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>Your information is used solely to process and fulfill your orders, communicate order updates, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Cookies
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              <p>We use cookies to maintain your cart session and analyze site traffic. You can disable cookies in your browser settings, but this may affect certain site functionality.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--black)", marginBottom: "16px", letterSpacing: "0.02em" }}>
              Contact
            </h2>
            <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px" }}>
              <p>For any privacy-related questions, contact us at <a href="mailto:ultravioletofficial@gmail.com" style={{ color: "var(--gold)" }}>ultravioletofficial@gmail.com</a>.</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
