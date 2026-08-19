import React, { useState } from 'react';
import { ArrowLeft, MoreHorizontal, MessageSquare, Phone, Video, Share2, MapPin, Mail, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UserProfileDetailView({ user, onBack, onStartChat, onStartCall }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const profile = user || {
    name: 'Sarah Jensen',
    handle: '@sarahj',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80&fit=crop',
    bio: 'Digital creator & UI designer based in Paris ☕✨ Lover of architecture, film photography, and alpine hikes.',
    postsCount: 142,
    followersCount: '112K',
    followingCount: 384,
    location: 'Paris, France',
    website: 'https://sarahj.design',
    email: 'sarah.jensen@qonek.social',
    media: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&fit=crop',
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80&fit=crop',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop',
    ]
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F5F7]">
      {/* Top Header */}
      <div className="bg-[#8E1E28] text-white px-4 pt-12 pb-4 shadow-md flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-extrabold text-sm tracking-tight">{profile.handle}</span>
        <button className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Profile Scroll Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar pb-28">
        {/* Main Header Card */}
        <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center text-center">
          {/* Large Avatar */}
          <div className="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#8E1E28] to-[#E74C3C] mb-3 shadow-lg">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover border-4 border-white"
            />
          </div>

          <h2 className="text-lg font-black text-gray-900 tracking-tight">{profile.name}</h2>
          <p className="text-xs text-gray-400 font-semibold mb-4">{profile.handle}</p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 w-full py-3.5 px-4 rounded-2xl bg-gray-50 mb-5 border border-black/5">
            <div>
              <p className="text-base font-black text-gray-900">{profile.postsCount}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Posts</p>
            </div>
            <div className="border-x border-gray-200">
              <p className="text-base font-black text-gray-900">{profile.followersCount}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Followers</p>
            </div>
            <div>
              <p className="text-base font-black text-gray-900">{profile.followingCount}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Following</p>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-2.5 w-full">
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`flex-1 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                isFollowing 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-[#8E1E28] text-white shadow-[0_6px_20px_rgba(142,30,40,0.35)] hover:bg-[#A62C37]'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>

            <button
              onClick={() => onStartChat?.(profile)}
              className="py-3 px-4 rounded-2xl bg-pink-50 text-[#8E1E28] border border-pink-200 text-xs font-black hover:bg-pink-100 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message</span>
            </button>

            <button
              onClick={() => onStartCall?.({ name: profile.name, isVideo: false })}
              className="p-3 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              title="Voice Call"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bio Card */}
        <div className="bg-white rounded-3xl p-5 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-2">About</h3>
          <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
            {profile.bio}
          </p>

          <div className="space-y-2.5 pt-3 border-t border-black/5 text-xs text-gray-600 font-medium">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#8E1E28]" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#8E1E28]" />
              <a href={profile.website} target="_blank" rel="noreferrer" className="text-[#8E1E28] hover:underline font-bold">
                {profile.website}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#8E1E28]" />
              <span>{profile.email}</span>
            </div>
          </div>
        </div>

        {/* Media Gallery Grid (4 items) */}
        <div className="bg-white rounded-3xl p-5 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">Photos & Media</h3>
            <span className="text-xs font-bold text-[#8E1E28]">View all</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {profile.media.map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-black/5">
                <img src={img} alt={`Media ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
