interface HistorySectionProps {
  title: string
  firstParagraph: string
  secondParagraph: string
  image1Src: string
  image1Alt: string
  image2Src: string
  image2Alt: string
  buttonText?: string
  buttonAction?: () => void
  backgroundColor?: 'cream' | 'rust' | 'blue' | 'green'
  titleColor?: 'rust' | 'cream'
  textColor?: 'rust' | 'cream'
  buttonStyle?: 'primary' | 'secondary'
}

export function HistorySection({
  title,
  firstParagraph,
  secondParagraph,
  image1Src,
  image1Alt,
  image2Src,
  image2Alt,
  buttonText,
  buttonAction,
  backgroundColor = 'cream',
  titleColor = 'rust',
  textColor = 'rust',
  buttonStyle = 'primary'
}: HistorySectionProps) {
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

  return (
    <section className={`py-16 ${bgClasses[backgroundColor]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className={`font-heading text-4xl ${titleClasses[titleColor]} mb-6 uppercase tracking-wide font-bold`}>
            {title}
          </h2>
        </div>

        {/* First Text Block */}
        <div className={`font-body ${textClasses[textColor]} leading-relaxed text-base mb-8`}>
          <p>{firstParagraph}</p>
        </div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <img 
            src={image1Src}
            alt={image1Alt}
            className="w-full aspect-square object-cover rounded-lg shadow-lg"
          />
          <img 
            src={image2Src}
            alt={image2Alt}
            className="w-full aspect-square object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Second Text Block */}
        <div className={`font-body ${textClasses[textColor]} leading-relaxed text-base mb-8`}>
          <p>{secondParagraph}</p>
        </div>
        
        {/* Button */}
        {buttonText && (
          <div className="text-center">
            <button
              onClick={buttonAction}
              className={`${buttonClasses[buttonStyle]} font-body px-8 py-3 text-sm uppercase tracking-wide transition-colors rounded`}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}