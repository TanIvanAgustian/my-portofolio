"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Users } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Complete “Studi Independen” MBKM Front-end with ReactJS",
    organization: "PT Kreasi Marka Persada",
    year: "2023",
    description:
      "Completed the MBKM Independent Study Program as a Front-end Developer, building responsive web applications using React.js and REST API integration.",
  },
  {
    icon: Award,
    title: "Front-End and Back-End Development Certificate",
    organization: "HMTI Universitas Dian Nuswantoro",
    year: "2021",
    description: "Certified in fundamental front-end and back-end web development concepts through academic training.",
  },
  {
    icon: Trophy,
    title: "Web Application Project Completion",
    organization: "Academic & Independent Projects",
    year: "2023",
    description: "Successfully delivered multiple web application projects using React.js, focusing on clean UI and maintainable code.",
  },
  {
    icon: Star,
    title: "Leadership Experience – Choir Training Coordinator",
    organization: "Student Choir Organization",
    year: "2022",
    description: "Led and coordinated training programs, managing schedules and supporting team performance improvement.",
  },
];

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1+", label: "Years Professional Experience" },
  { value: "50K+", label: "Lines of Code" },
  { value: "100+", label: "Git Commits" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block md:text-base text-xs">Achievements</span>
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Recognition & <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground md:text-sm text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass-card p-5 md:p-6 flex gap-4 md:gap-5 group hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-base md:text-lg leading-snug line-clamp-2">{achievement.title}</h3>
                  <span className="text-[10px] md:text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full shrink-0">{achievement.year}</span>
                </div>

                <p className="text-primary/80 text-xs md:text-sm mb-1">{achievement.organization}</p>

                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
