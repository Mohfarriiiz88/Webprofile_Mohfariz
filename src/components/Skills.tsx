
import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'Flutter', color: 'bg-red-500', size: 'w-24 h-24', position: 'top-4 left-8' },
    { name: 'JavaScript', color: 'bg-green-500', size: 'w-20 h-20', position: 'top-8 left-32' },
    { name: 'React', color: 'bg-blue-400', size: 'w-28 h-28', position: 'top-2 left-52' },
    { name: 'Python', color: 'bg-purple-500', size: 'w-22 h-22', position: 'top-16 left-72' },
    { name: 'PHP', color: 'bg-yellow-500', size: 'w-26 h-26', position: 'top-6 right-64' },
    { name: 'Laravel', color: 'bg-teal-500', size: 'w-20 h-20', position: 'top-12 right-44' },
    { name: 'CSS', color: 'bg-blue-600', size: 'w-24 h-24', position: 'top-4 right-24' },
    { name: 'HTML', color: 'bg-orange-500', size: 'w-22 h-22', position: 'top-16 right-8' },
    { name: 'MySQL', color: 'bg-pink-500', size: 'w-20 h-20', position: 'bottom-16 left-12' },
    { name: 'Git', color: 'bg-indigo-500', size: 'w-18 h-18', position: 'bottom-12 left-36' },
    { name: 'Node.js', color: 'bg-green-600', size: 'w-24 h-24', position: 'bottom-8 left-56' },
    { name: 'MongoDB', color: 'bg-emerald-500', size: 'w-22 h-22', position: 'bottom-14 right-56' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16">
          My Skills
        </h2>
        
        {/* Desktop Skills Layout */}
        <div className="hidden md:block relative h-96 mx-auto max-w-4xl">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`absolute ${skill.position} ${skill.size} ${skill.color} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg opacity-90 hover:opacity-100`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                zIndex: hoveredSkill === skill.name ? 10 : 1,
                animation: `float-${(index % 3) + 1} 3s ease-in-out infinite`
              }}
            >
              <span className="text-white font-poppins font-medium text-xs text-center px-2">
                {skill.name}
              </span>
              
              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm font-poppins whitespace-nowrap">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
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
