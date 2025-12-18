"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
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
        className="absolute left-0 top-[50%] hidden h-[121px] w-[250px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-white dark:bg-zinc-800 px-5 lg:flex shadow-lg border border-gray-200 dark:border-zinc-700"
      >
        <p className="text-md font-medium text-gray-700 dark:text-zinc-200">
          Locate
        </p>
        <p className="text-md font-medium text-gray-700 dark:text-zinc-200">
          in Manado
        </p>
        <p className="text-md font-medium text-gray-700 dark:text-zinc-200">
          North Sulawesi, Indonesia
        </p>
      </motion.div>
    </motion.section>
  )
}
