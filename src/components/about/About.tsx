"use client";

import AnimateParagraph from "./AnimateParagraph";
import AnimateTitle from "./AnimateTitle";
import Image from "next/image";
import { GraduationCap, Code2, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-[90%] lg:max-w-7xl z-10">
        <div className="mb-12 flex w-full flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-accent font-bold uppercase tracking-wider text-xs md:text-sm mb-2">
              About Me
            </p>
            <AnimateTitle
              title={"Get to know me"}
              className="text-left text-4xl font-black leading-tight tracking-tight uppercase sm:text-5xl md:text-6xl lg:text-7xl"
              wordSpace="mr-[14px]"
              charSpace="mr-[0.0001em]"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Panel 1: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6 text-foreground/80 font-medium leading-relaxed tracking-wide text-base md:text-lg">
              <AnimateParagraph
                paragraph="I am Gifriend Yedija Talumingan, an Informatics Engineering graduate from Sam Ratulangi University (thesis defense completed, official graduation pending) with a GPA of 3.90/4.00. I am a versatile software engineer specialized in building high-performance web applications and cross-platform mobile solutions."
                delay={0.1}
              />
              <AnimateParagraph
                paragraph="My technical experience includes developing mobile applications using Flutter, building modern web interfaces with Next.js and React, and designing robust backend services with NestJS, Laravel, and PostgreSQL. I have built academic portals, e-voting systems, and enterprise approval workflows with PLN."
                delay={0.2}
              />
              <AnimateParagraph
                paragraph="I am committed to writing clean, maintainable code, setting up CI/CD pipelines, and implementing offline-first local storage solutions. As a finalist in the national Genera-Z Berbakti competition by Bakti BCA, I enjoy collaborating in cross-functional teams to solve real-world problems and continuously learning new technologies."
                delay={0.3}
              />
            </div>

            <div className="flex gap-4 mt-8 border-t border-border/20 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <Code2 className="w-4 h-4 text-accent" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <Heart className="w-4 h-4 text-accent-pink" />
                <span>Modern UX</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <Award className="w-4 h-4 text-accent-blue" />
                <span>Problem Solving</span>
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl glass-panel relative overflow-hidden group min-h-[320px] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            <Image
              src={"/picture.jpg"}
              alt="Gifriend Yedija Talumingan"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <p className="text-foreground/90 text-lg font-bold">
                Gifriend Yedija
              </p>
              <p className="text-foreground/90 text-xs font-medium uppercase tracking-wider mt-0.5">
                Software Developer
              </p>
            </div>
          </motion.div>

          {/* Panel 3: Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 rounded-3xl glass-panel flex flex-col justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-2xl border border-accent-blue/10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-foreground font-bold">Education</p>
                <p className="text-muted text-xs font-medium">
                  Informatics Engineering
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted uppercase font-bold tracking-wider">
                  University
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  Sam Ratulangi University
                </p>
                <p className="text-[11px] text-muted">
                  Manado, ID (2022 - 2026)
                </p>
                <p className="text-[11px] text-muted">GPA: 3.9/4.0</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase font-bold tracking-wider">
                  Key Focus
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  Software Engineering, Mobile Dev, Database Systems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Panel 4: Quick Info / Tagline */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 p-6 rounded-3xl glass-panel flex flex-col md:flex-row items-stretch justify-between gap-6"
          >
            <div className="flex flex-col justify-center gap-2">
              <p className="text-xs text-accent uppercase font-bold tracking-widest">Philosophy</p>
              <p className="text-lg md:text-xl font-bold tracking-tight text-foreground leading-snug">
                &ldquo;Creating clean architectures and immersive user interfaces is my way of breathing life into ideas.&rdquo;
              </p>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <SocialMedia />
            </div>
          </motion.div> */}
        </div>

        {/* Skills Section removed, now in Project tabs */}
      </div>
    </section>
  );
}
