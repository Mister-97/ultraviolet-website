import Nav from "@/components/Nav"
import CinemaContent from "@/components/CinemaContent"

export const metadata = {
  title: "Cinema",
  description: "Watch UV Films — original cinematic short films produced by UltraViolet. Every frame tells the story. UV001 through UV004, SS26.",
  openGraph: {
    title: "Cinema | Ultraviolet",
    description: "Original short films by UltraViolet. Cinematic, deliberate, and built to move culture.",
    url: "https://ultravioletofficial.com/cinema",
  },
  alternates: { canonical: "https://ultravioletofficial.com/cinema" },
}

export default function CinemaPage() {
  return (
    <>
      <Nav />
      <CinemaContent />
    </>
  )
}
