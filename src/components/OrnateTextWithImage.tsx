interface OrnateTextWithImageProps {
	backgroundColor?: string;
	ornateBanner?: string;
	title: string;
	titleColor?: string;
	steps: {
		title: string;
		description: string;
	}[];
	image?: {
		src: string;
		alt: string;
	};
	buttonText?: string;
	buttonColor?: string;
	textColor?: string;
}

export function OrnateTextWithImage({
	backgroundColor = "#f5f5dc",
	ornateBanner = "/banner-ornate-1.png",
	title,
	titleColor = "#5B1924",
	steps,
	image,
	buttonText,
	buttonColor = "#8B9A6B",
	textColor = "#5B1924",
}: OrnateTextWithImageProps) {
	return (
		<section 
			className="relative pt-16"
			style={{ backgroundColor }}
		>
			{/* Ornate Banner */}
			<div 
				className="w-full h-48 py-8"
				style={{
					backgroundImage: `url(${ornateBanner})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'contain'
				}}
			></div>

			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Text Content - Left Column */}
						<div>
							<h2 
								className="font-heading text-3xl md:text-4xl uppercase tracking-wide mb-8"
								style={{ color: titleColor }}
							>
								{title}
							</h2>
							
							<div className="space-y-6 mb-8">
								{steps.map((step, index) => (
									<div key={index}>
										<h3 
											className="font-body text-lg font-medium mb-2"
											style={{ color: textColor }}
										>
											{index + 1}. {step.title}
										</h3>
										<p 
											className="font-body text-base leading-relaxed ml-6"
											style={{ color: textColor }}
										>
											{step.description}
										</p>
									</div>
								))}
							</div>

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
			</div>
		</section>
	);
}