import React from 'react';
import { Server, Database, Layout, Wrench, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'BACKEND':
        return <Server className="w-5 h-5 text-sky-500" />;
      case 'DATABASE':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'FRONTEND':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'TOOLS':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative z-20 -mt-8 sm:-mt-12 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#f8fafc] dark:bg-[#090e18] rounded-t-[32px] sm:rounded-t-[48px] overlap-card transition-colors duration-500 border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800/60 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wider uppercase">
              <CatPawIcon className="w-3.5 h-3.5" />
              <span>SKILLS & TECHNOLOGIES</span>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">技術スタック</span>
            </div>
          </div>

          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-['Poppins']"
          >
            WHAT I WORK WITH
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-lg">
            Core technologies and tools I utilize to craft performant backend services and intuitive web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* BACKEND Category - Larger Visual Emphasis (Spans 7 columns on large screen) */}
          {SKILL_CATEGORIES.filter((c) => c.title === 'BACKEND').map((category) => (
            <div
              key={category.title}
              className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-sky-950/30 border-2 border-sky-300/80 dark:border-sky-500/40 shadow-xl shadow-sky-500/5 hover:shadow-sky-500/10 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle visual badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 text-white text-[11px] font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3 h-3" />
                <span>PRIMARY FOCUS</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-sky-500/10 dark:bg-sky-400/15 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                    {category.japaneseSubtitle}
                  </span>
                </div>
              </div>

              {/* Backend Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-sky-200/70 dark:border-slate-700/80 hover:border-sky-400 dark:hover:border-sky-400/80 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          {skill.name}
                        </h4>
                      </div>
                      {skill.levelTag && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 border border-sky-200/50 dark:border-sky-800/50">
                          {skill.levelTag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* DATABASE Category (Spans 5 columns on large screen) */}
          {SKILL_CATEGORIES.filter((c) => c.title === 'DATABASE').map((category) => (
            <div
              key={category.title}
              className="lg:col-span-5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      {category.japaneseSubtitle}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-400/60 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                          {skill.name}
                        </span>
                        {skill.levelTag && (
                          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                            {skill.levelTag}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* FRONTEND Category (Spans 6 columns on bottom row) */}
          {SKILL_CATEGORIES.filter((c) => c.title === 'FRONTEND').map((category) => (
            <div
              key={category.title}
              className="lg:col-span-6 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 dark:bg-indigo-400/15 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {category.japaneseSubtitle}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-400/60 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* TOOLS Category (Spans 6 columns on bottom row) */}
          {SKILL_CATEGORIES.filter((c) => c.title === 'TOOLS').map((category) => (
            <div
              key={category.title}
              className="lg:col-span-6 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {category.japaneseSubtitle}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-amber-400/60 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
