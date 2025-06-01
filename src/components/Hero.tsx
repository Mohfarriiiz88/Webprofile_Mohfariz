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

  // Each bubble will now display the skill name as text
  const skills = [
    {
      name: 'Flutter',
      color: 'bg-blue-400',
      size: 'w-20 h-20',
      // 40px above and 40px to the left of the hero container
      style: { top: '-40px', left: '-40px' },
    },
    {
      name: 'Python',
      color: 'bg-yellow-500',
      size: 'w-20 h-20',
      // 40px above and 40px to the right of the hero container
      style: { top: '-40px', right: '-40px' },
    },
    {
      name: 'React',
      color: 'bg-blue-500',
      size: 'w-20 h-20',
      // 20px above, 100px to the left
      style: { top: '-20px', left: '100px' },
    },
    {
      name: 'PHP',
      color: 'bg-purple-600',
      size: 'w-20 h-20',
      // 20px above, 100px to the right
      style: { top: '-20px', right: '100px' },
    },
    {
      name: 'HTML',
      color: 'bg-orange-500',
      size: 'w-20 h-20',
      // 40px below, 40px to the left
      style: { bottom: '-40px', left: '-40px' },
    },
    {
      name: 'CSS',
      color: 'bg-blue-600',
      size: 'w-20 h-20',
      // 40px below, 40px to the right
      style: { bottom: '-40px', right: '-40px' },
    },
    {
      name: 'JavaScript',
      color: 'bg-yellow-400',
      size: 'w-20 h-20',
      // 70px above center
      style: { top: '-70px', left: '50%', transform: 'translateX(-50%)' },
    },
    {
      name: 'Laravel',
      color: 'bg-red-500',
      size: 'w-20 h-20',
      // 70px below center
      style: { bottom: '-70px', left: '50%', transform: 'translateX(-50%)' },
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-4
        pt-16
        overflow-visible
        bg-black
      "
    >
      <ParticleBackground />

      <div className="relative z-20 flex flex-col items-center justify-center mt-16">
        <div
          className="
            relative
            w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]
          "
        >
          {/* Hero Image */}
          <img
            src="/lovable-uploads/font.png"
            alt="Moh. Fariz Portfolio"
            className="w-full h-auto object-contain"
          />

          {/* Floating skill bubbles with text */}
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`
                absolute
                ${skill.color}
                ${skill.size}
                rounded-full
                flex
                items-center
                justify-center
                text-white
                text-sm
                font-semibold
                shadow-lg
                cursor-pointer
                hover:scale-110
                transition-all
                duration-300
              `}
              style={{
                ...skill.style,
                animation: `float-${(index % 3) + 1} ${5 + index * 0.2}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
                zIndex: 25,
              }}
              title={skill.name}
            >
              {skill.name}
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-8 mb-8 z-30">
          <a
            href="https://www.instagram.com/mochfarriiiz"
            className="text-white hover:opacity-75 transition-opacity duration-300"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
          <a
            href="mailto:mohfariz88@gmail.com"
            className="text-white hover:opacity-75 transition-opacity duration-300"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://github.com/Mohfarriiiz88"
            className="text-white hover:opacity-75 transition-opacity duration-300"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToAbout}
          className="text-white hover:opacity-75 transition-opacity duration-300 animate-bounce z-30"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
