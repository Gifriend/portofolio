"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'var(--background)' }}>
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main Loader - Neobrutalism style */}
        <motion.div
          className="relative w-24 h-24 flex items-center justify-center"
          style={{
            border: 'var(--nb-border)',
            boxShadow: 'var(--nb-shadow-lg)',
            background: 'var(--accent)',
          }}
          animate={{
            rotate: [0, 0, 90, 90, 180, 180, 270, 270, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-12 h-12"
            style={{
              border: 'var(--nb-border)',
              background: 'var(--accent-pink)',
            }}
            animate={{
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-lg font-black uppercase tracking-widest"
          style={{ color: 'var(--foreground)' }}
          animate={{
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>

        {/* Animated blocks */}
        <div className="flex gap-3">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="w-5 h-5"
              style={{
                border: '2px solid var(--border)',
                background: ['var(--accent)', 'var(--accent-pink)', 'var(--accent-blue)', 'var(--accent-orange)'][index],
              }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
