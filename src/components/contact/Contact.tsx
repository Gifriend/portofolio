"use client"

import { motion } from "framer-motion"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
// import Guestbook from "./Guestbook"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 w-full px-4 md:px-6 lg:px-8 bg-background bg-grid-pattern"
    >
      {/* Background decoration blur circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-accent font-bold uppercase tracking-wider text-xs md:text-sm">Contact & Community</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-accent pb-1">
            Let&apos;s Connect
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Shoot me an email, connect on social media, or leave a public comment in my guestbook below!
          </p>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          {/* Left Column: Info & Form */}
          <div className="flex flex-col justify-between gap-8">
            <ContactInfo />
            
          </div>

          {/* Right Column: Guestbook comments board */}
          <div className="w-full h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
