import React from 'react';
import { motion } from 'motion/react';
import { Workflow, User, Globe, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

const FLOW_STEPS = [
  { id: 1, title: 'User', sub: 'Client Request', icon: User, color: 'border-neutral-300 bg-white' },
  { id: 2, title: 'Website', sub: 'React / Glass UI', icon: Globe, color: 'border-neutral-300 bg-white' },
  { id: 3, title: 'API Gateway', sub: 'REST / Express Router', icon: Server, color: 'border-[#7A1212] bg-[#7A1212] text-white' },
  { id: 4, title: 'AI / Database', sub: 'Gemini / Storage Engine', icon: Database, color: 'border-neutral-300 bg-white' },
  { id: 5, title: 'Response', sub: 'Instant Render', icon: Sparkles, color: 'border-neutral-300 bg-white' },
];

const API_FEATURES = [
  'REST API Architecture & Endpoint Design',
  'Google AI Studio & Gemini API Integration',
  'JSON Request Validation & Middleware',
  'Third-Party OAuth & Webhook Triggers',
  'Data Transformation & Payload Sanitization',
  'Real-time Chatbot & Web Socket Bridging',
];

export const ApiInfrastructureSection: React.FC = () => {
  return (
    <section id="api-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-neutral-50 relative z-10 border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1212]/10 border border-[#7A1212]/20 text-[#7A1212] text-xs font-bold uppercase tracking-widest mb-3"
          >
            <Workflow size={14} />
            <span>Backend Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-heading tracking-tight"
          >
            API & Digital Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            Designing resilient backend connectors, API-powered interfaces, and AI engine integrations that power seamless digital tools.
          </motion.p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-2xl border border-neutral-200 shadow-xl mb-14"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#7A1212] uppercase tracking-widest">Execution Flow</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 font-heading">
              Data Request Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative items-center">
            {FLOW_STEPS.map((step, index) => {
              const IconComp = step.icon;
              const isHighlight = step.id === 3;
              return (
                <div key={step.id} className="flex flex-col items-center text-center relative group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 shadow-md transition-transform duration-300 group-hover:scale-110 ${step.color}`}>
                    <IconComp size={28} className={isHighlight ? 'text-white' : 'text-neutral-900'} />
                  </div>
                  <h4 className="font-bold text-neutral-950 text-base mt-3 font-heading">
                    {step.title}
                  </h4>
                  <span className="text-xs text-neutral-500 font-medium mt-0.5">
                    {step.sub}
                  </span>

                  {/* Flow Arrow for desktop */}
                  {index < FLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-[2px] bg-gradient-to-r from-neutral-300 to-[#7A1212]/50 z-10">
                      <div className="w-2 h-2 rounded-full bg-[#7A1212] absolute -top-0.5 right-0 animate-ping" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* API Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {API_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-4 bg-white rounded-xl border border-neutral-200/80 shadow-sm flex items-center gap-3"
            >
              <CheckCircle2 size={18} className="text-[#7A1212] shrink-0" />
              <span className="text-sm font-semibold text-neutral-800">{feature}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
