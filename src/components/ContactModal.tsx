import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { saveSubmission } from '../utils/storage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      await saveSubmission({
        name: formData.name,
        email: formData.email,
        phone: '',
        company: '',
        projectType: 'General Inquiry',
        message: formData.message,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 2500);
    }
  };

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
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            <div className="p-6 sm:p-8 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <span className="text-[#7A1212] font-bold text-xs uppercase tracking-widest">Get In Touch</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1 font-heading">
                  Let's Work Together
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

            <div className="p-6 sm:p-8 overflow-y-auto">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-[#7A1212]/10 text-[#7A1212] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-900 mb-2 font-heading">Message Sent!</h4>
                  <p className="text-sm text-neutral-600 max-w-sm">
                    Thank you for reaching out. Varshith will get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-700 tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#7A1212] focus:ring-1 focus:ring-[#7A1212] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-700 tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#7A1212] focus:ring-1 focus:ring-[#7A1212] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-700 tracking-wider mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your design project, timeline, or scope..."
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#7A1212] focus:ring-1 focus:ring-[#7A1212] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#7A1212] hover:bg-[#600e0e] active:scale-[0.99] text-white font-bold text-sm tracking-wider uppercase py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>

                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-2">
                    <div className="flex items-center gap-1.5">
                      <Mail size={14} className="text-[#7A1212]" />
                      <span>varrshithh@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#7A1212]" />
                      <span>Available Worldwide / Remote</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
