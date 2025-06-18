"use client"

import { useState, useEffect, useCallback } from "react"
import type { Testimonial } from "@/types"

interface UseTestimonialsProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
  autoPlay?: boolean
}

export function useTestimonials({ testimonials, autoPlayInterval = 8000, autoPlay = false }: UseTestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index)
  }, [])

  const pauseCarousel = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const playCarousel = useCallback(() => {
    setIsPlaying(true)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(nextTestimonial, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isPlaying, nextTestimonial, autoPlayInterval])

  return {
    currentTestimonial,
    isPlaying,
    nextTestimonial,
    prevTestimonial,
    goToTestimonial,
    pauseCarousel,
    playCarousel,
    totalTestimonials: testimonials.length,
  }
}
