import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';

interface GroupedExperience {
  company: string;
  roles: Array<{
    position: string;
    period: string;
    responsibilities: string[];
  }>;
}

export function Experience() {
  const { language } = useLanguage();
  const data = portfolioData[language].experience;

  const groupedItems = data.items.reduce<GroupedExperience[]>((groups, item) => {
    const existingGroup = groups.find((group) => group.company === item.company);

    if (existingGroup) {
      existingGroup.roles.push({
        position: item.position,
        period: item.period,
        responsibilities: item.responsibilities,
      });
      return groups;
    }

    groups.push({
      company: item.company,
      roles: [
        {
          position: item.position,
          period: item.period,
          responsibilities: item.responsibilities,
        },
      ],
    });

    return groups;
  }, []);

  return (
    <Section id="experience" title={data.title}>
      <div className="space-y-6">
        {groupedItems.map((group, groupIndex) => (
          <div
            key={`${group.company}-${groupIndex}`}
            className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="mb-4 text-blue-700 dark:text-blue-300">{group.company}</h3>

              <div className="space-y-5">
                {group.roles.map((role, roleIndex) => (
                  <div
                    key={`${role.position}-${role.period}-${roleIndex}`}
                    className="border-l-2 border-blue-100 dark:border-blue-900 pl-4"
                  >
                    <h4 className="text-lg text-gray-800 dark:text-gray-200 font-semibold mb-1">
                      {role.position}
                    </h4>
                    <p className="text-base text-gray-500 dark:text-gray-400 mb-3">
                      {role.period}
                    </p>

                    <ul className="space-y-2">
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-base text-gray-600 dark:text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0"
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
