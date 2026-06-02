"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type CartItem = { variantId: number; quantity: number; title: string; price: string }
type CartCtx = {
  items: CartItem[]
  count: number
  addToCart: (variantId: number, title: string, price: string) => void
  checkoutUrl: string
}

const CartContext = createContext<CartCtx>({ items: [], count: 0, addToCart: () => {}, checkoutUrl: "" })

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? ""

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("uv-cart")
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  const save = (next: CartItem[]) => {
    setItems(next)
    localStorage.setItem("uv-cart", JSON.stringify(next))
  }

  const addToCart = (variantId: number, title: string, price: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.variantId === variantId)
      const next = existing
        ? prev.map(i => i.variantId === variantId ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { variantId, quantity: 1, title, price }]
      localStorage.setItem("uv-cart", JSON.stringify(next))
      return next
    })
  }

  const count = items.reduce((s, i) => s + i.quantity, 0)
  const checkoutUrl = items.length
    ? `https://${DOMAIN}/cart/${items.map(i => `${i.variantId}:${i.quantity}`).join(",")}`
    : `/shop`

  return (
    <CartContext.Provider value={{ items, count, addToCart, checkoutUrl }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
