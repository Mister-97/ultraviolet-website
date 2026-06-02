import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"
import { getProducts, formatPrice } from "@/lib/shopify"

export default async function Home() {
  const products = await getProducts()
  const cap = products.find((p) => p.handle === "signature-adjustable-cap")
  const skullcap = products.find((p) => p.handle === "uv-signature-skullcap")

  return (
    <>
      <Nav />

      {/* HERO: full bleed video with oversized type */}
      <section className="relative h-screen min-h-[600px] flex flex-row items-end overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/uvvideo1.mp4"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.7) 100%)" }} />

        {/* giant background wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span
            className="font-display select-none"
            style={{
              fontSize: "clamp(100px, 18vw, 270px)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(201,168,76,0.18)",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            ULTRAVIOLET
          </span>
        </div>

        {/* left: headline */}
        <div className="hero-headline-col relative z-10 px-6 md:px-14 pb-14 md:pb-20" style={{ flex: 1 }}>
          <p className="font-body text-xs tracking-[0.5em] uppercase mb-4 fade-up" style={{ color: "var(--gold)" }}>
            SS26 Collection
          </p>
          <h1
            className="font-display leading-none fade-up-delay"
            style={{
              fontSize: "clamp(72px, 14vw, 200px)",
              letterSpacing: "0.01em",
              color: "var(--cream)",
              lineHeight: 0.9,
            }}
          >
            Wear<br />
            The<br />
            <span style={{ color: "var(--gold)" }}>Story.</span>
          </h1>
        </div>

        {/* right: CTA buttons */}
        <div className="relative z-10 hidden md:flex flex-col gap-4 fade-up-delay-2" style={{ justifyContent: "flex-end", paddingBottom: "36px", paddingRight: "32px" }}>
          <Link
            href="/shop"
            className="font-body tracking-[0.2em] uppercase transition-all hover:opacity-80 text-center"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)", padding: "20px 48px", fontSize: "16px" }}
          >
            Shop Now
          </Link>
          <Link
            href="/story"
            className="font-body tracking-[0.2em] uppercase transition-all hover:opacity-80 text-center"
            style={{ border: "1px solid rgba(245,240,232,0.5)", color: "var(--cream)", padding: "20px 48px", fontSize: "16px" }}
          >
            Our Story
          </Link>
        </div>

        {/* mobile CTA */}
        <div className="md:hidden z-10 fade-up-delay-2" style={{ position: "absolute", bottom: "21px", right: "20px" }}>
          <Link href="/shop" className="font-body text-xs tracking-[0.3em] uppercase transition-all hover:opacity-80 inline-block"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)", padding: "11px 28px" }}>Shop Now</Link>
        </div>

      </section>

      <Marquee />

      {/* 2026 COLLECTION: dark section with heading left + models right */}
      <section className="collection-section relative" style={{ backgroundColor: "var(--cream)" }}>

        {/* left: heading */}
        <div className="collection-left relative z-10">
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(64px, 7vw, 120px)", color: "var(--black)", letterSpacing: "0.01em" }}
          >
            2026<br />Collection
          </h2>
          <Link
            href="/shop"
            className="font-body text-xs tracking-[0.3em] uppercase transition-all hover:opacity-80 text-center"
            style={{ border: "1px solid var(--black)", color: "var(--black)", padding: "16px 16px", display: "block" }}
          >
            View All
          </Link>
        </div>

        {/* right: models — desktop: 4 individuals, mobile: single combined image */}
        <div className="collection-right">
          <div className="collection-models-desktop">
            {["/model-b.png", "/model-d.png", "/model-a.png", "/model-c.png"].map((src, i) => (
              <div
                key={src}
                className="model-img"
                style={{ flexShrink: 0, marginBottom: i === 2 ? "14px" : "0", marginLeft: i === 3 ? "20px" : "0", mixBlendMode: "multiply" }}
              >
                <img
                  src={src}
                  alt={`UV 2026 Look ${i + 1}`}
                  style={{ height: i === 2 ? "50vh" : i === 0 ? "60vh" : "65vh", width: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>
          <img
            src="/uvmodels.png"
            alt="UltraViolet 2026 Collection"
            className="collection-models-mobile"
          />
        </div>

      </section>

      <Marquee dark />

      {/* STORY: full bleed video with side-anchored copy */}
      <section id="story" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "var(--black)" }}>
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/uvviolet2.mp4"
        />


        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-32" style={{ paddingLeft: "clamp(24px, 6vw, 75px)" }}>
          <div className="max-w-2xl">
<h2
              className="font-display leading-none mb-8"
              style={{ fontSize: "clamp(60px, 10vw, 130px)", color: "var(--cream)", letterSpacing: "0.01em" }}
            >
              Not a<br />
              logo.<br />
              <span style={{ color: "var(--gold)" }}>A language.</span>
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-4 max-w-md" style={{ color: "rgba(245,240,232,0.65)" }}>
              UltraViolet was built for those who move with intention. Every piece carries weight, not just in craft, but in what it means to wear it.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-md" style={{ color: "rgba(245,240,232,0.65)" }}>
              This is streetwear with a story. Designed to stand out without trying too hard.
            </p>
            <Link
              href="/shop"
              className="font-body tracking-[0.35em] uppercase border inline-block transition-all hover:opacity-80"
              style={{ borderColor: "var(--gold)", color: "var(--gold)", padding: "12px 32px", fontSize: "12px", marginTop: "16px" }}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* bottom right chapter label */}
        <div className="absolute bottom-8 right-10 hidden md:flex items-center gap-4">
          <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
            SS26
          </span>
          <div className="w-8 h-px" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
          <span className="font-display text-6xl" style={{ color: "rgba(201,168,76,0.08)", lineHeight: 1 }}>UV</span>
        </div>
      </section>

      {/* EDITORIAL STRIP: three models side by side with UV 2026 overlay */}
      <section className="editorial-strip relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="relative overflow-hidden">
            <Image src="/editorial_hammock.jpg" alt="UltraViolet SS26" fill className="object-cover object-center" unoptimized />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0) 100%)" }} />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/editorial_beach.jpg" alt="UltraViolet SS26" fill className="object-cover object-center" unoptimized />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/editorial_closeup.jpg" alt="UltraViolet SS26" fill className="object-cover object-center" unoptimized />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0) 100%)" }} />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0" style={{ left: "33.33%", width: "1px", backgroundColor: "rgba(201,168,76,0.25)" }} />
          <div className="absolute top-0 bottom-0" style={{ left: "66.66%", width: "1px", backgroundColor: "rgba(201,168,76,0.25)" }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="font-display text-center select-none"
            style={{ fontSize: "clamp(60px, 15vw, 200px)", color: "transparent", WebkitTextStroke: "1.5px rgba(245,240,232,0.35)", letterSpacing: "0.05em" }}
          >
            UV 2026
          </span>
        </div>
      </section>

      <Footer />
    </>
  )
}
