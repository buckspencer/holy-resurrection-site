interface TextWithSideImagesBlockProps {
	backgroundColor?: string;
	backgroundPattern?: string;
	title: string;
	sections: {
		text: string;
		items: string[];
		textColor: string;
	}[];
	images?: {
		src: string;
		alt: string;
	}[];
	showMobileImages?: boolean;
}

export function TextWithSideImagesBlock({
	backgroundColor = "#8B5A3C",
	backgroundPattern,
	title,
	sections,
	images = [],
	showMobileImages = true,
}: TextWithSideImagesBlockProps) {
	const defaultOrnatePattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-40 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-40 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3Cpath d='M40 0l4 12 12-4-4 12 12 4-12 4 4 12-12-4-4 12-4-12-12 4 4-12-12-4 12-4-4-12 12 4z' opacity='0.3'/%3E%3Cpath d='M20 20l2 6 6-2-2 6 6 2-6 2 2 6-6-2-2 6-2-6-6 2 2-6-6-2 6-2-2-6 6 2z' opacity='0.4'/%3E%3Cpath d='M60 20l2 6 6-2-2 6 6 2-6 2 2 6-6-2-2 6-2-6-6 2 2-6-6-2 6-2-2-6 6 2z' opacity='0.4'/%3E%3Cpath d='M20 60l2 6 6-2-2 6 6 2-6 2 2 6-6-2-2 6-2-6-6 2 2-6-6-2 6-2-2-6 6 2z' opacity='0.4'/%3E%3Cpath d='M60 60l2 6 6-2-2 6 6 2-6 2 2 6-6-2-2 6-2-6-6 2 2-6-6-2 6-2-2-6 6 2z' opacity='0.4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
	return (
		<section className="py-16 bg-cream relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative flex justify-center">
					<div 
						className="p-8 md:p-16 w-[90%] min-h-[500px] md:min-h-[600px] relative pr-8 md:pr-16"
						style={{
							backgroundColor,
							backgroundImage: backgroundPattern || defaultOrnatePattern,
							backgroundSize: '80px 80px'
						}}
					>
						<div className="max-w-lg">
							<h2 className="font-heading text-2xl md:text-3xl text-cream mb-6 uppercase tracking-wide font-bold">
								{title}
							</h2>
							<div className="font-body leading-relaxed">
								{sections.map((section, index) => (
									<div key={index} className={index > 0 ? "mt-8 mb-12" : "mt-8 mb-12"}>
										{section.text && (
											<p className={`mb-4 text-sm`} style={{ color: section.textColor }}>
												{section.text}
											</p>
										)}
										<ul className={`space-y-2 text-sm`} style={{ color: section.textColor }}>
											{section.items.map((item, itemIndex) => (
												<li key={itemIndex}>{item}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>

						{images.length > 0 && (
							<div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 space-y-4">
								{images.map((image, index) => (
									<div key={index} className="relative">
										<img
											src={image.src}
											alt={image.alt}
											className="w-72 h-64 object-cover shadow-lg"
										/>
										<div className="absolute inset-0 bg-rust/20"></div>
									</div>
								))}
							</div>
						)}
					</div>

					{showMobileImages && images.length > 0 && (
						<div className="md:hidden mt-6 grid grid-cols-2 gap-4">
							{images.map((image, index) => (
								<img
									key={index}
									src={image.src}
									alt={image.alt}
									className="w-full h-32 object-cover rounded shadow-lg"
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}