import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StatsBanner from "@/components/StatsBanner";
import Contact from "@/components/Contact";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBanner />
      <About />
      <Services />
      <Skills />
      <Projects />
      <FeaturedBlogs />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
