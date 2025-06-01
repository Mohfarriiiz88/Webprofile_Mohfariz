
import React from 'react';
import { Instagram, Mail, Github, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Flutter', icon: '📱', color: 'bg-blue-400', size: 'w-16 h-16', position: 'top-12 left-8' },
    { name: 'Python', icon: '🐍', color: 'bg-yellow-500', size: 'w-20 h-20', position: 'top-8 left-1/3' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-500', size: 'w-18 h-18', position: 'top-16 right-8' },
    { name: 'PHP', icon: '🐘', color: 'bg-purple-600', size: 'w-22 h-22', position: 'top-6 right-1/4' },
    { name: 'HTML', icon: '🌐', color: 'bg-orange-500', size: 'w-16 h-16', position: 'left-4 top-1/3' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-600', size: 'w-18 h-18', position: 'left-1/4 top-1/2' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-400', size: 'w-20 h-20', position: 'right-6 top-1/3' },
    { name: 'Laravel', icon: '🔥', color: 'bg-red-500', size: 'w-16 h-16', position: 'right-1/3 top-1/2' },
    { name: 'MySQL', icon: '🗄️', color: 'bg-blue-700', size: 'w-18 h-18', position: 'left-8 bottom-1/3' },
    { name: 'Git', icon: '📦', color: 'bg-gray-600', size: 'w-16 h-16', position: 'left-1/3 bottom-1/4' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500', size: 'w-20 h-20', position: 'right-8 bottom-1/3' },
    { name: 'Vue', icon: '💚', color: 'bg-green-400', size: 'w-18 h-18', position: 'right-1/4 bottom-1/4' },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden bg-black">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating skill bubbles - positioned around the top and sides */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`absolute ${skill.position} ${skill.color} ${skill.size} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg pointer-events-auto cursor-pointer hover:scale-110 transition-all duration-300`}
            style={{
              animation: `float-${(index % 3) + 1} ${6 + index * 0.2}s ease-in-out infinite`,
              animationDelay: `${index * 0.3}s`,
              zIndex: 15,
            }}
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="flex flex-col items-center justify-center z-20 mt-16">
        {/* Hero Image - positioned lower */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/76751676-95db-4d3c-94a2-3b8afe205366.png"
            alt="Moh. Fariz Portfolio"
            className="w-full h-auto object-contain max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
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
          className="text-white hover:opacity-75 transition-opacity duration-300 animate-bounce z-10"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
