'use client'

import { useState } from 'react'

export type GalleryImage = { src: string; alt: string }

export default function ImageGallery({
  images,
  title,
}: {
  images: GalleryImage[]
  title?: string
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelected(image)}
            className="overflow-hidden rounded-lg shadow-sm bg-gray-100 aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${base}${image.src}`}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Close ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${base}${selected.src}`}
              alt={selected.alt}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-center text-white text-sm font-medium">{selected.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
