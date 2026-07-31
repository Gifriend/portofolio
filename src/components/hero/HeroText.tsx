"use client"

import { AnimateWords } from "./AnimateWords"
import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export default function HeroText() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center w-full z-20">
      {/* Available for work badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted shadow-sm w-fit pointer-events-auto"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span>Available for Work</span>
      </motion.div>

      <div className="relative flex flex-col items-center lg:items-start justify-center">
        {/* We can pass custom classes to override centering */}
        <AnimateWords
          title="SOLVING PROBLEMS WITH CODE"
          className="text-center lg:text-left lg:items-start"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg font-medium text-muted max-w-xl mt-4 tracking-wide leading-relaxed"
        >
          A passionate <span className="text-foreground font-semibold">Full Stack Developer</span> & <span className="text-foreground font-semibold">Software Engineer</span> specializing in crafting premium web & mobile experiences.
        </motion.p>

        {/* Dynamic Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap gap-2.5 mt-6 justify-center lg:justify-start pointer-events-auto"
        >
          {["Flutter", "React", "Next.js", "NestJS", "TypeScript"].map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-border/80 bg-secondary/35 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 pointer-events-auto"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="px-5 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-accent-blue hover:brightness-110 shadow-lg shadow-accent/20 transition-all duration-300 flex items-center gap-2 group active:scale-95 cursor-pointer text-sm"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => handleScrollTo("#contact")}
            className="px-5 py-3 font-semibold text-foreground rounded-xl bg-secondary/80 hover:bg-secondary border border-border backdrop-blur-sm transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
