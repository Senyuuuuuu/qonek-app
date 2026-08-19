import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AuthLoginView({ onLoginSuccess, onSwitchToSignup }) {
  const [email, setEmail] = useState('anike.vaccaro@qonek.app');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess?.();
    }, 1000);
  };

  return (
    <div className="w-full h-full min-h-screen bg-crimson flex flex-col justify-between relative overflow-hidden select-none">
      {/* Brand Header with Q Logo Speech Bubble */}
      <div className="pt-12 pb-8 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-crimson-glow"
        >
          <svg className="w-12 h-12 text-crimson" viewBox="0 0 44 44" fill="none">
            <circle cx="15" cy="22" r="3.2" fill="currentColor"/>
            <circle cx="22" cy="22" r="3.2" fill="currentColor"/>
            <circle cx="29" cy="22" r="3.2" fill="currentColor"/>
            <path d="M8 10 Q22 6 36 10 Q40 22 36 34 L28 38 L22 34 Q8 38 8 22 Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Main Apple HIG Card Surface */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-md mx-auto bg-white rounded-t-[36px] p-6 sm:p-8 shadow-apple-lg flex-1 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-apple-text tracking-tight mb-6">
            Welcome back!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/10 text-sm font-semibold text-apple-text placeholder-apple-subtext focus:outline-none focus:ring-2 focus:ring-crimson/20 shadow-apple-sm transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3.5 pr-12 rounded-2xl bg-white border border-black/10 text-sm font-semibold text-apple-text placeholder-apple-subtext focus:outline-none focus:ring-2 focus:ring-crimson/20 shadow-apple-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-apple-subtext hover:text-apple-text"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex justify-end mt-1.5">
                <button type="button" className="text-xs font-bold text-crimson hover:underline">
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Login CTA Button */}
            <div className="pt-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-2xl bg-crimson text-white font-bold text-base shadow-crimson-glow hover:bg-crimson-600 active:bg-crimson-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Login</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Social OAuth Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-black/10 w-full" />
            <span className="bg-white px-3 text-xs font-bold text-apple-subtext uppercase tracking-wider">
              or
            </span>
            <div className="border-t border-black/10 w-full" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onLoginSuccess}
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl border border-black/10 bg-white hover:bg-gray-50 text-xs font-bold text-apple-text shadow-apple-sm transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={onLoginSuccess}
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl border border-black/10 bg-white hover:bg-gray-50 text-xs font-bold text-apple-text shadow-apple-sm transition-all cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[10px] font-black">
                f
              </div>
              <span>Facebook</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 pb-2">
          <p className="text-xs text-apple-subtext font-medium">
            Don't have an account?{' '}
            <button onClick={onSwitchToSignup} className="font-bold text-crimson hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
