import React from 'react';
import { motion } from 'motion/react';

export const HeroGraphics: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[680px] flex items-end justify-center lg:justify-end overflow-visible pointer-events-none">
      {/* Subtle interactive hover highlight aura over the right side portrait area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full h-full flex items-end justify-end pointer-events-none"
      >
        <div className="w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-[80%] rounded-full bg-[#7A1212]/5 blur-3xl -z-10 animate-pulse-glow" />
      </motion.div>
    </div>
  );
};

