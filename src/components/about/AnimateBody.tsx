"use client"

import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Smartphone, Monitor, Database, Settings } from "lucide-react"

interface AnimateBodyProps {
  text: string
  delay?: number
}

interface Tech {
  id: number
  name: string
  imageUrl: string
}

interface TechCategory {
  title: string
  color: string
  gradient: string
  icon: React.ComponentType<{ className?: string }>
  techs: Tech[]
}

export default function AnimateBody({ text, delay }: AnimateBodyProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const cardAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 10,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.03,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const techCategories: TechCategory[] = [
    {
      title: "Mobile Development",
      color: "text-accent-pink",
      gradient: "from-accent-pink/10 via-transparent to-transparent",
      icon: Smartphone,
      techs: [
        { id: 1, name: "Flutter", imageUrl: "/flutter.png" },
        { id: 2, name: "Dart", imageUrl: "/dart.png" },
      ],
    },
    {
      title: "Frontend Development",
      color: "text-accent",
      gradient: "from-accent/10 via-transparent to-transparent",
      icon: Monitor,
      techs: [
        { id: 3, name: "Next.js", imageUrl: "/next.svg" },
        { id: 4, name: "Vite", imageUrl: "/vite-logo.png" },
        {
          id: 5,
          name: "React",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
        {
          id: 6,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          id: 7,
          name: "Bootstrap",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        },
        {
          id: 8,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        },
        {
          id: 9,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        },
      ],
    },
    {
      title: "Backend Development",
      color: "text-accent-blue",
      gradient: "from-accent-blue/10 via-transparent to-transparent",
      icon: Database,
      techs: [
        { id: 10, name: "NestJS", imageUrl: "/Nest.js.png" },
        { id: 11, name: "Laravel", imageUrl: "/Laravel.svg" },
        { id: 12, name: "Prisma", imageUrl: "/Prisma.png" },
        { id: 13, name: "PostgreSQL", imageUrl: "/postgree.png" },
        { id: 14, name: "MariaDB", imageUrl: "/mariadb.png" },
      ],
    },
    {
      title: "Tools & Services",
      color: "text-accent-lime",
      gradient: "from-accent-lime/10 via-transparent to-transparent",
      icon: Settings,
      techs: [
        { id: 15, name: "Firebase", imageUrl: "/firebase.png" },
        { id: 16, name: "Supabase", imageUrl: "/Supabase.svg" },
      ],
    },
  ]

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  return (
    <div className="py-6" ref={ref}>
      <motion.p
        role="heading"
        className="text-xl font-bold uppercase tracking-widest text-start mb-6 text-foreground"
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
        variants={bodyAnimation}
      >
        {text}
      </motion.p>
      
      {/* Bento Layout of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="rounded-3xl glass-panel p-6 flex flex-col justify-between overflow-hidden relative group hover:border-foreground/20 transition-all duration-300"
          >
            {/* Ambient Corner Gradient */}
            <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-xl pointer-events-none`} />

            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-secondary/50 ${category.color} border border-border/30`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List as Glowing Pill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.techs.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate={ctrls}
                    variants={cardAnimation}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2.5 px-4 py-2 border border-border/60 bg-secondary/20 hover:bg-secondary/60 text-foreground text-xs font-semibold rounded-2xl transition-all duration-300"
                  >
                    <div className="flex h-5 w-5 items-center justify-center shrink-0">
                      <Image
                        alt={item.name}
                        width={20}
                        height={20}
                        src={item.imageUrl}
                        className="object-contain"
                      />
                    </div>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
