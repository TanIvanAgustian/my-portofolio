"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden md:py-0 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT – IMAGE (Modern Style) */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow background */}
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-t from-primary/30 via-primary/10 to-transparent blur-3xl opacity-70" />

            {/* Floating card */}
            <motion.div
              className="relative w-72 h-96 md:w-80 md:h-120"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-background/60 backdrop-blur border border-primary/20 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.5)]">
                <Image src="/Photo.jpeg" alt="Tan Ivan Agustian" fill className="object-cover" priority />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – TEXT */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Available for opportunities
            </motion.span>

            <motion.h1
              className="text-2xl md:text-6xl xl:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hi, I&apos;m <span className="gradient-text">Tan, Ivan Agustian</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Front-End Developer focused on building clean, responsive, and scalable web applications with modern technologies.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                className="px-8 glow-effect"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>

              <Button size="lg" variant="outline" className="px-8" asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=tanivanagustian@gmail.com&su=Frontend%20Opportunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              className="flex items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://github.com/TanIvanAgustian"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tan-ivan-agustian-33b742232/"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tanivanagustian@gmail.com"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="md:block hidden absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
