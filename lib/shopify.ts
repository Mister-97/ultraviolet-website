const domain = process.env.SHOPIFY_STORE_DOMAIN!
const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!
// Checkout must always go to the .myshopify.com domain, not the custom domain pointed at Vercel
const checkoutDomain = process.env.SHOPIFY_CHECKOUT_DOMAIN ?? domain

export interface ShopifyProduct {
  id: number
  title: string
  handle: string
  body_html: string
  vendor: string
  tags: string
  status: string
  variants: {
    id: number
    price: string
    inventory_quantity: number
    inventory_policy: string
  }[]
  images: {
    id: number
    src: string
    alt: string | null
    position: number
  }[]
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  const res = await fetch(
    `https://${domain}/admin/api/2024-01/products.json?status=active`,
    {
      headers: { 'X-Shopify-Access-Token': token },
      next: { revalidate: 3600 },
    }
  )
  const data = await res.json()
  return data.products
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const res = await fetch(
    `https://${domain}/admin/api/2024-01/products.json?handle=${handle}&status=active`,
    {
      headers: { 'X-Shopify-Access-Token': token },
      next: { revalidate: 3600 },
    }
  )
  const data = await res.json()
  return data.products[0] ?? null
}

export function formatPrice(price: string): string {
  const num = parseFloat(price)
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(num)
}

export function getCheckoutUrl(variantId: number): string {
  return `https://${checkoutDomain}/cart/${variantId}:1`
}
