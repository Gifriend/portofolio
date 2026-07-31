"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimateWordsProps {
  title: string
  className?: string
}

export const AnimateWords = ({ title, className }: AnimateWordsProps) => {
  const ctrls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("animate")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1], // premium out-expo easing
        duration: 1.2,
      },
    },
  }

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden text-center text-[42px] font-black leading-[1.05em] tracking-tight uppercase sm:text-[64px] md:text-[85px] lg:text-[120px] xl:text-[140px]",
          className
        )}
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            transition={{
              delayChildren: index * 0.15,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center lg:justify-start overflow-hidden py-2"
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-accent inline-block pb-2"
              variants={wordAnimation}
            >
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  )
}
