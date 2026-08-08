import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, EyeOff, X, AlertCircle } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsLoading(true);

    setTimeout(() => {
      // Validate credentials (varrshithh@gmail.com / admin / pass)
      if (
        (email.trim() === 'varrshithh@gmail.com' || email.trim() === 'admin' || email.trim() === 'varshith') &&
        (password === 'admin123' || password === 'varshith' || password === 'pass' || password === 'admin')
      ) {
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setErrorMsg('Invalid admin credentials. Please check your username and password.');
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 text-white rounded-3xl p-8 shadow-2xl z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#7A1212] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#7A1212]/30">
            <Shield size={28} />
          </div>
          <h3 className="text-2xl font-black font-heading tracking-tight">
            Admin Authentication
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Access contact submissions & message pipeline
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Email / Username
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="varrshithh@gmail.com"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#7A1212]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#7A1212] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#7A1212] hover:bg-[#600e0e] text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <Lock size={16} />
                <span>Login to Dashboard</span>
              </>
            )}
          </button>
        </form>

        <p className="text-[11px] text-neutral-500 text-center mt-6">
          Default Demo Pass: <code className="text-neutral-300">admin</code> or <code className="text-neutral-300">varshith</code>
        </p>
      </motion.div>
    </div>
  );
};
