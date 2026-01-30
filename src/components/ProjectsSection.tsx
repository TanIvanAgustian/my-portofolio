"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "CRM Dashboard",
    description:
      "An internal CRM dashboard that helps staff manage daily tasks, track customer data, and organize work activities through a centralized and easy-to-use interface.",
    image: "/ICW.jpeg",
    tags: ["React + Vite", "PostgreSQL", "Material UI", "ApexChart", "Formik + Yup"],
  },
  {
    title: "Clearing Dashboard",
    description:
      "A web-based clearing dashboard designed to monitor, reconcile, and manage transaction data efficiently, providing clear insights through structured data views and reports.",
    image: "/IGC.jpg",
    tags: ["Next.js", "PostgreSQL", "Shadcn UI", "Tanstack", "Nuqs"],
  },
  {
    title: "POS System",
    description:
      "A self-order point-of-sale system for restaurants that allows customers to place orders directly from their table while enabling owners to monitor sales, orders, and inventory in real time.",
    image: "/TapBro.jpeg",
    tags: ["Next.js", "PostgreSQL", "Shadcn UI", "Tanstack", "Firebase"],
  },
  {
    title: "Crypto Payment Gateway",
    description:
      "A web application used to monitor and track cryptocurrency payment transactions, providing transaction status, history, and basic analytics for payment operations.",
    image: "/Asasta.jpg",
    tags: ["Next.js", "MySql", "Shadcn UI", "Tanstack", "Zustand", "jose"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relativ md:px-20 px-4" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block md:text-base text-xs">Projects</span>
          <h2 className="text-2xl md:text-5xl font-bold mb-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground md:text-lg text-sm max-w-2xl mx-auto">
            A selection of projects I've built for clients and personal exploration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />
              </div>
              <div className="md:p-6 p-3">
                <h3 className="md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 md:text-base text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
