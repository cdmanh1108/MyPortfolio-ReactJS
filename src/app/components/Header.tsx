import { useEffect, useState } from 'react';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';
import { Button } from './ui/button';

interface NavItem {
  id: string;
  labelEn: string;
  labelVi: string;
}

const navItems: NavItem[] = [
  { id: 'hero', labelEn: 'Home', labelVi: 'Trang chủ' },
  { id: 'education', labelEn: 'Education', labelVi: 'Học vấn' },
  { id: 'skills', labelEn: 'Skills', labelVi: 'Kỹ năng' },
  { id: 'experience', labelEn: 'Experience', labelVi: 'Kinh nghiệm' },
  { id: 'projects', labelEn: 'Projects', labelVi: 'Dự án' },
  { id: 'certificates', labelEn: 'Certificates', labelVi: 'Chứng chỉ' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const data = portfolioData[language];
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[index].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const offset = 80;
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm dark:bg-gray-900/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="font-semibold text-base md:text-lg truncate max-w-[170px] md:max-w-none">
              {data.name}
            </span>
          </button>

          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-base transition-all hover:cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {language === 'en' ? item.labelEn : item.labelVi}
              </button>
            ))}
          </nav>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 text-base hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'EN' : 'VI'}</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-left text-base transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white dark:bg-blue-500'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {language === 'en' ? item.labelEn : item.labelVi}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
