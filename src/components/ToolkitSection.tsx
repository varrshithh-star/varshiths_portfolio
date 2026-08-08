import React from 'react';
import { motion } from 'motion/react';
import { TOOLKIT_ITEMS } from '../data/portfolioData';
import { Sparkles, Cpu, Bot, Code, Palette, Github, Layers, FileCode, Terminal, Workflow, Zap, Layout, Sliders, CheckCircle2 } from 'lucide-react';

const getToolIcon = (iconName: string) => {
  switch (iconName) {
    case 'Bot': return <Bot size={20} className="text-[#7A1212]" />;
    case 'Cpu': return <Cpu size={20} className="text-[#7A1212]" />;
    case 'Sparkles': return <Sparkles size={20} className="text-[#7A1212]" />;
    case 'Palette': return <Palette size={20} className="text-[#7A1212]" />;
    case 'Github': return <Github size={20} className="text-neutral-900" />;
    case 'Code': return <Code size={20} className="text-[#7A1212]" />;
    case 'Layers': return <Layers size={20} className="text-[#7A1212]" />;
    case 'FileCode': return <FileCode size={20} className="text-[#7A1212]" />;
    case 'Terminal': return <Terminal size={20} className="text-[#7A1212]" />;
    case 'Workflow': return <Workflow size={20} className="text-[#7A1212]" />;
    case 'Zap': return <Zap size={20} className="text-[#7A1212]" />;
    case 'Layout': return <Layout size={20} className="text-[#7A1212]" />;
    case 'Sliders': return <Sliders size={20} className="text-[#7A1212]" />;
    default: return <Sparkles size={20} className="text-[#7A1212]" />;
  }
};

const AI_DEVELOPMENT_BENEFITS = [
  'Build and prototype full-stack web applications',
  'Construct responsive UI components & iOS 26 glass aesthetics',
  'Develop intelligent business chatbots with Google AI Studio',
  'Automate repetitive workflows & data transformation scripts',
  'Integrate REST APIs and LLM inference endpoints',
  'Generate creative layouts, brand concepts, and Canva graphics',
  'Improve overall user experiences and digital tools execution',
];

export const ToolkitSection: React.FC = () => {
  return (
    <section id="toolkit-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-neutral-900 text-white relative z-10 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7A1212]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md"
          >
            <Cpu size={14} className="text-[#7A1212]" />
            <span>Tech Stack & Tools</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white"
          >
            AI & Development Toolkit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            A modern, versatile blend of programming languages, AI development platforms, design software, and backend API frameworks.
          </motion.p>
        </div>

        {/* Glass Technology Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {TOOLKIT_ITEMS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#7A1212]/50 rounded-2xl backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <div className="p-3 rounded-xl bg-white/10 group-hover:bg-[#7A1212]/20 transition-colors mb-3">
                {getToolIcon(item.icon)}
              </div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                {item.name}
              </h4>
              <span className="text-[11px] text-neutral-400 mt-1 uppercase tracking-wider">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* AI-Powered Development Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#7A1212] bg-[#7A1212]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#7A1212]/30 mb-3">
                <Sparkles size={14} />
                <span>Special Workflow</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                AI-Powered Development
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
                Leveraging Google AI Studio, Gemini, and AI-assisted workflows to accelerate idea validation, code generation, API wiring, and intelligent automation.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AI_DEVELOPMENT_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 size={16} className="text-[#7A1212] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">{benefit}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
