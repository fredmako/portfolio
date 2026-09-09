"use client";

import { useState } from "react";

interface Project {
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  url: string;
  github?: string;
  screenshots: string[];
  features: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    technicalImplementation: string;
    challenges: string;
    uiUx: string;
  };
}

interface ProjectsProps {
  projects: Project[];
  categories: string[];
}

export default function Projects({ projects, categories }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A collection of real-world projects I have built, from healthcare systems to social platforms.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>{category}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.slug} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground/30">{project.name.charAt(0)}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{project.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (<span key={tech} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">{tech}</span>))}
                  {project.technologies.length > 4 && (<span className="text-xs text-muted-foreground">+{project.technologies.length - 4}</span>)}
                </div>
                <div className="flex gap-3">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-medium py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Live Project</a>
                  <button onClick={() => setSelectedProject(project)} className="flex-1 text-sm font-medium py-2 border border-border rounded-lg hover:bg-secondary transition-colors">Case Study</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="text-xl font-bold">{selectedProject.name}</h3>
                <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div><h4 className="font-semibold mb-2">Overview</h4><p className="text-muted-foreground text-sm">{selectedProject.caseStudy.overview}</p></div>
                <div><h4 className="font-semibold mb-2">Problem</h4><p className="text-muted-foreground text-sm">{selectedProject.caseStudy.problem}</p></div>
                <div><h4 className="font-semibold mb-2">Solution</h4><p className="text-muted-foreground text-sm">{selectedProject.caseStudy.solution}</p></div>
                <div><h4 className="font-semibold mb-2">Technical Implementation</h4><p className="text-muted-foreground text-sm">{selectedProject.caseStudy.technicalImplementation}</p></div>
                <div><h4 className="font-semibold mb-2">Key Features</h4><ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">{selectedProject.features.map((f) => (<li key={f}>{f}</li>))}</ul></div>
                <div><h4 className="font-semibold mb-2">Technologies</h4><div className="flex flex-wrap gap-2">{selectedProject.technologies.map((t) => (<span key={t} className="text-xs bg-secondary px-2 py-1 rounded">{t}</span>))}</div></div>
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">View Live Project</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
