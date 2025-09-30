
import React, {useState, useEffect} from 'react';
import { ExternalLink, Github, ImageOff } from 'lucide-react';
import Cancel from '../assets/img/cancel.svg'; 
import Play from '../assets/img/play.svg'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useTheme } from "../context/ThemeContext";
import { useInView } from './useInView';
import { projects } from '../utils/dataProject';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { darkMode } = useTheme();
  const [watch, setWatch] = useState(false);
  const [pickedVideo, setPickedVideo] = useState(null);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [ref, visible] = useInView({ threshold: 0.1 });
  const data = projects(t);
  window.dataLayer = window.dataLayer || [];
  const dataLayer = window.dataLayer;
  
useEffect(() => {
  if (watch && pickedVideo) setLoading(true);
}, [watch, pickedVideo]);

  const watchVideo = (video) => {

    setWatch(!watch);
    setPickedVideo(video);
  }

const eventGA =  (project, video)=> {
  watchVideo(video)
  dataLayer.push({
  event: 'clicks_portfolio',
  clicks: `${project} boton`
})
}

const githubGA =  (title)=> {
  dataLayer.push({
  event: 'clicks_portfolio',
  clicks: `${title} github`
})
}

  return (
    <section ref={ref} id="projects" className={`py-20 bg-gray-50 ${darkMode ? 'dark-theme' : ''} ${visible ? 'visible' : ''}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div ref={ref} className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}  >
          <h2 className={`text-4xl font-bold text-gray-900 mb-4  ${darkMode && 'dark-theme'}`}>{t('projects')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p ref={ref} className={`text-lg text-gray-600 max-w-2xl mx-auto ${darkMode && 'dark-theme'} fade-in ${visible ? 'visible' : ''}`}>
            {t('projects_title')}
          </p>
        </div>

        <div ref={ref} className={`flex flex-col gap-8 fade-in ${visible ? 'visible' : ''}`}>
          {data.map((project, index) => (
            <div

              key={index}
              className={`video-show flex gap-4 flex-wrap max-sm:flex-col-reverse max-w-7xl bg-white  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all p-6 max-sm:p-0 duration-300 hover:-translate-y-2 ${darkMode && 'bg-background'}`}
            >
              <div className={`max-sm:p-6 ${darkMode && 'bg-background'} flex flex-col justify-between max-sm:w-full w-[45%]`}>
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
                    onClick={()=>githubGA(project.title)}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t('code')}
                  </a>
                  {project.demo && (<a
                    href={project.demo}
                    target="_blank"
                    className={`flex items-center text-gray-600 hover:text-purple-600 transition-colors ${darkMode && 'bg-background'}`}
                    
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>)}
                  {project.video && (
  <button
    type='button'
    onClick={() => eventGA(project.title, project.video)}
    className={`flex items-center text-gray-600 hover:text-purple-600 transition-colors ${darkMode && 'bg-background'} cursor-pointer`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-2 invert dark:invert-0"
      viewBox="0 -960 960 960"
      fill="currentColor" 
    >
      <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
    Play
  </button>
)}

                  
                </div>
              </div>
              <div className="relative overflow-hidden media-container w-[50%] max-sm:w-full m-auto z-50 media-image">
                <Swiper
                  pagination={{ clickable: true }}
                  navigation
                  modules={[ Navigation, Pagination]}
                  className="w-full h-[300px] max-sm:h-auto media-image"
                >
                  {project.image.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={img}
                        alt={`${project.title} ${imgIndex + 1}`}
                        className="w-full h-[300px] max-sm:h-auto object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>


               
              </div>
            </div>

          ))}
        </div>
      </div>

{watch && (
  <div
    className='fixed flex flex-col gap-5 justify-center items-center top-0 left-0 right-0 bottom-0 m-[0 auto] w-full h-screen bg-black/80 z-40'
    onClick={watchVideo}
  >
    {loading && (
      <div className="text-white fixed flex flex-col gap-5 justify-center items-center top-0 left-0 right-0 bottom-0 m-[0 auto]">
        <div className="loader mb-3"></div>
        <p>Cargando video...</p>
      </div>
    )}

    <video
      key={pickedVideo}                // 🔹 remount al cambiar la fuente
      autoPlay
      className={`h-[400px] ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      src={pickedVideo}
      muted
      loop
      playsInline
      onLoadStart={() => setLoading(true)}   // 🔹 arranca el loader
      onLoadedData={() => setLoading(false)} // 🔹 oculta cuando está listo
    />

    <img
      src={Cancel}
      className='cursor-pointer'
      alt="cerrar"
      width={40}
      onClick={(e) => { e.stopPropagation(); watchVideo(); }} // evita cerrar al clickear el ícono
    />
  </div>
)}

      {/* <video autoplay src={Video} muted loop playsInline></video> */}
    </section>
  );
};

export default Projects;
