import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Dither from './components/Dither'

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="text-foreground min-h-screen relative overflow-hidden transition-colors">
      {/* Fixed Dither Background */}
      <div 
        className="fixed inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-auto"
        style={{ backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)" }}
      >
        <Dither
          waveColor={isDark ? [0.4, 0.4, 0.4] : [0.7, 0.7, 0.7]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <Hero isDark={isDark} toggleTheme={toggleTheme} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

