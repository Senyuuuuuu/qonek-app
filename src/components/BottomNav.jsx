import React from 'react';
import { Home, Search, Plus, MessageSquare, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomNav({ activeTab, onTabChange, onNewPostClick }) {
  const navItems = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'create', label: 'Post', icon: Plus, isCta: true },
    { id: 'chats', label: 'Messages', icon: MessageSquare, badge: 3 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-4 left-4 right-4 sm:left-12 sm:right-12 max-w-md mx-auto z-40 select-none">
      <div className="bg-white/90 backdrop-blur-2xl rounded-full h-16 px-5 flex items-center justify-between shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-black/5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'feed' && activeTab === 'feed');

          if (item.isCta) {
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={onNewPostClick}
                className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#8E1E28] to-[#B82B38] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(142,30,40,0.45)] -mt-6 border-2 border-white cursor-pointer"
                title="Create New Post"
              >
                <Plus className="w-6 h-6 stroke-[3]" />
              </motion.button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`relative flex flex-col items-center justify-center w-11 h-11 rounded-full transition-all cursor-pointer ${
                isActive 
                  ? 'text-[#8E1E28]' 
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.6]' : 'stroke-[1.9]'}`} />
              {item.badge && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#8E1E28]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
