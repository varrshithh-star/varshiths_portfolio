import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'FinTech Mobile Banking App',
    category: 'UI/UX & Design System',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    description: 'A futuristic digital bank wallet interface emphasizing minimal aesthetic, dark mode options, and seamless micro-interactions.',
    tags: ['Figma', 'Prototyping', 'iOS Design', 'Design System'],
  },
  {
    id: '2',
    title: 'Aura Luxury E-Commerce Platform',
    category: 'Brand Identity & Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'High-end retail shopping experience crafted with rich typography, smooth transitions, and editorial layout aesthetics.',
    tags: ['Web Design', 'Branding', 'User Research', 'Design Guidelines'],
  },
  {
    id: '3',
    title: 'Pulse AI Analytics Dashboard',
    category: 'SaaS & Data Visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Complex data interface simplified into clean modular card blocks, customized dark maroon accents, and intuitive charts.',
    tags: ['Dashboard', 'UI/UX', 'Interaction Design', 'Data Viz'],
  },
];

export const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <span className="text-[#7A1212] font-bold text-xs uppercase tracking-widest">Portfolio Showcase</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1 font-heading">
                  Selected Work
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content / Projects List */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200/60 hover:border-[#7A1212]/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-6"
                >
                  <div className="md:col-span-5 rounded-xl bg-neutral-950 p-5 text-white flex flex-col justify-between border border-neutral-800">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#7A1212]">
                      PROJECT ARCHITECTURE
                    </span>
                    <h5 className="text-base font-bold font-heading text-white mt-2">
                      {project.title}
                    </h5>
                    <div className="text-[11px] text-neutral-400 mt-2">
                      Category: {project.category}
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#7A1212] tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-neutral-900 mt-1 group-hover:text-[#7A1212] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-200/60 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium bg-white text-neutral-700 px-2.5 py-1 rounded-md border border-neutral-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center text-xs font-bold text-[#7A1212] hover:underline gap-1 cursor-pointer">
                        Case Study <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
