import React, { useState, useEffect } from 'react';
import { Volume2, PhoneOff, Mic, MicOff, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CallOverlayModal({ isOpen, contactName = 'Jakob Tory', isVideo = false, onEndCall }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setDuration(0);
      timer = setInterval(() => setDuration(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDuration = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0C0C0E] text-white flex flex-col items-center justify-between p-8 sm:p-12 select-none"
      >
        {/* Top Status */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-wider uppercase text-gray-300 mb-2">
            <span>{isVideo ? 'HD Video Call' : 'Encrypted Voice Call'}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mt-2">
            {contactName}
          </h1>
          <p className="text-sm text-crimson-400 font-medium mt-1">
            {duration > 0 ? formatDuration(duration) : 'Calling...'}
          </p>
        </div>

        {/* Center Glowing Avatar */}
        <div className="relative my-auto flex items-center justify-center">
          {/* Animated Spring Pulse Waves */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.05, 0.35] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="absolute w-52 h-52 rounded-full bg-crimson"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.15, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', delay: 0.3 }}
            className="absolute w-44 h-44 rounded-full bg-crimson"
          />
          
          <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-crimson to-crimson-500 flex items-center justify-center shadow-crimson-glow text-4xl font-extrabold border-4 border-white/20">
            {contactName.charAt(0)}
          </div>
        </div>

        {/* Bottom Call Controls (Exact Apple style) */}
        <div className="w-full max-w-xs flex items-center justify-around pb-6">
          {/* Speaker Button */}
          <button
            onClick={() => setIsSpeaker(!isSpeaker)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isSpeaker ? 'bg-white text-black' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <Volume2 className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* End Call Button (Big Crimson) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onEndCall}
            className="w-18 h-18 rounded-full bg-crimson hover:bg-crimson-600 text-white flex items-center justify-center shadow-crimson-glow transition-all cursor-pointer"
          >
            <PhoneOff className="w-8 h-8 stroke-[2.5]" />
          </motion.button>

          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isMuted ? 'bg-white text-black' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            {isMuted ? <MicOff className="w-6 h-6 stroke-[2.2]" /> : <Mic className="w-6 h-6 stroke-[2.2]" />}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
