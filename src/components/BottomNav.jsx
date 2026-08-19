import React from 'react';
import { MessageSquare, Camera, Plus, Users, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomNav({ activeTab, onTabChange, onNewPostClick }) {
  const navItems = [
    { id: 'chats', label: 'Chats', icon: MessageSquare },
    { id: 'camera', label: 'Camera', icon: Camera },
    { id: 'create', label: 'Post', icon: Plus, isCta: true },
    { id: 'community', label: 'Groups', icon: Users },
    { id: 'profile', label: 'Settings', icon: User },
  ];

  return (
    <nav className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 max-w-lg mx-auto z-40">
      <div className="glass-nav rounded-full h-16 px-4 flex items-center justify-around shadow-apple-lg border border-black/5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.isCta) {
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={onNewPostClick}
                className="w-13 h-13 rounded-full bg-gradient-to-tr from-crimson to-crimson-400 text-white flex items-center justify-center shadow-crimson-glow -mt-5 border-2 border-white cursor-pointer"
                title="Create New Post"
              >
                <Plus className="w-6 h-6 stroke-[2.8]" />
              </motion.button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all cursor-pointer ${
                isActive 
                  ? 'text-crimson' 
                  : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${
                isActive ? 'bg-crimson/10' : ''
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
