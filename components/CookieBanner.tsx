"use client"
import { useEffect, useState } from "react"

const STORAGE_KEY = "uv-cookie-consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#0d0d0d",
        borderTop: "1px solid rgba(201,168,76,0.25)",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <p
        className="font-body text-sm"
        style={{ color: "rgba(255,255,255,0.7)", margin: 0, flex: 1, minWidth: "240px" }}
      >
        We use cookies to improve your experience.{" "}
        <a
          href="/privacy"
          style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Privacy Policy
        </a>
      </p>

      <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
        <button
          onClick={decline}
          className="font-body text-xs tracking-[0.3em] uppercase"
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: "rgba(255,255,255,0.45)",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="font-body text-xs tracking-[0.3em] uppercase font-medium"
          style={{
            padding: "10px 24px",
            backgroundColor: "var(--gold)",
            color: "#0d0d0d",
            border: "none",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
