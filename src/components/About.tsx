import { GraduationCap, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground">
            <span className="text-[#C3E41D]"></span> About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm a passionate <span className="text-foreground font-medium">B.E CSE AI&ML student</span> in my third year, deeply interested in problem solving, AI and machine learning. I love exploring new technologies and solving complex problems through code. When I'm not coding, you can find me learning new programming languages or working on personal projects.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <GraduationCap className="w-8 h-8 text-[#C3E41D] mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Education</h3>
              <p className="text-sm text-muted-foreground">B.E in Computer Science specializing in Artificial Intelligence & Machine Learning (3rd Year)</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="w-8 h-8 text-[#C3E41D] mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Interests</h3>
              <p className="text-sm text-muted-foreground">Problem Solving, Machine Learning, AI</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-card p-2 shadow-xl">
            <div className="w-full h-full rounded-2xl bg-neutral-900 flex items-center justify-center relative overflow-hidden group">
               <img 
                 src="/img/profile.png" 
                 alt="Kavin Vetrivel G" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
               <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-2xl font-bold tracking-tight text-white mb-1">Kavin Vetrivel G</p>
                 <p className="text-[#C3E41D] font-medium">B.E CSE AIML Student</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
