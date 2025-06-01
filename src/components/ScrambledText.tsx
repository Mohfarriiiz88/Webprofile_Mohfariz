
import React, { useState, useEffect } from 'react';

interface ScrambledTextProps {
  text: string;
  className?: string;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const scrambleText = () => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (iterations < maxIterations && Math.random() < 0.7) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return text[index];
        }).join('')
      );
      
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 50);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scrambleText();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDisplayText(text);
  };

  return (
    <p
      className={`transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter: isHovered ? 'blur(0.5px)' : 'none',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)'
      }}
    >
      {displayText}
    </p>
  );
};

export default ScrambledText;
