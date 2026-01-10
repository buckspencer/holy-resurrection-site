interface TextImageSectionProps {
  title: string
  content: string[]
  imageSrc: string
  imageAlt: string
  buttonText?: string
  buttonAction?: () => void
  backgroundColor?: 'cream' | 'rust' | 'blue' | 'green'
  imagePosition?: 'left' | 'right'
  titleColor?: 'rust' | 'cream'
  textColor?: 'rust' | 'cream'
  buttonStyle?: 'primary' | 'secondary'
  imageSize?: 'small' | 'medium' | 'large'
  centeredTitle?: boolean
  halfImage?: boolean
  titleInTextColumn?: boolean
}

export function TextImageSection({
  title,
  content,
  imageSrc,
  imageAlt,
  buttonText,
  buttonAction,
  backgroundColor = 'cream',
  imagePosition = 'right',
  titleColor = 'rust',
  textColor = 'rust',
  buttonStyle = 'primary',
  imageSize = 'medium',
  centeredTitle = false,
  halfImage = false,
  titleInTextColumn = false
}: TextImageSectionProps) {
  const bgClasses = {
    cream: 'bg-cream',
    rust: 'bg-rust',
    blue: 'bg-blue',
    green: 'bg-green'
  }

  const titleClasses = {
    rust: 'text-rust',
    cream: 'text-cream'
  }

  const textClasses = {
    rust: 'text-rust',
    cream: 'text-cream'
  }

  const buttonClasses = {
    primary: 'bg-green text-cream hover:bg-green/90',
    secondary: 'bg-cream text-rust hover:bg-cream/90'
  }

  const imageClasses = {
    small: 'w-full max-w-sm mx-auto',
    medium: 'w-full max-w-md mx-auto',
    large: 'w-full max-w-lg mx-auto'
  }

  const TextContent = () => (
    <div>
      {(!centeredTitle || titleInTextColumn) && (
        <h2 className={`font-heading text-4xl ${titleClasses[titleColor]} mb-6 uppercase tracking-wide text-center font-bold`}>
          {title}
        </h2>
      )}
      <div className={`font-body ${textClasses[textColor]} leading-relaxed space-y-4 text-base`}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {buttonText && (
        <div className="mt-8">
          <button
            onClick={buttonAction}
            className={`${buttonClasses[buttonStyle]} font-body px-8 py-3 text-sm uppercase tracking-wide transition-colors rounded`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  )

  const ImageContent = () => (
    <div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`${halfImage ? 'w-full aspect-square object-cover' : imageClasses[imageSize]} rounded-lg shadow-lg`}
      />
    </div>
  )

  return (
    <section className={`py-16 ${bgClasses[backgroundColor]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {centeredTitle && (
          <div className="text-center mb-12">
            <h2 className={`font-heading text-4xl ${titleClasses[titleColor]} mb-6 uppercase tracking-wide`}>
              {title}
            </h2>
          </div>
        )}
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {imagePosition === 'left' ? (
            <>
              <ImageContent />
              <TextContent />
            </>
          ) : (
            <>
              <TextContent />
              <ImageContent />
            </>
          )}
        </div>
      </div>
    </section>
  )
}