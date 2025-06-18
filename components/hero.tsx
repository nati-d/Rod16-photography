"use client";

import {useCarousel} from "@/hooks/use-carousel";
import {imageSlides} from "@/data/carousel-slides";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function HeroSection() {
	const {currentSlide, nextSlide, prevSlide, goToSlide, pauseCarousel, playCarousel, totalSlides} = useCarousel({slides: imageSlides});

	const currentSlideData = imageSlides[currentSlide];

	return (
		<div className='fixed inset-0 z-10 h-screen w-screen'>
			<div
				className='relative h-[100vh] w-full bg-black/80 flex items-center justify-center transition-all duration-1000 ease-in-out'
				onMouseEnter={pauseCarousel}
				onMouseLeave={playCarousel}
			>
				<Image
					src={currentSlideData.url}
					alt={currentSlideData.alt}
					fill
					style={{objectFit: "cover"}}
					priority
				/>
				{/* Prev Arrow */}
				<button
					className='absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-200 focus:outline-none'
					onClick={prevSlide}
					aria-label='Previous slide'
				>
					<ChevronLeft className='h-10 w-10' />
				</button>
				{/* Next Arrow */}
				<button
					className='absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-200 focus:outline-none'
					onClick={nextSlide}
					aria-label='Next slide'
				>
					<ChevronRight className='h-10 w-10' />
				</button>
				{/* Carousel Controls */}
				<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
					{imageSlides.map((_, idx) => (
						<button
							key={idx}
							className={`h-2 w-6 rounded-full transition-all duration-300 ${
								idx === currentSlide ? "bg-primary/90 scale-110" : "bg-primary/40 hover:bg-primary/70"
							}`}
							onClick={() => goToSlide(idx)}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
