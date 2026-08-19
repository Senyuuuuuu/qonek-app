import React from 'react';
import { MessageSquare, Camera, Compass, Users, User, Plus, Sparkles, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SidebarNav({ activeTab, onTabChange, onNewPostClick, onEarlyAccessClick }) {
  const menuItems = [
    { id: 'chats', label: 'Chats', icon: MessageSquare, badge: 3 },
    { id: 'feed', label: 'Feed', icon: Compass },
    { id: 'camera', label: 'Camera', icon: Camera },
    { id: 'community', label: 'Groups', icon: Users },
    { id: 'profile', label: 'Settings', icon: User },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 xl:w-72 h-screen sticky top-0 bg-white border-r border-black/5 p-5 justify-between flex-shrink-0 z-30">
      {/* Brand Header */}
      <div>
        <div className="flex items-center gap-3 px-3 py-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-crimson flex items-center justify-center shadow-crimson-glow/30 flex-shrink-0">
            <svg className="w-6 h-6 text-white" viewBox="0 0 44 44" fill="none">
              <circle cx="15" cy="22" r="3" fill="currentColor"/>
              <circle cx="22" cy="22" r="3" fill="currentColor"/>
              <circle cx="29" cy="22" r="3" fill="currentColor"/>
              <path d="M8 10 Q22 6 36 10 Q40 22 36 34 L28 38 L22 34 Q8 38 8 22 Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h1 className="font-extrabold text-xl text-crimson tracking-tight">QChat</h1>
            <p className="text-xs text-apple-subtext font-medium">by Qonek</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-crimson/10 text-crimson shadow-apple-sm'
                    : 'text-apple-subtext hover:text-apple-text hover:bg-black/5'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-crimson text-white text-[11px] font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Create Post CTA */}
        <div className="mt-6 px-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewPostClick}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-crimson to-crimson-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-crimson-glow cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>New Post</span>
          </motion.button>
        </div>
      </div>

      {/* Footer Profile & Early Access Card */}
      <div className="space-y-4">
        <div className="p-4 rounded-2xl bg-crimson-50/70 border border-crimson-100">
          <div className="flex items-center gap-2 text-crimson font-bold text-xs mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Early Access Beta</span>
          </div>
          <p className="text-[11px] text-apple-subtext mb-3">
            Experience cross-platform real-time chat before public release.
          </p>
          <button 
            onClick={onEarlyAccessClick}
            className="w-full py-2 px-3 rounded-xl bg-crimson text-white text-xs font-semibold hover:bg-crimson-600 transition-colors cursor-pointer"
          >
            Verify Portal →
          </button>
        </div>

        {/* Current User Card */}
        <div className="flex items-center justify-between p-2.5 rounded-2xl bg-apple-bg hover:bg-gray-200/60 transition-colors">
          <div className="flex items-center gap-2.5">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop&crop=face" 
              alt="User" 
              className="w-9 h-9 rounded-full object-cover border border-black/10"
            />
            <div className="text-left">
              <p className="text-xs font-bold text-apple-text">Mahmudul Hasan</p>
              <p className="text-[11px] text-apple-subtext">@mahmudul</p>
            </div>
          </div>
          <button className="text-apple-subtext hover:text-crimson p-1.5">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
