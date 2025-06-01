
import React from 'react';
import { Instagram, Mail, Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Flutter', color: 'bg-blue-400', position: 'top-8 left-12', lineStart: { x: 15, y: 25 } },
    { name: 'PHP', color: 'bg-green-600', position: 'top-16 right-16', lineStart: { x: 85, y: 30 } },
    { name: 'Laravel', color: 'bg-red-500', position: 'top-24 right-32', lineStart: { x: 75, y: 35 } },
    { name: 'UI UX', color: 'bg-green-400', position: 'left-8 top-1/2', lineStart: { x: 20, y: 50 } },
    { name: 'CSS', color: 'bg-blue-600', position: 'left-16 bottom-32', lineStart: { x: 25, y: 70 } },
    { name: 'Html', color: 'bg-orange-500', position: 'left-1/3 bottom-16', lineStart: { x: 35, y: 80 } },
    { name: 'Python', color: 'bg-purple-600', position: 'right-1/3 bottom-24', lineStart: { x: 70, y: 75 } },
    { name: 'Js', color: 'bg-yellow-500', position: 'right-12 bottom-20', lineStart: { x: 80, y: 70 } },
    { name: 'Flask', color: 'bg-purple-400', position: 'top-1/3 right-12', lineStart: { x: 85, y: 40 } },
    { name: 'Mysql', color: 'bg-pink-500', position: 'bottom-1/3 right-8', lineStart: { x: 90, y: 65 } },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Hero Container */}
      <div className="w-full max-w-5xl flex justify-center mb-8 relative">
        {/* Main Hero Image Container */}
        <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center">
          {/* Central Hero Image */}
          <img
            src="/lovable-uploads/76751676-95db-4d3c-94a2-3b8afe205366.png"
            alt="Moh. Fariz Portfolio"
            className="w-full h-auto object-contain z-10 relative max-w-lg"
          />
          
          {/* SVG for connecting lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-5"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {skills.map((skill, index) => {
              const endX = 50; // Center of hero image
              const endY = 50; // Center of hero image
              const { x: startX, y: startY } = skill.lineStart;
              
              // Create more pronounced curved paths
              const controlX1 = startX + (endX - startX) * 0.3 + Math.sin(index * 0.5) * 15;
              const controlY1 = startY + (endY - startY) * 0.3 + Math.cos(index * 0.7) * 10;
              const controlX2 = startX + (endX - startX) * 0.7 + Math.sin(index * 0.8) * 12;
              const controlY2 = startY + (endY - startY) * 0.7 + Math.cos(index * 0.9) * 8;
              
              return (
                <path
                  key={skill.name}
                  d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="0.3"
                  fill="none"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    animationDuration: `${3 + index * 0.2}s`,
                    filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.1))'
                  }}
                />
              );
            })}
          </svg>
          
          {/* Floating skill tags positioned around the hero image */}
          <div className="absolute inset-0 pointer-events-none">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`absolute ${skill.position} ${skill.color} text-white px-4 py-2 rounded-full text-sm font-poppins font-medium pointer-events-auto cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                style={{
                  animation: `float-${(index % 3) + 1} ${5 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.4}s`,
                  zIndex: 5,
                  transform: `rotate(${Math.sin(index) * 3}deg)`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-8 z-10">
        <a
          href="#"
          className="text-white hover:opacity-75 transition-opacity duration-300"
          aria-label="Instagram"
        >
          <Instagram size={32} />
        </a>
        <a
          href="#"
          className="text-white hover:opacity-75 transition-opacity duration-300"
          aria-label="Email"
        >
          <Mail size={32} />
        </a>
        <a
          href="#"
          className="text-white hover:opacity-75 transition-opacity duration-300"
          aria-label="GitHub"
        >
          <Github size={32} />
        </a>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        className="text-white hover:opacity-75 transition-opacity duration-300 animate-bounce-gentle z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
