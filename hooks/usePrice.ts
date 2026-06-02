"use client"
import { useState, useEffect } from "react"
import { useLang } from "@/context/LanguageContext"
import { convertAndFormat } from "@/lib/currency"

export function usePrice(priceVnd: string): string {
  const { lang } = useLang()
  const [display, setDisplay] = useState("")

  useEffect(() => {
    convertAndFormat(priceVnd, lang).then(setDisplay)
  }, [priceVnd, lang])

  return display
}
