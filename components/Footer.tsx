import Link from "next/link"
import Image from "next/image"
import Marquee from "./Marquee"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--black)" }}>
      <Marquee dark />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5" style={{ padding: "40px 30px", gap: "40px" }}>
        <div className="col-span-2">
          <Image
            src="/uv-logo.png"
            alt="UltraViolet"
            width={220}
            height={80}
            className="object-contain mb-4"
            style={{ height: "60px", width: "auto", filter: "saturate(0.62) brightness(1.28)" }}
          />
          <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: "var(--gray)" }}>
            Hard streetwear. Built for those who move with intention.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>Navigate</p>
          {[["Shop", "/shop"], ["Cinema", "/cinema"], ["Our Story", "/story"]].map(([l, href]) => (
            <Link key={l} href={href}
              className="font-body text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--cream)" }}>
              {l}
            </Link>
          ))}

        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>Legal</p>
          {[["Shipping Policy", "/policies/shipping"], ["Privacy Policy", "/policies/privacy"], ["Terms of Use", "/policies/terms"]].map(([l, href]) => (
            <Link key={l} href={href}
              className="font-body text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--cream)" }}>
              {l}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>Follow</p>
          <a href="https://www.instagram.com/ultraviolet_vn/" target="_blank" rel="noopener noreferrer"
            className="font-body text-sm hover:opacity-60 transition-opacity"
            style={{ color: "var(--cream)" }}>
            Instagram
          </a>
        </div>
      </div>

      <div
        className="border-t flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ padding: "16px 30px", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p className="font-body text-xs" style={{ color: "var(--gray)" }}>2026 UltraViolet. All rights reserved.</p>
        <p className="font-body text-xs tracking-widest" style={{ color: "var(--gold)" }}>ultravioletofficial.com</p>
      </div>
    </footer>
  )
}
