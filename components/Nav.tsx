"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useCart } from "@/context/CartContext"
import { useLang } from "@/context/LanguageContext"
import { useT, Lang } from "@/lib/translations"

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
]

export default function Nav({ light }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langDesktopRef = useRef<HTMLDivElement>(null)
  const langMobileRef = useRef<HTMLDivElement>(null)
  const { lang, setLang } = useLang()
  const tr = useT(lang)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const outsideDesktop = !langDesktopRef.current?.contains(target)
      const outsideMobile = !langMobileRef.current?.contains(target)
      if (outsideDesktop && outsideMobile) setLangOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const links: [string, string][] = [
    [tr("navHome"), "/"],
    [tr("navShop"), "/shop"],
    [tr("navCinema"), "/cinema"],
    [tr("navStory"), "/story"],
  ]

  const textColor = light && !scrolled && !menuOpen ? "var(--black)" : "var(--cream)"
  const { count, checkoutUrl } = useCart()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: menuOpen ? "var(--black)" : scrolled ? "rgba(8,8,8,0.95)" : light ? "rgba(245,240,232,0.0)" : "transparent",
        backdropFilter: scrolled && !menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled && !menuOpen ? "1px solid rgba(214,196,148,0.15)" : "none",
      }}
    >
      <div className="flex items-center justify-between py-5" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
          <Image
            src="/uv-logo.png"
            alt="UltraViolet"
            width={160}
            height={60}
            className="object-contain"
            style={{ height: "44px", width: "auto", filter: "saturate(0.62) brightness(1.28)" }}
            priority
          />
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="font-body text-xs tracking-[0.3em] uppercase transition-all hover:opacity-60"
              style={{ color: textColor }}
            >
              {label}
            </Link>
          ))}

          {/* language dropdown */}
          <div ref={langDesktopRef} style={{ position: "relative", borderLeft: `1px solid ${light && !scrolled && !menuOpen ? "rgba(8,8,8,0.15)" : "rgba(245,240,232,0.15)"}`, paddingLeft: "16px" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="font-body text-xs tracking-[0.15em] uppercase flex items-center gap-1 transition-all hover:opacity-80"
              style={{ color: "var(--gold)", background: "none", border: "none", cursor: "pointer", padding: "2px 0" }}
            >
              {lang.toUpperCase()}
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  right: 0,
                  backgroundColor: "rgba(8,8,8,0.97)",
                  border: "1px solid rgba(214,196,148,0.15)",
                  backdropFilter: "blur(12px)",
                  minWidth: "140px",
                  zIndex: 100,
                }}
              >
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false) }}
                    className="font-body text-xs tracking-[0.15em] uppercase w-full text-left transition-all hover:opacity-100"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      color: lang === code ? "var(--gold)" : "var(--cream)",
                      opacity: lang === code ? 1 : 0.55,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(245,240,232,0.06)",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={checkoutUrl}
            className="font-body text-xs tracking-[0.25em] uppercase transition-all hover:opacity-80 flex items-center gap-2"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)", padding: "10px 20px", position: "relative" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {tr("navCart")}{count > 0 && <span className="font-body text-xs font-bold"> ({count})</span>}
          </a>
        </div>

        {/* mobile: language dropdown + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <div ref={langMobileRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="font-body text-xs tracking-[0.1em] uppercase flex items-center gap-1"
              style={{ color: "var(--gold)", background: "none", border: "none", cursor: "pointer", padding: "2px 0" }}
            >
              {lang.toUpperCase()}
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {langOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 12px)", right: 0, backgroundColor: "rgba(8,8,8,0.97)", border: "1px solid rgba(214,196,148,0.15)", minWidth: "140px", zIndex: 100 }}>
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false) }}
                    className="font-body text-xs tracking-[0.1em] uppercase w-full text-left"
                    style={{ display: "block", padding: "12px 16px", color: lang === code ? "var(--gold)" : "var(--cream)", opacity: lang === code ? 1 : 0.55, background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(245,240,232,0.06)" }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="font-body text-xs tracking-[0.25em] uppercase"
            style={{
              color: textColor,
              border: `1px solid ${light && !scrolled && !menuOpen ? "rgba(8,8,8,0.25)" : "rgba(245,240,232,0.25)"}`,
              padding: "8px 16px",
              letterSpacing: "0.2em",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "var(--black)",
            padding: "32px 24px 48px",
            borderTop: "1px solid rgba(214,196,148,0.12)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span className="font-display" style={{ fontSize: "clamp(36px, 10vw, 52px)", color: "var(--cream)", letterSpacing: "0.05em" }}>
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "36px",
              backgroundColor: "var(--gold)",
              color: "var(--black)",
              padding: "14px 40px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
          >
            {tr("navCart")}
          </Link>
        </div>
      )}
    </nav>
  )
}
