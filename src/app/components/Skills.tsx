import { Code2, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { portfolioData } from "../data/portfolio";
import { Section } from "./Section";
import { Badge } from "./ui/badge";

export function Skills() {
  const { language } = useLanguage();
  const technical = portfolioData[language].technicalSkills;
  const soft = portfolioData[language].softSkills;

  return (
    <Section id="skills" title={technical.mainTitle}>
      <div className="space-y-8">
        {/* Technical Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3>{technical.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technical.categories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <h4 className="mb-3 text-lg text-blue-600 dark:text-blue-400">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3>{soft.title}</h3>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-2">
              {soft.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
