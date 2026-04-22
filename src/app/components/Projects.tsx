import {
  Calendar,
  ExternalLink,
  Folder,
  Github,
  Globe,
  UserCircle,
  Users,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { Badge } from './ui/badge';

const normalizeUrl = (value?: string) => {
  if (!value || value === '#') {
    return '';
  }

  return value.startsWith('http://') || value.startsWith('https://')
    ? value
    : `https://${value}`;
};

export function Projects() {
  const { language } = useLanguage();
  const portfolio = portfolioData[language];
  const data = portfolio.projects;
  const defaultGithubUrl = normalizeUrl(portfolio.contact.github);

  return (
    <Section id="projects" title={data.title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.items.map((project, index) => {
          const websiteUrl = normalizeUrl(project.website ?? project.link);
          const githubUrl = normalizeUrl(project.github) || defaultGithubUrl;

          return (
            <article
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Folder className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="mb-3">{project.name}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                  <UserCircle className="h-4 w-4" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-base font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {language === 'en' ? 'Links' : 'Liên kết'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {websiteUrl ? (
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{language === 'en' ? 'Website' : 'Trang web'}</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                      <Globe className="h-4 w-4" />
                      <span>
                        {language === 'en' ? 'Website: Updating' : 'Trang web: Đang cập nhật'}
                      </span>
                    </span>
                  )}

                  {githubUrl ? (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                      <Github className="h-4 w-4" />
                      <span>{language === 'en' ? 'GitHub: Updating' : 'GitHub: Đang cập nhật'}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-auto">
                <h4 className="text-base md:text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  {language === 'en' ? 'My Contributions' : 'Đóng góp của tôi'}
                </h4>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, contribIndex) => (
                      <li
                        key={contribIndex}
                        className="text-base text-gray-800 dark:text-gray-200 pl-5 relative before:content-['✔'] before:absolute before:left-0 before:text-blue-600"
                      >
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
