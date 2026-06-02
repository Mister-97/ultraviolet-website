"use client"
import { usePrice } from "@/hooks/usePrice"

export default function PriceTag({ priceVnd, className, style }: {
  priceVnd: string
  className?: string
  style?: React.CSSProperties
}) {
  const price = usePrice(priceVnd)
  return <span className={className} style={style}>{price}</span>
}
