"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Implementation", level: 90 },
  { name: "State Management (TanStack Query / Zustand)", level: 88 },
  { name: "REST API Integration", level: 85 },
  { name: "Git & Collaboration Workflow", level: 85 },
];

const technologies = [
  // Frontend Core
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Vite",

  // Styling & UI
  "Tailwind CSS",
  "CSS Modules",
  "Material UI",
  "Radix UI",
  "Shadcn/UI",

  // State & Data
  "TanStack Query",
  "Zustand",

  // Backend & API
  "Express.js",
  "REST APIs",
  "GraphQL",

  // Database & ORM
  "MySql",
  "PostgreSQL",

  // Auth & Security
  "JWT Authentication",
  "Cookies",

  // DevOps & Tools
  "Docker",
  "Vercel",
  "Git",
  "GitHub Actions",

  // Testing & Quality
  "ESLint",
  "Prettier",

  // Design & Collaboration
  "Figma",
  "Responsive Design",
  "UI/UX Implementation",

  // Others
  "Agile / Scrum",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="md:py-32 py-16 relative bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block md:text-base text-xs">Skills</span>
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
        </motion.div>

        {/* Skills bars */}
        <div className="grid md:grid-cols-2 md:gap-8 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium md:text-base text-sm">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-primary to-primary/70 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-secondary border border-border rounded-full md:text-sm text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
