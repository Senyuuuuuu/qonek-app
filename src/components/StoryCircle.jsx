import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StoryCircle({ isUser, name, avatar, hasUnseen, onClick }) {
  if (isUser) {
    return (
      <button 
        onClick={onClick}
        className="flex flex-col items-center gap-1.5 flex-shrink-0 group cursor-pointer focus:outline-none"
      >
        <div className="relative w-16 h-16 rounded-full p-[2px] flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm">
            <img 
              src={avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80&fit=crop&crop=face"} 
              alt="Your Story" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#8E1E28] text-white flex items-center justify-center border-2 border-white shadow-sm">
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>
        <span className="text-[11px] font-bold text-gray-500 max-w-[64px] truncate">
          Your story
        </span>
      </button>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 flex-shrink-0 group cursor-pointer focus:outline-none"
    >
      <div className={`w-16 h-16 rounded-full p-[2.5px] transition-all duration-300 ${
        hasUnseen 
          ? 'bg-gradient-to-tr from-[#8E1E28] via-[#B82B38] to-[#E74C3C] shadow-[0_4px_14px_rgba(142,30,40,0.3)]' 
          : 'bg-gray-200'
      }`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <span className="text-[11px] font-bold text-gray-800 max-w-[64px] truncate">
        {name}
      </span>
    </motion.button>
  );
}
