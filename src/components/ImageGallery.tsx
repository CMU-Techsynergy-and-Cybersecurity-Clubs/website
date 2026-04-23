export type GalleryImage = { src: string; alt: string }

export default function ImageGallery({
  images,
  title,
}: {
  images: GalleryImage[]
  title?: string
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-sm bg-gray-100 aspect-[4/3]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${base}${image.src}`}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
