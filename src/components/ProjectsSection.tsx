import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight, Sparkles, Filter, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

const CATEGORIES = [
  'All',
  'Web Development',
  'AI Projects',
  'API Development',
  'Business Websites',
  'UI/UX',
  'Automation',
  'Canva Designs',
  'AI Chatbots',
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-neutral-50/80 to-white relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1212]/10 border border-[#7A1212]/20 text-[#7A1212] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md"
          >
            <Sparkles size={14} />
            <span>Technical Portfolio & Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-heading tracking-tight"
          >
            Featured Projects & Digital Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            Crafted with modern web technologies, AI integrations, API gateways, and iOS 26 glassmorphism visual precision.
          </motion.p>
        </div>

        {/* Category Filters Pill Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#7A1212] text-white shadow-lg shadow-[#7A1212]/20 scale-105'
                    : 'bg-white/80 hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80 backdrop-blur-md'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white/70 backdrop-blur-xl border border-neutral-200/80 hover:border-[#7A1212]/40 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#7A1212]/10 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Text Banner Header */}
                <div className="relative p-6 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-b border-neutral-800 text-white flex flex-col justify-between min-h-[160px]">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md">
                      {project.status || 'Live'}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#7A1212] text-white shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#7A1212] block mb-1">
                      PROJECT SPECIFICATION
                    </span>
                    <h4 className="text-lg font-black font-heading text-white tracking-tight line-clamp-1 group-hover:text-[#7A1212] transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  {/* Overlay Action Button on Hover */}
                  <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="w-full bg-[#7A1212] hover:bg-[#600e0e] text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      Quick View Details <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 font-heading tracking-tight group-hover:text-[#7A1212] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded-md border border-neutral-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-xs font-bold text-[#7A1212] hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        View Project
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                            title="GitHub Repository"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        <a
                          href={project.liveUrl || 'https://github.com/varrshithh-star'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-neutral-600 hover:text-[#7A1212] hover:bg-[#7A1212]/10 transition-colors"
                          title="Live Preview"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-neutral-200"
            >
              <div className="relative p-8 bg-neutral-950 border-b border-neutral-800 text-white flex flex-col justify-between">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-neutral-800"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#7A1212] text-white">
                    {activeProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/10 text-neutral-300 border border-white/20">
                    {activeProject.status || 'Active'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                  {activeProject.title}
                </h3>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#7A1212] text-white">
                      {activeProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {activeProject.status || 'Active'}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 font-heading">
                    {activeProject.title}
                  </h3>
                  <p className="text-base text-neutral-600 mt-2 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {activeProject.features && (
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider mb-2">
                      Key Highlights & Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700">
                      {activeProject.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7A1212]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider mb-2">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold bg-neutral-100 text-neutral-800 px-3 py-1 rounded-md border border-neutral-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-4">
                  <a
                    href={activeProject.githubUrl || 'https://github.com/varrshithh-star'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Github size={18} />
                    View Code on GitHub
                  </a>
                  <a
                    href={activeProject.liveUrl || 'https://github.com/varrshithh-star'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#7A1212] hover:bg-[#600e0e] text-white font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={18} />
                    Launch Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
