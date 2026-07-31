"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useTheme } from "@/components/ThemeProvider"

export default function HeroProfileCard() {
  const { theme } = useTheme()

  // 3D Tilt Effect Motion Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring settings for smooth physics
  const springConfig = { damping: 20, stiffness: 120 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig)

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
    <div 
      className="relative flex items-center justify-center p-4 w-full max-w-[340px] md:max-w-[380px] aspect-[3/4] mx-auto z-20 pointer-events-auto"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative rounded-[32px] bottom-20 glass-panel border border-border/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-100 hover:border-accent/40"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/8 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

        {/* Profile Card Header
        <div className="flex items-center justify-between z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
            <Cpu className="w-4 h-4" />
            <span>SYS_SYS // ID</span>
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div> */}

        {/* Profile Image Wrap */}
        <div 
          className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border/40 bg-secondary/20 shadow-inner group mt-4 z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <Image
            src="/profile.jpg"
            alt="Gifriend Yedija"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Profile Metadata */}
        <div 
          className="space-y-2  text-left z-10"
          style={{ transform: "translateZ(35px)" }}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground uppercase">
              Gifriend Y. Talumingan
            </h3>
            <p className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-widest mt-0.5">
              Full Stack Developer
            </p>
          </div>

          {/* <div className="border-t border-border/40 pt-2.5 flex justify-between items-end">
            <div className="space-y-0.5">
              <p className="text-[9px] uppercase tracking-wider text-muted font-bold">University</p>
              <p className="text-xs font-semibold text-foreground/90">UNSRAT Manado</p>
              <p className="text-[10px] text-muted font-medium">Informatics Eng.</p>
            </div>
            <div className="text-foreground/40 hover:text-accent transition-colors">
              <QrCode className="w-8 h-8" />
            </div>
          </div> */}
        </div>

        {/* Futuristic barcode line */}
        {/* <div 
          className="w-full flex items-center justify-center gap-0.5 border-t border-border/25 pt-4 mt-2 h-7 overflow-hidden opacity-50 z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          {[...Array(32)].map((_, i) => (
            <div
              key={i}
              className="bg-foreground"
              style={{
                width: i % 3 === 0 ? "2px" : i % 5 === 0 ? "4px" : "1px",
                height: i % 2 === 0 ? "100%" : "60%",
              }}
            />
          ))}
        </div> */}
      </motion.div>
    </div>
  )
}
