import React from 'react';
import { Search, MapPin, MoreVertical, Sparkles } from 'lucide-react';

export default function TopBar({ onEarlyAccessClick, onSearchClick }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-xl border-b border-black/5 px-4 h-14 flex items-center justify-between transition-colors">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-crimson flex items-center justify-center shadow-crimson-glow/40 flex-shrink-0">
          {/* Authentic QChat Minimal Speech Bubble Logo */}
          <svg className="w-5 h-5 text-white" viewBox="0 0 44 44" fill="none">
            <circle cx="15" cy="22" r="3" fill="currentColor"/>
            <circle cx="22" cy="22" r="3" fill="currentColor"/>
            <circle cx="29" cy="22" r="3" fill="currentColor"/>
            <path d="M8 10 Q22 6 36 10 Q40 22 36 34 L28 38 L22 34 Q8 38 8 22 Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-extrabold text-lg text-crimson tracking-tight">
            QChat
          </span>
          <span className="text-[10px] font-bold text-apple-subtext uppercase tracking-widest hidden sm:inline">
            by Qonek
          </span>
        </div>
      </div>

      {/* Action Hub */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onEarlyAccessClick}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-crimson/10 border border-crimson/30 text-crimson text-xs font-semibold hover:bg-crimson/20 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Early Access</span>
        </button>

        <button 
          onClick={onSearchClick}
          className="w-9 h-9 rounded-full flex items-center justify-center text-crimson hover:bg-black/5 transition-colors"
          title="Search"
        >
          <Search className="w-5 h-5 stroke-[2.2]" />
        </button>

        <button 
          className="w-9 h-9 rounded-full flex items-center justify-center text-crimson hover:bg-black/5 transition-colors"
          title="Nearby Discover"
        >
          <MapPin className="w-5 h-5 stroke-[2.2]" />
        </button>

        <button 
          className="w-9 h-9 rounded-full flex items-center justify-center text-crimson hover:bg-black/5 transition-colors"
          title="More options"
        >
          <MoreVertical className="w-5 h-5 stroke-[2.2]" />
        </button>
      </div>
    </header>
  );
}
