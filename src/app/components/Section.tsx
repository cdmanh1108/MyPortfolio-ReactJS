import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 pb-4 border-b-2 border-blue-600 dark:border-blue-400 inline-block text-3xl md:text-4xl">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
