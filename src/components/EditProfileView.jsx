import React, { useState } from 'react';
import { Camera, Facebook, Instagram, Twitter, MapPin, Phone, Briefcase, Globe, Heart, Info, ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EditProfileView({ onBack, onSave }) {
  const [formData, setFormData] = useState({
    firstName: 'Anike',
    lastName: 'Vaccaro',
    about: 'Hi there i am using Qonek',
    facebook: 'anike.vaccaro',
    instagram: '@anike.v',
    twitter: '@anikavaccaro',
    gender: 'Male',
    location: 'Laguna, Manila',
    phone: '+1 (896) 738-1829',
    work: 'Lead Product Designer',
    website: 'anikavaccaro.com',
    relationship: 'None',
    description: 'Building next-gen social interfaces with seamless physical physics.'
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onSave?.(formData);
    }, 1200);
  };

  return (
    <div className="w-full h-full bg-apple-bg overflow-y-auto pb-28">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-black/5 px-4 h-14 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-1.5 -ml-1 text-apple-text hover:text-crimson hover:bg-black/5 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
        <h1 className="font-bold text-base text-apple-text">Edit Profile</h1>
        <div className="w-8" />
      </header>

      <form onSubmit={handleSave} className="max-w-xl mx-auto p-4 space-y-5">
        {/* Avatar Section with Crimson Camera Badge */}
        <div className="flex flex-col items-center justify-center py-2">
          <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-crimson/30 via-pink-100 to-crimson/10 shadow-apple-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&q=80&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              type="button"
              className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center border-2 border-white shadow-crimson-glow hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Names Row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider mb-1.5">
              First name
            </label>
            <input 
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Enter firstname"
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/8 text-sm font-semibold text-apple-text placeholder-apple-subtext focus:outline-none focus:ring-2 focus:ring-crimson/20 shadow-apple-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider mb-1.5">
              Last name
            </label>
            <input 
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Enter lastname"
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/8 text-sm font-semibold text-apple-text placeholder-apple-subtext focus:outline-none focus:ring-2 focus:ring-crimson/20 shadow-apple-sm transition-all"
            />
          </div>
        </div>

        {/* About / Bio */}
        <div>
          <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider mb-1.5">
            About
          </label>
          <textarea 
            rows={2}
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-black/8 text-sm font-semibold text-apple-text placeholder-apple-subtext focus:outline-none focus:ring-2 focus:ring-crimson/20 shadow-apple-sm resize-none transition-all"
          />
        </div>

        {/* Social Media Group */}
        <div className="space-y-2">
          <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider">
            Social Media
          </label>
          
          <div className="space-y-2">
            {/* Facebook */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                <Facebook className="w-4 h-4 fill-white" />
              </div>
              <input 
                type="text"
                value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                placeholder="Facebook profile"
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none placeholder-apple-subtext"
              />
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <input 
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                placeholder="Instagram handle"
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none placeholder-apple-subtext"
              />
            </div>

            {/* Twitter */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center flex-shrink-0">
                <Twitter className="w-4 h-4 fill-white" />
              </div>
              <input 
                type="text"
                value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                placeholder="Twitter handle"
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none placeholder-apple-subtext"
              />
            </div>
          </div>
        </div>

        {/* User Info Group */}
        <div className="space-y-2">
          <label className="block text-[11px] font-bold text-apple-text uppercase tracking-wider">
            User Info
          </label>
          
          <div className="space-y-2">
            {/* Gender */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <span className="text-crimson font-bold text-lg w-5 text-center">♂</span>
              <input 
                type="text"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <MapPin className="w-5 h-5 text-crimson stroke-[2.2]" />
              <input 
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <Phone className="w-5 h-5 text-crimson stroke-[2.2]" />
              <input 
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>

            {/* Work */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <Briefcase className="w-5 h-5 text-crimson stroke-[2.2]" />
              <input 
                type="text"
                value={formData.work}
                onChange={(e) => setFormData({ ...formData, work: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>

            {/* Website */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <Globe className="w-5 h-5 text-crimson stroke-[2.2]" />
              <input 
                type="text"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>

            {/* Relationship */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <Heart className="w-5 h-5 text-crimson stroke-[2.2]" />
              <input 
                type="text"
                value={formData.relationship}
                onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>

            {/* Description */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-black/8 shadow-apple-sm">
              <Info className="w-5 h-5 text-crimson stroke-[2.2]" />
              <input 
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="flex-1 text-sm font-semibold text-apple-text border-none bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save CTA Button */}
        <div className="pt-2">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-crimson text-white font-bold text-base shadow-crimson-glow hover:bg-crimson-600 active:bg-crimson-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSaved ? (
              <>
                <Check className="w-5 h-5 stroke-[3]" />
                <span>Profile Saved!</span>
              </>
            ) : (
              <span>Save</span>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
