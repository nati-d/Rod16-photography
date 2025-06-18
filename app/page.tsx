"use client"
import Image from "next/image";
import HeroSection from "@/components/hero";
import { useScroll } from "@/hooks/use-scroll";
import WeddingShowcase from "@/components/weeding-showcase";

export default function Home() {
  const {heroOpacity, heroScale, contentTranslateY} = useScroll();
  return (
    <div>
      <HeroSection opacity={heroOpacity} scale={heroScale} />
      <div className="h-screen" />

      {/* Scrolling Content */}
      <div
        className="relative z-20 bg-background"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        <WeddingShowcase />
      </div>
      <h1>Hello World</h1>
    </div>
  );
}
