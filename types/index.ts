import type React from "react"
export interface NavItem {
  name: string
  href: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface GalleryItem {
  id: number
  title: string
  subtitle: string
  imageUrl: string
}

export interface ScrollState {
  scrollY: number
  scrollProgress: number
  heroOpacity: number
  heroScale: number
  contentTranslateY: number
  navbarOpacity: number
  navbarBlur: number
}

export interface SectionProps {
  className?: string
}

export interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  primaryCTA: string
  secondaryCTA: string
}

export interface CarouselState {
  currentSlide: number
  isPlaying: boolean
  slides: CarouselSlide[]
}
