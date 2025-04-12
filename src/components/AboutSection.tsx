import React, { useState } from 'react';
import { User, X, GraduationCap, Award } from 'lucide-react';

interface Props {
  theme: 'default' | 'light' | 'dark';
  education: {
    university: string;
    degree: string;
    period: string;
    icon: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    icon: string;
  }[];
  images: {
    url: string;
    title: string;
  }[];
}

const AboutSection = ({ theme, education, certifications, images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left Column - Personal Info */}
      <div className={`space-y-8 ${
        theme === 'light' ? 'text-gray-800' : 'text-gray-200'
      }`}>
        <div className="flex items-start gap-6">
          <div className={`w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ${
            theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'
          }`}>
            <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQENwoBKRi2yWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724624154350?e=1749686400&v=beta&t=80O8oX3bYLb8d9dxG3dbTImIhxza7PyZpwoZrsy_IRU"
            alt="Screenshot"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Maher Guerfali</h3>
            <p className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Software Engineer & Game Developer with a passion for creating immersive experiences
              and solving complex technical challenges.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h4 className={`text-xl font-semibold flex items-center gap-2 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            <GraduationCap className="w-5 h-5" />
            Education
          </h4>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  theme === 'light'
                    ? 'bg-white shadow-md'
                    : 'bg-gray-800/30 border border-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={edu.icon}
                    alt={edu.university}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h5 className="font-medium">{edu.university}</h5>
                    <p className={`text-sm ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>{edu.degree}</p>
                  </div>
                </div>
                <p className={`text-sm ${
                  theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                }`}>{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h4 className={`text-xl font-semibold flex items-center gap-2 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            <Award className="w-5 h-5" />
            Certifications
          </h4>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg flex items-center gap-3 ${
                  theme === 'light'
                    ? 'bg-white shadow-md'
                    : 'bg-gray-800/30 border border-white/10'
                }`}
              >
                <img
                  src={cert.icon}
                  alt={cert.name}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-grow">
                  <h5 className="font-medium text-sm">{cert.name}</h5>
                  <p className={`text-xs ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {cert.issuer} <span className="ml-2 text-gray-500">| {cert.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Column - Video and Introduction */}
      <div className="space-y-8">
        <div
          className="relative aspect-video rounded-lg overflow-hidden"
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => setIsVideoHovered(false)}
        >
          <iframe
            src="https://www.youtube.com/embed/gkY8toYMnsE"
            className="w-full h-full"
            title="Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {isVideoHovered && (
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 pointer-events-none"
            >
              <p className="text-white text-lg font-medium">
                Watch my introduction video to learn more about my journey and passion for development
              </p>
            </div>
          )}
        </div>

        <div className={`p-6 rounded-lg ${
          theme === 'light'
            ? 'bg-white shadow-lg'
            : 'bg-gray-800/30 border border-white/10'
        }`}>
          <h4 className={`text-xl font-semibold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>Introduction</h4>
          <p className={`leading-relaxed ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            With more then 3 years in the professional industry,
             I excel in Unity game development and full stack web development 
             specifically in mobile and spatial computing. My expertise spans
              artistic design and programming, crafting immersive experiences 
              across mobile and VR platforms. With a degree in computer engineering
               and a solid foundation in C#/C++, Mathematics, Game Theory and NodeJs, 
               I confidently tackle development challenges.
          </p>
        </div>
      </div>

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
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default AboutSection;