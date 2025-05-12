import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import Skills from "@/components/Skills";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 ">
      <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold cursor-default">About Me</h1>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroRm-HUjVkqTdJX4mbBKwQAv1gFSq7t95is.webp"
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Full-Stack Developer</h2>
              <p className="text-muted-foreground">
                Hi, I'm Chamod Sathsara, I specialize in full-stack web
                development, with a strong focus on the MERN stack and Java
                programming using Spring Boot. I have hands-on experience with
                JavaScript frameworks like Next.js and React.js. I have
                developed various projects, including e-commerce platforms,
                portfolio sites, blogging sites, and POS systems.
              </p>
              <p className="text-muted-foreground">
                I am interested in new web development technologies and
                continuously strive to expand my knowledge. My background
                includes diverse project work that has enhanced my technical
                proficiency, problem-solving skills, teamwork, and communication
                abilities.
              </p>
              <p className="text-muted-foreground">
                I'm dedicated to delivering efficient and creative software
                solutions that meet client requirements and exceed expectations.
                My approach combines technical expertise with a deep
                understanding of user needs to create intuitive and
                high-performing applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* my skills */}
      <Skills />

      {/* Education */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-xl font-bold">
                        University of Peradeniya
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        2021 - 2025
                      </span>
                    </div>
                    <p className="text-primary font-medium mt-1">
                      BSc Honours in Computations
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Studying advanced computational methods, algorithms, and
                      software development practices with a focus on practical
                      applications and research.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-xl font-bold">
                        Institute of Software Engineering
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        Present
                      </span>
                    </div>
                    <p className="text-primary font-medium mt-1">
                      HND of Software Engineering
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Focusing on practical software development skills, project
                      management, and industry-standard practices to prepare for
                      professional software engineering roles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-xl font-bold">Freelance Developer</h3>
                      <span className="text-sm text-muted-foreground">
                        2020 - Present
                      </span>
                    </div>
                    <p className="text-primary font-medium mt-1">
                      Full Stack Developer
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Working with various clients to develop custom web
                      applications, e-commerce platforms, and content management
                      systems. Implementing responsive designs and optimizing
                      web performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-xl font-bold">Tea Tang (Pvt) Ltd</h3>
                      <span className="text-sm text-muted-foreground">
                        2025/march - Present
                      </span>
                    </div>
                    <p className="text-primary font-medium mt-1">
                      Intern Software Engineer
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Collaborated with senior developers to build and maintain
                      web applications. Assisted in front-end development using
                      Next.js and implemented responsive designs with CSS
                      frameworks. Contributed to backend development using
                      Python and worked on business application customization
                      and module development in Odoo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
