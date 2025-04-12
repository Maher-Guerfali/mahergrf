import React, { useEffect, useState } from 'react';
import { Circle } from 'lucide-react';

interface Props {
  theme: 'default' | 'light' | 'dark';
}

const NavigationBar = ({ theme }: Props) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'games', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block ${
      theme === 'light' ? 'text-gray-400' : 'text-gray-600'
    }`}>
      <div className="relative flex flex-col items-start gap-4">
        {sections.map((section, index) => (
          <div key={section.id} className="relative">
            {/* Line above dot (except for first item) */}
            {index !== 0 && (
              <div 
                className={`absolute left-[3px] -top-[16px] w-[2px] h-[14px] ${
                  theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
                }`}
              />
            )}
            
            {/* Line below dot (except for last item) */}
            {index !== sections.length - 1 && (
              <div 
                className={`absolute left-[3px] top-[14px] w-[2px] h-[14px] ${
                  theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
                }`}
              />
            )}

            <a
              href={`#${section.id}`}
              className={`flex items-center gap-3 group transition-all duration-300`}
            >
              <Circle
                className={`w-2 h-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? theme === 'light'
                      ? 'fill-blue-600 text-blue-600'
                      : 'fill-white text-white'
                    : 'fill-transparent'
                }`}
              />
              <span className={`text-xs font-medium transition-all duration-300 ${
                activeSection === section.id 
                  ? theme === 'light'
                    ? 'text-blue-600 opacity-100'
                    : 'text-white opacity-100'
                  : 'opacity-13'
              }`}>
                {section.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;