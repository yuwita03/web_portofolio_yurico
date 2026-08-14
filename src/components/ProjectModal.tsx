import React from 'react';
import { X, ExternalLink, Github, Layers, Calendar, CheckCircle2, Server, Database, Code } from 'lucide-react';
import { Project } from '../types';
import { CatPawIcon } from './CatSilhouette';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-hidden"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1"
        >
          {project.title}
        </h3>
        {project.japaneseTitle && (
          <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-4">
            {project.japaneseTitle}
          </p>
        )}

        {/* Banner Preview Block */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-950 p-6 my-5 border border-slate-800 text-slate-100 overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4 font-mono">
            <span className="flex items-center gap-1.5 text-sky-400">
              <Code className="w-4 h-4" /> Architecture Blueprint
            </span>
            <CatPawIcon className="w-4 h-4 text-sky-400/80" />
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-mono">
            {project.longDescription || project.description}
          </p>

          {/* Metrics tags */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-slate-800">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center"
                >
                  <span className="text-xs font-bold text-sky-300 font-mono">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Key Highlights */}
        {project.highlights && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
              Key Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2.5">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            id="modal-github-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          {project.demoUrl && (
            <a
              id="modal-demo-link"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white text-xs sm:text-sm font-semibold hover:bg-sky-400 transition-colors shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
