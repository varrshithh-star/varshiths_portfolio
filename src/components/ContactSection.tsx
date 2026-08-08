import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { saveSubmission } from '../utils/storage';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Website',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your Name, Email, and Message.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      await saveSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        message: formData.message,
      });

      setIsSubmitting(false);
      setSuccessMsg('Thank you! Your message has been stored in Supabase & sent successfully. Varshith will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'Website',
        message: '',
      });
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg('Failed to save message. Please try again.');
    }
  };

  return (
    <section id="contact-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 text-white relative z-10 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7A1212]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#7A1212]" />
            <span>Direct Communication</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white"
          >
            Let's Build Something Digital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed"
          >
            Have an idea, business, project, or digital experience in mind? Let's turn it into something real.
          </motion.p>
        </div>

        {/* Grid: Contact Info & Glass Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6"
          >
            <h3 className="text-2xl font-black font-heading text-white">
              Get in Touch Directly
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Reach out via email, phone, or connect on social platforms. All inquiries are responded to promptly.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-[#7A1212] text-white group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase">Gmail ID</div>
                  <div className="text-sm font-bold text-white tracking-wide">{PROFILE_INFO.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PROFILE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-[#7A1212] text-white group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase">Mobile Number</div>
                  <div className="text-sm font-bold text-white tracking-wide">{PROFILE_INFO.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-xl bg-white/10 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase">Base Location</div>
                  <div className="text-sm font-bold text-white tracking-wide">{PROFILE_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social Icons List */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[#7A1212] text-white transition-colors"
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={PROFILE_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[#7A1212] text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={PROFILE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[#7A1212] text-white transition-colors"
                  title="Instagram Profile"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right iOS 26 Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-black font-heading text-white mb-6">
              Send a Project Message
            </h3>

            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle size={18} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7A1212]"
                >
                  <option value="Website">Website</option>
                  <option value="AI Project">AI Project</option>
                  <option value="API Development">API Development</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Chatbot">Chatbot</option>
                  <option value="UI/UX">UI/UX Design</option>
                  <option value="Automation">Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Varshith about your project, idea, or questions..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7A1212] hover:bg-[#600e0e] active:scale-[0.99] text-white font-bold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
