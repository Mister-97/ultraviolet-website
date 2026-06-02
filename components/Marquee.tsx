export default function Marquee({ dark = false }: { dark?: boolean }) {
  const text = "ULTRAVIOLET   *   SS26   *   HARD STREETWEAR   *   LIMITED DROPS   *   "
  const repeated = text.repeat(6)

  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{
        backgroundColor: dark ? "var(--black)" : "var(--gold)",
        borderColor: dark ? "rgba(214,196,148,0.2)" : "transparent",
      }}
    >
      <div className="marquee-track">
        <span
          className="font-display text-sm tracking-[0.3em] uppercase"
          style={{ color: dark ? "var(--gold)" : "var(--black)" }}
        >
          {repeated}
        </span>
        <span
          className="font-display text-sm tracking-[0.3em] uppercase"
          style={{ color: dark ? "var(--gold)" : "var(--black)" }}
          aria-hidden
        >
          {repeated}
        </span>
      </div>
    </div>
  )
}
