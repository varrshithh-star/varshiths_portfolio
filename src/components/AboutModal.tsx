import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Palette, Heart, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
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
                <span className="text-[#7A1212] font-bold text-xs uppercase tracking-widest">Biography</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1 font-heading">
                  About Varshith
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

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-700 leading-relaxed">
              <div className="bg-[#7A1212]/5 p-6 rounded-xl border border-[#7A1212]/15 flex items-start gap-4">
                <div className="p-3 bg-[#7A1212] text-white rounded-lg shrink-0">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg">Creative & Purposeful Design</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    I specialize in visual hierarchy, human-centered UI/UX, brand identity, and interactive digital interfaces that bridge aesthetic elegance with practical functionality.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-center">
                  <div className="text-3xl font-black text-[#7A1212] font-heading">4+</div>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">Years Experience</div>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-center">
                  <div className="text-3xl font-black text-[#7A1212] font-heading">35+</div>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">Projects Delivered</div>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-center">
                  <div className="text-3xl font-black text-[#7A1212] font-heading">99%</div>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">Client Satisfaction</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">My Approach</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Every pixel and interaction should serve a distinct purpose. I craft design systems that scale effortlessly, prioritize clarity over clutter, and leverage typography, negative space, and refined color harmony to build memorable digital products.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-lg mb-3">Core Values</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#7A1212]" />
                    <span>Empathy-First Research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#7A1212]" />
                    <span>Pixel-Perfect Consistency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#7A1212]" />
                    <span>Modern Motion & Micro-interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#7A1212]" />
                    <span>Accessible & Inclusive Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
