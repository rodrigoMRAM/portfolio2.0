
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { useInView } from './useInView';
import { useTranslation } from 'react-i18next';
import { contactGA } from '../analytics/analytics';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '',  message: '' });
  const { darkMode } = useTheme();
  const [ref, visible] = useInView({ threshold: 0.1 });
  const { t } = useTranslation();
  const WHATSAPP_NUMBER = "541130430451";
  
  const buildWhatsappUrl = ({ name, message }) => {
    const safeText = encodeURIComponent(`¡Hola Rodrigo! Soy ${name}.\n\n${message}`);
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${safeText}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    const url = buildWhatsappUrl(formData);
    contactGA(formData.name, formData.message);
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormData({ name: '',  message: '' });
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 bg-gray-50 ${darkMode ? 'dark-theme' : ''}`}>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4  ${darkMode && 'dark-theme'}`}>{t('contact')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${darkMode && 'dark-theme'}`}>
            {t('contact_content')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className={`font-semibold text-gray-900 ${darkMode && 'dark-theme'}`}>Email</h3>
                <a href="mailto:rodrigomacielth@gmail.com" className={`text-gray-600 ${darkMode && 'dark-theme'}`} id='email'>rodrigomacielth@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className={`font-semibold text-gray-900 ${darkMode && 'dark-theme'}`}>{t('phone')}</h3>
                <a href='https://api.whatsapp.com/send?phone=541130430451&text=%C2%A1Hola%20Rodrigo!' target='_blank' className={`text-gray-600 ${darkMode && 'dark-theme'}`} id='phone_whatsapp'>1130430451</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className={`font-semibold text-gray-900 ${darkMode && 'dark-theme'}`}>{t('location')}</h3>
                <p className={`text-gray-600 ${darkMode && 'dark-theme'}`}>CABA, Argentina</p>
              </div>
            </div>
            
            <div className={`bg-white p-6 rounded-xl shadow-lg ${darkMode && 'bg-background'}`}>
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${darkMode && 'bg-background'}`} >{t('contact_why')}</h3>
              <ul className={`space-y-2 text-gray-600 ${darkMode && 'bg-background'}`}>
                <li> {t('contact_why_content1')}</li>
                <li>{t('contact_why_content2')}</li>
                <li>{t('contact_why_content3')}</li>
                <li>{t('contact_why_content4')}</li>
                <li>{t('contact_why_content5')}</li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} id='contacto_form' className={`bg-white p-8 rounded-xl shadow-lg ${darkMode && 'bg-background'}`} >
            <div className="space-y-6 flex flex-col h-full justify-between">
              <div className='space-y-6'>
                <div>

                <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${darkMode && 'bg-background'}`}>
                  {t('form_name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('form_name_placeholder')}
                  />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-2 ${darkMode && 'bg-background'}`}>
                 {t('form_message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('form_message_placeholder')}
                />
              </div>
              </div>
              
              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{t('form_button')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
