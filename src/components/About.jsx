
import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { useInView } from './useInView';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Imagen from '../assets/img/imagen1.png';
import Imagen2 from '../assets/img/imagen2.png';
import Imagen3 from '../assets/img/imagen3.png';
import Imagen4 from '../assets/img/imagen4.png';
import Imagen5 from '../assets/img/imagen5.png';
import Imagen6 from '../assets/img/imagen6.png';
import { useTranslation } from 'react-i18next';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const About = () => {
      const { darkMode, setDarkMode } = useTheme();
        const [ref, visible] = useInView({ threshold: 0.1 });
  const images = [
  Imagen,
  Imagen2,
  Imagen3,
  Imagen4,
  Imagen5,
  Imagen6
];
const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    
  return (
    <section id="about"  className={`py-20 bg-white ${darkMode && 'dark-theme' } `}>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${darkMode && 'dark-theme'}`}>{t('about_me')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg text-gray-600 leading-relaxed ${darkMode && 'dark-theme'}`}>
              {t('about_me_t1')}
            </p>
            
            <p className={`text-lg text-gray-600 leading-relaxed ${darkMode && 'dark-theme'}`}>
               {t('about_me_t2')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('clean_code')}</h3>
                <p className="text-sm text-gray-600">{t('clean_code_content')}</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Coffee className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('learning')}</h3>
                <p className="text-sm text-gray-600">{t('learning_content')}</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('passion')}</h3>
                <p className="text-sm text-gray-600">{t('passion_content')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation : false
      
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain bg-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
      </div>
    </section>
  );
};

export default About;
