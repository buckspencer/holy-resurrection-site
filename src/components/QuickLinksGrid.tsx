interface QuickLinksGridProps {
	backgroundColor?: string;
	title: string;
	titleColor?: string;
	links: {
		image: string;
		alt: string;
		buttonText: string;
		buttonColor?: string;
		href?: string;
	}[];
}

export function QuickLinksGrid({
	backgroundColor = "#5B1924",
	title,
	titleColor = "#F8F4F0",
	links,
}: QuickLinksGridProps) {
	return (
		<section 
			className="relative"
			style={{ backgroundColor }}
		>
			{/* Decorative Border */}
			<div 
				className="w-full h-12"
				style={{
					backgroundImage: 'url(/nav-banner.png)',
					backgroundRepeat: 'repeat-x',
					backgroundPosition: 'center',
					backgroundSize: 'auto 100%'
				}}
			></div>

			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<h2 
					className="font-heading text-3xl md:text-4xl uppercase tracking-widest text-center mb-12"
					style={{ color: titleColor }}
				>
					{title}
				</h2>

				{/* Grid of Links */}
				<div className="grid md:grid-cols-3 gap-8">
					{links.map((link, index) => (
						<div key={index} className="relative group">
							<div className="aspect-[4/3] overflow-hidden rounded-lg">
								<img
									src={link.image}
									alt={link.alt}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								
								{/* Overlay Button */}
								<div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-6">
									<button 
										className="px-6 py-3 text-white text-sm uppercase tracking-wide hover:opacity-90 transition-opacity rounded-full font-body"
										style={{ backgroundColor: link.buttonColor || "#8B9A6B" }}
									>
										{link.buttonText}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			</div>
		</section>
	);
}