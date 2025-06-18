"use client"

import { useEffect, useState } from "react"
import type { ScrollState } from "@/types"

export function useScroll(): ScrollState {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate scroll progress for animations
  const scrollProgress = Math.min(scrollY / (typeof window !== "undefined" ? window.innerHeight : 1000), 1)
  const heroOpacity = 1 - scrollProgress * 0.8
  const heroScale = 1 - scrollProgress * 0.1
  const contentTranslateY = typeof window !== "undefined" ? Math.max(0, window.innerHeight - scrollY) : 0

  // Navbar scroll effects
  const navbarOpacity = Math.min(scrollProgress * 2, 0.95)
  const navbarBlur = Math.min(scrollProgress * 20, 20)

  return {
    scrollY,
    scrollProgress,
    heroOpacity,
    heroScale,
    contentTranslateY,
    navbarOpacity,
    navbarBlur,
  }
}
