"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Projects", value: 50, suffix: "+" },
  { label: "Experience", value: 6, suffix: "+" },
  { label: "Clients", value: 5, suffix: "+" },
  { label: "Technologies", value: 59, suffix: "+" },
];

const StatsBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const animationCompleted = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView && !animationCompleted.current) {
      animationCompleted.current = true;

      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds for the animation
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const valueIncrement = stat.value / totalFrames;

        let currentFrame = 0;

        const counter = setInterval(() => {
          currentFrame++;
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
              Math.round(valueIncrement * currentFrame),
              stat.value
            );
            return newCounts;
          });

          if (currentFrame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);

        return () => clearInterval(counter);
      });
    }
  }, [inView]);

  if (!mounted) return null;

  return (
    <section className="py-2 bg-purple-600 cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg"
            >
              <div className="text-3xl md:text-5xl font-bold text-white">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
