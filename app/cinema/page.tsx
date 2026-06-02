import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee"
import LoopingVideo from "@/components/LoopingVideo"

export const metadata = { title: "Cinema | UltraViolet" }

const films = [
  {
    src: "/uvvideo1.mp4",
    title: "UV001 : The Call",
    year: "2026",
    desc: "Hard streetwear. Built for those who move with intention.",
  },
  {
    src: "/uvviolet2.mp4",
    title: "UV002 : A Language",
    year: "2026",
    desc: "Not a logo. A language.",
  },
  {
    src: "/uvvideo3.mp4",
    title: "UV003 : The Deal",
    year: "2026",
    desc: "",
  },
  {
    src: "/uvvideo4.mp4",
    title: "UV004 : Setup",
    year: "2026",
    desc: "",
  },
]

const placeholders: { title: string; desc: string }[] = []

export default function CinemaPage() {
  return (
    <>
      <Nav />

      {/* header */}
      <section className="cinema-header" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>UV Films</p>
          <h1 className="font-display leading-none" style={{ fontSize: "clamp(80px, 14vw, 200px)", color: "var(--cream)", letterSpacing: "0.01em" }}>
            Cinema
          </h1>
        </div>
      </section>

      <Marquee />

      <main className="cinema-main">
        <div className="max-w-7xl mx-auto">

          {/* featured films */}
          <div className="cinema-grid">
            {films.map((film) => (
              <div key={film.src} className="group relative overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
                <LoopingVideo
                  src={film.src}
                  loopAt={film.src === "/uvvideo3.mp4" ? 16 : undefined}
                  className="w-full block"
                  style={{ aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                />
                {/* overlay on hover */}
                <div
                  className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)", padding: "40px" }}
                >
                  <p className="font-body text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "var(--gold)" }}>{film.year}</p>
                  <p className="font-display text-3xl md:text-4xl tracking-wide mb-2" style={{ color: "var(--cream)" }}>{film.title}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>{film.desc}</p>
                </div>
                {/* always-visible title bar */}
                <div className="absolute bottom-0 left-0 right-0 group-hover:opacity-0 transition-opacity duration-300" style={{ padding: "20px 24px", background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 100%)" }}>
                  <p className="font-display text-xl tracking-wide" style={{ color: "var(--cream)" }}>{film.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* coming soon placeholders */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px", marginTop: "2px" }}>
            {placeholders.map((p) => (
              <div
                key={p.title}
                className="relative flex flex-col items-center justify-center"
                style={{ aspectRatio: "16/9", backgroundColor: "#0d0d0d", border: "1px solid rgba(201,168,76,0.08)" }}
              >
                <div className="w-12 h-px mb-4" style={{ backgroundColor: "rgba(201,168,76,0.3)" }} />
                <p className="font-display text-2xl tracking-widest mb-2" style={{ color: "rgba(245,240,232,0.2)" }}>{p.title}</p>
                <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(201,168,76,0.3)" }}>{p.desc}</p>
                <div className="w-12 h-px mt-4" style={{ backgroundColor: "rgba(201,168,76,0.3)" }} />
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* commitment section */}
      <section className="cinema-commitment">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="flex items-center justify-center gap-6" style={{ marginBottom: "40px" }}>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201,168,76,0.25)" }} />
            <p className="font-body text-xs tracking-[0.5em] uppercase" style={{ color: "var(--gold)" }}>Our Commitment</p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201,168,76,0.25)" }} />
          </div>

          <h2 className="font-display leading-none mb-8" style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "var(--cream)", letterSpacing: "0.02em" }}>
            Every frame<br />tells the story.
          </h2>

          <p className="font-body leading-relaxed mb-6" style={{ fontSize: "16px", color: "rgba(245,240,232,0.6)", maxWidth: "560px", margin: "0 auto 24px" }}>
            At UltraViolet, content is not an afterthought. Every visual we release is produced with the same intention we put into the clothing. Cinematic, deliberate, and built to last.
          </p>
          <p className="font-body leading-relaxed mb-12" style={{ fontSize: "16px", color: "rgba(245,240,232,0.6)", maxWidth: "560px", margin: "0 auto 48px" }}>
            We are committed to delivering high-quality film that moves culture. Not just product. Each drop comes with a story worth watching.
          </p>

          <div className="flex items-center justify-center gap-3" style={{ marginBottom: "40px" }}>
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
            <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(201,168,76,0.5)" }}>UltraViolet</p>
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
          </div>

          <a
            href="/shop"
            className="font-body text-xs tracking-[0.35em] uppercase transition-all hover:opacity-80"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)", padding: "16px 48px", display: "inline-block" }}
          >
            Shop Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
