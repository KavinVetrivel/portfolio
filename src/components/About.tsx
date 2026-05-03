import { GraduationCap, Lightbulb } from 'lucide-react';
import TiltedCard from './TiltedCard.jsx';

export default function About() {
  const profileImageSrc = `${import.meta.env.BASE_URL}img/profile.png`;

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground">
            <span className="text-[#C3E41D]"></span> About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Most of my code works… eventually.<br></br>
            I’m a third-year AI & ML student who enjoys solving problems, exploring new technologies, and learning through building (and fixing) things.
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
          <div className="w-full max-w-[360px]">
            <TiltedCard
              imageSrc={profileImageSrc}
              altText="Kavin Vetrivel G"
              captionText="Kavin Vetrivel G"
              containerHeight="450px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="w-full h-full rounded-[15px] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-2xl font-bold tracking-tight text-white mb-1">Kavin Vetrivel G</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
