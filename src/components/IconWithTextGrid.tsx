interface IconWithTextGridProps {
	backgroundColor?: string;
	backgroundPattern?: string;
	title: string;
	titleColor?: string;
	items: {
		icon: string;
		alt: string;
		title: string;
		description: string;
		titleColor?: string;
		descriptionColor?: string;
	}[];
}

export function IconWithTextGrid({
	backgroundColor = "#F8F4F0",
	backgroundPattern,
	title,
	titleColor = "#945643",
	items,
}: IconWithTextGridProps) {
	const defaultPattern = `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1 -160 0'/%3E%3Cpath d='M100 100m-60 0a60 60 0 1 1 120 0a60 60 0 1 1 -120 0'/%3E%3Cpath d='M100 100m-40 0a40 40 0 1 1 80 0a40 40 0 1 1 -80 0'/%3E%3Cpath d='M100 100m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/svg%3E")`;

	return (
		<section
			className="py-16 relative"
			style={{
				backgroundColor,
				backgroundImage: backgroundPattern || 'url(/background-pattern-2.png)',
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<h2
					className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-center mb-16"
					style={{ color: titleColor }}
				>
					{title}
				</h2>

				{/* Grid of Icons */}
				<div className="grid md:grid-cols-3 gap-20 text-center">
					{items.map((item, index) => (
						<div key={index} className="flex flex-col items-center">
							{/* Icon with Radiating Rays */}
							<div className="w-64 h-[28rem] relative group transition-all duration-500 hover:scale-105">
								{/* Golden Rays */}
								<div className="absolute inset-0 z-10 -m-48">
									{[...Array(32)].map((_, rayIndex) => {
										const segments = [];
										let currentPos = 0;
										while (currentPos < 500) {
											const segmentLength = 6 + Math.random() * 60;
											const gapLength = 4 + Math.random() * 12;
											segments.push(
												`transparent ${currentPos}px, transparent ${
													currentPos + gapLength
												}px, #facc15 ${currentPos + gapLength}px, #fbbf24 ${
													currentPos + gapLength + segmentLength
												}px`
											);
											currentPos += gapLength + segmentLength;
										}

										return (
											<div
												key={rayIndex}
												className="absolute w-0.5 opacity-50"
												style={{
													height: "150px",
													left: "50%",
													top: "40%",
													transformOrigin: "0 0",
													transform: `rotate(${
														rayIndex * 11.25
													}deg) translateY(-200px) translateX(-1px)`,
													background: `linear-gradient(to bottom, ${segments.join(
														", "
													)})`,
												}}
											/>
										);
									})}
								</div>

								{/* Center placeholder image */}
								<div className="w-full h-full cursor-pointer relative z-10">
									<div
										className="w-full h-full rounded-t-full rounded-b-lg shadow-lg p-3"
										style={{ backgroundColor: "#e8ca8b" }}
									>
										<img
											src={item.icon}
											alt={item.alt}
											className="w-full h-full object-cover rounded-t-full rounded-b-lg"
										/>
									</div>
								</div>
							</div>

							{/* Title */}
							<h3
								className="font-heading text-xl md:text-2xl uppercase tracking-wide mb-4"
								style={{ color: item.titleColor || titleColor }}
							>
								{item.title}
							</h3>

							{/* Description */}
							<p
								className="font-body text-base leading-relaxed max-w-xs"
								style={{ color: item.descriptionColor || titleColor }}
							>
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
