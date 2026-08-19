import React from 'react';
import { Camera, Image, FileText, UserPlus, Sparkles, Smile, Music, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MediaAttachmentDrawer({ isOpen, onSelectAttachment }) {
  if (!isOpen) return null;

  const items = [
    { id: 'camera', label: 'Camera', icon: Camera, bg: 'bg-orange-50 text-orange-600 border-orange-100' },
    { id: 'photos', label: 'Photo & Video', icon: Image, bg: 'bg-purple-50 text-purple-600 border-purple-100' },
    { id: 'docs', label: 'Documents', icon: FileText, bg: 'bg-amber-50 text-amber-600 border-amber-100' },
    { id: 'contact', label: 'Contact', icon: UserPlus, bg: 'bg-blue-50 text-blue-600 border-blue-100' },
    { id: 'gif', label: 'Gif', icon: Sparkles, bg: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { id: 'sticker', label: 'Sticker', icon: Smile, bg: 'bg-rose-50 text-rose-600 border-rose-100' },
    { id: 'audio', label: 'Audio', icon: Music, bg: 'bg-teal-50 text-teal-600 border-teal-100' },
    { id: 'location', label: 'Location', icon: MapPin, bg: 'bg-sky-50 text-sky-600 border-sky-100' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-white border-t border-black/5 p-4 overflow-hidden"
      >
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.92 }}
                onClick={() => onSelectAttachment?.(item.id)}
                className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className={`w-13 h-13 rounded-2xl ${item.bg} border flex items-center justify-center shadow-apple-sm`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold text-apple-text text-center leading-tight">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
