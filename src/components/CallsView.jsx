import React from 'react';
import { Phone, Video, Search, User, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallsView({ onStartCall }) {
  const callContacts = [
    { id: 1, name: 'Jakob Tony', lastSeen: 'Last seen 5 days ago', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80&fit=crop&crop=face' },
    { id: 2, name: 'Ahmad Dios', lastSeen: 'Last seen 5 days ago', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&q=80&fit=crop&crop=face' },
    { id: 3, name: 'Giana Franci', lastSeen: 'Last seen 5 days ago', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80&fit=crop&crop=face' },
    { id: 4, name: 'Keirra Bator', lastSeen: 'Last seen 5 days ago', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&fit=crop&crop=face' },
    { id: 5, name: 'Johnny Deep', lastSeen: 'Last seen 5 days ago', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80&fit=crop&crop=face' },
    { id: 6, name: 'Gustu Key', lastSeen: 'Last seen 5 days ago', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80&fit=crop&crop=face' },
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden pb-24">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-black/5 px-4 h-14 flex items-center justify-between">
        <h1 className="font-extrabold text-xl text-apple-text tracking-tight">Calls</h1>
        
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

      {/* Call List */}
      <div className="flex-1 overflow-y-auto divide-y divide-black/5">
        {callContacts.map((contact) => (
          <div 
            key={contact.id}
            className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50/80 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex-shrink-0 border border-black/5">
                <img 
                  src={contact.avatar} 
                  alt={contact.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-apple-text">{contact.name}</h3>
                <p className="text-xs text-apple-subtext">{contact.lastSeen}</p>
              </div>
            </div>

            {/* Voice & Video Call Action Pills */}
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onStartCall?.({ name: contact.name, isVideo: false })}
                className="w-10 h-10 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-600 flex items-center justify-center transition-colors cursor-pointer"
                title="Voice Call"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onStartCall?.({ name: contact.name, isVideo: true })}
                className="w-10 h-10 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors cursor-pointer"
                title="Video Call"
              >
                <Video className="w-4 h-4 stroke-[2.5]" />
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
