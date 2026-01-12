interface BannerImageProps {
	src: string;
	alt: string;
	className?: string;
}

export function BannerImage({ src, alt, className = "" }: BannerImageProps) {
	return (
		<section className={`w-full ${className}`}>
			<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
				<img
					src={src}
					alt={alt}
					className="w-full h-auto object-contain"
				/>
			</div>
		</section>
	);
}