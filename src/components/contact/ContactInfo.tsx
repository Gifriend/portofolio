"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "gifriendt@gmail.com",
    href: "mailto:gifriendt@gmail.com",
    glowColor: "shadow-accent-pink/20 border-accent-pink/30 text-accent-pink",
    bgClass: "bg-accent-pink/5",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manado, North Sulawesi, Indonesia",
    href: null,
    glowColor: "shadow-accent-blue/20 border-accent-blue/30 text-accent-blue",
    bgClass: "bg-accent-blue/5",
  }
]

const socialMedia = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Gifriend",
    hoverClass: "hover:border-accent hover:text-accent hover:shadow-accent/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gifriendtalumingan/",
    hoverClass: "hover:border-accent-blue hover:text-accent-blue hover:shadow-accent-blue/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gifriendt_/",
    hoverClass: "hover:border-accent-pink hover:text-accent-pink hover:shadow-accent-pink/20",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/gifriend",
    hoverClass: "hover:border-accent-orange hover:text-accent-orange hover:shadow-accent-orange/20",
  }
]

const containerVariants = {
  hidden: { opacity: 0, x: -30 },
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
          className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-foreground"
        >
          Let&apos;s Talk
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="leading-relaxed font-medium text-muted text-sm md:text-base"
        >
          Have questions or want to discuss a potential project? Shoot me an email or find me on social networks. I am always open to new connections and collaborations.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center space-x-4 p-4 rounded-2xl border border-border/40 bg-secondary/15"
          >
            <div
              className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border shadow-md transition-all duration-300 ${detail.bgClass} ${detail.glowColor}`}
            >
              <detail.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-0.5">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="font-bold text-foreground hover:text-accent transition-colors text-sm md:text-base hover:underline underline-offset-4 decoration-2"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="font-bold text-foreground text-sm md:text-base">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Social Media Link Icons */}
      <motion.div variants={itemVariants} className="pt-6">
        <h4
          className="text-xs font-bold uppercase tracking-widest text-muted mb-4"
        >
          Follow Me
        </h4>
        <div className="flex space-x-3.5">
          {socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-11 h-11 flex items-center justify-center rounded-full border border-border/80 bg-secondary/30 text-foreground transition-all duration-300 shadow-sm ${social.hoverClass}`}
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
