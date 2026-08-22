import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, Heart, Facebook, Instagram } from 'lucide-react';
import { CatPawIcon, CatFaceIcon } from './CatSilhouette';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative -mt-8 sm:-mt-12 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-white dark:bg-[#0c1220] rounded-t-[32px] sm:rounded-t-[48px] overlap-card transition-colors duration-500 border-t border-slate-100 dark:border-slate-800"
    >
      {/* Background Japanese Watermark */}
      <div className="absolute bottom-6 right-8 text-[90px] sm:text-[130px] font-black text-slate-100/50 dark:text-slate-800/15 select-none pointer-events-none leading-none">
        連絡先
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center sm:text-left">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800/60 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wider uppercase mb-5">
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">お問合せ</span>
        </div>

        {/* Big Heading */}
        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4 font-['Poppins']"
        >
          LET&apos;S BUILD
          <span className="block text-sky-600 dark:text-sky-400">SOMETHING.</span>
        </h2>

        {/* Subtitle */}
        <p
          id="contact-subtitle"
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg mb-10 leading-relaxed font-normal"
        >
          Looking for a junior backend or fullstack opportunity.
        </p>

        {/* Direct Link Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
          
          {/* EMAIL Action */}
          <div className="group relative p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                EMAIL
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate mb-4 font-mono">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <a
              id="contact-email-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>

          {/* GITHUB Action */}
          <a
            id="contact-github-card"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-slate-900/10 dark:bg-white/10 text-slate-800 dark:text-white w-fit mb-3">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                GITHUB
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Explore source code, architectures, and repositories.
              </p>
            </div>

            <span className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold group-hover:opacity-90 transition-opacity">
              <span>View GitHub</span>
              <Sparkles className="w-3 h-3" />
            </span>
          </a>

          {/* LINKEDIN Action */}
          <a
            id="contact-linkedin-card"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-sky-600 dark:hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 w-fit mb-3">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                INSTAGRAM
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Connect for professional inquiries and opportunities.
              </p>
            </div>

            <span className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors">
              <span>Connect on Instagram</span>
              <CatPawIcon className="w-3.5 h-3.5" />
            </span>
          </a>

        </div>

        {/* Copied notification toast indicator */}
        {copied && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg animate-bounce">
            <Check className="w-4 h-4" />
            <span>Email copied to clipboard: {PERSONAL_INFO.email}</span>
          </div>
        )}

      </div>
    </section>
  );
};
