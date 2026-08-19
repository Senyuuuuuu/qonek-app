import React, { useState } from 'react';
import { Search, Bell, Sparkles } from 'lucide-react';

export default function TopBar({ onEarlyAccessClick, onSearchClick, activeSegment = 'for-you', onSegmentChange }) {
  const [segment, setSegment] = useState(activeSegment);

  const handleSegment = (s) => {
    setSegment(s);
    onSegmentChange?.(s);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#8E1E28] text-white px-4 h-14 sm:h-16 flex items-center justify-between shadow-md transition-colors select-none">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
          <svg className="w-5 h-5 text-[#8E1E28]" viewBox="0 0 44 44" fill="none">
            <circle cx="15" cy="22" r="3.2" fill="currentColor"/>
            <circle cx="22" cy="22" r="3.2" fill="currentColor"/>
            <circle cx="29" cy="22" r="3.2" fill="currentColor"/>
            <path d="M8 10 Q22 6 36 10 Q40 22 36 34 L28 38 L22 34 Q8 38 8 22 Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-black text-xl tracking-tight text-white">
          Qonek
        </span>
      </div>

      {/* Center Segmented Filter (For You / Following) or Search Bar */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-xs font-bold">
          <button
            onClick={() => handleSegment('for-you')}
            className={`transition-colors cursor-pointer ${
              segment === 'for-you' ? 'text-white border-b-2 border-white pb-0.5' : 'text-white/70 hover:text-white'
            }`}
          >
            For You
          </button>
          <button
            onClick={() => handleSegment('following')}
            className={`transition-colors cursor-pointer ${
              segment === 'following' ? 'text-white border-b-2 border-white pb-0.5' : 'text-white/70 hover:text-white'
            }`}
          >
            Following
          </button>
        </div>
      </div>

      {/* Right Action Icons */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onSearchClick}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          title="Search"
        >
          <Search className="w-4 h-4 stroke-[2.4]" />
        </button>

        <button 
          onClick={onEarlyAccessClick}
          className="relative w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4 stroke-[2.4]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-[#8E1E28]" />
        </button>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 ml-1">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop&crop=face" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
