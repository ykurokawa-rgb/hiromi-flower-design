'use client'

import { useState, useCallback, useEffect } from 'react'
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

  const openLightbox = (i: number) => {
    setLightboxIndex(i)
    document.body.style.overflow = 'hidden'
    trackGalleryView(items[i].alt)
  }

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
  })

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length)
    }
  }

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
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/40"
            onClick={closeLightbox}
            aria-label="閉じる"
          >
            ✕
          </button>

          {/* Previous */}
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

          {/* Image */}
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

          {/* Next */}
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

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm">
            {lightboxIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  )
}
