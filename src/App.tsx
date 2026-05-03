import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Dither from './components/Dither'
import StaggeredMenu from './components/StaggeredMenu.jsx'

const navItems = [
  { label: 'Home', link: '#hero', ariaLabel: 'Home' },
  { label: 'About', link: '#about', ariaLabel: 'About' },
  { label: 'Skills', link: '#skills', ariaLabel: 'Skills' },
  { label: 'Projects', link: '#projects', ariaLabel: 'Projects' },
  { label: 'Contact', link: '#contact', ariaLabel: 'Contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Twitter', link: 'https://twitter.com' }
];

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="text-foreground min-h-screen relative overflow-hidden transition-colors">
      {/* Fixed Dither Background */}
      <div 
        className="fixed inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-auto"
        style={{ backgroundColor: "hsl(0 0% 0%)" }}
      >
        <Dither
          waveColor={[0.4, 0.4, 0.4]}
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
        <StaggeredMenu 
          position="right"
          items={navItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#111111"
          changeMenuColorOnOpen={true}
          colors={['#C3E41D', '#1a1a1a']}
          logoUrl=""
          accentColor="#C3E41D"
          isFixed={true}
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

