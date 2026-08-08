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
        className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 md:mb-12"
      >
        <button
          onClick={onViewWork}
          className="bg-[#7A1212] hover:bg-[#600e0e] active:scale-[0.98] text-white text-xs sm:text-sm font-bold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          VIEW WORK
        </button>

        <button
          onClick={onAboutMe}
          className="border-[1.5px] border-[#7A1212] text-neutral-900 hover:bg-[#7A1212]/5 active:scale-[0.98] text-xs sm:text-sm font-bold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg uppercase transition-all duration-200 cursor-pointer"
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
        {/* WhatsApp Icon */}
        <a
          href={PROFILE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="hover:text-[#25D366] transition-colors p-1 cursor-pointer group"
          title="WhatsApp: +91 8867236582"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.221h.005c5.505 0 9.988-4.478 9.989-9.985A9.982 9.982 0 0012.012 2zm0 18.291h-.004a8.27 8.27 0 01-4.221-1.162l-.303-.18-3.136.741.761-3.056-.197-.314a8.272 8.272 0 01-1.267-4.331c.001-4.568 3.718-8.283 8.285-8.283a8.252 8.252 0 015.86 2.428 8.25 8.25 0 012.423 5.86c-.001 4.568-3.718 8.284-8.286 8.284zm4.538-6.205c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.561.125-.166.249-.643.809-.788.975-.145.166-.291.187-.54.062a6.83 6.83 0 01-2.001-1.233 7.532 7.532 0 01-1.385-1.724c-.145-.249-.015-.384.109-.508.112-.112.249-.291.374-.436.125-.145.166-.249.249-.415.083-.166.042-.312-.021-.436-.062-.125-.561-1.35-.769-1.849-.203-.488-.41-.422-.561-.43-.145-.008-.312-.01-.478-.01s-.436.062-.665.312c-.228.249-.872.852-.872 2.078 0 1.226.893 2.41 1.018 2.576.125.166 1.758 2.685 4.26 3.766.595.257 1.06.41 1.423.525.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.183.208-.581.208-1.08.145-1.183-.062-.104-.228-.187-.477-.312z"/>
          </svg>
        </a>

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
