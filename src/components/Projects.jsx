
import React from 'react';
import { ExternalLink, Github, ImageOff } from 'lucide-react';
import Video from '../assets/videos/ayuda.mp4'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useTheme } from "../context/ThemeContext";
import { useInView } from './useInView';
import { projects } from '../utils/dataProject';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { t } = useTranslation();

  const [ref, visible] = useInView({ threshold: 0.1 });
  const data = projects(t);


  return (
    <section id="projects" className={`py-20 bg-gray-50 ${darkMode ? 'dark-theme' : ''} `}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div ref={ref} className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}  >
          <h2 className={`text-4xl font-bold text-gray-900 mb-4  ${darkMode && 'dark-theme'}`}>Mis Proyectos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p ref={ref} className={`text-lg text-gray-600 max-w-2xl mx-auto ${darkMode && 'dark-theme'} fade-in ${visible ? 'visible' : ''}`}>
            {t('projects_title')}
          </p>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in ${visible ? 'visible' : ''}`}>
          {data.map((project, index) => (
            <div

              key={index}
              className={`video-show bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${darkMode && 'bg-background'}`}
            >
              <div className="relative overflow-hidden media-container">
                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Pagination, Navigation]}
                  className="w-full h-48 media-image"
                >
                  {project.image.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={img}
                        alt={`${project.title} ${imgIndex + 1}`}
                        className="w-full h-48 object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>


                {/* <video
                  autoplay
                  className="absolute inset-0 w-full h-48 object-cover media-video"
                  src={project.video}
                  muted
                  loop
                  playsInline
                /> */}
              </div>

              <div className={`p-6 ${darkMode && 'bg-background'}`}>
                <h3 className={`text-xl font-bold text-gray-900 mb-3 ${darkMode && 'bg-background'}`}>{project.title}</h3>
                <p className={`text-gray-600 mb-4 ${darkMode && 'bg-background'}`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className={`flex items-center text-gray-600 hover:text-blue-600 transition-colors ${darkMode && 'bg-background'}`}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className={`flex items-center text-gray-600 hover:text-purple-600 transition-colors ${darkMode && 'bg-background'}`}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
      {/* <video autoplay src={Video} muted loop playsInline></video> */}
    </section>
  );
};

export default Projects;
