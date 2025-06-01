
import React from 'react';
import { Instagram, Mail, Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      {/* Hero SVG Container */}
      <div className="w-full max-w-4xl flex justify-center mb-8">
        {/* Placeholder for hero.svg - creating a visual representation based on the design */}
        <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
          {/* Main content area */}
          <div className="text-center">
            <h1 className="font-yeseva text-4xl md:text-6xl lg:text-7xl text-white mb-4">
              Moh. Fariz
            </h1>
            <h2 className="font-yeseva text-2xl md:text-3xl lg:text-4xl text-white opacity-80">
              Portfolio
            </h2>
          </div>
          
          {/* Floating skill tags positioned around the main content */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Flutter */}
            <div className="absolute top-0 left-8 md:left-16 bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-1">
              Flutter
            </div>
            
            {/* PHP */}
            <div className="absolute top-12 right-4 md:right-12 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-2">
              PHP
            </div>
            
            {/* Laravel */}
            <div className="absolute top-20 right-16 md:right-32 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-3">
              Laravel
            </div>
            
            {/* UI/UX */}
            <div className="absolute left-4 top-1/2 bg-green-400 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-1">
              UI UX
            </div>
            
            {/* CSS */}
            <div className="absolute left-12 bottom-24 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-2">
              CSS
            </div>
            
            {/* HTML */}
            <div className="absolute left-1/3 bottom-12 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-3">
              Html
            </div>
            
            {/* Python */}
            <div className="absolute right-1/3 bottom-20 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-1">
              Python
            </div>
            
            {/* JS */}
            <div className="absolute right-8 bottom-16 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-poppins animate-float-2">
              Js
            </div>
            
            {/* Flask */}
            <div className="absolute top-1/3 right-8 bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-3">
              Flask
            </div>
            
            {/* MySQL */}
            <div className="absolute bottom-1/3 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float-1">
              Mysql
            </div>
          </div>
        </div>
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
        className="text-white hover:opacity-75 transition-opacity duration-300 animate-bounce-gentle"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
