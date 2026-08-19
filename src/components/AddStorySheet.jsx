import React from 'react';
import { Type, Image, Video, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddStorySheet({ isOpen, onClose, onSelectType }) {
  if (!isOpen) return null;

  const options = [
    { id: 'text', label: 'Text', desc: 'Share thoughts with customized typography & backgrounds', icon: Type, color: 'bg-rose-50 text-crimson' },
    { id: 'image', label: 'Image', desc: 'Post photos from camera roll or take a live shot', icon: Image, color: 'bg-amber-50 text-amber-600' },
    { id: 'video', label: 'Video', desc: 'Record or upload video clips up to 60 seconds', icon: Video, color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-t-[32px] p-6 pb-10 shadow-apple-lg border-t border-black/5 z-10 space-y-4"
        >
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto -mt-1" />

          <h2 className="text-xl font-extrabold text-apple-text tracking-tight pt-1">
            Add new story
          </h2>

          <div className="divide-y divide-black/5 pt-1">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    onSelectType?.(opt.id);
                    onClose();
                  }}
                  className="w-full py-4 flex items-center justify-between hover:bg-gray-50/80 rounded-2xl px-2 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-2xl ${opt.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-apple-text">{opt.label}</h3>
                      <p className="text-xs text-apple-subtext">{opt.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-crimson stroke-[2.5]" />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
