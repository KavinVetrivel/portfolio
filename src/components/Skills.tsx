import { Code2, Cpu, Database, BrainCircuit, Terminal, Monitor } from 'lucide-react';
import type { ReactNode } from 'react';
import { SiPython, SiC, SiHtml5, SiMysql, SiMongodb, SiNumpy, SiPandas, SiScipy, SiTensorflow, SiKeras, SiJupyter, SiGit, SiLangchain } from 'react-icons/si';
import { BsClaude } from 'react-icons/bs';
import { GrArchlinux } from 'react-icons/gr';
import { FaWindows, FaJava, FaBrain, FaCss3Alt } from 'react-icons/fa';
import { FaUbuntu } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { MdOutlineSecurity } from 'react-icons/md';
import { SiNeo4J } from 'react-icons/si';

const MatplotlibIcon = ({ size = 24, color = '#000000' }: { size?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={size} height={size} fill={color}>
    <path d="M64 126c-16.56 0-32.13-6.449-43.84-18.159S2 80.561 2 64s6.449-32.13 18.159-43.841S47.439 2 64 2s32.131 6.449 43.841 18.159S126 47.439 126 64s-6.449 32.131-18.159 43.841S80.561 126 64 126M64 3.82c-16.074 0-31.187 6.26-42.553 17.626C10.08 32.813 3.82 47.925 3.82 64s6.26 31.188 17.626 42.554S47.925 124.18 64 124.18s31.188-6.26 42.554-17.626S124.18 80.075 124.18 64s-6.26-31.187-17.626-42.554C95.187 10.08 80.075 3.82 64 3.82" />
    <path d="M64 112.35c-26.66 0-48.35-21.689-48.35-48.35S37.34 15.65 64 15.65S112.35 37.34 112.35 64S90.66 112.35 64 112.35m0-96c-26.274 0-47.65 21.375-47.65 47.65S37.726 111.65 64 111.65S111.65 90.274 111.65 64S90.274 16.35 64 16.35" />
    <path d="M64 98.35c-18.94 0-34.35-15.41-34.35-34.35S45.06 29.65 64 29.65S98.35 45.06 98.35 64S82.94 98.35 64 98.35m0-68c-18.555 0-33.65 15.095-33.65 33.65S45.445 97.65 64 97.65S97.65 82.555 97.65 64S82.555 30.35 64 30.35" />
    <path d="M64 84.35c-11.221 0-20.35-9.129-20.35-20.35S52.779 43.65 64 43.65S84.35 52.779 84.35 64S75.221 84.35 64 84.35m0-40c-10.835 0-19.65 8.815-19.65 19.65S53.165 83.65 64 83.65S83.65 74.835 83.65 64S74.835 44.35 64 44.35" />
    <path d="M64 71.35c-4.053 0-7.35-3.297-7.35-7.35s3.297-7.35 7.35-7.35s7.35 3.297 7.35 7.35s-3.297 7.35-7.35 7.35m0-14c-3.667 0-6.65 2.983-6.65 6.65s2.983 6.65 6.65 6.65s6.65-2.983 6.65-6.65s-2.983-6.65-6.65-6.65" />
    <path d="M107.061 96.836L65.178 64.197l12.373.001a.413.413 0 0 0 .413-.413a13.9 13.9 0 0 0-.684-4.323v-.001a.414.414 0 0 0-.521-.264l-11.604 3.769L89.693 32.2a.414.414 0 0 0-.066-.581a41 41 0 0 0-11.196-6.351h-.001a.41.41 0 0 0-.531.242L64.072 62.349L52.296 10.752a.414.414 0 0 0-.495-.312a54.8 54.8 0 0 0-22.892 11.342l-.002.002a.41.41 0 0 0-.05.58L62.43 62.578L21.347 42.794h-.001a.413.413 0 0 0-.551.193c-4.378 9.046-5.79 19.471-3.977 29.355a.415.415 0 0 0 .481.332l43.748-7.94l-21.715 10.457h-.001a.414.414 0 0 0-.192.552a28 28 0 0 0 2.177 3.738a.42.42 0 0 0 .577.105L63.334 64.73l-7.315 32.049a.416.416 0 0 0 .311.496c2.495.57 5.08.857 7.66.857c1.923.001 3.842-.16 5.738-.481a.414.414 0 0 0 .339-.477l-5.417-31.88l32.857 41.202a.414.414 0 0 0 .58.067a54.7 54.7 0 0 0 9.045-9.146a.413.413 0 0 0-.071-.581" />
    <path d="M64.35 125.35h-.7V64.845l-42.784 42.783l-.495-.495l.248-.247L63.155 64.35H2.65v-.7h60.505L20.372 20.866l.495-.495L63.65 63.155V2.65h.7v60.505l42.784-42.783l.495.495l-.248.248L64.845 63.65h60.505v.7H64.845l42.783 42.784l-.495.495l-.247-.248L64.35 64.845z" />
  </svg>
);

const skillIcons: Record<string, ReactNode> = {
  "Python": <SiPython className="w-8 h-8" />,
  "C": <SiC className="w-8 h-8" />,
  "HTML": <SiHtml5 className="w-8 h-8" />,
  "CSS": <FaCss3Alt className="w-8 h-8" />,
  "Java (Basics)": <FaJava className="w-8 h-8" />,
  "SQL": <SiMysql className="w-8 h-8" />,
  "Cypher": <span className="w-8 h-8 flex items-center justify-center font-bold text-sm">Neo</span>,
  "MySQL": <SiMysql className="w-8 h-8" />,
  "MongoDB": <SiMongodb className="w-8 h-8" />,
  "GrapDB-Neo4j": <SiNeo4J className="w-8 h-8" />,
  "NumPy": <SiNumpy className="w-8 h-8" />,
  "Pandas": <SiPandas className="w-8 h-8" />,
  "Matplotlib": <MatplotlibIcon color="#ffffff" />,
  "Scikit-learn": <SiScipy className="w-8 h-8" />,
  "TensorFlow": <SiTensorflow className="w-8 h-8" />,
  "Keras": <SiKeras className="w-8 h-8" />,
  "Jupyter Notebook": <SiJupyter className="w-8 h-8" />,
  "Git": <SiGit className="w-8 h-8" />,
  "VSCode": <VscVscode className="w-8 h-8" />,
  "Claude": <BsClaude className="w-8 h-8" />,
  "Problem Solving": <span className="w-8 h-8 flex items-center justify-center font-bold text-sm">PS</span>,
  "Machine Learning": <FaBrain className="w-8 h-8" />,
  "Cyber Security": <MdOutlineSecurity className="w-8 h-8" />,
  "Windows": <FaWindows className="w-8 h-8" />,
  "Arch Linux": <GrArchlinux className="w-8 h-8" />,
  "Ubuntu": <FaUbuntu className="w-8 h-8" />,
  "LangChain": <SiLangchain className="w-8 h-8" />,
};

const iconOnlySkills = new Set([
  "Python",
  "C",
  "HTML",
  "CSS",
  "Java (Basics)",
  "SQL",
  "MySQL",
  "MongoDB",
  "GrapDB-Neo4j",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "Jupyter Notebook",
  "Git",
  "VSCode",
  "Claude",
  "Machine Learning",
  "Cyber Security",
  "Windows",
  "Arch Linux",
  "Ubuntu",
  "LangChain",
]);

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["Python", "C", "HTML", "CSS", "Java (Basics)"]
  },
  {
    title: "Database Technologies",
    icon: <Database className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["MySQL", "GrapDB-Neo4j", "MongoDB"]
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "LangChain"]
  },
  {
    title: "Dev tools",
    icon: <Terminal className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["VSCode", "Git", "Claude", "Jupyter Notebook"]
  },
  {
    title: "Operating Systems",
    icon: <Monitor className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["Windows", "Arch Linux", "Ubuntu"]
  },
  {
    title: "Areas of Interest",
    icon: <Cpu className="w-6 h-6 text-[#C3E41D]" />,
    skills: ["Machine Learning", "Cyber Security"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
          <span className="text-[#C3E41D]"></span> Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">An overview of whatever stuff I know</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div 
            key={i} 
            className={`group p-8 rounded-3xl bg-card border border-border shadow-sm hover:border-[#C3E41D]/50 transition-colors ${
              skillCategories.length % 3 === 1 && i === skillCategories.length - 1 ? 'md:col-start-2' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">{cat.title}</h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {cat.skills.map((skill, j) => (
                <div key={j} className="flex flex-col items-center justify-center gap-2 w-16 h-16 p-2 rounded-2xl bg-secondary hover:bg-[#C3E41D] hover:text-black transition-colors cursor-default border border-border/50 group/skill" title={skill}>
                  {skillIcons[skill] || <span className="w-6 h-6 flex items-center justify-center text-xs font-bold">{skill.charAt(0)}</span>}
                  {!iconOnlySkills.has(skill) && (
                    <span className="text-xs font-medium text-center line-clamp-2 break-words">{skill}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
