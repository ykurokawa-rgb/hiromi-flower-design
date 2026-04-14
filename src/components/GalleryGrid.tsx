'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { trackGalleryView } from '@/lib/ga'

type GalleryItem = {
  src: string
  alt: string
  width: number
  height: number
}

type Props = {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % items.length : null))
  }, [items.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null))
  }, [items.length])

  const openLightbox = useCallback(
    (i: number) => {
      setLightboxIndex(i)
      trackGalleryView(items[i].alt)
    },
    [items],
  )

  // Toggle body overflow
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <>
      {/* Masonry Grid */}
      <div className="masonry">
        {items.map((item, i) => (
          <button
            key={i}
            className="masonry-item cursor-pointer overflow-hidden rounded-[14px] shadow-soft transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-auto w-full"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/40"
            onClick={closeLightbox}
            aria-label="閉じる"
          >
            ✕
          </button>

          <button
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/40"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="前の写真"
          >
            ‹
          </button>

          <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={items[lightboxIndex].src}
              alt={items[lightboxIndex].alt}
              width={items[lightboxIndex].width}
              height={items[lightboxIndex].height}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/40"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="次の写真"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm">
            {lightboxIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  )
}
