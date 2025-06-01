
import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'Web Development Certification',
      issuer: 'Tech Academy',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      issuer: 'Flutter Institute',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Database Management',
      issuer: 'SQL Masters',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'UI/UX Design Fundamentals',
      issuer: 'Design Hub',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-yeseva text-3xl md:text-4xl text-white text-center mb-16">
          Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-100 rounded-2xl p-4 h-32 flex items-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              onClick={() => console.log(`Clicked certificate: ${certificate.name}`)}
            >
              {/* Certificate Icon/Image */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-300">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Certificate Info */}
              <div className="ml-4 flex-1">
                <h3 className="font-poppins font-medium text-black text-sm md:text-base mb-1">
                  {certificate.name}
                </h3>
                <p className="font-poppins text-gray-600 text-xs md:text-sm">
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
