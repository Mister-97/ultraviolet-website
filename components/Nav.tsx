"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" className="block">
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

        <div className="hidden md:flex items-center gap-10">
          {["Shop", "Collections", "Story"].map((item) => (
            <Link
              key={item}
              href={item === "Story" ? "/#story" : `/${item.toLowerCase()}`}
              className="font-body text-xs tracking-[0.3em] uppercase transition-all hover:opacity-60"
              style={{ color: "var(--cream)" }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/shop"
            className="font-body text-xs tracking-[0.25em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
            style={{ backgroundColor: "var(--gold)", color: "var(--black)" }}
          >
            Shop Now
          </Link>
        </div>

        <button
          className="md:hidden font-body text-xs tracking-widest uppercase"
          style={{ color: "var(--cream)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 py-8" style={{ backgroundColor: "var(--black)" }}>
          {["Shop", "Collections", "Story"].map((item) => (
            <Link
              key={item}
              href={item === "Story" ? "/#story" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl tracking-widest uppercase"
              style={{ color: "var(--cream)" }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
