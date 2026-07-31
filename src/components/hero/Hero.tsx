"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
import HeroProfileCard from "./HeroProfileCard"

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-background bg-grid-pattern pt-28 pb-12"
      initial="initial"
      animate="animate"
    >
      {/* Background radial gradient glow spots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-accent/10 blur-[100px] dark:bg-accent/5" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-accent-blue/10 blur-[120px] dark:bg-accent-blue/5" />
      </div>

      {/* Lightweight Ambient 3D canvas behind the columns */}
      <div className="absolute inset-0 w-full h-full z-10 opacity-20 md:opacity-30 pointer-events-auto">
        <HeroGraphic />
      </div>

      {/* Main Grid: Split Layout */}
      <div className="relative z-20 w-[90%] lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-50 items-center my-auto pointer-events-none select-none">
        {/* Left Side: Copywriting */}
        <HeroText />
        
        {/* Right Side: Interactive 3D Profile ID Card */}
        <HeroProfileCard />
      </div>

      {/* Scrolling Text lanes */}
      <div className="w-full overflow-hidden z-20 mt-8">
        <ParallaxText direction={200} baseVelocity={-0.4}>
          Creative Developer UI/UX Architect Web Engineer Mobile Tech Solutions System Analyst
        </ParallaxText>
      </div>
    </motion.section>
  )
}
