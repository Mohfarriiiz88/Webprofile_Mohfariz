
import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'Flutter', color: 'bg-red-500', size: 'w-24 h-24' },
    { name: 'JavaScript', color: 'bg-green-500', size: 'w-20 h-20' },
    { name: 'React', color: 'bg-blue-400', size: 'w-28 h-28' },
    { name: 'Python', color: 'bg-purple-500', size: 'w-22 h-22' },
    { name: 'PHP', color: 'bg-yellow-500', size: 'w-26 h-26' },
    { name: 'Laravel', color: 'bg-teal-500', size: 'w-20 h-20' },
    { name: 'CSS', color: 'bg-blue-600', size: 'w-24 h-24' },
    { name: 'HTML', color: 'bg-orange-500', size: 'w-22 h-22' },
    { name: 'MySQL', color: 'bg-pink-500', size: 'w-20 h-20' },
    { name: 'Git', color: 'bg-indigo-500', size: 'w-18 h-18' },
    { name: 'Node.js', color: 'bg-green-600', size: 'w-24 h-24' },
    { name: 'MongoDB', color: 'bg-emerald-500', size: 'w-22 h-22' },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16 animate-scroll-wave">
          My Skills
        </h2>
        
        {/* Desktop Skills Layout - Centered */}
        <div className="hidden md:flex items-center justify-center min-h-[400px]">
          <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto place-items-center">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`${skill.size} ${skill.color} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg opacity-90 hover:opacity-100`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animation: `float-${(index % 3) + 1} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="text-white font-poppins font-medium text-xs text-center px-2">
                  {skill.name}
                </span>
                
                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm font-poppins whitespace-nowrap z-20">
                    {skill.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Skills Layout */}
        <div className="md:hidden grid grid-cols-3 gap-4">
          {skills.slice(0, 9).map((skill) => (
            <div
              key={skill.name}
              className={`w-20 h-20 ${skill.color} rounded-full flex items-center justify-center mx-auto`}
            >
              <span className="text-white font-poppins font-medium text-xs text-center px-1">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
