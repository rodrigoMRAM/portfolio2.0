
import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import ingles from '../assets/img/en.jpg';
import spain from '../assets/img/es.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    const { darkMode, setDarkMode } = useTheme();

  const scrollToSection = (sectionId) => {
    dataLayer.push({
  event: 'clicks_porftolio',
  clicks: sectionId
});
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
    const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [checked, setChecked] = useState(true);

  const toggleSwitch = () => {
    const newState = !checked;
    setChecked(newState);
    changeLanguage(newState ? 'en' : 'es');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 ${darkMode && 'navbar-bg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rodrigo Maciel
          </div>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex space-x-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <button onClick={() => scrollToSection('home')} id='home_navbar' className="home_navbar cursor-pointer  hover:text-blue-600 transition-colors">
              {t('navbar_home')}
            </button>
            <button onClick={() => scrollToSection('about')} id='about_navbar' className="cursor-pointer  hover:text-blue-600 transition-colors">
              {t('navbar_about')}
            </button>
            <button onClick={() => scrollToSection('projects')} id='projects_navbar' className=" hover:text-blue-600 transition-colors">
              {t('navbar_projects')}
            </button>
            <button onClick={() => scrollToSection('skills')} id='skills_navbar' className="cursor-pointer  hover:text-blue-600 transition-colors">
              {t('navbar_skills')}
            </button>
            <button onClick={() => scrollToSection('contact')} id='contact_navbar' className="cursor-pointer  hover:text-blue-600 transition-colors">
              {t('navbar_contact')}
            </button>
             <button
             id='dark-mode'
      onClick={() => setDarkMode(!darkMode)}
      className=""
    >
      {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' height="24px" viewBox="0 -960 960 960" width="24px" fill={`${darkMode ? 'white' : 'black'}`}><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>}
    </button>
     {/* <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button> */}
      <label
      className={`relative bg-[#101828] inline-block w-17 h-7 rounded-full cursor-pointer transition-colors duration-300 bg-gradient-to-r from-[#9810fa] to-[#155dfc] ${
        checked ? 'bg-[#101828]' : 'bg-[#101828]'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        id='language'
        onChange={toggleSwitch}
        className="sr-only"
      />
      {/* Texto ON/OFF */}
      <span
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold transition-all duration-300 ${
          checked ? 'text-white left-2' : 'text-white left-12'
        }`}
      >
        {checked ? 'EN' : 'ES'}
      </span>

      {/* Círculo */}
      <div
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center overflow-hidden ${
          checked ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        <img
          src={checked ? ingles : spain}
          alt={checked ? 'English' : 'Español'}
          className="object-cover w-5 h-5"
        />
      </div>
    </label>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} id='home_mobile' className=" hover:text-blue-600 transition-colors text-left">
                {t('navbar_home')}
              </button>
              <button onClick={() => scrollToSection('about')} id='about_mobile' className=" hover:text-blue-600 transition-colors text-left">
                {t('navbar_about')}
              </button>
              <button onClick={() => scrollToSection('projects')} id='projects_mobile' className=" hover:text-blue-600 transition-colors text-left">
                {t('navbar_projects')}
              </button>
              <button onClick={() => scrollToSection('skills')} id='skills_mobile' className=" hover:text-blue-600 transition-colors text-left">
                {t('navbar_skills')}
              </button>
              <button onClick={() => scrollToSection('contact')} id='contact_mobile' className=" hover:text-blue-600 transition-colors text-left">
                {t('navbar_contact')}
              </button>
           
        <div className='md:hidden flex justify-between gap-3' id='dark-mode_mobile'>
           <button
      onClick={() => setDarkMode(!darkMode)}
      className=""
    >
      {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' height="24px" viewBox="0 -960 960 960" width="24px" fill={`${darkMode ? 'white' : 'black'}`}><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>}
    </button>
     {/* <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button> */}
      <label
      className={`relative bg-[#101828] inline-block w-17 h-7 rounded-full cursor-pointer transition-colors duration-300 bg-gradient-to-r from-[#9810fa] to-[#155dfc] ${
        checked ? 'bg-[#101828]' : 'bg-[#101828]'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        id='language'
        onChange={toggleSwitch}
        className="sr-only"
      />
      {/* Texto ON/OFF */}
      <span
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold transition-all duration-300 ${
          checked ? 'text-white left-2' : 'text-white left-12'
        }`}
      >
        {checked ? 'EN' : 'ES'}
      </span>

      {/* Círculo */}
      <div
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center overflow-hidden ${
          checked ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        <img
          src={checked ? ingles : spain}
          alt={checked ? 'English' : 'Español'}
          className="object-cover w-5 h-5"
        />
      </div>
    </label>
        </div>
            </div>
          </nav>
        )}
      </div>
      
    </header>
  );
};

export default Header;
