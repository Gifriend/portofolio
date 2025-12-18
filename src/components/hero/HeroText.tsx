import { AnimateWords } from "./AnimateWords"
import { motion } from "framer-motion"

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <AnimateWords
          title="GIFRIEND YEDIJA TALUMINGAN"
          style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-6 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 text-[var(--foreground)"
        />
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: `0em`,
            transition: {
              delay: 1.5,
              duration: 1,
              ease: [0.2, 0.65, 0.3, 0.9],
            },
          }}
          className="absolute bottom-8 mx-auto cursor-pointer md:bottom-20 xl:bottom-28 m-2.5"
        >
          {/* <Image
            src={"/imageProfile.jpg"}
            width={150}
            height={150}
            priority
            alt="Gifriend Yedija Talumingan"
            className="h-full w-[100px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
          /> */}
        </motion.div>
      </div>
    </div>
  )
}
