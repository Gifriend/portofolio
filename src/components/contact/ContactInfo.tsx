"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Facebook } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "gifriendt@gmail.com",
    href: "mailto:gifriendt@gmail.com"
  },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+62 xxx xxxx xxxx",
//     href: "tel:+62xxxxxxxxxx"
//   },
  {
    icon: MapPin,
    label: "Location",
    value: "Manado, North Sulawesi, Indonesia",
    href: null
  }
]

const socialMedia = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Gifriend",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gifriendtalumingan/",
    color: "hover:text-blue-600"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gifriendt_/",
    color: "hover:text-pink-600"
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/gifriend",
    color: "hover:text-blue-700"
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
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Let's Talk
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className=" leading-relaxed"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
          Feel free to reach out through any of the channels below.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <detail.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm  font-medium">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="pt-8">
        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-zinc-100">
          Follow Me
        </h4>
        <div className="flex space-x-4">
          {socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color} shadow-sm hover:shadow-md`}
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
