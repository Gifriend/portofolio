"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function ProjectTitleAnimate() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const projectTitleAnimation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      aria-hidden="true"
      variants={projectTitleAnimation}
      className="flex w-full items-center justify-between mb-10 md:mb-16"
    >
      <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-accent">
        Recent Projects
      </h2>
      <div
        className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase md:text-base rounded-full border border-border bg-secondary/80 text-foreground shadow-sm flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span>8 Works</span>
      </div>
    </motion.div>
  )
}
