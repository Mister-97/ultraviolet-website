"use client"
import { useRef } from "react"

export default function LoopingVideo({ src, loopAt, className, style }: {
  src: string
  loopAt?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLVideoElement>(null)

  function handleTimeUpdate() {
    if (loopAt && ref.current && ref.current.currentTime >= loopAt) {
      ref.current.currentTime = 0
    }
  }

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      onTimeUpdate={handleTimeUpdate}
      className={className}
      style={style}
    />
  )
}
