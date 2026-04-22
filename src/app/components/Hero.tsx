import { Github, Linkedin, Mail, Phone, Target, User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { portfolioData } from "../data/portfolio";

const normalizeExternalLink = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

export function Hero() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  return (
    <section
      id="hero"
      className="py-10 md:py-14 lg:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-8">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 flex items-center justify-center shadow-xl">
                  <User className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full ring-4 ring-blue-200 dark:ring-blue-800 ring-offset-4 ring-offset-white dark:ring-offset-gray-800" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="mb-2 text-4xl md:text-4xl lg:text-5xl leading-tight">
                {data.name}
              </h1>
              <h2 className="text-2xl md:text-3xl">{data.title}</h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${data.contact.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="h-4 w-4" />
              <span className="text-base">{data.contact.email}</span>
            </a>
            <a
              href={`tel:${data.contact.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="h-4 w-4" />
              <span className="text-base">{data.contact.phone}</span>
            </a>
            {data.contact.github && (
              <a
                href={normalizeExternalLink(data.contact.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <Github className="h-4 w-4" />
                <span className="text-base">GitHub</span>
              </a>
            )}
            {data.contact.linkedin && (
              <a
                href={normalizeExternalLink(data.contact.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-base">LinkedIn</span>
              </a>
            )}
          </div>

          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 dark:border-blue-900/60 bg-white/90 dark:bg-gray-800/80 shadow-lg p-6 md:p-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-4">
              <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm md:text-base font-semibold text-blue-700 dark:text-blue-300">
                {data.objective.title}
              </span>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {data.objective.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
