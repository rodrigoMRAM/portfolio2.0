
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

const Footer = () => {
      const { darkMode } = useTheme();
      const { t } = useTranslation();

  return (
    <footer className={` text-white py-12 ${darkMode ? "bg-background" :"bg-gray-900" }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Rodrigo Maciel
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              {t('main')}
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/rodrigoMRAM" target="_blank" rel="noopener noreferrer" id='github_footer'
               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-alberto-maciel-15673b243/" id='linkedin_footer' target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:rodrigomacielth@gmail.com" id='mail_footer'
               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              {t('made_by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
