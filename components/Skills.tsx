"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Braces,
  Database,
  Server,
  Layout,
  Code2,
  FileCode,
  Github,
  Box,
} from "lucide-react";

const skills = [
  { name: "React.js", icon: Braces, category: "frontend" },
  { name: "Next.js", icon: Layout, category: "frontend" },
  { name: "Tailwind CSS", icon: FileCode, category: "frontend" },
  { name: "Material UI", icon: Layout, category: "frontend" },
  { name: "TypeScript", icon: Code2, category: "frontend" },
  { name: "Vue.js", icon: Layout, category: "frontend" },
  { name: "Shadcn/UI", icon: Layout, category: "frontend" },
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "Spring Boot", icon: Server, category: "backend" },
  { name: "Express.js", icon: Server, category: "backend" },
  { name: ".Net", icon: Server, category: "backend" },
  { name: "MongoDB", icon: Database, category: "database" },
  { name: "MySQL", icon: Database, category: "database" },
  { name: "HTML", icon: Code2, category: "frontend" },
  { name: "CSS", icon: Code2, category: "frontend" },
  { name: "JavaScript", icon: FileCode, category: "language" },
  { name: "Java", icon: FileCode, category: "language" },
  { name: "C#", icon: FileCode, category: "language" },
  { name: "Python", icon: FileCode, category: "language" },
  { name: "Docker", icon: Box, category: "devops" },
  { name: "GitHub", icon: Github, category: "version_controll" },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "frontend"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "backend"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("database")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "database"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Database
          </button>
          <button
            onClick={() => setFilter("language")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "language"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Languages
          </button>
          <button
            onClick={() => setFilter("devops")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "devops"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            DevOps
          </button>

          <button
            onClick={() => setFilter("version_controll")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "version_controll"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Version Controll
          </button>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="flex flex-col items-center p-4 rounded-lg bg-card shadow-sm"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: (index * 0.1) % 1,
                }}
              >
                <skill.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
