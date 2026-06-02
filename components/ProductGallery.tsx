"use client"
import { useState } from "react"
import Image from "next/image"

type Props = {
  mainSrc: string
  thumbnails: string[]
  alt: string
}

export default function ProductGallery({ mainSrc, thumbnails, alt }: Props) {
  const [active, setActive] = useState(mainSrc)

  return (
    <div className="product-img-wrap">
      <div className="product-img-box">
        <Image
          src={active}
          alt={alt}
          fill
          style={{ objectFit: "contain", padding: "32px" }}
          priority
         
        />
      </div>
      {thumbnails.length > 0 && (
        <div className="product-thumbs">
          {thumbnails.map((src) => (
            <div
              key={src}
              onClick={() => setActive(src)}
              className="product-thumb"
              style={{ outline: active === src ? "2px solid var(--gold)" : "none" }}
            >
              <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }}  />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
