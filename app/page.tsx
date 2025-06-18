"use client"
import Image from "next/image";
import HeroSection from "@/components/hero";
import { useScroll } from "@/hooks/use-scroll";

export default function Home() {
  const {heroOpacity, heroScale} = useScroll();
  return (
    <div>
      <HeroSection opacity={heroOpacity} scale={heroScale} />
      <div className="h-screen" />
      <h1>Hello World</h1>
    </div>
  );
}
