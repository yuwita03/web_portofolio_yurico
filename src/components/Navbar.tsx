import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Code2, FolderGit2, MapPin, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isManualScroll = useRef(false);
  const manualScrollTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      if (isManualScroll.current) return;

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      let current = sections[0];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY + 160 >= el.offsetTop) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // geser pill indicator tiap activeSection / ukuran layar berubah
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = linkRefs.current[activeSection];
      const containerEl = navContainerRef.current;
      if (!activeEl || !containerEl) return;

      // kalau link-nya lagi disembunyiin (mobile, mobilePriority: false),
      // offsetParent null & rect-nya bakal 0,0 — jangan collapse pill ke situ
      if (activeEl.offsetParent === null) {
        setIndicator({ left: 0, width: 0 });
        return;
      }

      const containerRect = containerEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  // tutup dropdown mobile kalau klik di luar
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

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
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const target = document.getElementById(id);
    if (target) {
      const topOffset = id === 'home' ? 0 : target.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }

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
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 min-w-0">
        {/* Brand / Logo */}
        <a
          id="nav-brand-link"
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="group flex items-center gap-2 sm:gap-2.5 text-slate-800 dark:text-slate-100 font-semibold tracking-wider text-base sm:text-lg focus:outline-hidden shrink-0"
          aria-label="Yu Ta Portfolio Home"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/10 dark:bg-sky-400/15 text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform duration-300 shrink-0">
            <CatPawIcon className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping opacity-75" />
          </span>
          <span className="hidden sm:inline font-bold tracking-widest text-sm sm:text-base">Nekoyu</span>
          <span className="hidden md:inline-block text-[11px] font-medium tracking-normal text-slate-500 dark:text-slate-400 pl-1 border-l border-slate-300 dark:border-slate-700">
            ポートフォリオ
          </span>
        </a>

        {/* Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-1.5 min-w-0" aria-label="Main Navigation">
          <div
            ref={navContainerRef}
            className="relative flex items-center gap-0.5 sm:gap-1 p-1 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 shadow-xs"
          >
            <span
              className="absolute top-1 bottom-1 rounded-full bg-sky-500 shadow-xs transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.width > 0 ? 1 : 0,
              }}
            />

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  ref={(el) => {
                    linkRefs.current[link.id] = el;
                  }}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  aria-label={link.label}
                  className={`relative z-10 flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 shrink-0 ${
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

          {/* Hamburger — cuma tampil di mobile, isinya full 6 menu */}
          <div className="relative md:hidden" ref={mobileMenuRef}>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type="button"
              className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-400 dark:hover:border-sky-500 shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-sky-400 shrink-0"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 py-2 rounded-2xl bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 shadow-lg overflow-hidden">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`flex items-center gap-2.5 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            type="button"
            className="p-2 sm:p-2.5 ml-1 rounded-full text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-400 dark:hover:border-sky-500 shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-sky-400 shrink-0"
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