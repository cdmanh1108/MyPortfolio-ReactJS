import { useState } from 'react';
import { Award, Calendar, CalendarX, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';

export function Certificates() {
  const { language } = useLanguage();
  const data = portfolioData[language].certificates;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="certificates" title={data.title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.items.map((cert, index) => (
          <article
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {cert.image && (
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  onClick={() => setSelectedImage(cert.image as string)}
                  className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                />

                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-md hover:scale-110 transition-all"
                  >
                    <ExternalLink className="h-4 w-4 text-gray-700 dark:text-gray-200" />
                  </a>
                )}
              </div>
            )}

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                {!cert.image && (
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
              </div>

              <h3 className="mb-2 font-semibold">{cert.name}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">{cert.issuer}</p>

              <div className="space-y-2 mt-auto">
                <div className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {language === 'en' ? 'Issued:' : 'Cấp:'} {cert.date}
                  </span>
                </div>

                {cert.expiry ? (
                  <div className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                    <CalendarX className="h-4 w-4" />
                    <span>
                      {language === 'en' ? 'Expires:' : 'Hết hạn:'} {cert.expiry}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-base text-green-600 dark:text-green-400">
                    <Calendar className="h-4 w-4" />
                    <span>{language === 'en' ? 'No expiration' : 'Không hết hạn'}</span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <button
          type="button"
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate preview"
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </button>
      )}
    </Section>
  );
}
