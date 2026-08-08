import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, MessageSquare, Send, Sparkles, CheckCircle2, User, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';

const INITIAL_BOT_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'bot',
    text: "Hello! I am Varshith's AI Assistant Bot. How can I help you today? You can ask me about his web development services, AI chatbot experience, or contact details!",
    time: 'Just now',
  },
];

const BOT_PRESET_ANSWERS: Record<string, string> = {
  services: "Varshith specializes in Web Development, AI Chatbots, REST API Integration, Business Websites, and Canva UI/UX Design. He builds responsive apps with iOS 26 glass aesthetic!",
  experience: "Varshith is a 2nd Year Computer Science Engineering student with 3+ years of practical experience crafting digital tools, AI applications, and corporate platforms.",
  contact: "You can reach Varshith directly via Email at varrshithh@gmail.com or Mobile at +91 8867236582. He is based in Electronic City, Bengaluru, India.",
  projects: "Check out Varshith's featured projects in the Portfolio section above, including the Pulse AI Agent, Aura SaaS Platform, and Workflow Automation Suite!",
};

export const ChatbotSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_BOT_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: inputText,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    const userQuery = inputText.toLowerCase();
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponseText = "Thanks for asking! Varshith builds tailored full-stack websites, AI chatbots using Gemini APIs, and business automation workflows. Feel free to send him a direct message using the contact form below!";
      
      if (userQuery.includes('service') || userQuery.includes('build') || userQuery.includes('offer')) {
        botResponseText = BOT_PRESET_ANSWERS.services;
      } else if (userQuery.includes('experience') || userQuery.includes('about') || userQuery.includes('who')) {
        botResponseText = BOT_PRESET_ANSWERS.experience;
      } else if (userQuery.includes('contact') || userQuery.includes('email') || userQuery.includes('phone') || userQuery.includes('reach')) {
        botResponseText = BOT_PRESET_ANSWERS.contact;
      } else if (userQuery.includes('project') || userQuery.includes('work') || userQuery.includes('code')) {
        botResponseText = BOT_PRESET_ANSWERS.projects;
      }

      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        time: 'Just now',
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="chatbots-section" className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1212]/10 border border-[#7A1212]/20 text-[#7A1212] text-xs font-bold uppercase tracking-widest mb-3"
          >
            <Bot size={14} />
            <span>AI Systems & Communication</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-heading tracking-tight"
          >
            AI Chatbots & Automation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            Designing intelligent chat systems, lead generation assistants, and automated customer support widgets for modern businesses.
          </motion.p>
        </div>

        {/* Feature Highlights & Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-neutral-950 font-heading mb-4">
              Chatbot Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                { title: 'AI Customer Support', desc: '24/7 automated resolution using Google AI Studio.' },
                { title: 'Business Chatbots', desc: 'Tailored FAQ and lead capture widgets.' },
                { title: 'Automated Responses', desc: 'Instant context-aware replies & routing.' },
                { title: 'Lead Collection', desc: 'Capture visitor contact details automatically.' },
                { title: 'FAQ Automation', desc: 'Eliminate repetitive customer inquiry calls.' },
                { title: 'Admin-Controlled Systems', desc: 'Dashboard management for conversation logs.' },
              ].map((feat) => (
                <div key={feat.title} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3">
                  <div className="p-2 bg-[#7A1212] text-white rounded-lg shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">{feat.title}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Interactive Chat Widget Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 flex flex-col h-[500px]"
          >
            {/* Widget Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7A1212] flex items-center justify-center text-white font-bold shadow-md">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-heading">Varshith AI Assistant</h4>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMessages(INITIAL_BOT_MESSAGES)}
                className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                title="Reset conversation"
              >
                <RefreshCw size={14} /> Reset
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-neutral-800 text-white'
                        : 'bg-[#7A1212] text-white'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#7A1212] text-white rounded-tr-none'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-neutral-400 italic">
                  <Bot size={14} className="text-[#7A1212]" />
                  <span>AI assistant is typing...</span>
                </div>
              )}
            </div>

            {/* Prompt Suggestion Chips */}
            <div className="flex flex-wrap gap-1.5 py-2 border-t border-neutral-900">
              {['Services', 'Experience', 'Contact Info', 'Projects'].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setInputText(`Tell me about your ${chip.toLowerCase()}`);
                  }}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message or question..."
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
              />
              <button
                type="submit"
                className="p-2.5 bg-[#7A1212] hover:bg-[#600e0e] text-white rounded-xl transition-colors cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
