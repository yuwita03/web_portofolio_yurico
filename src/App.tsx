/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#f4f7fb] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-500 selection:bg-sky-500 selection:text-white font-['Poppins',sans-serif]">
      {/* 1. Navigation */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* 2. Hero Section (100vh Full Bleed Video + Crossfade) */}
        <Hero isDark={isDark} />

        {/* 3. About Section (Overlapping card) */}
        <AboutSection />

        {/* 4. Skills Section (Overlapping card with backend emphasis) */}
        <SkillsSection />

        {/* 5. Projects Section (Asymmetric Gallery-style card) */}
        <ProjectsSection />

        {/* 6. Journey Section (Vertical Timeline) */}
        <JourneySection />

        {/* 7. Contact Section (Direct links & opportunity info) */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

