"use client"
import Link from "next/link"
import Image from "next/image"
import Marquee from "./Marquee"
import { useLang } from "@/context/LanguageContext"
import { useT } from "@/lib/translations"

export default function Footer() {
  const { lang } = useLang()
  const tr = useT(lang)

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
            {tr("tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>{tr("navigate")}</p>
          {([["Shop", "/shop"], ["Cinema", "/cinema"], ["Our Story", "/story"]] as [string, string][]).map(([l, href]) => (
            <Link key={href} href={href}
              className="font-body text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--cream)" }}>
              {l === "Shop" ? tr("navShop") : l === "Cinema" ? tr("navCinema") : tr("ourStory")}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>{tr("legal")}</p>
          <Link href="/policies/shipping" className="font-body text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--cream)" }}>
            {tr("footerShipping")}
          </Link>
          <Link href="/policies/privacy" className="font-body text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--cream)" }}>
            {tr("footerPrivacy")}
          </Link>
          <Link href="/policies/terms" className="font-body text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--cream)" }}>
            {tr("footerTerms")}
          </Link>
          <Link href="/policies/refund" className="font-body text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--cream)" }}>
            Refund Policy
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>{tr("follow")}</p>
          <a href="https://www.instagram.com/ultraviolet_vn/" target="_blank" rel="noopener noreferrer"
            className="font-body text-sm hover:opacity-60 transition-opacity"
            style={{ color: "var(--cream)" }}>
            {tr("footerInstagram")}
          </a>
          <p className="font-body text-xs tracking-[0.3em] uppercase mt-4 mb-2" style={{ color: "var(--gold)" }}>Support</p>
          <a href="mailto:ultra.violet.uvlt@gmail.com"
            className="font-body text-sm hover:opacity-60 transition-opacity"
            style={{ color: "var(--cream)" }}>
            ultra.violet.uvlt@gmail.com
          </a>
        </div>
      </div>

      <div
        className="border-t flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ padding: "16px 30px", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p className="font-body text-xs" style={{ color: "var(--gray)" }}>{tr("copyright")}</p>
        <p className="font-body text-xs tracking-widest" style={{ color: "var(--gold)" }}>ultravioletofficial.com</p>
      </div>
    </footer>
  )
}
