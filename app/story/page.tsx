import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"

export const metadata = { title: "Our Story | UltraViolet" }

export default function StoryPage() {
  return (
    <>
      <Nav />

      {/* header */}
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>UltraViolet</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(80px, 14vw, 200px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Our Story
          </h1>
        </div>
      </section>

      <Marquee />

      {/* single unified story section */}
      <section style={{ backgroundColor: "var(--black)", padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>

          {/* image */}
          <div style={{ maxWidth: "360px", margin: "0 auto 56px" }}>
            <Image
              src="/story-hero.jpg"
              alt="UltraViolet"
              width={800}
              height={1000}
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized
            />
          </div>

          {/* ruled label */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(214,196,148,0.35)" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", whiteSpace: "nowrap" }}>The Beginning</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(214,196,148,0.35)" }} />
          </div>

          <h2 className="font-display leading-none mb-8" style={{ fontSize: "clamp(52px, 9vw, 130px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Built<br />Different.
          </h2>

          <div className="font-body" style={{ color: "rgba(245,240,232,0.65)", fontSize: "clamp(15px, 1.6vw, 18px)", lineHeight: "1.9", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "60px" }}>
            <p>UltraViolet was built for those who move with intention. Not for the crowd. Not for the algorithm. For those who already know what they stand for before they put anything on.</p>
            <p>Every piece carries weight. Craft, meaning, and a story behind it. Streetwear that speaks before you do.</p>
            <p>We are not trying to look like anything. UltraViolet exists outside the box. Hard edges, clean execution, and a visual language that is entirely our own.</p>
            <p>From the caps to the films to the way we move, every decision is intentional. Nothing here is an accident.</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "0 0 48px" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(214,196,148,0.2)" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>UltraViolet</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(214,196,148,0.2)" }} />
          </div>

          <Link
            href="/shop"
            className="font-body tracking-[0.2em] uppercase transition-all hover:opacity-80 inline-block text-center"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)", padding: "20px 80px", fontSize: "13px" }}
          >
            Shop Now
          </Link>

        </div>
      </section>

      <Footer />
    </>
  )
}
