import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "MCP server for Multicarrier API platform",
    description: "Built an MCP-based server for a multi-carrier logistics platform (eShipz) using FastMCP, enabling AI-driven access to shipment tracking, carrier analytics, shipment creation, and shipment detail retrieval via Claude Desktop.",
    tags: ["FastMCP", "Claude Desktop", "eShipz"],
    github: "https://github.com/KavinVetrivel/eshipz-mcp",
    live: "#",
    featured: true
  },
  {
    title: "Pancreatic Cancer Detection",
    description: "A machine learning project aimed at detecting pancreatic cancer at an early stage using Random Forest algorithms.",
    tags: ["Python", "Machine Learning", "Jupyter", "Random Forest"],
    github: "https://github.com/KavinVetrivel/pancreatic-cancer-randomforest",
    live: "#",
    featured: false
  },
  {
    title: "Repora",
    description: "Built a role-based classroom management web platform enabling room booking, issue reporting, and targeted announcements for students and administrators. Developed using React (frontend), Node.js + Express (backend), MongoDB (database), and JWT authentication with a responsive UI.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/KavinVetrivel/repora-final",
    live: "https://repora.vercel.app/",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
            <span className="text-[#C3E41D]"></span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">Some of the stuff I've built</p>
        </div>
        <a href="https://github.com/KavinVetrivel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[#C3E41D] transition-colors">
          View all on GitHub <FaGithub className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className={`group flex flex-col justify-between p-8 rounded-3xl bg-card border border-border shadow-sm hover:-translate-y-2 transition-transform duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-card to-neutral-50 dark:to-neutral-900/50' : ''}`}>
            <div>
              <div className="flex justify-between items-center mb-8">
                <Folder className="w-10 h-10 text-[#C3E41D]" />
                <div className="flex gap-4">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-[#C3E41D] transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, j) => (
                <span key={j} className="text-xs font-mono text-muted-foreground tracking-tight">
                  {tag} {j < project.tags.length - 1 && <span className="mx-1 opacity-50">•</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
