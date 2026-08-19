import React, { useState } from 'react';
import { Search, User, MapPin, ChevronRight, Plus, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GroupsView({ onSelectGroup, onAddStory, onNewGroupClick }) {
  const [activeTab, setActiveTab] = useState('group'); // 'chats' | 'group' | 'archived'

  const groups = [
    {
      id: 'las-vegas-cars',
      name: 'Las Vegas Cars',
      lastSender: 'Ellias manik',
      lastMessage: 'Okay',
      time: '11:34',
      unread: 0,
      avatar: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&q=80&fit=crop'
    },
    {
      id: 'crypto-signals',
      name: 'Crypto Signals Alpha',
      lastSender: 'David Leo',
      lastMessage: '#COMP/USDT (Long 20x)',
      time: '11:34',
      unread: 44,
      avatar: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=120&q=80&fit=crop'
    },
    {
      id: 'friends-circle',
      name: 'Friends Circle',
      lastSender: 'Walter',
      lastMessage: 'Sup guys!',
      time: '11:34',
      unread: 36,
      avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=120&q=80&fit=crop'
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden pb-24">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-black/5 px-4 h-14 flex items-center justify-between">
        <h1 className="font-extrabold text-xl text-crimson tracking-tight">Qonek</h1>

        <div className="flex items-center gap-2 text-crimson">
          <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>
          <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <User className="w-5 h-5 stroke-[2.2]" />
          </button>
          <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <MapPin className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>
      </header>

      {/* Segmented Pill Tabs: Chats | Group | Archived */}
      <div className="px-4 py-3 bg-white border-b border-black/5">
        <div className="flex items-center bg-pink-50/80 p-1 rounded-full border border-pink-100/60">
          {['chats', 'group', 'archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-crimson text-white shadow-crimson-glow/30'
                  : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* "My Groups" Trending Banner */}
        <div 
          onClick={onAddStory}
          className="mx-4 my-3 p-3.5 rounded-2xl bg-gradient-to-r from-crimson-50 to-pink-50/60 border border-crimson-100 flex items-center justify-between cursor-pointer hover:shadow-apple-sm transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full bg-crimson flex items-center justify-center text-white shadow-crimson-glow/40 flex-shrink-0">
              <Users className="w-6 h-6 stroke-[2.2]" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white shadow-sm" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-apple-text">My Groups & Stories</h3>
              <p className="text-xs text-apple-subtext">Tap to see what's trending or add new story</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-crimson stroke-[2.5]" />
        </div>

        {/* Groups Section Header */}
        <div className="px-4 pt-3 pb-1 flex items-center justify-between">
          <h2 className="text-sm font-extrabold text-apple-text">Groups</h2>
          <button 
            onClick={onNewGroupClick}
            className="text-xs font-bold text-crimson hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
            <span>Create Group</span>
          </button>
        </div>

        {/* Groups List */}
        <div className="divide-y divide-black/5">
          {groups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => onSelectGroup?.(grp.id)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex-shrink-0 border border-black/5">
                  <img src={grp.avatar} alt={grp.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-apple-text truncate">{grp.name}</h3>
                  <p className="text-xs text-apple-subtext truncate mt-0.5">
                    <span className="font-semibold text-apple-text">{grp.lastSender}:</span> {grp.lastMessage}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className="text-[11px] text-apple-subtext font-medium">{grp.time}</span>
                {grp.unread > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-crimson text-white text-[10px] font-bold shadow-crimson-glow/30">
                    {grp.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
