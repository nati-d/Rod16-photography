"use client";

import {useState, useEffect, useCallback} from "react";

interface UseCarouselProps<T> {
	slides: T[];
	autoPlayInterval?: number;
	autoPlay?: boolean;
}

export function useCarousel<T>({slides, autoPlayInterval = 5000, autoPlay = true}: UseCarouselProps<T>) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(autoPlay);

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	}, [slides.length]);

	const prevSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	}, [slides.length]);

	const goToSlide = useCallback((index: number) => {
		setCurrentSlide(index);
	}, []);

	const pauseCarousel = useCallback(() => {
		setIsPlaying(false);
	}, []);

	const playCarousel = useCallback(() => {
		setIsPlaying(true);
	}, []);

	const togglePlayPause = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	// Auto-play functionality
	useEffect(() => {
		if (!isPlaying) return;

		const interval = setInterval(nextSlide, autoPlayInterval);
		return () => clearInterval(interval);
	}, [isPlaying, nextSlide, autoPlayInterval]);

	return {
		currentSlide,
		isPlaying,
		nextSlide,
		prevSlide,
		goToSlide,
		pauseCarousel,
		playCarousel,
		togglePlayPause,
		totalSlides: slides.length,
	};
}
