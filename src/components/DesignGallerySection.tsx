import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Eye, X, Sparkles } from 'lucide-react';
import { DESIGN_PROJECTS } from '../data/portfolioData';
import { DesignProject } from '../types';

export const DesignGallerySection: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignProject | null>(null);

  return (
    <section id="design-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-neutral-50 relative z-10 border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1212]/10 border border-[#7A1212]/20 text-[#7A1212] text-xs font-bold uppercase tracking-widest mb-3"
          >
            <Palette size={14} />
            <span>Creative Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-heading tracking-tight"
          >
            UI / UX & Canva Design
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            Crafting elegant user interfaces, responsive layouts, pitch decks, posters, and high-impact social media creatives.
          </motion.p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESIGN_PROJECTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#7A1212]/40 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative p-6 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-b border-neutral-800 text-white flex flex-col justify-between min-h-[140px]">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 backdrop-blur-md">
                    {item.type}
                  </span>
                  <span className="text-[11px] font-semibold text-[#7A1212] bg-[#7A1212]/20 px-2 py-0.5 rounded border border-[#7A1212]/30">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-black font-heading text-white tracking-tight line-clamp-1 group-hover:text-[#7A1212] transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => setSelectedDesign(item)}
                    className="bg-[#7A1212] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 cursor-pointer hover:bg-[#600e0e] transition-colors"
                  >
                    <Eye size={16} /> Expand Visual Text
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#7A1212] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-950 font-heading mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {item.toolsUsed.map((tool) => (
                    <span key={tool} className="text-[11px] font-medium bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDesign(null)}
              className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 p-6"
            >
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-100">
                <div>
                  <span className="text-xs font-bold text-[#7A1212] uppercase">{selectedDesign.type}</span>
                  <h3 className="text-2xl font-bold font-heading text-neutral-950">{selectedDesign.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 text-white mb-4">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#7A1212] block mb-1">
                  DESIGN SPECIFICATION
                </span>
                <h4 className="text-xl font-black font-heading text-white">
                  {selectedDesign.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Category: {selectedDesign.category} • Format: {selectedDesign.type}
                </p>
              </div>

              <p className="text-sm text-neutral-600">{selectedDesign.description}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
