"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext"

export default function Nav({ light }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links: [string, string][] = [["Home", "/"], ["Shop", "/shop"], ["Cinema", "/cinema"], ["Story", "/story"]]

  const textColor = light && !scrolled && !menuOpen ? "var(--black)" : "var(--cream)"
  const { count, checkoutUrl } = useCart()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: menuOpen ? "var(--black)" : scrolled ? "rgba(8,8,8,0.95)" : light ? "rgba(245,240,232,0.0)" : "transparent",
        backdropFilter: scrolled && !menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled && !menuOpen ? "1px solid rgba(201,168,76,0.15)" : "none",
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
            style={{ height: "44px", width: "auto" }}
            priority
          />
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="font-body text-xs tracking-[0.3em] uppercase transition-all hover:opacity-60"
              style={{ color: textColor }}
            >
              {label}
            </Link>
          ))}
          <a
            href={checkoutUrl}
            className="font-body text-xs tracking-[0.25em] uppercase transition-all hover:opacity-80 flex items-center gap-2"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)", padding: "10px 20px", position: "relative" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Cart{count > 0 && <span className="font-body text-xs font-bold"> ({count})</span>}
          </a>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden font-body text-xs tracking-[0.25em] uppercase"
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

      {/* mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "var(--black)",
            padding: "32px 24px 48px",
            borderTop: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {links.map(([label, href]) => (
              <Link
                key={label}
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
            Cart
          </Link>
        </div>
      )}
    </nav>
  )
}
