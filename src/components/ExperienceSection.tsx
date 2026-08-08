import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, GraduationCap, Calendar, Award, Brain, Code2, Globe, Sparkles, Terminal } from 'lucide-react';
import { PROFILE_INFO, CURRENTLY_LEARNING } from '../data/portfolioData';

const getLearningIcon = (iconName: string) => {
  switch (iconName) {
    case 'Brain':
      return <Brain size={22} className="text-[#7A1212]" />;
    case 'Code2':
      return <Code2 size={22} className="text-[#7A1212]" />;
    case 'Globe':
      return <Globe size={22} className="text-[#7A1212]" />;
    case 'Sparkles':
      return <Sparkles size={22} className="text-[#7A1212]" />;
    case 'Terminal':
      return <Terminal size={22} className="text-[#7A1212]" />;
    default:
      return <Sparkles size={22} className="text-[#7A1212]" />;
  }
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1212]/10 border border-[#7A1212]/20 text-[#7A1212] text-xs font-bold uppercase tracking-widest mb-3"
          >
            <User size={14} />
            <span>Developer Profile & Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-heading tracking-tight"
          >
            About Me & Technical Journey
          </motion.h2>

          {/* Personal Brand Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mt-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-50 via-[#7A1212]/5 to-neutral-50 border border-[#7A1212]/15 shadow-sm"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-heading italic">
              "{PROFILE_INFO.brandStatement}"
            </p>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 font-normal">
              {PROFILE_INFO.brandSupport}
            </p>
          </motion.div>
        </div>

        {/* Profile Stats & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-neutral-50/80 backdrop-blur-xl p-8 rounded-2xl border border-neutral-200/80 shadow-lg space-y-6"
          >
            <div className="flex items-center justify-between border-b border-neutral-200/80 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A1212]">
                  {PROFILE_INFO.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 font-heading mt-1">
                  {PROFILE_INFO.name} <span className="text-neutral-500 text-lg font-normal">({PROFILE_INFO.age} years old)</span>
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#7A1212] text-white flex items-center justify-center font-bold text-xl">
                V
              </div>
            </div>

            <p className="text-base text-neutral-700 leading-relaxed">
              I am a creative young developer with a strong interest in technology, business, AI, and digital experiences. I enjoy exploring emerging technologies and turning ideas into practical digital products, websites, tools, and AI-powered solutions.
            </p>

            <p className="text-base text-neutral-700 leading-relaxed">
              Over the past <strong>{PROFILE_INFO.experienceYears} years</strong>, I have focused on building digital tools, full-stack websites, custom REST APIs, AI chatbots, and design systems for interactive platforms.
            </p>

            {/* Profile Meta Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-neutral-200">
                <MapPin size={20} className="text-[#7A1212] shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase">Location</div>
                  <div className="text-sm font-medium text-neutral-900">{PROFILE_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-neutral-200">
                <GraduationCap size={20} className="text-[#7A1212] shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase">Education</div>
                  <div className="text-sm font-medium text-neutral-900">{PROFILE_INFO.education} ({PROFILE_INFO.year})</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="text-4xl sm:text-5xl font-black text-[#7A1212] font-heading">3+</div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Years Experience</h4>
                <p className="text-xs text-neutral-500 mt-1">Creating digital tools & Web apps</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="text-4xl sm:text-5xl font-black text-neutral-950 font-heading">35+</div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Projects Built</h4>
                <p className="text-xs text-neutral-500 mt-1">Web, AI & Digital Solutions</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="text-4xl sm:text-5xl font-black text-neutral-950 font-heading">100%</div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Responsive Design</h4>
                <p className="text-xs text-neutral-500 mt-1">Mobile & iOS 26 Standards</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="text-4xl sm:text-5xl font-black text-[#7A1212] font-heading">AI</div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">API Integration</h4>
                <p className="text-xs text-neutral-500 mt-1">Chatbots & Intelligent Systems</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Currently Learning Subsection */}
        <div className="mt-16 pt-12 border-t border-neutral-200/80">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#7A1212] uppercase tracking-widest">Continuous Skill Expansion</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-heading mt-1">
              Currently Learning & Experimenting
            </h3>
            <p className="text-neutral-600 text-sm mt-2">
              Continuously growing at the intersection of computer science theory and modern practical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRENTLY_LEARNING.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-neutral-200/80 hover:border-[#7A1212]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#7A1212]/10 flex items-center justify-center mb-4">
                    {getLearningIcon(item.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-950 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
