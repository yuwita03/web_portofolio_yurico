import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2, ArrowUpRight, Check, Eye } from 'lucide-react';
import { CatPawIcon } from './CatSilhouette';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section
      id="projects"
      className="relative z-30 -mt-8 sm:-mt-12 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-white dark:bg-[#0c1220] rounded-t-[32px] sm:rounded-t-[48px] overlap-card transition-colors duration-500 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800/60 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wider uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">開発実績</span>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-['Poppins']"
              >
                SELECTED PROJECTS
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-lg">
                Curated web platforms, scalable backend services, and interactive applications.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              <CatPawIcon className="w-3.5 h-3.5 text-sky-500" />
              <span>{PROJECTS.length} Selected Repositories</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Gallery-Inspired Project Layout */}
        <div className="space-y-8">
          
          {/* 1. FEATURED PROJECT (Large Asymmetric Showcase Card) */}
          <div
            id="featured-project-card"
            className="group relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-900 via-[#0e1628] to-[#0a101d] text-white border border-slate-800/80 shadow-2xl overflow-hidden hover:border-sky-500/50 transition-all duration-300"
          >
            {/* Ambient Background Glow Effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl group-hover:bg-sky-400/20 transition-all duration-500" />
            <div className="absolute bottom-0 right-10 text-[120px] font-black text-white/3 select-none pointer-events-none leading-none">
              日本語
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 text-white text-[11px] font-bold tracking-widest uppercase shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    FEATURED PROJECT
                  </span>
                  <span className="text-xs text-sky-300 font-mono tracking-wider">
                    {featuredProject.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 font-['Poppins']">
                    {featuredProject.title}
                  </h3>
                  {featuredProject.japaneseTitle && (
                    <p className="text-sm font-medium text-sky-300">
                      {featuredProject.japaneseTitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-sky-200 border border-slate-700/80 hover:border-sky-400/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    id="featured-view-modal-btn"
                    onClick={() => setSelectedProject(featuredProject)}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-500/25 transition-all focus:outline-hidden"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW PROJECT</span>
                  </button>

                  <a
                    id="featured-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 hover:border-slate-600 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GITHUB</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview / Code Snapshot */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => setSelectedProject(featuredProject)}
                  className="cursor-pointer rounded-2xl bg-slate-950/80 border border-slate-700/80 p-5 shadow-xl hover:border-sky-400 transition-all duration-300 group/preview"
                >
                  {/* Mock Studio UI Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <span className="font-mono text-[11px] text-sky-400">nihongo-service.ts</span>
                  </div>

                  {/* Japanese Learning Mock Visual Card */}
                  <div className="rounded-xl bg-gradient-to-br from-indigo-950/60 to-slate-900 p-4 border border-slate-800 text-center space-y-3">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-[10px] font-bold uppercase tracking-wider">
                      SRS Interval Level 4
                    </div>
                    <div className="text-4xl font-extrabold text-white tracking-widest py-1">
                      猫 <span className="text-xl text-slate-400 font-normal">/ ねこ</span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      Meaning: Cat · Kun: ねこ · On: ビョウ
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-center gap-2">
                      <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] text-emerald-400">
                        ✓ Easy (+4d)
                      </span>
                      <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] text-sky-400">
                        Good (+2d)
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                    <span className="flex items-center gap-1 text-sky-400">
                      <CatPawIcon className="w-3 h-3" /> Click to view architecture
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/preview:translate-x-0.5 group-hover/preview:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 2. OTHER PROJECTS GRID (Asymmetric Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500/60 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1 font-['Poppins']">
                    {project.title}
                  </h3>
                  {project.japaneseTitle && (
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-3">
                      {project.japaneseTitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      type="button"
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 focus:outline-hidden"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
