"use client"
import { createContext, useContext, useState, useEffect } from "react"
import type { Lang } from "@/lib/translations"

const STORAGE_KEY = "uv-lang"
const VALID_LANGS: Lang[] = ["en", "vi", "ar", "es", "pt", "ko", "ja", "fr"]

// country code -> language
const GEO_MAP: Record<string, Lang> = {
  // French
  FR: "fr", BE: "fr", MC: "fr", LU: "fr",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", PE: "es", CL: "es", VE: "es",
  EC: "es", GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es",
  SV: "es", NI: "es", CR: "es", PA: "es", UY: "es",
  // Portuguese
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt",
  // Vietnamese
  VN: "vi",
  // Japanese
  JP: "ja",
  // Korean
  KR: "ko",
  // Arabic
  SA: "ar", AE: "ar", QA: "ar", KW: "ar", EG: "ar", JO: "ar", IQ: "ar",
  SY: "ar", LB: "ar", OM: "ar", YE: "ar", BH: "ar", LY: "ar", TN: "ar",
  DZ: "ar", MA: "ar", SD: "ar", PS: "ar",
}

async function detectLang(): Promise<Lang> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) })
    const data = await res.json()
    return GEO_MAP[data.country_code as string] ?? "en"
  } catch {
    return "en"
  }
}

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && VALID_LANGS.includes(stored)) {
      // user has already made a manual choice — respect it
      setLangState(stored)
    } else {
      // first visit — detect by IP
      detectLang().then((detected) => {
        setLangState(detected)
        // don't write to localStorage so a future visit re-detects if they haven't toggled manually
      })
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem(STORAGE_KEY, l) // manual choice persists
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)
