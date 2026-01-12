import { useEffect, useState } from "react";
import { TextWithSideImagesBlock } from "../components/TextWithSideImagesBlock";
import { ImageWithTextBlock } from "../components/ImageWithTextBlock";
import { QuickLinksGrid } from "../components/QuickLinksGrid";
import { IconWithTextGrid } from "../components/IconWithTextGrid";
import { BannerImage } from "../components/BannerImage";

export function Home() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const carouselImages = [
		"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
		"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
		"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
		"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
		"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
		"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
		}, 3500);
		return () => clearInterval(interval);
	}, [carouselImages.length]);

	return (
		<div>
			{/* Red wrapper for top sections */}
			<div className="bg-red -mt-32 pt-32">
				{/* Hero Carousel Section */}
				<section className="pt-24 pb-16 relative">
					{/* Desktop Carousel */}
					<div className="hidden md:block w-full px-4">
						<div className="relative max-w-screen-2xl mx-auto">
							<div className="flex justify-center items-center space-x-8">
								{[
									{
										src: carouselImages[0],
										size: "w-96 h-[28rem]",
									},
									{
										src: carouselImages[1],
										size: "w-96 h-[28rem]",
									},
									{
										src: carouselImages[2],
										size: "w-96 h-[28rem]",
									},
									{
										/* Static Center Icon - Never Changes */
									},
									{
										src: carouselImages[3],
										size: "w-96 h-[28rem]",
									},
									{
										src: carouselImages[4],
										size: "w-96 h-[28rem]",
									},
									{
										src: carouselImages[5],
										size: "w-96 h-[28rem]",
									},
								].map((item, index) => {
									if (index === 3) {
										// Static center with rays
										return (
											<div
												key="center"
												className="w-[42rem] h-[42rem] relative group transition-all duration-500 hover:scale-105"
											>
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
																}px, #facc15 ${
																	currentPos + gapLength
																}px, #fbbf24 ${
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
																	height: "500px",
																	left: "50%",
																	top: "34%",
																	transformOrigin: "0 0",
																	transform: `rotate(${
																		rayIndex * 110.25
																	}deg) translateY(-280px) translateX(-1px)`,
																	background: `linear-gradient(to bottom, ${segments.join(
																		", "
																	)})`,
																}}
															/>
														);
													})}
												</div>

												{/* Center placeholder image */}
												<div
													className="w-full h-full cursor-pointer relative z-10"
													onClick={() => setSelectedImage(carouselImages[0])}
												>
													<div
														className="w-full h-full rounded-t-full rounded-b-lg shadow-lg p-3"
														style={{ backgroundColor: "#e8ca8b" }}
													>
														<img
															src={carouselImages[0]}
															alt="Church Life"
															className="w-full h-full object-cover rounded-t-full rounded-b-lg"
														/>
													</div>
												</div>
											</div>
										);
									}

									return (
										<div
											key={index}
											className={`${item.size} transition-all duration-500 hover:scale-105 cursor-pointer relative z-20`}
											onClick={() => item.src && setSelectedImage(item.src)}
										>
											<div
												className="w-full h-full rounded-t-full rounded-b-lg shadow-lg p-3"
												style={{ backgroundColor: "#e8ca8b" }}
											>
												{item.src && (
													<img
														src={item.src}
														alt="Church Life"
														className="w-full h-full object-cover rounded-t-full rounded-b-lg"
													/>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* Mobile Single Image Carousel */}
					<div className="block md:hidden w-full px-4">
						<div className="relative max-w-sm mx-auto">
							<div className="flex justify-center">
								<div
									className="w-64 h-96 transition-all duration-500 cursor-pointer relative"
									onClick={() =>
										setSelectedImage(carouselImages[currentImageIndex])
									}
								>
									<div
										className="w-full h-full rounded-t-full rounded-b-lg shadow-lg p-3"
										style={{ backgroundColor: "#e8ca8b" }}
									>
										<img
											src={carouselImages[currentImageIndex]}
											alt="Church Life"
											className="w-full h-full object-cover rounded-t-full rounded-b-lg transition-opacity duration-500"
										/>
									</div>
								</div>
							</div>

							{/* Progress dots */}
							<div className="flex justify-center mt-4 space-x-2">
								{carouselImages.map((_, index) => (
									<div
										key={index}
										className={`w-2 h-2 rounded-full transition-colors duration-300 ${
											index === currentImageIndex ? "bg-cream" : "bg-cream/30"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Main Hero Section */}
				<section className="pb-8 pt-8 relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream mb-8 tracking-wider leading-tight">
							HOLY RESURRECTION
							<br />
							ANTIOCHIAN ORTHODOX CHURCH
						</h1>

						<p className="font-quote text-3xl md:text-4xl text-cream italic mb-8 tracking-wide leading-relaxed">
							Rooted in Tradition, Alive in Christ
						</p>

						{/* Decorative ornament */}
						<div className="flex justify-center mb-10">
							<div className="text-cream/80 text-lg tracking-widest">
								━━━ ◊ ◊ ◊ ━━━
							</div>
						</div>

						<p className="font-body text-xl md:text-2xl text-cream mb-4 font-medium tracking-wide">
							Welcoming all who seek the ancient Christian faith
						</p>
						<p className="font-body text-lg md:text-xl text-cream/90 mb-0 tracking-wide">
							Join us for worship, prayer, and life in Christ in Tucson, AZ
						</p>
					</div>
				</section>

				{/* Dome Banner Section */}
				<section>
					<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
						<img
							src="/landing-dome-banner.png"
							alt="Orthodox Church Dome Interior with Banner"
							className="w-full h-auto object-contain"
						/>
					</div>
				</section>
			</div>

			<TextWithSideImagesBlock
				title="Visiting a Church Can Feel Intimidating - Especially an Orthodox One"
				sections={[
					{
						text: "Short paragraph acknowledging common experiences:",
						items: [
							"• not knowing when to stand or sit",
							"• unsure is visitors are welcome", 
							"• unsure of what Orthodoxy even is"
						],
						textColor: "#fca5a5"
					},
					{
						text: "",
						items: [
							"• You don't need to know what to do to visit us",
							"• You're not expected to participate beyond your comfort level",
							"• Questions are always welcome"
						],
						textColor: "#f5f5dc"
					}
				]}
				images={[
					{
						src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
						alt: "Orthodox Worship"
					},
					{
						src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
						alt: "Church Community"
					}
				]}
			/>

			<ImageWithTextBlock
				backgroundColor="#F8F4F0"
				title="We are a church that walks with you."
				titleColor="#365A69"
				titleStyle="script"
				sections={[
					{
						text: "Short paragraph on:",
						items: [
							"• being part of the ancient church",
							"• faithfulness to tradition",
							"• pastoral care, patience, and hospitality"
						],
						textColor: "#fca5a5"
					},
					{
						heading: "Qualifying statement",
						headingColor: "#fca5a5",
						text: "Short paragraph on:",
						items: [
							"• apostolic faith",
							"• living parish community",
							"• guided by clergy and prayer, not trends"
						],
						textColor: "#6b7280"
					}
				]}
				image={{
					src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
					alt: "Church Life",
					position: "right"
				}}
				buttonText="What to Expect on Sunday"
				buttonColor="#8B9A6B"
			/>


			<QuickLinksGrid
				title="Quick Links"
				links={[
					{
						image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
						alt: "Contact Us",
						buttonText: "Contact Us",
						buttonColor: "#8B9A6B"
					},
					{
						image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
						alt: "Donate",
						buttonText: "Donate",
						buttonColor: "#8B9A6B"
					},
					{
						image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
						alt: "Join Us Online",
						buttonText: "Join Us Online",
						buttonColor: "#8B9A6B"
					}
				]}
			/>

			<IconWithTextGrid
				title="What You'll Find Here"
				items={[
					{
						icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
						alt: "Ancient Worship",
						title: "Ancient Worship",
						description: "Rooted in scripture, tradition, and the life of the early church"
					},
					{
						icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
						alt: "Christ at the Center",
						title: "Christ at the Center",
						description: "Everything we do is oriented toward our Savior, the God-Man, Jesus Christ"
					},
					{
						icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
						alt: "Living Community",
						title: "Living Community",
						description: "Shared meals, feasts, prayer, and spiritual formation"
					}
				]}
			/>

			<BannerImage
				src="/censor-banner.png"
				alt="Censor Banner"
			/>

			{/* Footer Info Section */}
			<section className="py-12 bg-blue">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="grid md:grid-cols-3 gap-8 text-cream">
						<div>
							<h3 className="font-heading text-lg mb-4 uppercase tracking-wide">
								Address
							</h3>
							<p className="font-body text-sm">
								5910 E. 5th Street
								<br />
								Tucson, Arizona 85711
							</p>
						</div>
						<div>
							<h3 className="font-heading text-lg mb-4 uppercase tracking-wide">
								Contact
							</h3>
							<p className="font-body text-sm">
								(520) 622-2265
								<br />
								info@holyresurrectiontucson.org
							</p>
						</div>
						<div>
							<h3 className="font-heading text-lg mb-4 uppercase tracking-wide">
								Service Times
							</h3>
							<p className="font-body text-sm">
								Saturday: 6:00 PM Vespers
								<br />
								Sunday: 10:00 AM Divine Liturgy
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Image Modal */}
			{selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
					onClick={() => setSelectedImage(null)}
				>
					<div className="relative max-w-4xl max-h-screen p-4">
						<img
							src={selectedImage}
							alt="Church Life - Full Size"
							className="w-full h-full object-contain rounded-lg"
							onClick={(e) => e.stopPropagation()}
						/>
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute top-4 right-4 text-white bg-red bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
