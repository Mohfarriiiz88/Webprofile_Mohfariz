// src/components/About.tsx
import React from "react";
import ScrambledText from "./ScrambledText";
import TiltedCard from "./TiltedCard"; // import komponen TiltedCard

const About: React.FC = () => {
  const bioText =
    "Hello! I'm Moh Fariz, a Web Developer and Software Engineer based in Tegal, Indonesia. I specialize in building responsive web and mobile applications that are accessible and impactful. My journey in tech has led me to work on various projects that create positive change.";

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16 animate-scroll-wave">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Avatar dengan TiltedCard */}
          <div className="flex-shrink-0">
            <TiltedCard
              imageSrc="/lovable-uploads/pp.jpg"
              altText="Moh. Fariz"
              // Kita pakai 192px (48 × 4 Tailwind) untuk mobile, 192px untuk desktop
              containerWidth="192px"
              containerHeight="192px"
              imageWidth="192px"
              imageHeight="192px"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
            />
          </div>

          {/* Bio Text dengan efek ScrambledText */}
          <div className="flex-1 text-center md:text-left">
            <ScrambledText
              text={bioText}
              className="font-poppins text-lg md:text-xl text-white leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
