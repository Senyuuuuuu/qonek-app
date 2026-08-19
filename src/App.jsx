import React, { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import SidebarNav from './components/SidebarNav';
import StoryCircle from './components/StoryCircle';
import PostCard from './components/PostCard';
import ChatView from './components/ChatView';
import SettingsView from './components/SettingsView';
import EditProfileView from './components/EditProfileView';
import UserProfileDetailView from './components/UserProfileDetailView';
import PeopleDirectoryView from './components/PeopleDirectoryView';
import GroupsView from './components/GroupsView';
import CallsView from './components/CallsView';
import OnboardingView from './components/OnboardingView';
import AuthLoginView from './components/AuthLoginView';
import CreateGroupView from './components/CreateGroupView';
import FilterBottomSheet from './components/FilterBottomSheet';
import AddStorySheet from './components/AddStorySheet';
import CallOverlayModal from './components/CallOverlayModal';
import EarlyAccessModal from './components/EarlyAccessModal';
import { Search, Bell, Sparkles, SlidersHorizontal, Send, ChevronRight, MessageSquare, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'chats' | 'community' | 'calls' | 'people' | 'profile-detail' | 'edit-profile' | 'profile' | 'onboarding' | 'login'
  const [selectedChatId, setSelectedChatId] = useState('sarah-jensen');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddStoryOpen, setIsAddStoryOpen] = useState(false);
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  
  // Call Overlay State
  const [activeCall, setActiveCall] = useState(null);

  // Mock Stories
  const stories = [
    { id: 'u1', name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u2', name: 'David', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u3', name: 'Mia', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u4', name: 'Ben', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80&fit=crop&crop=face', hasUnseen: false },
    { id: 'u5', name: 'Alex', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80&fit=crop&crop=face', hasUnseen: false },
  ];

  // Newsfeed Posts
  const posts = [
    {
      id: 1,
      user: {
        name: "Liam's Adventures",
        handle: 'liam_adventures',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face',
        verified: true
      },
      timestamp: '2h ago',
      caption: 'Sunrise hike in Banff! The reflection over the alpine lake at 6 AM was pure magic 🏔️✨',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=85&fit=crop',
      likes: 1200,
      isLiked: true,
      commentsCount: 245,
      tags: ['nature', 'banff', 'sunrise']
    },
    {
      id: 2,
      user: {
        name: 'Emily Cooks',
        handle: 'emilycooks',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&crop=face',
        verified: true
      },
      timestamp: '3h ago',
      caption: 'Brunch goals! Sourdough avocado toast with poached eggs and chili flakes 🥑🍳',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&q=85&fit=crop',
      likes: 890,
      isLiked: false,
      commentsCount: 132,
      tags: ['foodie', 'brunch', 'healthy']
    },
    {
      id: 3,
      user: {
        name: 'Maya Wander',
        handle: 'maya_wander',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop&crop=face',
        verified: true
      },
      timestamp: '4h ago',
      caption: 'Paris cafe moments... Afternoon bliss in Paris! 🇫🇷☕',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85&fit=crop',
      likes: 3100,
      isLiked: true,
      commentsCount: 412,
      tags: ['paris', 'lifestyle', 'travel']
    }
  ];

  // Trending Users List
  const trendingUsers = [
    { id: 1, name: 'Alex Chen', handle: '@alexchen', followers: '230K followers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80&fit=crop' },
    { id: 2, name: 'Mia Wong', handle: '@miawong', followers: '189K followers', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&fit=crop' },
    { id: 3, name: 'Ben Carter', handle: '@bencarter', followers: '127K followers', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&fit=crop' },
  ];

  // Direct Messages List
  const directMessages = [
    { name: 'Maya Lee', snippet: 'Hey, are you...', time: '2m ago', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop', unread: true },
    { name: 'Leo Garcia', snippet: 'Sounds great!', time: '12m ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop' },
    { name: 'Chloe Adams', snippet: 'Meeting?', time: '45m ago', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80&fit=crop' },
  ];

  // If user enters Onboarding or Auth modes
  if (activeTab === 'onboarding') {
    return <OnboardingView onComplete={() => setActiveTab('feed')} />;
  }

  if (activeTab === 'login') {
    return <AuthLoginView onLoginSuccess={() => setActiveTab('feed')} onSwitchToSignup={() => setActiveTab('onboarding')} />;
  }

  if (isCreateGroupOpen) {
    return (
      <div className="w-full h-screen bg-white">
        <CreateGroupView 
          onBack={() => setIsCreateGroupOpen(false)} 
          onCreateGroup={() => {
            setIsCreateGroupOpen(false);
            setActiveTab('community');
          }} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex flex-col lg:flex-row text-gray-900 selection:bg-[#8E1E28]/20 selection:text-[#8E1E28]">
      {/* Desktop Left Crimson Sidebar (MacBook View) */}
      <SidebarNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'camera') setIsAddStoryOpen(true);
          else if (tab === 'explore') setActiveTab('people');
          else setActiveTab(tab);
        }}
        onNewPostClick={() => setIsAddStoryOpen(true)}
        onEarlyAccessClick={() => setIsEarlyAccessOpen(true)}
      />

      {/* Main Responsive Canvas */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile & Tablet Header */}
        <div className="lg:hidden">
          <TopBar 
            onEarlyAccessClick={() => setIsEarlyAccessOpen(true)}
            onSearchClick={() => setIsFilterOpen(true)}
          />
        </div>

        {/* Desktop Top Header Bar in Rich Crimson (MacBook View) */}
        <div className="hidden lg:flex items-center justify-between px-6 py-3.5 bg-[#8E1E28] text-white border-b border-black/10 shadow-sm flex-shrink-0">
          <div className="w-64" />
          
          {/* Centered Pill Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-white/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Qonek..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-black/20 text-white placeholder-white/60 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-white/40 border border-white/10"
            />
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsEarlyAccessOpen(true)}
              className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/40">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop&crop=face" 
                alt="Sarah" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Universal 20-Screen Switcher Strip for Instant Evaluation */}
        <div className="bg-white/90 backdrop-blur-md border-b border-black/5 px-4 py-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-2 flex-shrink-0 select-none">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8E1E28]" />
            <span className="hidden sm:inline">Screens:</span>
          </div>

          <div className="flex items-center gap-1.5">
            {[
              { id: 'feed', label: '📸 Feed Grid' },
              { id: 'chats', label: '💬 Messages' },
              { id: 'people', label: '👥 Find People' },
              { id: 'profile-detail', label: '✨ User Profile' },
              { id: 'community', label: '🏷️ Groups' },
              { id: 'calls', label: '📞 Calls' },
              { id: 'edit-profile', label: '👤 Edit Profile' },
              { id: 'profile', label: '⚙️ Settings' },
              { id: 'onboarding', label: '🚀 Onboarding' },
              { id: 'login', label: '🔐 Login' },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveTab(v.id)}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === v.id
                    ? 'bg-[#8E1E28] text-white shadow-[0_4px_12px_rgba(142,30,40,0.35)]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {v.label}
              </button>
            ))}

            <button
              onClick={() => setIsFilterOpen(true)}
              className="px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-[#8E1E28] border border-pink-200 hover:bg-pink-100 flex items-center gap-1 cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Dynamic Canvas Viewport */}
        <div className="flex-1 flex overflow-hidden">
          {/* 1. Feed View (Multi-Card Grid on Desktop + Right Sidebar) */}
          {activeTab === 'feed' && (
            <div className="flex-1 flex overflow-hidden">
              <main className="flex-1 max-w-3xl xl:max-w-4xl mx-auto overflow-y-auto p-4 sm:p-6 pb-28 lg:pb-12 no-scrollbar">
                {/* Horizontal Story Strip */}
                <section className="bg-white rounded-3xl p-4 mb-6 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-xs font-black uppercase tracking-wider text-gray-900">Social Newsfeed</span>
                    <button onClick={() => setIsAddStoryOpen(true)} className="text-xs font-bold text-[#8E1E28] hover:underline">
                      Stories →
                    </button>
                  </div>
                  <div className="flex items-center gap-3.5 overflow-x-auto no-scrollbar py-1">
                    <StoryCircle isUser={true} onClick={() => setIsAddStoryOpen(true)} />
                    {stories.map((story) => (
                      <StoryCircle 
                        key={story.id} 
                        {...story} 
                        onClick={() => {
                          setActiveTab('chats');
                          setSelectedChatId('sarah-jensen');
                        }}
                      />
                    ))}
                  </div>
                </section>

                {/* Posts Feed Grid (2 columns on desktop) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {posts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onCommentClick={() => {
                        setActiveTab('chats');
                        setSelectedChatId('sarah-jensen');
                      }}
                      onShareClick={() => setIsEarlyAccessOpen(true)}
                    />
                  ))}
                </section>
              </main>

              {/* Desktop Sticky Right-hand Panel (Trending & Direct Messages) */}
              <aside className="hidden 2xl:flex flex-col w-80 border-l border-black/5 bg-white p-5 overflow-y-auto flex-shrink-0 justify-between">
                <div>
                  {/* Trending Users */}
                  <div className="mb-8">
                    <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-4">
                      Trending Users
                    </h3>
                    <div className="space-y-3.5">
                      {trendingUsers.map((u) => (
                        <div key={u.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full object-cover border border-black/5" />
                            <div>
                              <p className="text-xs font-bold text-gray-900">{u.name}</p>
                              <p className="text-[11px] text-gray-400">{u.followers}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => {
                              setSelectedUser(u);
                              setActiveTab('profile-detail');
                            }}
                            className="px-3 py-1 rounded-full border border-[#8E1E28] text-[#8E1E28] text-xs font-bold hover:bg-[#8E1E28] hover:text-white transition-colors cursor-pointer"
                          >
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Messages Quick Widget */}
                  <div className="pt-6 border-t border-black/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">
                        Direct Messages
                      </h3>
                      <button 
                        onClick={() => setActiveTab('chats')}
                        className="text-xs font-bold text-[#8E1E28] hover:underline cursor-pointer"
                      >
                        View all
                      </button>
                    </div>
                    <div className="space-y-2">
                      {directMessages.map((dm, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setActiveTab('chats');
                            setSelectedChatId('sarah-jensen');
                          }}
                          className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-gray-50 text-left transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-2">
                            <img src={dm.avatar} alt={dm.name} className="w-9 h-9 rounded-full object-cover border border-black/5" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate">{dm.name}</p>
                              <p className="text-[11px] text-gray-400 truncate">{dm.snippet}</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-400 font-medium flex-shrink-0">{dm.time}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-red-50 border border-pink-100 mt-6">
                  <p className="text-xs font-black text-[#8E1E28] mb-1">QChat Pro Cloud</p>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    Experience unified cross-device chats with high-fidelity media sync.
                  </p>
                </div>
              </aside>
            </div>
          )}

          {/* 2. Chats View */}
          {activeTab === 'chats' && (
            <div className="w-full h-full">
              <ChatView
                selectedChatId={selectedChatId}
                onSelectChat={(id) => setSelectedChatId(id)}
                onBackToList={() => setSelectedChatId(null)}
                onStartCall={(contact) => setActiveCall(contact)}
              />
            </div>
          )}

          {/* 3. People / Discover Directory */}
          {activeTab === 'people' && (
            <div className="w-full h-full">
              <PeopleDirectoryView
                onBack={() => setActiveTab('feed')}
                onFilterClick={() => setIsFilterOpen(true)}
                onSelectUser={(u) => {
                  setSelectedUser(u);
                  setActiveTab('profile-detail');
                }}
              />
            </div>
          )}

          {/* 4. User Profile Detail View */}
          {activeTab === 'profile-detail' && (
            <div className="w-full h-full">
              <UserProfileDetailView
                user={selectedUser}
                onBack={() => setActiveTab('feed')}
                onStartChat={() => {
                  setActiveTab('chats');
                  setSelectedChatId('sarah-jensen');
                }}
                onStartCall={(c) => setActiveCall(c)}
              />
            </div>
          )}

          {/* 5. Community / Groups View */}
          {activeTab === 'community' && (
            <div className="w-full h-full">
              <GroupsView 
                onAddStory={() => setIsAddStoryOpen(true)}
                onNewGroupClick={() => setIsCreateGroupOpen(true)}
                onSelectGroup={() => {
                  setActiveTab('chats');
                  setSelectedChatId('anike-vaccaro');
                }}
              />
            </div>
          )}

          {/* 6. Calls History Log */}
          {activeTab === 'calls' && (
            <div className="w-full h-full">
              <CallsView onStartCall={(contact) => setActiveCall(contact)} />
            </div>
          )}

          {/* 7. Edit Profile Screen */}
          {activeTab === 'edit-profile' && (
            <div className="w-full h-full">
              <EditProfileView onBack={() => setActiveTab('profile')} onSave={() => setActiveTab('profile')} />
            </div>
          )}

          {/* 8. Settings View */}
          {activeTab === 'profile' && (
            <div className="w-full h-full">
              <SettingsView onBack={() => setActiveTab('feed')} />
            </div>
          )}
        </div>

        {/* Mobile & Tablet Floating Bottom Navigation */}
        <div className="lg:hidden">
          <BottomNav
            activeTab={activeTab}
            onTabChange={(tab) => {
              if (tab === 'search') setActiveTab('people');
              else if (tab === 'camera') setIsAddStoryOpen(true);
              else if (tab === 'profile') setActiveTab('edit-profile');
              else setActiveTab(tab);
            }}
            onNewPostClick={() => setIsAddStoryOpen(true)}
          />
        </div>
      </div>

      {/* Global Bottom Sheets & Modals */}
      <FilterBottomSheet 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={(f) => console.log('Applied filters:', f)} 
      />

      <AddStorySheet 
        isOpen={isAddStoryOpen} 
        onClose={() => setIsAddStoryOpen(false)} 
        onSelectType={() => setActiveTab('feed')} 
      />

      <CallOverlayModal 
        isOpen={!!activeCall} 
        contactName={activeCall?.name || 'Jakob Tory'} 
        isVideo={activeCall?.isVideo || false} 
        onEndCall={() => setActiveCall(null)} 
      />

      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}
