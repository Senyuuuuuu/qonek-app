import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FilterBottomSheet({ isOpen, onClose, onApply }) {
  const [gender, setGender] = useState('Male');
  const [distance, setDistance] = useState(192);
  const [status, setStatus] = useState('Online');
  const [relationship, setRelationship] = useState('All');

  if (!isOpen) return null;

  const handleClear = () => {
    setGender('All');
    setDistance(50);
    setStatus('All');
    setRelationship('All');
  };

  const handleApply = () => {
    onApply?.({ gender, distance, status, relationship });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm">
        {/* Backdrop click to dismiss */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-t-[32px] p-6 pb-8 shadow-apple-lg border-t border-black/5 z-10 space-y-6"
        >
          {/* iOS Grabber Handle */}
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto -mt-1" />

          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-apple-text tracking-tight">
              Filter
            </h2>
            <button 
              onClick={handleClear}
              className="text-sm font-bold text-crimson hover:underline cursor-pointer"
            >
              Clear
            </button>
          </div>

          {/* Gender Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-apple-text">
              Gender
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {['All', 'Male', 'Female'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGender(option)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    gender === option
                      ? 'bg-crimson-50 text-crimson border-2 border-crimson/30 shadow-apple-sm'
                      : 'bg-white border border-black/10 text-apple-text hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Distance Slider */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-apple-text">
                Distance
              </label>
              <span className="text-sm font-extrabold text-apple-text">
                {distance} km
              </span>
            </div>
            <div className="relative flex items-center">
              <input
                type="range"
                min="5"
                max="500"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-crimson"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-apple-text">
              Status
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {['All', 'Online', 'Offline'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStatus(option)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    status === option
                      ? 'bg-crimson-50 text-crimson border-2 border-crimson/30 shadow-apple-sm'
                      : 'bg-white border border-black/10 text-apple-text hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Relationship Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-apple-text">
              Relationship
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {['All', 'Single', 'Committed'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRelationship(option)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    relationship === option
                      ? 'bg-crimson-50 text-crimson border-2 border-crimson/30 shadow-apple-sm'
                      : 'bg-white border border-black/10 text-apple-text hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Filter CTA */}
          <div className="pt-2">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleApply}
              className="w-full py-4 rounded-2xl bg-crimson text-white font-bold text-base shadow-crimson-glow hover:bg-crimson-600 active:bg-crimson-700 transition-all cursor-pointer"
            >
              Apply Filter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
