import { GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { portfolioData } from "../data/portfolio";
import { Section } from "./Section";

export function Education() {
  const { language } = useLanguage();
  const data = portfolioData[language].education;
  const languageLabel =
    language === "en" ? "English proficiency" : "Trình độ ngoại ngữ";

  return (
    <Section
      id="education"
      title={data.title}
      className="bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="space-y-6">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-blue-700 dark:text-blue-300">
                {item.school}
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-1 font-semibold">
                {item.degree}
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {item.period}
              </p>
              {item.details && (
                <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
                  {item.details}
                </p>
              )}
              {item.languageLevel && (
                <p className="text-lg text-gray-800 dark:text-gray-200 mb-1 font-semibold">
                  <span className="font-semibold">{languageLabel}:</span>{" "}
                  {item.languageLevel}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
