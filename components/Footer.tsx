import Link from "next/link"
import Image from "next/image"
import Marquee from "./Marquee"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--black)" }}>
      <Marquee dark />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <Image
            src="/uv-logo.png"
            alt="UltraViolet"
            width={220}
            height={80}
            className="object-contain mb-4"
            style={{ height: "60px", width: "auto" }}
          />
          <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: "var(--gray)" }}>
            Hard streetwear. Built for those who move with intention.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>Navigate</p>
          {["Shop", "Collections", "Story"].map((l) => (
            <Link key={l} href={l === "Story" ? "/#story" : `/${l.toLowerCase()}`}
              className="font-body text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--cream)" }}>
              {l}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>Follow</p>
          {["Instagram", "TikTok", "Twitter"].map((s) => (
            <a key={s} href="#"
              className="font-body text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--cream)" }}>
              {s}
            </a>
          ))}
        </div>
      </div>

      <div
        className="border-t px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p className="font-body text-xs" style={{ color: "var(--gray)" }}>2026 UltraViolet. All rights reserved.</p>
        <p className="font-body text-xs tracking-widest" style={{ color: "var(--gold)" }}>ultravioletofficial.com</p>
      </div>
    </footer>
  )
}
