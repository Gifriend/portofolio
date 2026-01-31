"use client"
import { LinkIcon, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { motion, useAnimation, useInView } from "framer-motion"
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
  // repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  // repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className="group relative z-10 h-auto min-h-[550px] md:h-[550px] w-full flex flex-col md:flex-row items-stretch justify-center overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-700 bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.02]"
    >
      {/* Content Section */}
      <div className="relative z-20 flex flex-col justify-between p-6 md:p-8 lg:p-10 w-full md:w-1/2">
        {/* Header with icons */}
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardLinksAnimation}
          aria-hidden="true"
          className="flex items-center justify-start gap-4 mb-6"
        >
          <Sparkles className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-gray-900 dark:text-zinc-100 group-hover:rotate-12 transition-transform duration-300" />
          <Link
            href={projectLink}
            target="_blank"
            className="rounded-full bg-gray-800 dark:bg-zinc-100 p-2 md:p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-700 dark:hover:bg-zinc-200 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Open Live Demo"
          >
            <LinkIcon className="h-5 w-5 text-white dark:text-zinc-800 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          </Link>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-zinc-100 max-w-full">
            <motion.span
              ref={ref}
              animate={ctrls}
              initial="hidden"
              variants={projectCardTitleAnimation}
              aria-hidden="true"
              className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent"
            >
              {title}
            </motion.span>
          </h3>
          
          <p className="text-sm md:text-base font-medium text-gray-600 dark:text-zinc-400 max-w-full leading-relaxed">
            <motion.span
              ref={ref}
              animate={ctrls}
              initial="hidden"
              variants={projectCardDescriptionAnimation}
              aria-hidden="true"
            >
              {description}
            </motion.span>
          </p>
          
          <motion.div
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTechAnimation}
            aria-hidden="true"
            className="flex flex-wrap gap-2 md:gap-3 pt-2"
          >
            {tech.map((techItem, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs md:text-sm font-semibold text-gray-700 dark:text-zinc-300 bg-gray-100 dark:bg-zinc-700 rounded-full border border-gray-200 dark:border-zinc-600 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors duration-200"
              >
                {techItem}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        aria-hidden="true"
        className="relative w-full md:w-1/2 h-[250px] md:h-full flex items-center justify-center p-4 md:p-6"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
          <Image
            width={1000}
            height={600}
            src={image}
            alt={title}
            className="w-full h-full object-cover md:object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Gradient overlay for better image blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent dark:from-zinc-900/20 pointer-events-none rounded-xl" />
        </div>
      </motion.div>
    </motion.div>
  )
}
