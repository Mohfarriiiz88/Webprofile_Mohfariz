
import React from 'react';
import { Instagram, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Copyright */}
        <p className="font-poppins text-gray-400 text-sm mb-6">
          © 2025 Moh. Fariz. All rights reserved.
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:opacity-75 transition-opacity duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:opacity-75 transition-opacity duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:opacity-75 transition-opacity duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
