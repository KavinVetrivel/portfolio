import { Code2, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["Python", "C", "HTML", "CSS", "Java (Basics)", "SQL"]
  },
  {
    title: "Technologies & Tools",
    icon: <Wrench className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["Git", "VSCode", "Jupyter", "Tailwind CSS", "React"]
  },
  {
    title: "Areas of Interest",
    icon: <Cpu className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["Problem Solving", "Machine Learning", "Cyber Security"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
          <span className="text-[#C3E41D]"></span> Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive overview of my technical abilities and areas of focus.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:border-[#C3E41D]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, j) => (
                <span key={j} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-[#C3E41D] hover:text-black transition-colors cursor-default border border-border/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
