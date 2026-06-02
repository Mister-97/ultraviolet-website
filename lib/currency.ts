import type { Lang } from "./translations"

export type CurrencyCode = "USD" | "VND" | "EUR" | "KRW" | "JPY" | "GBP"

export const LANG_CURRENCY: Record<Lang, CurrencyCode> = {
  en: "USD",
  vi: "VND",
  es: "EUR",
  pt: "EUR",
  fr: "EUR",
  ar: "USD",
  ko: "KRW",
  ja: "JPY",
}

// rates FROM vnd (1 VND = x foreign)
// cached in memory, refreshed every session
let rateCache: { rates: Record<CurrencyCode, number>; ts: number } | null = null

async function getRates(): Promise<Record<CurrencyCode, number>> {
  if (rateCache && Date.now() - rateCache.ts < 60 * 60 * 1000) return rateCache.rates

  try {
    const res = await fetch("https://open.er-api.com/v6/latest/VND", { signal: AbortSignal.timeout(4000) })
    const data = await res.json()
    const rates: Record<CurrencyCode, number> = {
      VND: 1,
      USD: data.rates.USD,
      EUR: data.rates.EUR,
      KRW: data.rates.KRW,
      JPY: data.rates.JPY,
      GBP: data.rates.GBP,
    }
    rateCache = { rates, ts: Date.now() }
    return rates
  } catch {
    // fallback approximate rates (June 2026)
    return { VND: 1, USD: 0.000039, EUR: 0.000036, KRW: 0.054, JPY: 0.0059, GBP: 0.00031 }
  }
}

export async function convertAndFormat(priceVnd: string, lang: Lang): Promise<string> {
  const num = parseFloat(priceVnd)
  const currency = LANG_CURRENCY[lang]

  if (currency === "VND") {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(num)
  }

  const rates = await getRates()
  const converted = num * rates[currency]

  const locale: Record<CurrencyCode, string> = {
    USD: "en-US", EUR: "de-DE", KRW: "ko-KR", JPY: "ja-JP", GBP: "en-GB", VND: "vi-VN",
  }

  return new Intl.NumberFormat(locale[currency], {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "JPY" || currency === "KRW" ? 0 : 2,
    maximumFractionDigits: currency === "JPY" || currency === "KRW" ? 0 : 2,
  }).format(converted)
}
