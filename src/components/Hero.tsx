import { ChevronDown } from "lucide-react";
import TextPressure from "./TextPressure.jsx";

export default function Hero() {
  return (
    <div 
      className="min-h-screen text-foreground transition-colors"
      style={{ color: "hsl(0 0% 100%)" }}
    >
      {/* Hero Section */}
      <main className="relative min-h-screen overflow-hidden px-4 pt-16 pb-40 sm:px-6 sm:pb-48 lg:px-8 lg:pb-56">
        {/* Full-screen text treatment */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-8 sm:py-12">
          <div className="relative flex h-[70vh] w-full max-w-[1500px] translate-y-0 sm:h-[78vh] sm:-translate-y-12 flex-col items-center justify-center gap-2 sm:gap-4 text-center">
            <div className="flex h-[16vh] min-h-[96px] w-full max-w-[86vw] items-center justify-center -mt-1 sm:h-[22vh] sm:min-h-[130px] sm:max-w-[900px] sm:-mt-8">
              <TextPressure
                text="KAVIN"
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic={false}
                textColor="#C3E41D"
                strokeColor="#5227FF"
                scale
                minFontSize={28}
                className="w-full h-full"
              />
            </div>
            <div className="flex h-[18vh] min-h-[110px] w-full max-w-[92vw] items-center justify-center -mt-1 sm:h-[22vh] sm:min-h-[200px] sm:max-w-[1450px] sm:mt-0 sm:gap-2">
              <TextPressure
                text="VETRIVEL"
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic={false}
                textColor="#C3E41D"
                strokeColor="#5227FF"
                scale
                minFontSize={28}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 transition-colors duration-300 z-30 pointer-events-auto"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-500 hover:text-white transition-colors duration-300" />
        </button>
      </main>
    </div>
  );
}
