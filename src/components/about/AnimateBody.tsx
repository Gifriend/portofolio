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
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
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
          {techData.map((item) => (
            <div key={item.id}>
              <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-white px-2 py-1 bg-zinc-200 dark:bg-zinc-900 hover:opacity-70 md:gap-3 lg:px-3">
                <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <Image
                    alt={item.name}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    src={item.imageUrl}
                  />
                </div>
                <div className="flex items-center text-sm md:text-base lg:text-lg">
                  <div className="tech font-medium text-white transition-all duration-300 translate-y-0">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
