import React from 'react';
import { ChevronRight, User, Shield, Moon, Image as ImageIcon, UserX, Trash2, LogOut, KeyRound } from 'lucide-react';

export default function SettingsView({ onBack }) {
  const sections = [
    {
      title: 'General',
      items: [
        { id: 'personal', label: 'Personal information', desc: 'Update your name and personal information', icon: User },
        { id: 'account', label: 'Account information', desc: 'Update the contact information associated with your account', icon: Shield },
        { id: 'blocked', label: 'Blocked Users', desc: 'Review people you previously blocked', icon: UserX },
        { id: 'delete', label: 'Delete account', desc: 'Deleting your account will permanently remove your photos and profile', icon: Trash2, isDestructive: true },
        { id: 'logout', label: 'Logout', icon: LogOut, isDanger: true },
      ]
    },
    {
      title: 'Display',
      items: [
        { id: 'wallpaper', label: 'Wallpaper', desc: 'Change the background color of the conversation', icon: ImageIcon },
        { id: 'theme', label: 'Theme', value: 'Light', icon: Moon },
      ]
    },
    {
      title: 'Security',
      items: [
        { id: '2fa', label: 'Two-Factor Authentication', icon: KeyRound },
        { id: 'password', label: 'Change Password', icon: Shield },
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-apple-bg overflow-y-auto pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-black/5 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button 
              onClick={onBack}
              className="text-crimson font-bold text-lg hover:bg-black/5 p-1 rounded-full"
            >
              ←
            </button>
          )}
          <h1 className="font-bold text-base text-apple-text">Settings</h1>
        </div>
        <span className="text-xs font-semibold text-apple-subtext">v1.2.0</span>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-apple-sm flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-crimson/20 p-0.5">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=140&q=80&fit=crop&crop=face" 
                alt="Mahmudul Hasan" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-base text-apple-text">Mahmudul Hasan</h2>
              <p className="text-xs text-apple-subtext">@mahmudulhasan</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-crimson" />
        </div>

        {/* Grouped Settings Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-1.5">
            <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-apple-subtext">
              {section.title}
            </h3>
            <div className="bg-white rounded-2xl border border-black/5 shadow-apple-sm divide-y divide-black/5 overflow-hidden">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <div className={`p-2 rounded-xl ${
                        item.isDestructive || item.isDanger 
                          ? 'bg-red-50 text-red-600' 
                          : 'bg-gray-100 text-apple-text'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${
                          item.isDestructive ? 'text-red-600' : 'text-apple-text'
                        }`}>
                          {item.label}
                        </p>
                        {item.desc && (
                          <p className="text-xs text-apple-subtext mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {item.value && (
                        <span className="text-xs text-apple-subtext font-medium">{item.value}</span>
                      )}
                      <ChevronRight className="w-4 h-4 text-crimson stroke-[2.5]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
