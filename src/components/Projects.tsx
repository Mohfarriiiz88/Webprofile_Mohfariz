
import React, { useState } from 'react';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Webprofil SMK NU Tegal',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'School profile website'
    },
    {
      id: 2,
      title: 'Kulakan',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      description: 'E-commerce platform'
    },
    {
      id: 3,
      title: 'Berasa: Berbasi Rasa',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      description: 'Food recommendation app'
    },
    {
      id: 4,
      title: 'CekGiziku',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: 'Nutrition tracking application'
    }
  ];

  const handleMouseMove = (e: React.MouseEvent, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setHoveredCard(cardId);
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16 animate-scroll-wave">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-2xl overflow-hidden h-64 md:h-72 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group relative"
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => console.log(`Clicked project: ${project.title}`)}
              style={{
                background: hoveredCard === project.id 
                  ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.9) 0%, rgba(243,244,246,1) 50%)`
                  : 'rgb(243 244 246)'
              }}
            >
              {/* Project Image */}
              <div className="h-3/5 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-4 h-2/5 flex flex-col justify-center">
                <h3 className="font-poppins font-semibold text-black text-center text-sm md:text-base">
                  {project.title}
                </h3>
                <p className="font-poppins text-gray-600 text-center text-xs mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
