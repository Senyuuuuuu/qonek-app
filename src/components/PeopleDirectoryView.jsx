import React, { useState } from 'react';
import { Search, UserPlus, Check, ArrowLeft, Filter, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PeopleDirectoryView({ onBack, onSelectUser, onFilterClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [followedIds, setFollowedIds] = useState(new Set([1, 4]));

  const users = [
    { id: 1, name: 'Avan Home', handle: '@grtamsr', followers: '36K stories', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop' },
    { id: 2, name: 'Jason Writer', handle: '@jasonwriter', followers: '84K followers', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop' },
    { id: 3, name: 'Kaden Banars', handle: '@kadenever', followers: '12K followers', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop' },
    { id: 4, name: 'Joce Feiten', handle: '@jocefeiten', followers: '29K stars', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop' },
    { id: 5, name: 'Sarah Jensen', handle: '@sarahj', followers: '112K followers', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop' },
    { id: 6, name: 'Alex Patel', handle: '@alex_p', followers: '45K followers', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fit=crop' },
    { id: 7, name: 'David Kim', handle: '@davidk', followers: '68K followers', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop' },
    { id: 8, name: 'Elena Rostova', handle: '@elenar', followers: '94K followers', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&fit=crop' },
  ];

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFollow = (id, e) => {
    e.stopPropagation();
    setFollowedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F5F7]">
      {/* Top Header */}
      <div className="bg-[#8E1E28] text-white px-4 pt-12 pb-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-black tracking-tight">Find People</h1>
            <p className="text-[11px] text-white/70 font-semibold">Discover creators & friends</p>
          </div>
        </div>

        <button 
          onClick={onFilterClick}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          title="Filter Results"
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Search Input Bar */}
      <div className="p-4 pb-2">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or handle..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-black/5 shadow-sm text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8E1E28]/30"
          />
        </div>
      </div>

      {/* People Grid (2 columns on mobile, 3-4 on desktop) */}
      <div className="flex-1 overflow-y-auto p-4 pt-2 no-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 pb-24">
          {filteredUsers.map((user) => {
            const isFollowed = followedIds.has(user.id);

            return (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -3 }}
                onClick={() => onSelectUser?.(user)}
                className="bg-white rounded-3xl p-4 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                {/* User Avatar */}
                <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#8E1E28] to-[#E74C3C] mb-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>

                {/* User Info */}
                <h3 className="text-xs font-extrabold text-gray-900 tracking-tight truncate w-full">
                  {user.name}
                </h3>
                <p className="text-[10px] text-gray-400 font-medium mb-1 truncate w-full">
                  {user.handle}
                </p>
                <span className="text-[10px] font-bold text-gray-500 mb-3">
                  {user.followers}
                </span>

                {/* Follow / Unfollow Button */}
                <button
                  onClick={(e) => toggleFollow(user.id, e)}
                  className={`w-full py-2 px-3 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isFollowed
                      ? 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-[#8E1E28]'
                      : 'bg-[#8E1E28] text-white shadow-[0_4px_12px_rgba(142,30,40,0.35)] hover:bg-[#A62C37]'
                  }`}
                >
                  {isFollowed ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Following</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Follow</span>
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
