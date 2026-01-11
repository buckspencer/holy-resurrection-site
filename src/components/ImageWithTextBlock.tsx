interface ImageWithTextBlockProps {
	backgroundColor?: string;
	backgroundPattern?: string;
	title: string;
	titleColor?: string;
	titleStyle?: 'heading' | 'script';
	sections: {
		heading?: string;
		headingColor?: string;
		text: string;
		items: string[];
		textColor: string;
	}[];
	image?: {
		src: string;
		alt: string;
		position?: 'left' | 'right';
	};
	buttonText?: string;
	buttonColor?: string;
}

export function ImageWithTextBlock({
	backgroundColor = "#f5f5dc",
	backgroundPattern,
	title,
	titleColor = "#6b7280",
	titleStyle = 'script',
	sections,
	image,
	buttonText,
	buttonColor = "#8B9A6B",
}: ImageWithTextBlockProps) {
	const titleClasses = titleStyle === 'script' 
		? "font-quote text-5xl md:text-6xl lg:text-7xl italic leading-tight"
		: "font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide font-bold";

	return (
		<section 
			className="py-16 bg-cream relative"
			style={{
				backgroundImage: 'url(/branch-background.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center 20%',
				backgroundSize: '60%'
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Centered Title */}
				<h2 
					className={`${titleClasses} mb-12 text-center`}
					style={{ 
						color: titleColor,
						fontFamily: titleStyle === 'script' ? "'Great Vibes', cursive" : undefined
					}}
				>
					{title}
				</h2>

				{/* Two Column Layout */}
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Text Content - Left Column */}
					<div>
						{sections.map((section, index) => (
							<div key={index} className="mb-8">
								{section.heading && (
									<h3 
										className="text-2xl mb-4 font-body"
										style={{ color: section.headingColor || section.textColor }}
									>
										{section.heading}
									</h3>
								)}
								{section.text && (
									<p 
										className="mb-4 text-base font-body"
										style={{ color: section.textColor }}
									>
										{section.text}
									</p>
								)}
								<ul className="space-y-2 text-base font-body" style={{ color: section.textColor }}>
									{section.items.map((item, itemIndex) => (
										<li key={itemIndex}>{item}</li>
									))}
								</ul>
							</div>
						))}

						{buttonText && (
							<button 
								className="px-6 py-3 text-white text-sm uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
								style={{ backgroundColor: buttonColor }}
							>
								{buttonText}
							</button>
						)}
					</div>

					{/* Image - Right Column */}
					{image && (
						<div className="text-center">
							<img
								src={image.src}
								alt={image.alt}
								className="w-full max-w-md mx-auto rounded-lg shadow-lg"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}