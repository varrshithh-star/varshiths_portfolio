import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const skillCategories = [
  {
    title: 'UI/UX & Product Design',
    skills: ['User Research & Personas', 'Wireframing & Information Architecture', 'Interactive Prototyping', 'Design Systems & Component Libraries', 'Mobile App Design (iOS/Android)', 'Web & SaaS Dashboard Design'],
  },
  {
    title: 'Tools & Software',
    skills: ['Figma / FigJam', 'Adobe XD & Illustrator', 'Photoshop & Lightroom', 'Principle & Framer', 'After Effects & Lottie', 'Spline 3D & Canva'],
  },
  {
    title: 'Creative Direction',
    skills: ['Brand Identity & Logo Design', 'Typography & Color Theory', 'Design Systems Documentation', 'User Testing & Heuristic Evaluation', 'Design Guidelines & Specs'],
  },
];

export const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            <div className="p-6 sm:p-8 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <span className="text-[#7A1212] font-bold text-xs uppercase tracking-widest">Capabilities</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1 font-heading">
                  Skills & Expertise
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

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {skillCategories.map((category) => (
                <div key={category.title} className="bg-neutral-50 p-5 rounded-xl border border-neutral-200/80">
                  <h4 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7A1212]" />
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm text-neutral-700 bg-white p-2.5 rounded-lg border border-neutral-200/60">
                        <CheckCircle2 size={16} className="text-[#7A1212] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
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
