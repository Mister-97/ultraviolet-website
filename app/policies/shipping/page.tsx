import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"

export const metadata = { title: "Shipping Policy | UltraViolet" }

export default function ShippingPolicy() {
  return (
    <>
      <Nav />
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>Legal</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Shipping Policy
          </h1>
        </div>
      </section>
      <Marquee />
      <main style={{ backgroundColor: "var(--cream)", padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--black)", marginBottom: "24px", letterSpacing: "0.02em" }}>
            International Orders
          </h2>

          <div className="font-body" style={{ color: "var(--black)", lineHeight: "1.8", fontSize: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>
              Please allow 1–2 business days for your order to be processed and packed before it is shipped. After shipping, a tracking number will be sent to the email address associated with your order. Delivery typically takes 4–6 business days from the shipping date, but arrival times may vary depending on your location.
            </p>
            <p>
              We are not responsible for lost, stolen, or damaged packages. The buyer assumes full responsibility upon purchase.
            </p>
            <p>
              If you have issues with your package, please contact your local postal carrier to locate it or file a lost package report. We are not liable for incorrectly entered addresses.
            </p>
            <p>
              International orders may be subject to duties and taxes, which are beyond our control. Additionally, please be aware that international shipments may experience delays due to customs processing in your country.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
