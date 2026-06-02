"use client"
import { createContext, useContext, useState, useEffect } from "react"

type Lang = "en" | "vi"

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = localStorage.getItem("uv-lang") as Lang | null
    if (stored === "en" || stored === "vi") setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("uv-lang", l)
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)
