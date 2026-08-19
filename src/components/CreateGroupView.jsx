import React, { useState } from 'react';
import { ArrowLeft, X, Camera, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CreateGroupView({ onBack, onCreateGroup }) {
  const [groupName, setGroupName] = useState('Crypto Signals Alpha');
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Rayna', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop&crop=face' },
    { id: 2, name: 'James', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face' },
    { id: 3, name: 'Craig', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&fit=crop&crop=face' },
    { id: 4, name: 'Hanna', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop&crop=face' },
    { id: 5, name: 'Meyvis', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&fit=crop&crop=face' },
    { id: 6, name: 'Jacky', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80&fit=crop&crop=face' },
    { id: 7, name: 'Bruk', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80&fit=crop&crop=face' },
    { id: 8, name: 'Nevats', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80&fit=crop&crop=face' },
    { id: 9, name: 'Carlo', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80&fit=crop&crop=face' },
  ]);

  const [isCreated, setIsCreated] = useState(false);

  const removeParticipant = (id) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setIsCreated(true);
    setTimeout(() => {
      setIsCreated(false);
      onCreateGroup?.({ name: groupName, count: participants.length + 14 });
    }, 1200);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-4 sm:p-6 overflow-y-auto">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between py-2 border-b border-black/5 mb-6">
          <button 
            onClick={onBack}
            className="p-1.5 -ml-1 text-apple-text hover:text-crimson hover:bg-black/5 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <h1 className="font-extrabold text-lg text-apple-text">Create Group</h1>
          <button 
            onClick={onBack}
            className="p-1.5 -mr-1 text-apple-text hover:text-crimson hover:bg-black/5 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Group Avatar Upload Circle with Camera Badge */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-crimson/20 via-pink-100 to-crimson/10 shadow-apple-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-crimson-50/80 flex items-center justify-center border-2 border-white">
              {/* Group icon */}
              <div className="flex items-center justify-center text-crimson">
                <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
            </div>
            <button 
              type="button"
              className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center border-2 border-white shadow-crimson-glow hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="w-full max-w-xs mt-5">
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter groupname"
              className="w-full px-4 py-2.5 text-center text-base font-bold text-apple-text border-b-2 border-black/10 focus:border-crimson focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* People in Group Section */}
        <div className="space-y-3 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-extrabold text-apple-text">
              People in group
            </h2>
            <span className="text-xs font-semibold text-apple-subtext">
              {participants.length + 14} people selected
            </span>
          </div>

          {/* Participant Chips Grid */}
          <div className="grid grid-cols-5 gap-3 pt-2">
            {/* Add more button */}
            <button className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-pink-50 border-2 border-dashed border-crimson/30 text-crimson hover:bg-pink-100 transition-colors cursor-pointer">
              <Plus className="w-6 h-6 stroke-[2.8]" />
            </button>

            {participants.map((p) => (
              <div key={p.id} className="relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-apple-sm">
                  <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <button
                  type="button"
                  onClick={() => removeParticipant(p.id)}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-crimson text-white flex items-center justify-center border-2 border-white shadow-sm hover:scale-110 active:scale-90 transition-transform cursor-pointer"
                >
                  <X className="w-3 h-3 stroke-[3]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create CTA Button */}
      <div className="pt-6 pb-2">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleCreate}
          className="w-full py-4 rounded-2xl bg-crimson text-white font-bold text-base shadow-crimson-glow hover:bg-crimson-600 active:bg-crimson-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isCreated ? (
            <>
              <Check className="w-5 h-5 stroke-[3]" />
              <span>Group Created!</span>
            </>
          ) : (
            <span>Create</span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
