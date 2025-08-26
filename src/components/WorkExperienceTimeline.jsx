import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useInView } from './useInView';

const Timeline = ({ items,darkMode }) => {
    const [ref, visible] = useInView({ threshold: 0.1 });
  
  return (
    <section ref={ref} id="experience" className={`py-20 bg-white ${darkMode ? 'dark-theme2' : ''} fade-in ${visible ? 'visible' : ''}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      <div className="relative ">
        {/* Línea vertical principal */}
        <div className="absolute left-8 max-sm:left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
        
        {items.map((item, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            {/* Punto en la línea */}
            <div className="absolute left-6 max-sm:left-3 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-md z-10"></div>
            
            {/* Icono */}
            <div className="absolute left-4 max-sm:left-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-20">
              {item.type === 'work' && <Briefcase className="w-4 h-4 text-white" />}
              {item.type === 'education' && <GraduationCap className="w-4 h-4 text-white" />}
              {item.type === 'award' && <Award className="w-4 h-4 text-white" />}
            </div>
            
            {/* Contenido */}
            <div className={`ml-20 max-sm:ml-14  ${darkMode ? 'bg-background' : ''} rounded-lg border border-blue-600 shadow-sm p-6 hover:shadow-md transition-shadow`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className={`text-lg font-semibold text-gray-900 ${darkMode ? 'bg-background' : ''}`}>
                  {item.title}
                </h3>
                <div className={`flex items-center text-sm text-gray-500 mt-1 sm:mt-0 ${darkMode ? 'text-white' : ''}`}>
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </div>
              
              <div className="flex items-center text-blue-600 font-medium mb-3">
                {item.company && (
                  <>
                    <span>{item.company}</span>
                    {item.location && (
                      <>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-gray-500">{item.location}</span>
                      </>
                    )}
                  </>
                )}
              </div>
              
              <p className={`text-gray-600 mb-4 ${darkMode ? 'text-white' : ''}`}>
                {item.description}
              </p>
              
              {item.technologies && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {item.achievements && (
                <div className="mt-4">
                  <h4 className={`font-medium text-gray-900 mb-2 ${darkMode ? 'text-white' : ''}`} >Logros destacados:</h4>
                  <ul className={`list-disc list-inside text-gray-600 text-sm space-y-1 ${darkMode ? 'text-white' : ''}`}>
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

// Componente principal con datos de ejemplo
const WorkExperienceTimeline = () => {
    const { darkMode, setDarkMode } = useTheme();
      const { t } = useTranslation();
  
  const experienceData = [
    {
    type: 'work',
    title: t("software_developer_title"),
    company: t("oca_company"),
    location: t("buenos_aires_location"),
    date: t("software_developer_date"),
    description: t("software_developer_description"),
    technologies: ['React JS', 'Nest.js', '.NET', 'SQL Server', 'Google analytics'],
    achievements: [t("software_developer_achievement"),t("software_developer_achievement1"),t("software_developer_achievement2")] // Retorna array directamente
  },
  {
    type: 'education',
    title: t("frontend_specialization_title"),
    company: t("digital_house_company"),
    location: t("remote_location"),
    date: t("frontend_specialization_date"),
    description: t("frontend_specialization_description"),
    technologies: ['Next.js', 'Redux', 'Tailwind CSS', 'Docker', 'Selenium'],
    achievements: [
      t("frontend_specialization_achievement"),
      t("frontend_specialization_achievement1"),
      t("frontend_specialization_achievement2")
    ]
  },
  {
    type: 'work',
    title: t("animal_project_title"),
    company: t("local_agency_company"),
    location: t("buenos_aires_location"),
    date: t("animal_project_date"),
    description: t("animal_project_description"),
    technologies: ['Django', 'JavaScript', 'Nginx', 'VPS Linux'],
    achievements: [
      t("animal_project_achievement"),
      t("animal_project_achievement1"),
      t("animal_project_achievement2")
    ]
  },
  {
    type: 'work',
    title: t("logistics_operator_title"),
    company: t("oca_company"),
    location: t("buenos_aires_location"),
    date: t("logistics_operator_date"),
    description: t("logistics_operator_description"),
    technologies: [], // Sin tecnologías específicas
    achievements: [
      t("logistics_operator_achievement"),
      t("logistics_operator_achievement1"),
      t("logistics_operator_achievement2")
    ]
  },
  ];

  return (
    <div className={`py-20 bg-white ${darkMode ? 'dark-theme2' : ''}`}>
      <div className={`max-w-4xl mx-auto mb-12 text-center ${darkMode ? 'dark-theme2' : ''}`}>
        <h1 className={`text-4xl font-bold  mb-4 `}>
          {t("experience")}
        </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-xl ">
          {t("experience_subtittle")}
        </p>
      </div>

      <Timeline items={experienceData} darkMode={darkMode}/>
    </div>
  );
};



export default WorkExperienceTimeline;