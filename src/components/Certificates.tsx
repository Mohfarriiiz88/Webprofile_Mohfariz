import React, { useState } from 'react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  image: string; // nama file di public/images
}

const Certificates: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      name: 'Web Development Certification',
      issuer: 'Tech Academy',
      image: 'images.jpg'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      issuer: 'Flutter Institute',
      image: 'images.jpg'
    },
    {
      id: 3,
      name: 'Database Management',
      issuer: 'SQL Masters',
      image: 'images.jpg'
    },
    {
      id: 4,
      name: 'UI/UX Design Fundamentals',
      issuer: 'Design Hub',
      image: 'images.jpg'
    },
    {
      id: 5,
      name: 'Cloud Computing Essentials',
      issuer: 'Cloud Academy',
      image: 'images.jpg'
    },
    {
      id: 6,
      name: 'Cybersecurity Fundamentals',
      issuer: 'Security Institute',
      image: 'images.jpg'
    }
  ];

  const handleMouseMove = (e: React.MouseEvent, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (centerX - e.clientX) / 10;
    setMousePosition({ x: rotateY, y: rotateX });
    setHoveredCard(cardId);
  };

  return (
    <section id="certificates" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16 animate-scroll-wave">
          Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={
                // Lihat baris di bawah untuk modifikasi styling
                "bg-black-300 bg-opacity-50 border border-white " +
                "rounded-2xl p-4 h-32 flex items-center cursor-pointer " +
                "transition-all duration-300 hover:shadow-lg group"
              }
              onMouseMove={(e) => handleMouseMove(e, certificate.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => console.log(`Clicked certificate: ${certificate.name}`)}
              style={{
                transform:
                  hoveredCard === certificate.id
                    ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.05)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Container gambar dengan background abu, dibulatkan */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-300">
                <img
                  src={`/images/${certificate.image}`}
                  alt={certificate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Informasi sertifikat */}
              <div className="ml-4 flex-1">
                <h3 className="font-poppins font-medium text-white text-sm md:text-base mb-1">
                  {certificate.name}
                </h3>
                <p className="font-poppins text-white text-xs md:text-sm">
                  {certificate.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
