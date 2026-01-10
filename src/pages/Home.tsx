import { useState } from "react";

export function Home() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className="bg-red">
			{/* Hero Carousel Section */}
			<section className="bg-red py-16 relative overflow-hidden">
				<div className="w-full px-4">
					<div className="relative max-w-screen-2xl mx-auto">
						{/* Carousel Images - These will rotate */}
						<div className="flex justify-center items-center space-x-8">
							{[
								{
									src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
									size: "w-96 h-[28rem]",
								},
								{
									src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
									size: "w-96 h-[28rem]",
								},
								{
									src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=600&fit=crop",
									size: "w-96 h-[28rem]",
								},

								{
									/* Static Center Icon - Never Changes */
								},

								{
									src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=600&fit=crop",
									size: "w-96 h-[28rem]",
								},
								{
									src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=600&fit=crop",
									size: "w-96 h-[28rem]",
								},
								{
									src: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=400&h=600&fit=crop",
									size: "w-96 h-[28rem]",
								},
							].map((item, index) => {
								if (index === 3) {
									// Static center with rays
									return (
										<div key="center" className="w-[36rem] h-[36rem] relative">
											{/* Golden Rays - positioned to sprout from the arch edges, behind other images */}
											<div className="absolute inset-0 z-0 -m-40">
												{[...Array(32)].map((_, rayIndex) => {
													// Generate random segments for each ray
													const segments = [];
													let currentPos = 0;
													while (currentPos < 240) {
														const segmentLength = 3 + Math.random() * 8; // Random length 3-11px
														const gapLength = 2 + Math.random() * 6; // Random gap 2-8px
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
																height: "240px",
																left: "50%",
																top: "27%",
																transformOrigin: "0 0",
																transform: `rotate(${
																	rayIndex * 11.25
																}deg) translateY(-140px) translateX(-1px)`,
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
												className="w-full h-full transition-all duration-500 hover:scale-105 cursor-pointer relative z-10"
												onClick={() =>
													setSelectedImage(
														"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
													)
												}
											>
												<div className="w-full h-full rounded-t-full rounded-b-lg shadow-lg p-3" style={{backgroundColor: '#e8ca8b'}}>
													<img
														src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
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
										className={`${item.size} transition-all duration-500 hover:scale-105 cursor-pointer`}
										onClick={() => setSelectedImage(item.src)}
									>
										<div className="w-full h-full rounded-t-full rounded-b-lg shadow-lg p-3" style={{backgroundColor: '#e8ca8b'}}>
											<img
												src={item.src}
												alt="Church Life"
												className="w-full h-full object-cover rounded-t-full rounded-b-lg"
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Main Hero Section */}
			<section className="bg-red py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="font-heading text-5xl md:text-7xl text-cream mb-8">
						HOLY RESURRECTION ANTIOCHIAN ORTHODOX CHURCH
					</h1>
					<p className="font-quote text-2xl text-cream/90 italic mb-12 max-w-3xl mx-auto">
						Divine Liturgy Sunday 10am
					</p>

					<div className="bg-cream/10 backdrop-blur-sm rounded-lg p-8 max-w-lg mx-auto">
						<img
							src="/father-gabriel-portrait.jpg"
							alt="Fr. Gabriel"
							className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-cream"
						/>
						<h3 className="font-heading text-xl text-cream mb-2">
							Fr. Gabriel Bilas
						</h3>
						<p className="font-body text-cream/90">Pastor</p>
					</div>
				</div>
			</section>

			{/* Biographical Section */}
			<section className="py-16 bg-cream">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						<div>
							<h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">
								Brief Bio
							</h2>
							<div className="font-body text-rust leading-relaxed space-y-4 text-sm">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur.
								</p>
								<p>
									Excepteur sint occaecat cupidatat non proident, sunt in culpa
									qui officia deserunt mollit anim id est laborum. Sed ut
									perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium.
								</p>
								<p>
									Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
									et quasi architecto beatae vitae dicta sunt explicabo. Nemo
									enim ipsam voluptatem quia voluptas sit aspernatur aut odit
									aut fugit.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<img
								src="/bio-photo-1.jpg"
								alt="Church Photo 1"
								className="w-full h-32 object-cover rounded"
							/>
							<img
								src="/bio-photo-2.jpg"
								alt="Church Photo 2"
								className="w-full h-32 object-cover rounded"
							/>
							<img
								src="/bio-photo-3.jpg"
								alt="Church Photo 3"
								className="w-full h-32 object-cover rounded"
							/>
							<img
								src="/bio-photo-4.jpg"
								alt="Church Photo 4"
								className="w-full h-32 object-cover rounded"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Life as a Church Section */}
			<section className="py-16 bg-rust">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="text-center">
							<img
								src="/church-couple-photo.jpg"
								alt="Church Life"
								className="w-full max-w-md mx-auto rounded-lg shadow-lg"
							/>
						</div>

						<div>
							<h2 className="font-quote text-3xl text-cream mb-6 italic leading-tight">
								Life as a church that meets
								<br />
								with Jesus
							</h2>
							<div className="font-body text-cream leading-relaxed space-y-4 text-sm">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<p>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
								</p>
							</div>

							<button className="mt-6 bg-cream text-rust font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-cream/90 transition-colors">
								Read More
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* What's New Here Section */}
			<section className="py-16 bg-blue">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-heading text-3xl text-cream text-center mb-12 uppercase tracking-wide">
						What's New Here
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								image: "/news-photo-1.jpg",
								title: "Lorem ipsum dolor sit",
							},
							{
								image: "/news-photo-2.jpg",
								title: "Consectetur adipiscing elit",
							},
							{
								image: "/news-photo-3.jpg",
								title: "Sed do eiusmod tempor",
							},
						].map((news, index) => (
							<div key={index} className="text-center">
								<img
									src={news.image}
									alt={news.title}
									className="w-full h-48 object-cover rounded mb-4"
								/>
								<h3 className="font-body text-cream text-sm">{news.title}</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Principal Saint Visit Section */}
			<section className="py-16 bg-green">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-heading text-3xl text-cream mb-8 uppercase tracking-wide">
						Principal Saint Visit
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ name: "SAINT NICHOLAS", image: "/saint-icon-1.jpg" },
							{ name: "SAINT MARY", image: "/saint-icon-2.jpg" },
							{ name: "SAINT JOHN", image: "/saint-icon-3.jpg" },
						].map((saint, index) => (
							<div key={index} className="text-center">
								<img
									src={saint.image}
									alt={saint.name}
									className="w-32 h-40 mx-auto rounded mb-4 object-cover"
								/>
								<h3 className="font-body text-cream text-sm uppercase tracking-wide">
									{saint.name}
								</h3>
							</div>
						))}
					</div>
				</div>
			</section>

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
