import React, { useState } from 'react';
import { MessageSquare, MapPin, Users, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OnboardingView({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Make Group Chat',
      subtitle: 'Connect with people sharing your exact interests. Create dynamic group hubs and share moments in real time.',
      icon: (
        <div className="relative w-44 h-44 rounded-full bg-crimson flex items-center justify-center shadow-crimson-glow/40 mx-auto">
          <div className="absolute w-24 h-20 rounded-3xl bg-white/95 shadow-apple-md -top-2 -left-2 flex items-center justify-center p-3">
            <div className="w-8 h-2 bg-crimson/20 rounded-full mb-1" />
          </div>
          <div className="absolute w-28 h-22 rounded-3xl bg-pink-100/90 shadow-apple-md -bottom-2 -right-2 flex flex-col justify-center p-4">
            <div className="w-12 h-2.5 bg-crimson rounded-full mb-1.5" />
            <div className="w-8 h-2 bg-crimson/40 rounded-full" />
          </div>
          <MessageSquare className="w-16 h-16 text-white stroke-[2.2]" />
        </div>
      ),
      ctaText: 'Get Started'
    },
    {
      id: 2,
      title: 'Set Your Location',
      subtitle: 'Discover verified people and creator communities around you with privacy-first proximity controls.',
      icon: (
        <div className="relative w-44 h-44 rounded-full bg-crimson flex items-center justify-center shadow-crimson-glow/40 mx-auto">
          <div className="w-28 h-36 rounded-t-full rounded-b-2xl bg-white/95 flex items-center justify-center shadow-apple-lg border-2 border-white">
            <div className="w-12 h-12 rounded-full border-4 border-crimson flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-crimson" />
            </div>
          </div>
        </div>
      ),
      ctaText: 'Continue'
    },
    {
      id: 3,
      title: 'Real-Time Apple HIG Experience',
      subtitle: 'Encrypted direct messaging, high-fidelity voice notes, and seamless cross-platform syncing across iPhone, iPad, and Mac.',
      icon: (
        <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-crimson to-crimson-400 flex items-center justify-center shadow-crimson-glow/40 mx-auto">
          <Users className="w-20 h-20 text-white stroke-[2.2]" />
        </div>
      ),
      ctaText: 'Launch QChat'
    }
  ];

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete?.();
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-6 sm:p-8 max-w-md mx-auto relative overflow-hidden">
      {/* Top Skip button */}
      <div className="flex justify-end pt-2">
        {currentStep < slides.length - 1 && (
          <button 
            onClick={onComplete}
            className="text-xs font-bold text-apple-subtext hover:text-crimson transition-colors cursor-pointer"
          >
            Skip
          </button>
        )}
      </div>

      {/* Center Illustrated Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center py-6 my-auto"
        >
          <div className="mb-8">
            {slides[currentStep].icon}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-apple-text tracking-tight mb-3">
            {slides[currentStep].title}
          </h2>
          <p className="text-sm text-apple-subtext leading-relaxed max-w-xs mx-auto">
            {slides[currentStep].subtitle}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Controls */}
      <div className="space-y-6 pb-6">
        {/* Step Indicator Dots */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep === i 
                  ? 'w-6 bg-crimson shadow-crimson-glow/40' 
                  : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="py-4 px-6 rounded-2xl border border-black/10 text-apple-text font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Back
            </button>
          )}

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="flex-1 py-4 px-6 rounded-2xl bg-crimson text-white font-bold text-base shadow-crimson-glow hover:bg-crimson-600 active:bg-crimson-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{slides[currentStep].ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
