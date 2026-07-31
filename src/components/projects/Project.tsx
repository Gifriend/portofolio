"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "./projectData"
import { certificates } from "./certificatesData"
import ProjectTitleAnimate from "./ProjectTitleAnimate"
import AnimateBody from "../about/AnimateBody"
import { Award, Briefcase, Terminal, Maximize2, X } from "lucide-react"
import Image from "next/image"

type TabType = "projects" | "certificates" | "skills"

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("projects")
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null)

  const tabs = [
    { id: "projects", name: "Projects", icon: Briefcase },
    { id: "certificates", name: "Certificates", icon: Award },
    { id: "skills", name: "Tech Stack", icon: Terminal },
  ]

  return (
    <section
      id="projects"
      className="relative py-24 w-full bg-background"
    >
      <div className="mx-auto w-[90%] lg:max-w-7xl z-10 flex flex-col items-center justify-center">
        {/* Title Block */}
        <ProjectTitleAnimate />

        {/* Tab Switcher Capsule */}
        <div className="w-full max-w-2xl rounded-full border border-border/50 bg-secondary/20 p-1.5 flex gap-2 backdrop-blur-xl mb-12 shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex-1 rounded-full py-3.5 text-xs md:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background shadow-md"
                    : "text-muted hover:text-foreground hover:bg-secondary/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </div>

        {/* Tabs Content Container */}
        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              {activeTab === "projects" && (
                <div className="grid grid-cols-1 gap-8 w-full max-w-5xl mx-auto">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tech={project.tech}
                      projectLink={project.linkProject ?? ""}
                    />
                  ))}
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-5 rounded-3xl glass-panel border border-border/40 flex flex-col justify-between hover:border-accent/30 transition-all duration-300 group"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent">
                            {cert.issuer}
                          </p>
                          <span className="text-[10px] md:text-xs font-semibold text-muted">
                            {cert.date}
                          </span>
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-foreground leading-snug">
                          {cert.title}
                        </h4>

                        {/* Certificate Image Container */}
                        <div 
                          onClick={() => setSelectedCertImage(cert.image)}
                          className="relative w-full aspect-[1.5/1] rounded-2xl overflow-hidden border border-border/30 bg-secondary/15 cursor-zoom-in group/img"
                        >
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-white backdrop-blur-[1px]">
                            <Maximize2 className="w-5 h-5" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Click to Expand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "skills" && (
                <div className="w-full max-w-5xl mx-auto">
                  <AnimateBody text="Core Technologies" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Full screen Image Modal */}
      <AnimatePresence>
        {selectedCertImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedCertImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] aspect-[1.5/1] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCertImage}
                alt="Certificate full view"
                fill
                sizes="100vw"
                className="object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
