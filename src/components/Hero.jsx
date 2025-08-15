
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { useInView } from './useInView';
import { useTranslation } from 'react-i18next';

const Hero = () => {
      const { darkMode, setDarkMode } = useTheme();
      const [ref, visible] = useInView({ threshold: 0.1 });
      
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
   const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 ${darkMode && 'dark-theme' } `}>
      <div   className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center `}>
        <div className="animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 ${darkMode && 'dark-theme'}`}>
            Rodrigo
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Maciel
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto ${darkMode && 'dark-theme'}`}>
            {t('main')}
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/rodrigoMRAM" target="_blank" rel="noopener noreferrer" id='github_hero'
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-alberto-maciel-15673b243/" target="_blank" id='linkedin_hero' rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="mailto:rodrigomacielth@gmail.com" id='mail_hero'
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {t('boton_main')}
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
