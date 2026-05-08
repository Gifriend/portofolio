"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "gifriendt@gmail.com",
    href: "mailto:gifriendt@gmail.com",
    color: "var(--accent-pink)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manado, North Sulawesi, Indonesia",
    href: null,
    color: "var(--accent-blue)",
  }
]

const socialMedia = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Gifriend",
    color: "var(--accent)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gifriendtalumingan/",
    color: "var(--accent-blue)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gifriendt_/",
    color: "var(--accent-pink)",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/gifriend",
    color: "var(--accent-orange)",
  }
]

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export default function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4"
        >
          Let&apos;s Talk
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="leading-relaxed font-medium"
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
          Feel free to reach out through any of the channels below.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="space-y-5">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-200"
              style={{
                border: 'var(--nb-border)',
                boxShadow: 'var(--nb-shadow)',
                background: detail.color,
              }}
            >
              <detail.icon className="w-5 h-5 text-[--foreground]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider mb-1">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="font-semibold hover:underline underline-offset-4 decoration-[3px] decoration-[--accent] transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="font-semibold">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="pt-8">
        <h4
          className="text-sm font-black uppercase tracking-wider mb-5 px-3 py-1.5 inline-block"
          style={{
            border: 'var(--nb-border)',
            boxShadow: 'var(--nb-shadow)',
            background: 'var(--accent-lime)',
            color: 'var(--foreground)',
          }}
        >
          Follow Me
        </h4>
        <div className="flex space-x-3">
          {socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 3, y: 3 }}
              className="w-12 h-12 flex items-center justify-center text-[--foreground] transition-all duration-200"
              style={{
                border: 'var(--nb-border)',
                boxShadow: 'var(--nb-shadow)',
                background: social.color,
              }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
