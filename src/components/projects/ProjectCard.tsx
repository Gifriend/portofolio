"use client"

import { LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  // 3D Tilt Effect Motion Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring settings for smooth damping physics
  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig)

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left - width / 2
    const mouseY = event.clientY - rect.top - height / 2
    x.set(mouseX / width)
    y.set(mouseY / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={projectLink} className="block w-full">
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardAnimation}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative z-10 w-full min-h-[500px] md:h-[480px] flex flex-col md:flex-row items-stretch justify-center rounded-3xl glass-panel border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/40"
      >
        {/* Glow overlay inside the card */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Content Section */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative z-20 flex flex-col justify-between p-6 md:p-10 w-full md:w-1/2"
        >
          {/* Header Link Info */}
          <motion.div
            variants={projectCardLinksAnimation}
            className="flex items-center justify-start gap-4 mb-4"
          >
            <span
              className="p-2.5 rounded-xl bg-secondary border border-border text-foreground hover:text-accent transition-all duration-300 shadow-sm"
              aria-label="Open Live Demo"
            >
              <LinkIcon className="h-5 w-5 text-foreground" />
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary/50 rounded-full border border-border/40 text-muted"
            >
              Live Project
            </span>
          </motion.div>

          {/* Text Info */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-foreground">
              <motion.span variants={projectCardTitleAnimation} className="block">
                {title}
              </motion.span>
            </h3>

            <p className="text-sm md:text-base font-medium text-muted leading-relaxed">
              <motion.span variants={projectCardDescriptionAnimation} className="block">
                {description}
              </motion.span>
            </p>

            <motion.div
              variants={projectCardTechAnimation}
              className="flex flex-wrap gap-2 pt-2"
            >
              {tech.map((techItem, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-border/40 bg-secondary/40 text-foreground/80 hover:bg-secondary transition-all duration-200"
                >
                  {techItem}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={projectCardImageAnimation}
          style={{ transform: "translateZ(40px)" }}
          className="relative w-full md:w-1/2 h-[260px] md:h-full flex items-center justify-center p-6 bg-secondary/10"
        >
          <div
            className="relative w-full h-full overflow-hidden rounded-2xl border border-border/40 shadow-inner bg-background/50 flex items-center justify-center"
          >
            <Image
              width={1000}
              height={600}
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}
