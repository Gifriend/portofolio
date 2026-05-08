"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial="initial"
      animate="animate"
    >
      <HeroGraphic />
      <HeroText />
      <div className="mt-10 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          Mobile Developer Frontend Web Developer Backend Web Developer
        </ParallaxText>
        <ParallaxText direction={-500} baseVelocity={1}>
          Mobile Developer Frontend Web Developer Backend Web Developer
        </ParallaxText>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[50%] hidden h-auto w-[280px] flex-col items-start justify-center px-6 py-5 lg:flex"
        style={{
          border: 'var(--nb-border)',
          boxShadow: 'var(--nb-shadow-lg)',
          background: 'var(--accent)',
          color: 'var(--foreground)',
          borderRadius: '0 12px 12px 0',
        }}
      >
        <p className="text-sm font-black uppercase tracking-wider">
          📍 Located in
        </p>
        <p className="text-lg font-bold">
          Manado
        </p>
        <p className="text-sm font-semibold">
          North Sulawesi, Indonesia
        </p>
      </motion.div>
    </motion.section>
  )
}
