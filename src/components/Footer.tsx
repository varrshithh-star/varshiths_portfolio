import React from 'react';
import { Lock, Heart } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="w-full py-10 px-6 md:px-12 bg-neutral-950 text-neutral-400 border-t border-neutral-900 text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white tracking-wide">
            © {new Date().getFullYear()} {PROFILE_INFO.fullName}
          </span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <span>Web Developer & AI Experience Builder</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>

          {/* Hidden/Subtle Admin Trigger */}
          <button
            onClick={onOpenAdmin}
            className="p-1.5 rounded-lg text-neutral-600 hover:text-[#7A1212] hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            title="Admin Submissions Portal"
          >
            <Lock size={12} />
            <span>Admin</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
