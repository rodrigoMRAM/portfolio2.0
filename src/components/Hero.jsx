
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

const Hero = () => {
      const { darkMode,  } = useTheme();
      
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
   const { t } = useTranslation();

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 ${darkMode && 'dark-theme' } `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className={`mx-auto mb-6 w-fit rounded-full border px-4 py-2 text-sm font-medium ${darkMode ? 'border-blue-400/40 bg-blue-400/10 text-blue-200' : 'border-blue-200 bg-white/80 text-blue-700'}`}>
            Full Stack Developer · React · Node.js · NestJS
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 ${darkMode && 'dark-theme'}`}>
            Rodrigo
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Maciel
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto ${darkMode && 'dark-theme'}`}>
            {t('main')}
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/rodrigoMRAM" target="_blank" rel="noopener noreferrer" id='github_hero'
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/rodrigoalbertomaciel/" target="_blank" id='linkedin_hero' rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="mailto:rodrigomacielth@gmail.com" id='mail_hero'
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToAbout}
              className="cursor-pointer bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-colors"
            >
              {t('boton_main')}
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`cursor-pointer px-7 py-3.5 rounded-lg font-semibold border transition-colors ${darkMode ? 'border-gray-600 hover:bg-white/10' : 'border-gray-300 bg-white hover:border-blue-400 hover:text-blue-700'}`}
            >
              {t('navbar_projects')}
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
