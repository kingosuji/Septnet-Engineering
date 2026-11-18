type FitImageProps = {
  src: string
  alt: string
  /** CSS aspect-ratio of the frame, e.g. "16 / 9" */
  ratio?: string
  className?: string
  imgClassName?: string
}

/**
 * Shows the whole photo inside a fixed-ratio frame — never cropped.
 * If the photo's ratio differs from the frame, the gap is filled with a blurred copy of the same photo.
 */
export function FitImage({
  src,
  alt,
  ratio = '16 / 9',
  className = '',
  imgClassName = '',
}: FitImageProps) {
  return (
    <div
      className={`relative isolate overflow-hidden bg-navy-dark ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-70 blur-2xl"
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-contain ${imgClassName}`}
      />
    </div>
  )
}
