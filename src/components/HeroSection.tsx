import React, { useState } from 'react';
import { Header } from './Header';
import { HeroContent } from './HeroContent';
import { HeroGraphics } from './HeroGraphics';
import { WorkModal } from './WorkModal';
import { AboutModal } from './AboutModal';
import { SkillsModal } from './SkillsModal';
import { ContactModal } from './ContactModal';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenModal = (tab: string) => {
    setActiveTab(tab);
    if (tab !== 'home') {
      setActiveModal(tab);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setActiveTab('home');
  };

  const handleSocialClick = (platform: string) => {
    triggerToast(`Opening Varshith's ${platform} profile...`);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col justify-between overflow-x-hidden selection:bg-[#7A1212] selection:text-white relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-xl flex items-center gap-2 border border-neutral-800"
          >
            <CheckCircle2 size={16} className="text-[#7A1212]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Hero Background Image Layer from Cloudinary */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
        <img
          src="https://res.cloudinary.com/wsyarlbv/image/upload/v1786176990/23_y2ktni.jpg"
          alt="Hero Section Graphic Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center lg:object-right select-none opacity-95"
        />
      </div>

      {/* Main Container */}
      <div className="w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Navigation Bar */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenModal={handleOpenModal}
        />

        {/* Hero Body Layout */}
        <main className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center flex-1">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <HeroContent
              onViewWork={() => handleOpenModal('projects')}
              onAboutMe={() => handleOpenModal('about')}
              onSocialClick={handleSocialClick}
            />
          </div>

          {/* Right Column: Graphic Circle & Portrait */}
          <div className="lg:col-span-6 flex justify-center items-end relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
            <HeroGraphics />
          </div>
        </main>
      </div>

      {/* Interactive Modals */}
      <WorkModal
        isOpen={activeModal === 'projects'}
        onClose={handleCloseModal}
      />
      <AboutModal
        isOpen={activeModal === 'about'}
        onClose={handleCloseModal}
      />
      <SkillsModal
        isOpen={activeModal === 'skills'}
        onClose={handleCloseModal}
      />
      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={handleCloseModal}
      />
    </div>
  );
};
