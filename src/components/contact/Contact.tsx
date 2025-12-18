"use client"

import { motion } from "framer-motion"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-zinc-100">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
