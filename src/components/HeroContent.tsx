import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroContentProps {
  onViewWork: () => void;
  onAboutMe: () => void;
  onSocialClick?: (platform: string) => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onViewWork,
  onAboutMe,
}) => {
  return (
    <div className="flex flex-col justify-center items-start z-10 pt-4 md:pt-12 pb-8">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-2xl text-neutral-600 font-normal tracking-tight mb-2 md:mb-3"
      >
        Hello, I'm
      </motion.p>

      {/* Main Name Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tight text-neutral-950 uppercase leading-none mb-3 md:mb-4"
        style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
      >
        VARSHITH
      </motion.h1>

      {/* Subtitle / Role */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#7A1212] tracking-tight leading-snug mb-5 md:mb-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Creative Designer
      </motion.h2>

      {/* Description Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed max-w-md mb-8 md:mb-10"
      >
        Crafting intuitive digital experiences with creativity and purpose.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 md:mb-12"
      >
        <button
          onClick={onViewWork}
          className="bg-[#7A1212] hover:bg-[#600e0e] active:scale-[0.98] text-white text-xs sm:text-sm font-bold tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 rounded-lg uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          VIEW WORK
        </button>

        <button
          onClick={onAboutMe}
          className="border-[1.5px] border-[#7A1212] text-neutral-900 hover:bg-[#7A1212]/5 active:scale-[0.98] text-xs sm:text-sm font-bold tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 rounded-lg uppercase transition-all duration-200 cursor-pointer"
        >
          ABOUT ME
        </button>
      </motion.div>

      {/* Social Links with Direct Links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center space-x-6 text-neutral-800"
      >
        {/* GitHub */}
        <a
          href={PROFILE_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile: varrshithh-star"
          className="hover:text-[#7A1212] transition-colors p-1 cursor-pointer group"
          title="GitHub: varrshithh-star (Varshith G A)"
        >
          <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        </a>

        {/* LinkedIn */}
        <a
          href={PROFILE_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile: Varshith Ga"
          className="hover:text-[#7A1212] transition-colors p-1 cursor-pointer group"
          title="LinkedIn: Varshith Ga"
        >
          <span className="font-bold text-lg md:text-xl tracking-tighter leading-none inline-block group-hover:scale-110 transition-transform">
            in
          </span>
        </a>

        {/* Instagram */}
        <a
          href={PROFILE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile: @vrrshithh"
          className="hover:text-[#7A1212] transition-colors p-1 cursor-pointer group"
          title="Instagram: @vrrshithh"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        </a>

        {/* Behance */}
        <a
          href="https://www.behance.net"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance Portfolio"
          className="hover:text-[#7A1212] transition-colors p-1 cursor-pointer group"
          title="Behance"
        >
          <span className="font-bold text-lg md:text-xl tracking-tight leading-none inline-block group-hover:scale-110 transition-transform font-sans">
            Bē
          </span>
        </a>
      </motion.div>
    </div>
  );
};
