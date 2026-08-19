import React, { useState } from 'react';
import { Sparkles, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-apple-lg border border-black/5 overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-crimson via-crimson-400 to-amber-500" />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-apple-subtext hover:text-apple-text hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-crimson/10 text-crimson flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>

              <h2 className="text-xl font-bold text-apple-text tracking-tight mb-1.5">
                Join QChat Early Access
              </h2>
              <p className="text-xs text-apple-subtext leading-relaxed mb-5">
                Get an exclusive invite key for the beta release across iOS, Android, and Desktop with instant cross-device syncing.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider mb-1">
                    Work or Personal Email
                  </label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-apple-bg text-sm text-apple-text border border-black/5 focus:outline-none focus:ring-2 focus:ring-crimson/20"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input type="checkbox" id="beta-agree" defaultChecked className="accent-crimson rounded" />
                  <label htmlFor="beta-agree" className="text-[11px] text-apple-subtext">
                    Notify me when TestFlight and APK builds are ready
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-crimson text-white font-bold text-sm shadow-crimson-glow hover:bg-crimson-600 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Grant Early Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="text-lg font-bold text-apple-text mb-1">Access Granted!</h3>
              <p className="text-xs text-apple-subtext">
                Your invite has been reserved. Check your inbox shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
