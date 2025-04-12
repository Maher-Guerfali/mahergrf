import React, { useState } from 'react';
import { X, Circle, Triangle, Square } from 'lucide-react';

interface NavbarProps {
  name: string;
  calendlyUrl: string;
  theme: 'default' | 'light' | 'dark';
}

const Navbar = ({ name, calendlyUrl, theme }: NavbarProps) => {
  const [hoveredButton, setHoveredButton] = useState<'order' | 'call' | null>(null);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 theme-transition ${
      theme === 'default' 
        ? 'bg-transparent' 
        : theme === 'light'
        ? 'animate-theme-to-white bg-white/80'
        : 'animate-theme-to-black bg-black/80'
    } backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className={`text-xl font-bold theme-transition ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>{name}</span>
        
        {/* Split Button Container */}
        <div className={`relative flex overflow-hidden rounded-lg ${
          theme === 'light' 
            ? 'border border-blue-300/50' 
            : 'border border-white/20'
        }`}>
          {/* Order Now Button */}
          <a
            href="https://www.fiverr.com/guerfali_maher?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredButton('order')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              relative px-4 md:px-6 py-3 flex items-center gap-2 md:gap-3
              transition-all duration-300 ease-in-out
              ${hoveredButton === 'order' ? 'scale-[1.15] z-10' : ''}
              [clip-path:polygon(0_0,100%_0,65%_100%,0%_100%)]
            `}
          >
            {/* Background layer */}
            <div className={`
              absolute inset-0 transition-opacity duration-300
              bg-orange-500
              ${hoveredButton === 'order' ? 'opacity-100' : 'opacity-0'}
            `} />
            
            {/* Content layer */}
            <div
              className="relative flex items-center gap-2 md:gap-3"
              style={{ paddingRight: '20px' }} // Fixed inline style syntax
            >
              <span className="hidden md:inline">
                {hoveredButton === 'order' ? (
                  <Square className="w-5 h-5 text-white" />
                ) : (
                  <Triangle className="w-5 h-5" />
                )}
              </span>
              <span className={`
                whitespace-nowrap text-sm md:text-base
                ${hoveredButton === 'order' ? 'text-white' : theme === 'light' ? 'text-blue-900' : 'text-white'}
              `}>
                Hire Me
              </span>
            </div>
          </a>

          {/* Book a Call Button */}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredButton('call')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              relative px-4 md:px-6 py-3 flex items-center gap-2 md:gap-3
              transition-all duration-300 ease-in-out
              ${hoveredButton === 'call' ? 'scale-[1.15] z-10' : ''}
              [clip-path:polygon(35%_0,100%_0,100%_100%,0%_100%)]
              -ml-6
            `}
          >
            {/* Background layer */}
            <div className={`
              absolute inset-0 transition-opacity duration-300
              bg-red-500
              ${hoveredButton === 'call' ? 'opacity-100' : 'opacity-0'}
            `} />
            
            {/* Content layer */}
            <div
              className="relative flex items-center gap-2 md:gap-3"
              style={{ paddingLeft: '20px' }} // Fixed inline style syntax
            >
              <span className="hidden md:inline">
                {hoveredButton === 'call' ? (
                  <Circle className="w-5 h-5 text-white" />
                ) : (
                  <X className="w-5 h-5" />
                )}
              </span>
              <span className={`
                whitespace-nowrap text-sm md:text-base
                ${hoveredButton === 'call' ? 'text-white' : theme === 'light' ? 'text-blue-900' : 'text-white'}
              `}>
                Book a Call
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;