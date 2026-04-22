import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';

export function Objective() {
  const { language } = useLanguage();
  const data = portfolioData[language].objective;

  return (
    <Section id="objective" title={data.title}>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {data.description}
      </p>
    </Section>
  );
}
