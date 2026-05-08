"use client";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  projectLink: string;
}

const accentColors = [
  'var(--accent)',
  'var(--accent-pink)',
  'var(--accent-blue)',
  'var(--accent-orange)',
  'var(--accent-lime)',
  'var(--accent-purple)',
];

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  // Generate a consistent color based on title
  const colorIndex = title.length % accentColors.length;
  const accentColor = accentColors[colorIndex];

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <Link href={projectLink}>
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardAnimation}
        aria-hidden="true"
        className="group relative z-10 h-auto min-h-[550px] md:h-[550px] w-full flex flex-col md:flex-row items-stretch justify-center overflow-hidden transition-all duration-200"
        style={{
          border: 'var(--nb-border)',
          boxShadow: 'var(--nb-shadow-lg)',
          background: 'var(--card-bg)',
        }}
        whileHover={{
          x: -4,
          y: -4,
          boxShadow: "10px 10px 0px var(--shadow-color)",
        }}
      >
        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-2 z-30"
          style={{ background: accentColor }}
        />

        {/* Content Section */}
        <div className="relative z-20 flex flex-col justify-between p-6 md:p-8 lg:p-10 w-full md:w-1/2 pt-8">
          {/* Header with icons */}
          <motion.div
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardLinksAnimation}
            aria-hidden="true"
            className="flex items-center justify-start gap-4 mb-6"
          >
            <span
              className="p-2.5 transition-all duration-200"
              style={{
                border: 'var(--nb-border)',
                boxShadow: 'var(--nb-shadow)',
                background: accentColor,
              }}
              aria-label="Open Live Demo"
            >
              <LinkIcon className="h-5 w-5 md:h-6 md:w-6 text-[--foreground]" />
            </span>
            <span
              className="text-xs font-black uppercase tracking-widest px-3 py-1"
              style={{
                border: '2px solid var(--border)',
                background: 'var(--card-bg)',
              }}
            >
              Live Project →
            </span>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-foreground max-w-full">
              <motion.span
                ref={ref}
                animate={ctrls}
                initial="hidden"
                variants={projectCardTitleAnimation}
                aria-hidden="true"
                className="text-foreground"
              >
                {title}
              </motion.span>
            </h3>

            <p className="text-sm md:text-base font-medium text-foreground max-w-full leading-relaxed">
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
                  className="px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[--foreground] transition-all duration-200"
                  style={{
                    border: '2px solid var(--border)',
                    boxShadow: '2px 2px 0px var(--shadow-color)',
                    background: index % 2 === 0 ? 'var(--card-bg)' : accentColor,
                  }}
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
          <div
            className="relative w-full h-full overflow-hidden transition-all duration-200"
            style={{
              border: 'var(--nb-border)',
              boxShadow: 'var(--nb-shadow)',
            }}
          >
            <Image
              width={1000}
              height={600}
              src={image}
              alt={title}
              className="w-full h-full object-cover md:object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
