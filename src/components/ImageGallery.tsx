'use client'

import { useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '@/lib/types'
import StaticImage from '@/components/StaticImage'

export type { GalleryImage }

export default function ImageGallery({
  images,
  title,
}: {
  images: GalleryImage[]
  title?: string
}) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!selected) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selected])

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">{title}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelected(image)}
            className="overflow-hidden rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-offset-gray-950"
          >
            <StaticImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Close ✕
            </button>
            <StaticImage
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-center text-white text-sm font-medium">{selected.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
