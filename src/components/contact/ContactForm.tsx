"use client"

import { motion } from "framer-motion"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "w-full px-4 py-3 border border-border/60 bg-secondary/20 hover:bg-secondary/30 focus:bg-background/80 focus:border-accent/60 text-foreground font-semibold rounded-xl transition-all duration-300 outline-none placeholder:text-muted/60 placeholder:font-medium text-sm"

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-8 rounded-3xl glass-panel relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl pointer-events-none" />
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${inputClasses} resize-none`}
            placeholder="Tell me about your project..."
          />
        </div>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl text-sm font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Message sent successfully! I&apos;ll get back to you soon.</span>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl text-sm font-semibold border border-red-500/30 bg-red-500/10 text-red-500 flex items-center gap-2"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>Something went wrong. Please try again later.</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 font-bold text-white rounded-xl bg-gradient-to-r from-accent to-accent-blue hover:brightness-110 shadow-lg shadow-accent/20 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] cursor-pointer"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
