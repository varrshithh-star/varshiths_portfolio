import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ApiInfrastructureSection } from './components/ApiInfrastructureSection';
import { ChatbotSection } from './components/ChatbotSection';
import { DesignGallerySection } from './components/DesignGallerySection';
import { BusinessWebsitesSection } from './components/BusinessWebsitesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingAiWidget } from './components/FloatingAiWidget';

export default function App() {
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Check URL hash for admin route (#admin or /admin)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin' || window.location.pathname === '/admin') {
        setIsAdminLoginOpen(true);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLoginSuccess = () => {
    setIsAdminLoginOpen(false);
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased overflow-x-hidden selection:bg-[#7A1212] selection:text-white relative">
      {/* 1. EXISTING COMPLETED HERO SECTION (UNTOUCHED AT TOP) */}
      <HeroSection />

      {/* 2. EXTENDED SECTIONS BELOW */}
      <ProjectsSection />
      <ExperienceSection />
      <ToolkitSection />
      <ApiInfrastructureSection />
      <ChatbotSection />
      <DesignGallerySection />
      <BusinessWebsitesSection />
      <ContactSection />

      {/* FOOTER */}
      <Footer onOpenAdmin={() => setIsAdminLoginOpen(true)} />

      {/* ADMIN AUTHENTICATION & DASHBOARD MODALS */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen && !isAdminLoggedIn}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <AdminDashboard
        isOpen={isAdminLoggedIn}
        onClose={() => setIsAdminLoggedIn(false)}
        onLogout={handleLogout}
      />

      {/* FLOATING AI WIDGET BUTTON */}
      <FloatingAiWidget />
    </div>
  );
}
