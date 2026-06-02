import Nav from "@/components/Nav"
import StoryContent from "@/components/StoryContent"

export const metadata = {
  title: "Our Story",
  description: "UltraViolet was built for those who move with intention. Not for the crowd, not for the algorithm. Hard edges, clean execution, and a visual language entirely our own.",
  openGraph: {
    title: "Our Story | Ultraviolet",
    description: "UltraViolet was built for those who move with intention. Not a logo — a language.",
    url: "https://ultravioletofficial.com/story",
  },
  alternates: { canonical: "https://ultravioletofficial.com/story" },
}

export default function StoryPage() {
  return (
    <>
      <Nav />
      <StoryContent />
    </>
  )
}
