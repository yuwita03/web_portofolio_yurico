import React, { useRef, useEffect } from 'react';
import { ArrowDown, Terminal, Sparkles } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const lightVideoRef = useRef<HTMLVideoElement | null>(null);
  const darkVideoRef = useRef<HTMLVideoElement | null>(null);

  // Ensure both videos stay playing smoothly in background
  useEffect(() => {
    const playVideos = async () => {
      try {
        if (lightVideoRef.current && lightVideoRef.current.paused) {
          await lightVideoRef.current.play();
        }
      } catch (err) {
        console.warn('Light video autoplay prevented:', err);
      }
      try {
        if (darkVideoRef.current && darkVideoRef.current.paused) {
          await darkVideoRef.current.play();
        }
      } catch (err) {
        console.warn('Dark video autoplay prevented:', err);
      }
    };
    playVideos();
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const topOffset = projectsEl.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden sticky top-0 z-0 select-none"
    >
      {/* Dual Video Backgrounds for Smooth Theme Crossfade */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Light Mode Video */}
        <video
          ref={lightVideoRef}
          id="hero-video-light"
          src={PERSONAL_INFO.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            !isDark ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Dark Mode Video */}
        <video
          ref={darkVideoRef}
          id="hero-video-dark"
          src={PERSONAL_INFO.videoUrl2}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Cinematic Lighting Overlays */}
        {/* Light Mode Overlay: Soft sky blue wash & clean mist */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-sky-950/20 via-sky-900/40 to-slate-900/80 backdrop-brightness-[0.85] transition-opacity duration-700 ${
            !isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Dark Mode Overlay: Deep twilight indigo/midnight blue with subtle vignette */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-slate-950/40 via-indigo-950/60 to-[#090d16]/95 backdrop-brightness-[0.7] transition-opacity duration-700 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle Anime Night/Sky Ambient Stars or Dust Particles */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-sky-200 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-indigo-200 animate-ping opacity-30" />
          <div className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full bg-white animate-pulse" />
          <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        
        {/* Subtle Cat Ear & Japanese Monogram Accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-white/10 backdrop-blur-md border border-white/25 text-sky-100 text-xs sm:text-sm font-medium mb-5 animate-float-gentle">
          <CatPawIcon className="w-3.5 h-3.5 text-sky-300" />
          <span className="tracking-widest uppercase text-[11px] sm:text-xs">
            DEVELOPER PORTFOLIO
          </span>
          <span className="text-white/40">·</span>
          <span className="font-japanese text-[11px] text-sky-200 tracking-wider">
            好奇心と構築
          </span>
        </div>

        {/* Main Name Heading */}
<div className="relative inline-block mb-3 sm:mb-4">
  {/* Nama Panggilan (Headline utama) */}
  <h1
    id="hero-nickname"
    className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-md leading-none font-['Poppins']"
  >
    {PERSONAL_INFO.nickname}
  </h1>

  {/* Nama Lengkap (Sub-headline) */}
  <h2
    id="hero-fullname"
    className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/90 drop-shadow-sm leading-tight font-['Poppins'] mt-2 sm:mt-3"
  >
    {PERSONAL_INFO.name}
  </h2>

  {/* Tagline / Subtext */}
  <p className="text-xs sm:text-sm text-sky-200/80 font-medium tracking-wide mt-1.5 italic">
    Neko and Yurico = Nekoyu
  </p>

  {/* Aesthetic Sparkles Accent
  <div className="absolute -top-3 -right-4 sm:-top-5 sm:-right-6 text-sky-300 pointer-events-none transform rotate-12">
    <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse" />
  </div> */}
</div>

        {/* Subtitle / Role */}
        <h2
          id="hero-role"
          className="text-base sm:text-xl md:text-2xl font-semibold tracking-[0.2em] text-sky-200 uppercase mb-5 max-w-xl mx-auto drop-shadow-sm"
        >
          {PERSONAL_INFO.role}
        </h2>

        {/* Short Description */}
        <p
          id="hero-description"
          className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10 text-balance drop-shadow-xs"
        >
          {PERSONAL_INFO.tagline}
        </p>

        {/* Hero CTA Button */}
        <div className="flex flex-col items-center gap-3">
                    <a
            id="hero-cta-btn"
            href="https://drive.google.com/file/d/1DT2w4e3ZGwxwVJx_tNrsKXoMUa0dsXup/view?usp=sharing"
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-sky-500/30 hover:shadow-sky-400/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-sky-300"
          >
            {/* <Terminal className="w-4 h-4 text-sky-100 group-hover:rotate-6 transition-transform" /> */}
            <span>Download CV</span>
            <ArrowDown className="w-4 h-4 text-sky-100 animate-bounce-slow" />
          </a>
          <a
            id="hero-cta-btn"
            href="#projects"
            onClick={handleScrollToProjects}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-sky-500/30 hover:shadow-sky-400/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-sky-300"
          >
            {/* <Terminal className="w-4 h-4 text-sky-100 group-hover:rotate-6 transition-transform" /> */}
            <span>VIEW PROJECTS</span>
            <ArrowDown className="w-4 h-4 text-sky-100 animate-bounce-slow" />
          </a>

          <span className="text-[11px] text-slate-300/80 tracking-widest uppercase flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Open for junior roles
          </span>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-300/70 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
