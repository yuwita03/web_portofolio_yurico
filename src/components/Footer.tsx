import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="main-footer"
      className="relative z-50 bg-[#f4f7fb] dark:bg-[#070b14] border-t border-slate-200/80 dark:border-slate-800/80 py-10 px-5 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Left: Brand & Copyright */}
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wider">
            <CatPawIcon className="w-4 h-4 text-sky-500" />
            <span>© 2026 Nekoyu</span>
            <span className="text-slate-400">·</span>
            <span className="font-normal text-xs text-slate-500 dark:text-slate-400">All rights reserved.</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Built with HTML · Tailwind CSS · Vanilla JS
          </p>
        </div>

        {/* Center: Subtle Anime/Zen Quote */}
        <div className="text-xs text-slate-400 dark:text-slate-400 font-mono tracking-widest hidden md:block">
          静寂の中に、好奇心の炎を。 // IN CALM STILLNESS, CURIOSITY GROWS.
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            type="button"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400 transition-all text-xs font-semibold shadow-xs"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
