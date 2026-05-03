import { ChevronDown } from "lucide-react";
import TextPressure from "./TextPressure.jsx";

export default function Hero() {
  return (
    <div 
      className="min-h-screen text-foreground transition-colors"
      style={{ color: "hsl(0 0% 100%)" }}
    >
      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center pt-20 pb-24 overflow-hidden">
        {/* Centered Main Name - Always Perfectly Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-1 sm:gap-2 text-center">
            <div className="w-full h-[120px] sm:h-[160px] md:h-[220px]">
              <TextPressure
                text="KAVIN"
                flex={false}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={false}
                textColor="#C3E41D"
                strokeColor="#ffffff"
                minFontSize={300}
                className="w-full h-full"
              />
            </div>
            <div className="w-full h-[20px] sm:h-[160px] md:h-[220px]">
              <TextPressure
                text="VETRIVEL"
                flex={false}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={false}
                textColor="#C3E41D"
                strokeColor="#ffffff"
                minFontSize={300}
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
