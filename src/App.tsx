import React, { useState } from 'react';
import { ChevronRight, Mail, Linkedin, Github, FileText, Send, Calendar, Triangle, Coffee } from 'lucide-react';
import { portfolioConfig } from './config/portfolio';
import Model3D from './components/Model3D';
import Navbar from './components/Navbar';
import NavigationBar from './components/NavigationBar';
import AboutSection from './components/AboutSection';
import GameCarousel from './components/GameCarousel';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';

function App() {
  const [selectedGame, setSelectedGame] = useState(portfolioConfig.games[0]);
  const [section,] = useState('home');
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'default' | 'light' | 'dark'>('default');
  const [projectType, setProjectType] = useState<'games' | 'web'>('games');
  
  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolioConfig.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleThemeChange = () => {
    if (theme === 'default') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
  };

  return (
    <div className={`min-h-screen theme-transition ${
      theme === 'default' 
        ? 'theme-default bg-gray-900' 
        : theme === 'light'
        ? 'theme-light animate-theme-to-white'
        : 'theme-dark animate-theme-to-black'
    } text-[var(--text-primary)]`}>
      {/* RGB Light Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[300%] h-[450%] -translate-y-[60%] rounded-full bg-blue-500 animate-rgb-shift opacity-20"></div>

      {/* Bolt Website Light */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-blue-500/20 rounded-full blur-xl"></div>

      <Navbar name={portfolioConfig.name} calendlyUrl={portfolioConfig.social.calendly} theme={theme} />
      <NavigationBar theme={theme} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative snap-start pt-24 md:pt-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className={`text-5xl md:text-8xl font-bold mb-4 md:mb-8 bg-gradient-to-r ${
              theme === 'default' 
                ? 'from-white to-blue-500' 
                : theme === 'light' 
                ? 'from-gray-900 to-blue-600' 
                : 'from-white to-red-500'
            } bg-clip-text text-transparent`}>
              {portfolioConfig.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 md:mb-12 opacity-80">
              {portfolioConfig.description}
            </p>
            <button 
              onClick={() => document.getElementById('games')?.scrollIntoView()}
              className="group relative px-6 py-3 rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <span>View Projects</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <Model3D onThemeChange={handleThemeChange} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 snap-start">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${
            theme === 'default' 
              ? 'from-blue-500 to-purple-500' 
              : theme === 'light' 
              ? 'from-blue-600 to-purple-600' 
              : 'from-red-500 to-purple-500'
          } bg-clip-text text-transparent`}>
            About Me
          </h2>
          <AboutSection
            theme={theme}
            education={portfolioConfig.education}
            certifications={portfolioConfig.certifications}
            images={portfolioConfig.aboutImages}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 snap-start">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${
            theme === 'default' 
              ? 'from-blue-500 to-purple-500' 
              : theme === 'light' 
              ? 'from-blue-600 to-purple-600' 
              : 'from-red-500 to-purple-500'
          } bg-clip-text text-transparent`}>
            Skills & Technologies
          </h2>
          <SkillsSection theme={theme} />
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="min-h-screen py-20 snap-start">
        <div className="max-w-6xl mx-auto px-4">
          <GameCarousel 
            games={portfolioConfig.games}
            webProjects={portfolioConfig.webProjects}
            selectedGame={selectedGame} 
            onSelect={setSelectedGame}
            theme={theme}
            projectType={projectType}
            onProjectTypeChange={setProjectType}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 snap-start">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${
            theme === 'default' 
              ? 'from-blue-500 to-purple-500' 
              : theme === 'light' 
              ? 'from-blue-600 to-purple-600' 
              : 'from-red-500 to-purple-500'
          } bg-clip-text text-transparent`}>
            Experience
          </h2>
          <ExperienceSection experiences={portfolioConfig.experiences} theme={theme} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 snap-start">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${
            theme === 'default' 
              ? 'from-blue-500 to-purple-500' 
              : theme === 'light' 
              ? 'from-blue-600 to-purple-600' 
              : 'from-red-500 to-purple-500'
          } bg-clip-text text-transparent`}>
            What People Say
          </h2>
          <TestimonialsCarousel testimonials={portfolioConfig.testimonials} theme={theme} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 flex items-center justify-center snap-start">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r ${
            theme === 'default' 
              ? 'from-blue-500 to-purple-500' 
              : theme === 'light' 
              ? 'from-blue-600 to-purple-600' 
              : 'from-red-500 to-purple-500'
          } bg-clip-text text-transparent`}>
            Stay in Touch
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={copyEmail}
              className={`text-xl transition-colors ${
                theme === 'light' ? 'text-blue-800 hover:text-blue-600' : 'hover:text-[var(--accent-primary)]'
              }`}
            >
              {portfolioConfig.social.email}
            </button>
            <button
              onClick={copyEmail}
              className={`p-2 rounded-full transition-colors ${
                copied ? 'bg-green-500' : `bg-[var(--accent-primary)] opacity-80 hover:opacity-100`
              }`}
            >
              <Mail size={20} />
            </button>
          </div>
          {copied && (
            <p className="text-green-500 animate-fade-in">Email copied to clipboard!</p>
          )}
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href={portfolioConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                theme === 'default' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : theme === 'light' 
                  ? 'bg-blue-100 hover:bg-blue-200' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className={theme === 'light' ? 'text-blue-800' : undefined} />
            </a>
            <a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                theme === 'default' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : theme === 'light' 
                  ? 'bg-blue-100 hover:bg-blue-200' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={24} className={theme === 'light' ? 'text-blue-800' : undefined} />
            </a>
            <a
              href={portfolioConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                theme === 'default' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : theme === 'light' 
                  ? 'bg-blue-100 hover:bg-blue-200' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              aria-label="Telegram"
            >
              <Send size={24} className={theme === 'light' ? 'text-blue-800' : undefined} />
            </a>
            <a
              href={portfolioConfig.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                theme === 'default' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : theme === 'light' 
                  ? 'bg-blue-100 hover:bg-blue-200' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              aria-label="Resume"
            >
              <FileText size={24} className={theme === 'light' ? 'text-blue-800' : undefined} />
            </a>
            <a
              href="https://www.fiverr.com/guerfali_maher?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                theme === 'default' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : theme === 'light' 
                  ? 'bg-blue-100 hover:bg-blue-200' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              aria-label="Order Now"
            >
              <Triangle size={24} className={theme === 'light' ? 'text-blue-800' : undefined} />
            </a>
          </div>

          {/* Buy Me a Coffee Button */}
          <div className="mt-12">
            <a
              href={portfolioConfig.social.buyMeACoffee}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffdd00] text-[#000000] rounded-full font-medium hover:bg-[#ffed4a] transition-colors"
              aria-label="Buy me a coffee"
            >
              <Coffee size={24} />
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;