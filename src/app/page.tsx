import { projects, categories } from "@/data/projects";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects projects={projects} categories={categories} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
