import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';

export function Footer() {
  const { language } = useLanguage();
  const data = portfolioData[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-base text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} {data.name}.{' '}
            {language === 'en' ? 'All rights reserved.' : 'Bảo lưu mọi quyền.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
