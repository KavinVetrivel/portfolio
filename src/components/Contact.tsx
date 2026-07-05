import { Mail, Send, FileDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#C3E41D] opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
            Talk to me
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            If you find any stuff wrong or not working or weird looking, let me know ╥﹏╥
          </p>
          
          <div className="mt-8" id="resume">
             <a href="/Kavin_Vetrivel_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-[#C3E41D] hover:text-black transition-colors border border-border">
               <FileDown className="w-5 h-5" /> Download Resume
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
          <div className="space-y-8">
            <a href="mailto:vetrivelkavin5@gmail.com" className="flex items-center gap-6 group">
              <div className="grid w-14 h-14 place-items-center rounded-2xl bg-secondary flex-shrink-0 group-hover:bg-[#C3E41D] group-hover:text-black transition-colors border border-border">
                <Mail className="block w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1 font-mono">Mail me, I will definitely reply asap</p>
                <p className="text-lg font-medium text-foreground group-hover:text-[#C3E41D] transition-colors break-all">vetrivelkavin5@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/kavin-vetrivel-g-6a119928a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="grid w-14 h-14 place-items-center rounded-2xl bg-secondary flex-shrink-0 group-hover:bg-[#C3E41D] group-hover:text-black transition-colors border border-border">
                <FaLinkedin className="block w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1 font-mono">I will probably reply within a working week, jk, i would prefer you to mail me</p>
                <p className="text-lg font-medium text-foreground group-hover:text-[#C3E41D] transition-colors">Kavin Vetrivel</p>
              </div>
            </a>
            
            <a href="https://github.com/KavinVetrivel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="grid w-14 h-14 place-items-center rounded-2xl bg-secondary flex-shrink-0 group-hover:bg-[#C3E41D] group-hover:text-black transition-colors border border-border">
                <FaGithub className="block w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1 font-mono">GitHub - please dont judge me</p>
                <p className="text-lg font-medium text-foreground group-hover:text-[#C3E41D] transition-colors">@KavinVetrivel</p>
              </div>
            </a>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-[#C3E41D] focus:ring-1 focus:ring-[#C3E41D] outline-none transition-all text-foreground" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-[#C3E41D] focus:ring-1 focus:ring-[#C3E41D] outline-none transition-all text-foreground" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">What's up?</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-[#C3E41D] focus:ring-1 focus:ring-[#C3E41D] outline-none transition-all text-foreground resize-none" placeholder="Hello..."></textarea>
            </div>
            <button className="relative w-full py-4 rounded-xl bg-foreground text-background font-bold hover:bg-[#C3E41D] hover:text-black transition-colors">
              <span className="block w-full text-center pr-8">Just mail me through gmail man</span>
              <Send className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-sm text-muted-foreground font-mono">
        <p>&copy; {new Date().getFullYear()} Kavin Vetrivel G. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS and you-know-what.</p>
      </footer>
    </section>
  );
}
