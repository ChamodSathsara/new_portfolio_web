import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/assets/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <div className="mt-2 h-1 w-32 bg-primary mx-auto"></div>
            <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
              A curated collection of web applications and software systems I’ve
              built, showcasing my skills in full-stack development. These
              projects demonstrate practical experience with modern technologies
              including Next.js, React, Node.js, MongoDB, Spring Boot (Java),
              and .NET. Each project reflects my ability to design, develop, and
              deploy scalable solutions tailored to real-world use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden border-none shadow-md h-full flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0 pb-6">
                  <Button asChild variant="ghost" size="sm" className="gap-1">
                    <Link href={project.demoLink} target="_blank">
                      <ExternalLink size={14} /> Demo
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="gap-1">
                    <Link href={project.githubLink} target="_blank">
                      <Github size={14} /> Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
