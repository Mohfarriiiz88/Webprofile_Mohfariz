
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16 animate-fade-in">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Moh. Fariz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Bio Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-poppins text-lg md:text-xl text-white leading-relaxed">
              Hello! I'm <span className="font-semibold">Moh Fariz</span>, a Web Developer and Software Engineer based in Tegal, Indonesia. I specialize in building responsive web and mobile applications that are accessible and impactful. My journey in tech has led me to work on various projects that create positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
