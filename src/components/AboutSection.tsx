import React from 'react';
import { Compass, MapPin, BookOpen, Layers, Terminal, Sparkles, Heart } from 'lucide-react';
import { CatPawIcon, CatFaceIcon, CatLedgeSilhouette } from './CatSilhouette';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-10 -mt-8 sm:-mt-12 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-white dark:bg-[#0c1220] rounded-t-[32px] sm:rounded-t-[48px] overlap-card transition-colors duration-500 border-t border-slate-100 dark:border-slate-800/80"
    >
      {/* Background Japanese Watermark & Ambient Details */}
      <div className="absolute top-10 right-10 text-[100px] sm:text-[140px] font-black text-slate-100/60 dark:text-slate-800/20 select-none pointer-events-none leading-none -z-0">
        好奇心
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header Pill */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/60 dark:border-sky-800/50 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wider uppercase">
            <CatFaceIcon className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">自己紹介</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story & Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2
              id="about-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6 font-['Poppins']"
            >
              I BUILD THINGS
              <span className="block text-sky-600 dark:text-sky-400">WITH CURIOSITY.</span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                I&apos;m a developer focused on building modern web applications, backend systems, and reliable APIs.
              </p>
              <p>
                I enjoy turning ideas into working products and understanding how things work under the hood.
              </p>
            </div>

            {/* Quick Meta Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              
              {/* Focus */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 hover:border-sky-400/50 dark:hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-1">
                  <Compass className="w-3.5 h-3.5 text-sky-500" />
                  <span>FOCUS</span>
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                  {PERSONAL_INFO.focus}
                </div>
              </div>

              {/* Based in */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 hover:border-sky-400/50 dark:hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>BASED IN</span>
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                  {PERSONAL_INFO.location}
                </div>
              </div>

              {/* Currently Learning */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 hover:border-sky-400/50 dark:hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span>CURRENTLY LEARNING</span>
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {PERSONAL_INFO.currentlyLearning}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Aesthetic Anime Developer + Cat Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400/20 via-indigo-500/15 to-purple-500/20 blur-xl opacity-70 animate-pulse-glow" />

              {/* Main Visual Terminal / Artwork Card */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900 text-slate-100 p-5 sm:p-6 shadow-2xl border border-slate-800/90 overflow-hidden">
                
                {/* Window Topbar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>yuta@dev: ~/curiosity</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-sky-400/80">
                    <CatPawIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Anime Studio / Cat Silhouette Art Scene */}
                <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#0b1329] via-[#0f172a] to-[#090e1a] p-4 flex flex-col justify-between overflow-hidden border border-slate-800">
                  
                  {/* Night Sky / Celestial background elements */}
                  <div className="absolute top-3 right-4 flex items-center gap-1 text-amber-200/90">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)] flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#0b1329] translate-x-1" />
                    </div>
                  </div>

                  {/* Japanese Kanji Background Subtitle */}
                  <div className="absolute left-3 top-3 text-xs font-mono text-sky-400/60 tracking-widest">
                    // DEVELOPER_SPACE 開発環境
                  </div>

                  {/* Sitting Anime Cat Silhouette on Window Ledge */}
                  <div className="absolute bottom-2 right-6 flex items-end">
                    <div className="relative group cursor-pointer">
                      <CatLedgeSilhouette className="w-20 h-20 text-slate-950 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] filter transition-transform group-hover:scale-105 duration-300" />
                      <div className="absolute top-5 right-5 w-1 h-1 rounded-full bg-sky-300 animate-ping opacity-80" />
                    </div>
                  </div>

                  {/* Code snippet typing preview inside window */}
                  <div className="relative z-10 font-mono text-[11px] text-slate-300 space-y-1 max-w-[210px]">
                    <div className="text-sky-400">package main</div>
                    <div className="text-emerald-400">// Curiosity-driven engineering</div>
                    <div className="text-slate-400">
                      func <span className="text-amber-300">BuildSystem</span>() &#123;
                    </div>
                    <div className="pl-3 text-indigo-300">
                      fmt.Println(<span className="text-emerald-300">&quot;Hello, World 🐾&quot;</span>)
                    </div>
                    <div className="text-slate-400">&#125;</div>
                  </div>
                </div>

                {/* Bottom Stats / Philosophy badge */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-mono">Status: Ready to build</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 hover:text-sky-300 transition-colors">
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    <span>Clean Architecture</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
