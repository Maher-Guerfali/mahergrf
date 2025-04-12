import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Square, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Hammer,
  Clock,
  Users,
  Maximize,
  Minimize
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  fullDescription: string;
  videoUrl?: string;
  gameUrl?: string;
  projectUrl?: string;
  engine?: string;
  duration?: string;
  teamSize?: number;
  role?: string;
  challenges?: string[];
  results?: string[];
  screenshots: {
    title: string;
    url: string;
  }[];
}

interface Props {
  games: Project[];
  selectedGame: Project;
  onSelect: (game: Project) => void;
  theme: 'default' | 'light' | 'dark';
  projectType: 'games' | 'web';
  onProjectTypeChange: (type: 'games' | 'web') => void;
  webProjects: Project[];
}

const GameCarousel = ({ 
  games, 
  selectedGame, 
  onSelect, 
  theme,
  projectType,
  onProjectTypeChange,
  webProjects
}: Props) => {
  const [showingScreenshots, setShowingScreenshots] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const videoRef = useRef<HTMLIFrameElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Auto-switch to screenshots view if there's no video
  useEffect(() => {
    if (!selectedGame.videoUrl) {
      setShowingScreenshots(true);
    }
  }, [selectedGame]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVideoPlaying(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const projects = projectType === 'games' ? games : webProjects;

  const hasVideo = !!selectedGame.videoUrl;

  return (
    <div className="space-y-8">
      <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${
        theme === 'default' 
          ? 'from-blue-500 to-purple-500' 
          : theme === 'light' 
          ? 'from-blue-600 to-purple-600' 
          : 'from-red-500 to-purple-500'
      } bg-clip-text text-transparent`}>
        Featured Projects
      </h2>

      <div className={`relative rounded-2xl overflow-hidden ${
        theme === 'default'
          ? 'bg-gray-900/30'
          : theme === 'light'
          ? 'bg-white/30 border-2 border-black/10'
          : 'bg-black/30'
      } backdrop-blur-xl border border-white/10`}>
        <div className="flex p-2 gap-2">
          <button
            onClick={() => {
              onProjectTypeChange('games');
              onSelect(games[0]);
            }}
            className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
              projectType === 'games'
                ? theme === 'default'
                  ? 'bg-blue-500/20 text-blue-400'
                  : theme === 'light'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-800 text-white'
                : 'hover:bg-white/5'
            }`}
          >
            Games
          </button>
          <button
            onClick={() => {
              onProjectTypeChange('web');
              onSelect(webProjects[0]);
            }}
            className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
              projectType === 'web'
                ? theme === 'default'
                  ? 'bg-blue-500/20 text-blue-400'
                  : theme === 'light'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-800 text-white'
                : 'hover:bg-white/5'
            }`}
          >
            Web Projects
          </button>
        </div>

        <div className="p-6">
          <div className={`relative overflow-hidden transition-all duration-500 ${isVideoExpanded ? 'opacity-0 h-0' : 'opacity-100'}`}>
            <div 
              className="flex items-center justify-center gap-4 overflow-x-auto py-4 snap-x scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => onSelect(project)}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    selectedGame.id === project.id 
                      ? 'scale-105 ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 items-start mt-8 transition-all duration-500 ${isVideoExpanded ? 'opacity-0 h-0 mt-0 overflow-hidden' : 'opacity-100'}`}>
            <div className={`order-2 md:order-1 p-6 rounded-lg ${
              theme === 'light'
                ? 'border-2 border-black/10 bg-white/50'
                : 'border border-white/10 bg-white/5'
            } backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${
                theme === 'default'
                  ? 'from-blue-500 to-purple-500'
                  : theme === 'light'
                  ? 'from-blue-600 to-purple-600 text-transparent'
                  : 'from-red-500 to-purple-500'
              } bg-clip-text text-transparent mb-4`}>
                {selectedGame.title}
              </h3>

              <div className="flex gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Hammer size={16} className="text-blue-500" />
                  <span className="text-sm">{selectedGame.engine || 'Unity'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-500" />
                  <span className="text-sm">{selectedGame.duration || '3 weeks'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-purple-500" />
                  <span className="text-sm">{selectedGame.teamSize || 1} developer{selectedGame.teamSize !== 1 ? 's' : ''}</span>
                </div>
              </div>

              <div className={`leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                <p className={`transition-all duration-300 ${
                  expandedDescription ? '' : 'line-clamp-4'
                }`}>
                  {selectedGame.description}
                </p>
                
                {expandedDescription && selectedGame.fullDescription && (
                  <div className="mt-4">
                    <p className="mb-4">{selectedGame.fullDescription}</p>
                    
                    {selectedGame.role && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-blue-500 mb-2">Role</h4>
                        <p>{selectedGame.role}</p>
                      </div>
                    )}
                    
                    {selectedGame.challenges && selectedGame.challenges.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-amber-500 mb-2">Challenges</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedGame.challenges.map((challenge, index) => (
                            <li key={index} className="text-amber-600 dark:text-amber-400">
                              <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedGame.results && selectedGame.results.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-green-500 mb-2">Results</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedGame.results.map((result, index) => (
                            <li key={index} className="text-green-600 dark:text-green-400">
                              <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                
                {(selectedGame.fullDescription || 
                 (selectedGame.challenges && selectedGame.challenges.length > 0) || 
                 (selectedGame.results && selectedGame.results.length > 0)) && (
                  <button
                    onClick={() => setExpandedDescription(!expandedDescription)}
                    className={`flex items-center gap-1 mt-3 px-4 py-2 rounded-md text-white ${
                      expandedDescription 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    } transition-all duration-300`}
                  >
                    {expandedDescription ? (
                      <>
                        <ChevronUp size={16} />
                        <span>Close Details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        <span>Depth Look</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {(selectedGame.gameUrl || selectedGame.projectUrl) && (
                <a
                  href={selectedGame.gameUrl || selectedGame.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border-2 ${
                    theme === 'light'
                      ? 'border-blue-600 text-blue-600 hover:bg-blue-50'
                      : 'border-blue-400 text-blue-400 hover:bg-blue-900/20'
                  } transition-colors`}
                >
                  <ExternalLink size={16} />
                  {projectType === 'games' ? 'Play Game' : 'View Project'}
                </a>
              )}
            </div>
            
            <div className="order-1 md:order-2">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 relative">
                {!showingScreenshots ? (
                  hasVideo ? (
                    <>
                      <iframe
                        ref={videoRef}
                        src={`${selectedGame.videoUrl}${isVideoPlaying ? '' : '?autoplay=0'}`}
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                      <button
                        onClick={() => setIsVideoExpanded(!isVideoExpanded)}
                        className="absolute top-3 right-3 p-2 bg-black/40 hover:bg-black/60 rounded-full transition-colors z-10"
                      >
                        <Maximize size={20} className="text-white" />
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-gray-400">No video available</p>
                    </div>
                  )
                ) : (
                  <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
                    {selectedGame.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(screenshot.url)}
                        className="aspect-video rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                      >
                        <img
                          src={screenshot.url}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => hasVideo && setShowingScreenshots(false)}
                  disabled={!hasVideo}
                  className={`group relative flex-1 px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 ${
                    !showingScreenshots && hasVideo ? 'ring-2 ring-green-500' : ''
                  } ${
                    !hasVideo ? 'opacity-50 cursor-not-allowed bg-gray-700/30' : ''
                  }`}
                >
                  <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                    hasVideo ? 'bg-green-600/20 group-hover:opacity-100 opacity-0' : 'bg-gray-600/20'
                  }`} />
                  <div className="relative flex items-center justify-center gap-2">
                    <Play size={24} className={hasVideo ? "text-green-400" : "text-gray-400"} />
                    <span>Watch Video</span>
                  </div>
                </button>
                <button
                  onClick={() => setShowingScreenshots(true)}
                  className={`group relative flex-1 px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 ${
                    showingScreenshots ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-orange-600/20 rounded-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                  <div className="relative flex items-center justify-center gap-2">
                    <Square size={20} className="text-orange-400" />
                    <span>View Screenshots</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Expanded video container - only shown if video exists */}
          {hasVideo && (
            <div 
              className={`transition-all duration-500 rounded-xl overflow-hidden ${
                isVideoExpanded 
                  ? 'opacity-100' 
                  : 'opacity-0 max-h-0 pointer-events-none'
              } ${
                theme === 'light'
                  ? 'bg-white/70 border-2 border-black/10'
                  : 'bg-black/60 border border-white/10'
              } mt-4`}
            >
              <div className="p-4 flex justify-between items-center">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${
                  theme === 'default'
                    ? 'from-blue-500 to-purple-500'
                    : theme === 'light'
                    ? 'from-blue-600 to-purple-600'
                    : 'from-red-500 to-purple-500'
                } bg-clip-text text-transparent`}>
                  {selectedGame.title} - Video Preview
                </h3>
                <button
                  onClick={() => setIsVideoExpanded(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Minimize size={20} />
                </button>
              </div>
              {/* Mobile-optimized video container with increased height */}
              <div className="md:aspect-video w-full h-full">
                <div className="relative w-full" style={{ paddingBottom: "calc(56.25% + 30%)" }}>
                  <iframe
                    src={selectedGame.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

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

export default GameCarousel;