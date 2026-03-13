'use client';
import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// import { cn } from '@/lib/utils';
import Image from 'next/image';

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
  const techData: Tech[] = [
    {
      id: 1,
      name: 'HTML',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
    },
    {
      id: 2,
      name: 'CSS',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    },
    {
      id: 3,
      name: 'PHP',
      imageUrl:
        'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
    },
    {
      id: 4,
      name: 'Javascript',
      imageUrl:
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
    },
    {
      id: 5,
      name: 'Typescript',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    },
    {
      id: 6,
      name: 'ReactJS',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    },
    {
      id: 7,
      name: 'Vite',
      imageUrl: 'https://vitejs.dev/logo.svg',
    },
    {
      id: 8,
      name: 'Next.js',
      imageUrl: '/next.svg',
    },
    {
      id: 9,
      name: 'Flutter',
      imageUrl: '/flutter.png',
    },
    {
      id: 10,
      name: 'Dart',
      imageUrl: '/dart.png',
    },
    {
      id: 11,
      name: 'NestJS',
      imageUrl: '/Nest.js.png',
    },
    {
      id: 12,
      name: 'Tailwind',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    },
    {
      id: 13,
      name: 'Bootstrap',
      imageUrl:
        'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
    },
    {
      id: 14,
      name: 'PostgreSQL',
      imageUrl: '/postgree.png',
    },
    {
      id: 15,
      name: 'Firebase',
      imageUrl: '/firebase.png',
    },
    {
      id: 16,
      name: 'Prisma',
      imageUrl: '/Prisma.png',
    },
    {
      id: 17,
      name: 'Supabase',
      imageUrl: '/Supabase.svg',
    },
    {
      id: 18,
      name: 'Svelte',
      imageUrl: '/Svelte.svg',
    },
  ];

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
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
        ref={ref}>
        {text}
      </motion.p>
      <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
        <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
          {techData.map((item, index) => (
            <motion.div 
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="item-tech flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 dark:border-zinc-700 px-2 py-3 bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 md:gap-3 lg:px-3 lg:py-4 group relative overflow-hidden">
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-xl" />
                
                <div className="relative flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      alt={item.name}
                      width={50}
                      height={50}
                      loading="lazy"
                      className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%] group-hover:drop-shadow-2xl"
                      src={item.imageUrl}
                    />
                  </motion.div>
                </div>
                <div className="relative flex items-center text-sm md:text-base lg:text-lg">
                  <div className="tech font-semibold text-gray-800 dark:text-zinc-200 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {item.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
