import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, Layout, ShieldCheck, Zap, Mail, Bot, Smartphone } from 'lucide-react';

const BIZ_SOLUTIONS = [
  {
    icon: Globe,
    title: 'Business & Service Websites',
    desc: 'High-converting responsive websites with custom branding, clear value propositions, and mobile performance.',
  },
  {
    icon: Layout,
    title: 'SaaS & Landing Pages',
    desc: 'Interactive iOS 26 glassmorphism layouts, pricing calculators, feature breakdown grids, and call-to-actions.',
  },
  {
    icon: Bot,
    title: 'AI Feature Integration',
    desc: 'Embedded Gemini chat support, automated email auto-responders, and intelligent query routing.',
  },
  {
    icon: ShieldCheck,
    title: 'Admin Control Systems',
    desc: 'Protected dashboard viewports to inspect lead submissions, monitor inquiries, and manage website content.',
  },
  {
    icon: Mail,
    title: 'Contact Pipelines',
    desc: 'Persistent contact submission processing, validation middleware, and instant notification triggers.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Device Responsiveness',
    desc: 'Flawlessly optimized layouts tailored specifically for mobile phones, tablets, laptops, and ultra-wide screens.',
  },
];

export const BusinessWebsitesSection: React.FC = () => {
  return (
    <section id="business-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1212]/10 border border-[#7A1212]/20 text-[#7A1212] text-xs font-bold uppercase tracking-widest mb-3"
          >
            <Building2 size={14} />
            <span>Corporate Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-heading tracking-tight"
          >
            Digital Experiences for Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            Empowering businesses with custom web applications, lead capture pipelines, AI integrations, and automated workflows.
          </motion.p>
        </div>

        {/* Business Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BIZ_SOLUTIONS.map((sol, idx) => {
            const IconComp = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-[#7A1212]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#7A1212]/10 text-[#7A1212] flex items-center justify-center mb-6">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-heading">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
