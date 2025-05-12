"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* topic */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative h-[550px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroRm-HUjVkqTdJX4mbBKwQAv1gFSq7t95is.webp"
              alt="About Me"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
            <p className="text-muted-foreground">
              I’m a passionate full-stack developer with strong expertise in the
              MERN stack (MongoDB, Express.js, React.js, and Node.js) and Java
              development using Spring Boot. I also work with modern frameworks
              like Next.js to build fast, scalable, and user-friendly web
              applications.
            </p>
            <p className="text-muted-foreground">
              I am interested in new web development technologies and
              continuously strive to expand my knowledge. My background includes
              diverse project work that has enhanced my technical proficiency,
              problem-solving skills, teamwork, and communication abilities.
            </p>
            <p className="text-muted-foreground">
              I hold a BSc in Computation from the University of Peradeniya,
              where I gained a solid academic foundation in software engineering
              and computer science principles. My education, combined with
              hands-on project experience, has helped me develop strong
              problem-solving, teamwork, and communication skills.
            </p>
            <p className="text-muted-foreground">
              I'm always eager to explore new technologies and best practices in
              web development. I thrive in collaborative environments and aim to
              build efficient, reliable, and impactful software solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.1 }} className="animate-float">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://github.com/ChamodSathsara"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://www.linkedin.com/in/chamodsathsara/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://medium.com/@sathsarawapc"
                    target="_blank"
                    aria-label="medium"
                  >
                    <Newspaper size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="animate-float"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://www.linkedin.com/in/chamodsathsara/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://www.linkedin.com/in/chamodsathsara/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <Button asChild className="gap-2 mt-4">
              <Link href="/about">
                Learn More <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
