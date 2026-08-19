import React from 'react';
import { Home, Compass, MessageSquare, Bell, User, Settings, LogOut, Plus, Sparkles, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SidebarNav({ activeTab, onTabChange, onNewPostClick, onEarlyAccessClick }) {
  const menuItems = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'chats', label: 'Messages', icon: MessageSquare, badge: 3 },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 5 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-60 xl:w-64 h-screen sticky top-0 bg-[#8E1E28] text-white p-4 justify-between flex-shrink-0 z-30 shadow-2xl select-none">
      {/* Brand Header */}
      <div>
        <div className="flex items-center gap-3 px-2 py-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-lg flex-shrink-0">
            <svg className="w-6 h-6 text-[#8E1E28]" viewBox="0 0 44 44" fill="none">
              <circle cx="15" cy="22" r="3.2" fill="currentColor"/>
              <circle cx="22" cy="22" r="3.2" fill="currentColor"/>
              <circle cx="29" cy="22" r="3.2" fill="currentColor"/>
              <path d="M8 10 Q22 6 36 10 Q40 22 36 34 L28 38 L22 34 Q8 38 8 22 Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h1 className="font-black text-2xl tracking-tight text-white leading-none">Qonek</h1>
            <p className="text-[10px] text-white/70 font-semibold tracking-wider uppercase mt-0.5">Social & Chat</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (activeTab === 'community' && item.id === 'explore');

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white/20 text-white shadow-inner backdrop-blur-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.6]' : 'stroke-[2]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-white text-[#8E1E28] text-[10px] font-black shadow-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Create Post CTA Button */}
        <div className="mt-6 px-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewPostClick}
            className="w-full py-3.5 px-4 rounded-2xl bg-white text-[#8E1E28] font-black text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-white/90 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Create Post</span>
          </motion.button>
        </div>
      </div>

      {/* Footer Profile & Early Access */}
      <div className="space-y-3">
        {/* User Card */}
        <div className="flex items-center justify-between p-2.5 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2.5">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop&crop=face" 
              alt="User" 
              className="w-9 h-9 rounded-full object-cover border-2 border-white/30"
            />
            <div className="text-left">
              <p className="text-xs font-bold text-white">Sarah J.</p>
              <button onClick={onEarlyAccessClick} className="text-[10px] text-white/70 hover:underline">
                Logout
              </button>
            </div>
          </div>
          <button 
            onClick={() => onTabChange('profile')}
            className="text-white/80 hover:text-white p-1.5 rounded-xl hover:bg-white/10"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
