import React, { useEffect, useRef } from 'react';
import { Route, Calendar, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';
import { JOURNEY_TIMELINE } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative z-40 -mt-8 sm:-mt-12 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#f8fafc] dark:bg-[#090e18] rounded-t-[32px] sm:rounded-t-[48px] overlap-card transition-colors duration-500 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800/60 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wider uppercase">
              <Route className="w-3.5 h-3.5" />
              <span>TIMELINE & MILESTONES</span>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">歩み</span>
            </div>
          </div>

          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-['Poppins']"
          >
            MY JOURNEY
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-lg">
            How my passion evolved from frontend interfaces to deep backend systems and reliable architectures.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-sky-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          
          {JOURNEY_TIMELINE.map((milestone, idx) => (
            <div
              key={milestone.year}
              className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out relative group"
            >
              {/* Timeline Node Marker with Cat Paw Accent */}
          <div className="absolute -left-[40px] sm:-left-[58px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 text-sky-500 shadow-md group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
            <CatPawIcon className="w-4 h-4" />
          </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-md hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-500/50 transition-all duration-300">
                
                {/* Year and Subtitle */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-sky-600 dark:text-sky-400 font-mono">
                      {milestone.year}
                    </span>
                    {idx === 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" /> Present
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {milestone.subtitle}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {milestone.title}
                </h3>

                {/* Milestone Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {/* Milestone Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
