"use client";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { cn } from '@/lib/utils';
import Image from "next/image";

interface AnimateBodyProps {
  text: string;
  className?: string;
  delay?: number;
}

interface Tech {
  id: number;
  name: string;
  imageUrl: string;
}

interface TechCategory {
  title: string;
  techs: Tech[];
}

export default function AnimateBody({
  text,
  // className,
  delay,
}: AnimateBodyProps) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const ctrls = useAnimation();

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `0.5em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };
  const techCategories: TechCategory[] = [
    {
      title: "Mobile Development",
      techs: [
        { id: 1, name: "Flutter", imageUrl: "/flutter.png" },
        { id: 2, name: "Dart", imageUrl: "/dart.png" },
      ],
    },
    {
      title: "Frontend Development",
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
      techs: [
        { id: 15, name: "Firebase", imageUrl: "/firebase.png" },
        { id: 16, name: "Supabase", imageUrl: "/Supabase.svg" },
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
  }, [ctrls, inView]);

  return (
    <>
      <motion.p
        role="heading"
        className="text-2xl font-bold text-strt md:text-3xl lg:text-4xl xl:text-5xl"
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
        variants={bodyAnimation}
        ref={ref}
      >
        {text}
      </motion.p>
      <div className="px-5 py-10 md:px-12 text-amber-50 mx-3 space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category Title */}
            <h3 className="mb-6 text-xl font-semibold text-foreground md:text-2xl">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {category.techs.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardAnimation}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-zinc-700 px-3 py-3 bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl transition-all">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Image
                        alt={item.name}
                        width={40}
                        height={40}
                        src={item.imageUrl}
                      />
                    </div>

                    <span className="font-medium text-gray-800 dark:text-zinc-200">
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
