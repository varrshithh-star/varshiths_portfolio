import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenModal: (tab: string) => void;
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (id !== 'home') {
      onOpenModal(id);
    }
  };

  return (
    <header className="w-full pt-8 pb-4 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex justify-between md:justify-end items-center z-20 relative">
      {/* Mobile Brand Label */}
      <div className="md:hidden text-lg font-bold tracking-tight text-neutral-900">
        Varshith<span className="text-[#7A1212]">.</span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-base font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-700 hover:text-[#7A1212]'
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="w-6 h-[2px] bg-[#7A1212] rounded-full mx-auto mt-1 absolute -bottom-2 left-1/2 -translate-x-1/2"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-neutral-800 hover:text-[#7A1212] transition-colors focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-xl rounded-2xl p-6 flex flex-col space-y-4 md:hidden z-50"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2.5 px-4 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#7A1212]/10 text-[#7A1212] font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
