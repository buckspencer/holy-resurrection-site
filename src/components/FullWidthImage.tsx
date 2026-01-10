interface FullWidthImageProps {
  src: string
  alt: string
  height?: 'small' | 'medium' | 'large' | 'auto'
  objectPosition?: 'top' | 'center' | 'bottom'
  className?: string
}

export function FullWidthImage({
  src,
  alt,
  height = 'medium',
  objectPosition = 'center',
  className = ''
}: FullWidthImageProps) {
  const heightClasses = {
    small: 'h-48 md:h-56',
    medium: 'h-56 md:h-64',
    large: 'h-64 md:h-96',
    auto: 'h-auto'
  }

  const positionClasses = {
    top: 'object-top',
    center: 'object-center',
    bottom: 'object-bottom'
  }

  return (
    <section className="py-0">
      <div className="w-full">
        <img 
          src={src}
          alt={alt}
          className={`w-full ${heightClasses[height]} object-cover ${positionClasses[objectPosition]} ${className}`}
        />
      </div>
    </section>
  )
}