import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, MessageSquare, ChevronDown, User, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg_init',
    sender: 'bot',
    text: "Hi there! 👋 I'm Varshith's AI. How can I assist you with Varshith's projects, services, or contact info today?",
    time: 'Just now',
  },
];

const PRESET_TOPICS = [
  { label: '💼 Services', query: 'What services does Varshith offer?' },
  { label: '🎓 Background', query: 'Tell me about Varshith\'s education & background' },
  { label: '🚀 Projects', query: 'Show me Varshith\'s top projects' },
  { label: '📞 Contact', query: 'How can I contact Varshith?' },
];

export const FloatingAiWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let reply = "Varshith is a 2nd Year CS Engineering student & Full-Stack Developer specializing in Web Apps, AI Chatbots, REST APIs, and UI/UX Design. You can send him a direct message using the contact section below!";

      if (q.includes('service') || q.includes('offer') || q.includes('build')) {
        reply = "Varshith offers full-stack Web Development, AI Chatbot integration, REST API Architecture, Business Websites, and Canva UI/UX Design with iOS glass aesthetics.";
      } else if (q.includes('background') || q.includes('education') || q.includes('who') || q.includes('experience')) {
        reply = "Varshith is a Computer Science Engineering undergraduate in Bengaluru with 3+ years of hands-on experience building web tools, AI workflows, and client platforms.";
      } else if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
        reply = "Varshith's key projects include Pulse AI Agent, Aura SaaS Platform, Workflow Automation Suite, and custom business portals. Explore the Projects section for details!";
      } else if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
        reply = "You can contact Varshith via Email (varrshithh@gmail.com), Phone (+91 8867236582), or LinkedIn (Varshith Ga).";
      }

      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const scrollToChatSection = () => {
    setIsOpen(false);
    const element = document.getElementById('chatbots-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Chat Box Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[90vw] sm:w-[380px] h-[480px] bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#7A1212] flex items-center justify-center text-white shadow-md">
                    <Bot size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-neutral-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-white flex items-center gap-1.5">
                    Varshith's AI
                    <span className="px-1.5 py-0.5 text-[9px] font-mono bg-[#7A1212]/30 text-[#e04545] border border-[#7A1212]/50 rounded uppercase">
                      v2.0
                    </span>
                  </h4>
                  <p className="text-[11px] text-neutral-400">Online • Always Ready</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={scrollToChatSection}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors text-xs flex items-center gap-1"
                  title="Full Screen Section"
                >
                  <ExternalLink size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-neutral-800">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-neutral-800 text-neutral-300'
                        : 'bg-[#7A1212] text-white'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div
                    className={`max-w-[78%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#7A1212] text-white rounded-tr-none shadow-md'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[9px] opacity-60 block mt-1 text-right">{msg.time}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#7A1212] flex items-center justify-center text-white shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-2xl rounded-tl-none text-xs text-neutral-400 flex items-center gap-1.5">
                    <Sparkles size={12} className="animate-spin text-[#7A1212]" />
                    <span>Varshith's AI is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-neutral-900/50 border-t border-neutral-900 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {PRESET_TOPICS.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(topic.query)}
                  className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-800 hover:bg-[#7A1212] text-neutral-300 hover:text-white border border-neutral-700/60 whitespace-nowrap transition-colors cursor-pointer"
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 bg-neutral-950 border-t border-neutral-800 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Varshith's AI..."
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 bg-[#7A1212] hover:bg-[#600e0e] disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Round Trigger Button */}
      <div className="relative group">
        {/* Tooltip on hover */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-neutral-950 text-white text-xs font-bold font-heading rounded-xl shadow-xl border border-neutral-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#e04545]" />
            <span>Varshith's AI</span>
          </div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 rounded-full bg-[#7A1212] hover:bg-[#600e0e] text-white shadow-2xl flex items-center justify-center cursor-pointer border-2 border-white/20 transition-colors"
          aria-label="Varshith's AI Assistant"
        >
          {isOpen ? (
            <ChevronDown size={24} />
          ) : (
            <>
              <Bot size={26} />
              {/* Glowing Pulse Ring */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#7A1212] border-2 border-white flex items-center justify-center text-[8px] font-black">
                  AI
                </span>
              </span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};
