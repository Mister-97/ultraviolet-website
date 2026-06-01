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
      <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
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
              fontSize: "clamp(120px, 22vw, 320px)",
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

        <div className="relative z-10 px-6 md:px-14 pb-14 md:pb-20">
          <p className="font-body text-xs tracking-[0.5em] uppercase mb-4 fade-up" style={{ color: "var(--gold)" }}>
            SS26 Collection
          </p>
          <h1
            className="font-display leading-none mb-6 fade-up-delay"
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

          <div className="flex flex-col sm:flex-row gap-4 items-start fade-up-delay-2">
            <Link
              href="/shop"
              className="font-body text-xs tracking-[0.3em] uppercase px-8 py-4 transition-all hover:opacity-80 inline-block"
              style={{ backgroundColor: "var(--gold)", color: "var(--black)" }}
            >
              Shop The Drop
            </Link>
            <Link
              href="/#story"
              className="font-body text-xs tracking-[0.3em] uppercase px-8 py-4 border transition-all hover:opacity-80 inline-block"
              style={{ borderColor: "rgba(245,240,232,0.4)", color: "var(--cream)" }}
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-2 fade-up-delay-3">
          <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.5)", writingMode: "vertical-rl" }}>Scroll</span>
          <div className="w-px h-12" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
        </div>
      </section>

      <Marquee />

      {/* PRODUCTS: asymmetric editorial grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--gold)" }}>The Drop</p>
            <h2 className="font-display text-6xl md:text-8xl leading-none" style={{ letterSpacing: "0.02em" }}>
              Current<br />Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-body text-xs tracking-[0.3em] uppercase hidden md:flex items-center gap-3 hover:gap-5 transition-all"
            style={{ color: "var(--black)" }}
          >
            View All
            <span style={{ color: "var(--gold)" }}>+</span>
          </Link>
        </div>

        {/* asymmetric grid: big left, stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">

          {/* big cap card */}
          {cap && (
            <Link href={`/products/${cap.handle}`} className="product-card group block md:col-span-3">
              <div className="relative overflow-hidden" style={{ backgroundColor: "#ECEAE3", aspectRatio: "3/4" }}>
                <Image
                  src={cap.images[0].src}
                  alt={cap.title}
                  fill
                  className="object-contain p-10"
                  priority
                  unoptimized
                />
                {/* hover overlay */}
                <div className="card-overlay absolute inset-0 flex flex-col justify-end p-8" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)" }}>
                  <p className="font-display text-4xl tracking-wide mb-1" style={{ color: "var(--cream)" }}>{cap.title}</p>
                  <p className="font-body text-sm" style={{ color: "var(--gold)" }}>{formatPrice(cap.variants[0].price)}</p>
                </div>
                {cap.tags.includes("pre-order") && (
                  <span className="absolute top-5 left-5 font-body text-xs tracking-[0.25em] uppercase px-3 py-1.5" style={{ backgroundColor: "var(--gold)", color: "var(--black)" }}>
                    Pre-Order
                  </span>
                )}
              </div>
              <div className="pt-4 flex justify-between items-start">
                <div>
                  <p className="font-display text-2xl tracking-wide leading-none mb-1">{cap.title}</p>
                  <p className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--gray)" }}>Snapback</p>
                </div>
                <p className="font-body text-sm font-medium">{formatPrice(cap.variants[0].price)}</p>
              </div>
            </Link>
          )}

          {/* right column: model shot + skullcap placeholder */}
          <div className="md:col-span-2 flex flex-col gap-4">

            {/* model editorial card */}
            <Link href="/shop" className="product-card group block flex-1">
              <div className="relative overflow-hidden" style={{ backgroundColor: "#D8D5CF", aspectRatio: "4/3" }}>
                <Image
                  src="/model_guy_full.jpg"
                  alt="UltraViolet SS26 Look"
                  fill
                  className="object-cover object-top"
                />
                <div className="card-overlay absolute inset-0" style={{ background: "rgba(8,8,8,0.25)" }} />
                <div className="absolute bottom-4 left-4">
                  <span className="font-body text-xs tracking-[0.25em] uppercase px-3 py-1" style={{ backgroundColor: "rgba(8,8,8,0.7)", color: "var(--cream)" }}>
                    Worn
                  </span>
                </div>
              </div>
            </Link>

            {/* skullcap */}
            {skullcap && (
              <Link href={`/products/${skullcap.handle}`} className="product-card group block flex-1">
                <div className="relative overflow-hidden" style={{ backgroundColor: "#ECEAE3", aspectRatio: "4/3" }}>
                  <Image
                    src={skullcap.images[0].src}
                    alt={skullcap.title}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="card-overlay absolute inset-0 flex flex-col justify-end p-5" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 55%)" }}>
                    <p className="font-display text-2xl tracking-wide mb-1" style={{ color: "var(--cream)" }}>{skullcap.title}</p>
                    <p className="font-body text-sm" style={{ color: "var(--gold)" }}>{formatPrice(skullcap.variants[0].price)}</p>
                  </div>
                  {skullcap.tags.includes("pre-order") && (
                    <span className="absolute top-4 left-4 font-body text-xs tracking-[0.25em] uppercase px-3 py-1" style={{ backgroundColor: "var(--gold)", color: "var(--black)" }}>
                      Pre-Order
                    </span>
                  )}
                </div>
                <div className="pt-3 flex justify-between items-start">
                  <div>
                    <p className="font-display text-xl tracking-wide leading-none mb-1">{skullcap.title}</p>
                    <p className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--gray)" }}>Skullcap</p>
                  </div>
                  <p className="font-body text-sm font-medium">{formatPrice(skullcap.variants[0].price)}</p>
                </div>
              </Link>
            )}
          </div>
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

        {/* left vertical label */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
          <div className="w-px h-16" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
          <span
            className="font-body text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(201,168,76,0.6)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            The Brand
          </span>
          <div className="w-px h-16" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-32">
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "var(--gold)" }}>
              Chapter 01
            </p>
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
              className="font-body text-xs tracking-[0.35em] uppercase px-8 py-4 border inline-block transition-all hover:opacity-80"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              Shop The Drop
            </Link>
          </div>
        </div>

        {/* bottom right chapter label */}
        <div className="absolute bottom-8 right-10 hidden md:flex items-center gap-4">
          <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
            SS26
          </span>
          <div className="w-8 h-px" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
          <span className="font-display text-6xl" style={{ color: "rgba(201,168,76,0.08)", lineHeight: 1 }}>01</span>
        </div>
      </section>

      {/* EDITORIAL STRIP: three models side by side with UV 2026 overlay */}
      <section className="relative overflow-hidden" style={{ height: "80vh", minHeight: "500px" }}>
        {/* three images side by side */}
        <div className="absolute inset-0 grid grid-cols-3">
          {/* left: girl */}
          <div className="relative overflow-hidden">
            <Image
              src="/editorial_girl1.jpg"
              alt="UltraViolet SS26"
              fill
              className="object-cover object-top"
              unoptimized
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0) 100%)" }} />
          </div>
          {/* center: guy */}
          <div className="relative overflow-hidden">
            <Image
              src="/editorial_guy.jpg"
              alt="UltraViolet SS26"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          {/* right: girl */}
          <div className="relative overflow-hidden">
            <Image
              src="/editorial_girl2.jpg"
              alt="UltraViolet SS26"
              fill
              className="object-cover object-top"
              unoptimized
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0) 100%)" }} />
          </div>
        </div>

        {/* thin vertical dividers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0" style={{ left: "33.33%", width: "1px", backgroundColor: "rgba(201,168,76,0.25)" }} />
          <div className="absolute top-0 bottom-0" style={{ left: "66.66%", width: "1px", backgroundColor: "rgba(201,168,76,0.25)" }} />
        </div>

        {/* UV 2026 ghost text centered across all three */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="font-display text-center select-none"
            style={{
              fontSize: "clamp(60px, 15vw, 200px)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(245,240,232,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            UV 2026
          </span>
        </div>
      </section>

      <Footer />
    </>
  )
}
