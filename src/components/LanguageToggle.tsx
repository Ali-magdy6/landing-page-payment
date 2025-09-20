import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20 ${className}`}
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium text-white">
        {i18n.language === 'en' ? 'عربي' : 'EN'}
      </span>
      <div className="w-6 h-4 rounded-sm overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">
            {i18n.language === 'en' ? 'A' : 'E'}
          </span>
        </div>
      </div>
    </button>
  );
};

export default LanguageToggle;
