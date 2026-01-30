"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting visually stunning interfaces that users love",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time, every time",
    },
  ];

  return (
    <section id="about" className="md:py-32 py-16 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block md:text-base text-xs">About Me</span>
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Passionate about creating
            <br />
            <span className="gradient-text">digital excellence</span>
          </h2>
          <p className="text-muted-foreground md:text-lg text-sm max-w-2xl mx-auto">
            I'm a developer with 2+ years of experience building web applications and digital products. I specialize in React, TypeScript, and modern
            web technologies to create fast, accessible, and beautiful websites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 md:gap-6 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-8 text-center group hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="md:text-xl text-base font-semibold md:mb-3 mb-1">{feature.title}</h3>
              <p className="text-muted-foreground md:text-base text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
