import React, { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import SidebarNav from './components/SidebarNav';
import StoryCircle from './components/StoryCircle';
import PostCard from './components/PostCard';
import ChatView from './components/ChatView';
import SettingsView from './components/SettingsView';
import EditProfileView from './components/EditProfileView';
import GroupsView from './components/GroupsView';
import CallsView from './components/CallsView';
import OnboardingView from './components/OnboardingView';
import AuthLoginView from './components/AuthLoginView';
import CreateGroupView from './components/CreateGroupView';
import FilterBottomSheet from './components/FilterBottomSheet';
import AddStorySheet from './components/AddStorySheet';
import CallOverlayModal from './components/CallOverlayModal';
import EarlyAccessModal from './components/EarlyAccessModal';
import { Sparkles, SlidersHorizontal, UserPlus, Phone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('chats'); // 'chats' | 'feed' | 'community' | 'calls' | 'profile' | 'edit-profile' | 'onboarding' | 'login'
  const [selectedChatId, setSelectedChatId] = useState('anike-vaccaro');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddStoryOpen, setIsAddStoryOpen] = useState(false);
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  
  // Call Overlay State
  const [activeCall, setActiveCall] = useState(null); // { name: 'Jakob Tory', isVideo: false }

  // Mock Stories
  const stories = [
    { id: 'u1', name: 'Rayna', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u2', name: 'James', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u3', name: 'Craig', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u4', name: 'Hanna', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80&fit=crop&crop=face', hasUnseen: false },
    { id: 'u5', name: 'Carlo', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80&fit=crop&crop=face', hasUnseen: false },
  ];

  // Natural Photography Posts
  const posts = [
    {
      id: 1,
      user: {
        name: 'Anike Vaccaro',
        handle: 'anike_v',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop&crop=face',
        verified: true
      },
      timestamp: '2m ago',
      caption: 'Things have been slow with this lockdown, but the afternoon lighting in Manila is incredible today ☀️',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85&fit=crop',
      likes: 3120,
      isLiked: true,
      commentsCount: 412,
      tags: ['qchat', 'manila', 'photography']
    },
    {
      id: 2,
      user: {
        name: 'James Vetrovs',
        handle: 'jamesv',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face',
        verified: false
      },
      timestamp: '1h ago',
      caption: 'Testing the audio recording access from the new QChat release 🎙️ #tech',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=85&fit=crop',
      likes: 892,
      isLiked: false,
      commentsCount: 67,
      tags: ['audio', 'applehig', 'qonek']
    }
  ];

  // If user enters Onboarding or Auth modes
  if (activeTab === 'onboarding') {
    return <OnboardingView onComplete={() => setActiveTab('chats')} />;
  }

  if (activeTab === 'login') {
    return <AuthLoginView onLoginSuccess={() => setActiveTab('chats')} onSwitchToSignup={() => setActiveTab('onboarding')} />;
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
    <div className="min-h-screen bg-apple-bg flex flex-col lg:flex-row text-apple-text">
      {/* Desktop Left Navigation Sidebar */}
      <SidebarNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'camera') setIsAddStoryOpen(true);
          else setActiveTab(tab);
        }}
        onNewPostClick={() => setIsAddStoryOpen(true)}
        onEarlyAccessClick={() => setIsEarlyAccessOpen(true)}
      />

      {/* Main View Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile & Tablet Sticky Header */}
        <div className="lg:hidden">
          <TopBar 
            onEarlyAccessClick={() => setIsEarlyAccessOpen(true)}
            onSearchClick={() => setIsFilterOpen(true)}
          />
        </div>

        {/* Global Demo Switcher Strip for Instant Evaluation */}
        <div className="bg-white/80 backdrop-blur-md border-b border-black/5 px-4 py-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-apple-subtext uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-crimson" />
            <span className="hidden sm:inline">Views:</span>
          </div>

          <div className="flex items-center gap-1.5">
            {[
              { id: 'chats', label: '💬 Chat' },
              { id: 'feed', label: '📸 Feed' },
              { id: 'community', label: '👥 Groups' },
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
                    ? 'bg-crimson text-white shadow-crimson-glow/30'
                    : 'bg-gray-100 text-apple-text hover:bg-gray-200'
                }`}
              >
                {v.label}
              </button>
            ))}

            <button
              onClick={() => setIsFilterOpen(true)}
              className="px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-crimson border border-pink-200 hover:bg-pink-100 flex items-center gap-1 cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Dynamic Viewport */}
        <div className="flex-1 flex overflow-hidden">
          {/* 1. Chats View */}
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

          {/* 2. Social Feed View */}
          {activeTab === 'feed' && (
            <div className="flex-1 flex overflow-hidden">
              <main className="flex-1 max-w-2xl mx-auto overflow-y-auto p-3 sm:p-4 pb-24 lg:pb-8 no-scrollbar">
                <section className="bg-white rounded-2xl md:rounded-3xl p-3.5 mb-4 border border-black/5 shadow-apple-sm">
                  <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                    <StoryCircle isUser={true} onClick={() => setIsAddStoryOpen(true)} />
                    {stories.map((story) => (
                      <StoryCircle 
                        key={story.id} 
                        {...story} 
                        onClick={() => {
                          setActiveTab('chats');
                          setSelectedChatId('anike-vaccaro');
                        }}
                      />
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  {posts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onCommentClick={() => {
                        setActiveTab('chats');
                        setSelectedChatId('anike-vaccaro');
                      }}
                      onShareClick={() => setIsEarlyAccessOpen(true)}
                    />
                  ))}
                </section>
              </main>
            </div>
          )}

          {/* 3. Groups & Communities View */}
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

          {/* 4. Calls History Log */}
          {activeTab === 'calls' && (
            <div className="w-full h-full">
              <CallsView onStartCall={(contact) => setActiveCall(contact)} />
            </div>
          )}

          {/* 5. Edit Profile Screen */}
          {activeTab === 'edit-profile' && (
            <div className="w-full h-full">
              <EditProfileView onBack={() => setActiveTab('profile')} onSave={() => setActiveTab('profile')} />
            </div>
          )}

          {/* 6. Settings Screen */}
          {activeTab === 'profile' && (
            <div className="w-full h-full">
              <SettingsView onBack={() => setActiveTab('chats')} />
            </div>
          )}
        </div>

        {/* Mobile Floating Bottom Bar */}
        <div className="lg:hidden">
          <BottomNav
            activeTab={activeTab}
            onTabChange={(tab) => {
              if (tab === 'camera') setIsAddStoryOpen(true);
              else if (tab === 'community') setActiveTab('community');
              else if (tab === 'profile') setActiveTab('edit-profile');
              else setActiveTab(tab);
            }}
            onNewPostClick={() => setIsAddStoryOpen(true)}
          />
        </div>
      </div>

      {/* Global Modals & Sheets */}
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
