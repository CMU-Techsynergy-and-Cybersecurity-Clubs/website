import { withBasePath } from '@/lib/basePath'

type StaticImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }

export default function StaticImage({ src, alt, ...rest }: StaticImageProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={withBasePath(src)} alt={alt} {...rest} />
}
