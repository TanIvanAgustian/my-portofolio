"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="gradient-text">Tan, Ivan Agustian</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Front-End Developer & UI/UX Designer crafting beautiful digital experiences
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="px-8 glow-effect" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
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

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/TanIvanAgustian"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tan-ivan-agustian-33b742232/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanivanagustian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.6 },
            y: { delay: 1, duration: 2, repeat: Infinity },
          }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
