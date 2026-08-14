import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Code2, FolderGit2, MapPin, Mail, Sun, Moon } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isManualScroll = useRef(false);
  const manualScrollTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      if (isManualScroll.current) return; // lagi scroll hasil klik, jangan diganggu

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      let current = sections[0];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY + 160 >= el.offsetTop) {
          current = id; // terus di-update, jadi yang kepake yang paling bawah yang udah kelewatan
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // geser pill indicator tiap activeSection berubah
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = linkRefs.current[activeSection];
      const containerEl = navContainerRef.current;
      if (activeEl && containerEl) {
        const containerRect = containerEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        setIndicator({
          left: activeRect.left - containerRect.left,
          width: activeRect.width,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home, mobilePriority: true },
    { id: 'about', label: 'About', icon: User, mobilePriority: true },
    { id: 'skills', label: 'Skills', icon: Code2, mobilePriority: false },
    { id: 'projects', label: 'Projects', icon: FolderGit2, mobilePriority: true },
    { id: 'journey', label: 'Journey', icon: MapPin, mobilePriority: false },
    { id: 'contact', label: 'Contact', icon: Mail, mobilePriority: true },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    isManualScroll.current = true;
    setActiveSection(id); // pill langsung loncat ke tujuan

    const target = document.getElementById(id);
    if (target) {
      const topOffset = id === 'home' ? 0 : target.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }

    // lepas kunci setelah animasi smooth-scroll browser kelar
    window.clearTimeout(manualScrollTimeout.current);
    manualScrollTimeout.current = window.setTimeout(() => {
      isManualScroll.current = false;
    }, 700);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#090d16]/90 backdrop-blur-md shadow-xs border-b border-slate-200/60 dark:border-slate-800/60 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="nav-brand-link"
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="group flex items-center gap-2.5 text-slate-800 dark:text-slate-100 font-semibold tracking-wider text-base sm:text-lg focus:outline-hidden"
          aria-label="Yu Ta Portfolio Home"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/10 dark:bg-sky-400/15 text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform duration-300">
            <CatPawIcon className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping opacity-75" />
          </span>
          <span className="font-bold tracking-widest text-sm sm:text-base">Nekoyu</span>
          <span className="hidden md:inline-block text-[11px] font-medium tracking-normal text-slate-500 dark:text-slate-400 pl-1 border-l border-slate-300 dark:border-slate-700">
            ポートフォリオ
          </span>
        </a>

        {/* Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
          {/* Menu items */}
          <div
            ref={navContainerRef}
            className="relative flex items-center gap-0.5 sm:gap-1 p-1 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 shadow-xs"
          >
            {/* pill indicator yang geser */}
            <span
              className="absolute top-1 bottom-1 rounded-full bg-sky-500 shadow-xs transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  ref={(el) => { linkRefs.current[link.id] = el; }}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  aria-label={link.label}
                  className={`relative z-10 flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    !link.mobilePriority ? 'hidden md:inline-flex' : 'inline-flex'
                  } ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            type="button"
            className="p-2 sm:p-2.5 ml-1 rounded-full text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-400 dark:hover:border-sky-500 shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-sky-400"
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-500 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600 transition-transform duration-500 hover:-rotate-45" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};