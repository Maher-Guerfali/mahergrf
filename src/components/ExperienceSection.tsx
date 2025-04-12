import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, X } from 'lucide-react';
import type { Experience } from '../data/experiences';

interface Props {
  experiences: Experience[];
  theme: 'default' | 'light' | 'dark';
}

const ExperienceSection = ({ experiences, theme }: Props) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className={`
            ${theme === 'light' 
              ? 'bg-blue-100/80 text-blue-900'
              : 'bg-gray-900/50 text-white'}
            backdrop-blur-sm rounded-lg
            transition-all duration-300
            ${expandedId === exp.id ? 'ring-2 ring-blue-500' : ''}
          `}
        >
          {/* Header */}
          <button
            onClick={() => toggleExpand(exp.id)}
            className="w-full p-6 flex items-start gap-4 text-left"
          >
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg flex-shrink-0 ${
                theme === 'light' ? 'bg-blue-200' : 'bg-blue-500'
              }`}
            >
              {exp.icon ? (
                <img
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <Briefcase size={24} />
              )}
            </a>
            <div className="flex-grow">
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold hover:underline"
              >
                {exp.title}
              </a>
              <p className={theme === 'light' ? 'text-blue-700' : 'text-gray-400'}>
                {exp.company}
              </p>
              <p className={`text-sm mb-4 ${theme === 'light' ? 'text-blue-600' : 'text-gray-500'}`}>
                {exp.period}
              </p>
              <p className={theme === 'light' ? 'text-blue-800' : 'text-gray-300'}>
                {exp.description}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              {expandedId === exp.id ? (
                <ChevronUp className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />
              ) : (
                <ChevronDown className={theme === 'light' ? 'text-blue-600' : 'text-gray-400'} />
              )}
            </div>
          </button>

          {/* Expanded Content */}
          {expandedId === exp.id && (
            <div className="px-6 pb-6 space-y-6 animate-fade-in">
              <div className="pl-14">
                <h4 className={`text-lg font-medium mb-3 ${
                  theme === 'light' ? 'text-blue-800' : 'text-blue-400'
                }`}>Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        theme === 'light' ? 'bg-blue-600' : 'bg-blue-500'
                      }`} />
                      <span className={theme === 'light' ? 'text-blue-900' : 'text-gray-300'}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.screenshots.length > 0 && (
                <div className="pl-14">
                  <h4 className={`text-lg font-medium mb-3 ${
                    theme === 'light' ? 'text-blue-800' : 'text-blue-400'
                  }`}>Project Screenshots</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {exp.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(screenshot.url)}
                        className="relative group aspect-video rounded-lg overflow-hidden bg-gray-800/50"
                      >
                        <img
                          src={screenshot.url}
                          alt={screenshot.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-sm text-white text-center px-2">
                            {screenshot.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Screenshot"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;