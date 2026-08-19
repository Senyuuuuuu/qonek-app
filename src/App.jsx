import React, { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import SidebarNav from './components/SidebarNav';
import StoryCircle from './components/StoryCircle';
import PostCard from './components/PostCard';
import ChatView from './components/ChatView';
import SettingsView from './components/SettingsView';
import EarlyAccessModal from './components/EarlyAccessModal';
import { Sparkles, TrendingUp, Users, Search } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('chats'); // 'chats' | 'feed' | 'camera' | 'community' | 'profile'
  const [selectedChatId, setSelectedChatId] = useState('qonek-mega');
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  // Mock Stories Data
  const stories = [
    { id: 'u1', name: 'sarah_j', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u2', name: 'mike.d', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u3', name: 'alex.p', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80&fit=crop&crop=face', hasUnseen: true },
    { id: 'u4', name: 'chloe.s', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&fit=crop&crop=face', hasUnseen: false },
    { id: 'u5', name: 'jake.r', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80&fit=crop&crop=face', hasUnseen: false },
  ];

  // Natural Candid Photography Feed
  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Jensen',
        handle: 'sarah_j',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&crop=face',
        verified: true
      },
      timestamp: '2m ago',
      caption: 'Afternoon bliss in Paris ☀️ The natural sunlight hitting the café was too good to pass up.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85&fit=crop',
      likes: 3120,
      isLiked: true,
      commentsCount: 412,
      tags: ['paris', 'sunlight', 'candid']
    },
    {
      id: 2,
      user: {
        name: 'Mike Dalton',
        handle: 'mike.adventures',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face',
        verified: false
      },
      timestamp: '1h ago',
      caption: 'Summit achieved after a 5am start! Worth every single step of the climb. 🏔️',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=85&fit=crop',
      likes: 892,
      isLiked: false,
      commentsCount: 67,
      tags: ['mountains', 'hiking', 'nature']
    }
  ];

  return (
    <div className="min-h-screen bg-apple-bg flex flex-col lg:flex-row text-apple-text">
      {/* Desktop Left Sidebar */}
      <SidebarNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onNewPostClick={() => setIsEarlyAccessOpen(true)}
        onEarlyAccessClick={() => setIsEarlyAccessOpen(true)}
      />

      {/* Main Responsive Canvas */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile & Tablet Sticky TopBar */}
        <div className="lg:hidden">
          <TopBar 
            onEarlyAccessClick={() => setIsEarlyAccessOpen(true)}
            onSearchClick={() => setActiveTab('chats')}
          />
        </div>

        {/* Dynamic Content Views */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chats View */}
          {activeTab === 'chats' && (
            <div className="w-full h-full">
              <ChatView
                selectedChatId={selectedChatId}
                onSelectChat={(id) => setSelectedChatId(id)}
                onBackToList={() => setSelectedChatId(null)}
              />
            </div>
          )}

          {/* Social Feed View (Mobile/Tablet or Desktop Dual Pane) */}
          {(activeTab === 'feed' || activeTab === 'camera' || activeTab === 'community') && (
            <div className="flex-1 flex overflow-hidden">
              {/* Center Feed Stream (max-w-2xl on desktop) */}
              <main className="flex-1 max-w-2xl mx-auto overflow-y-auto p-3 sm:p-4 pb-24 lg:pb-8 no-scrollbar">
                {/* Horizontal Story Strip */}
                <section className="bg-white rounded-2xl md:rounded-3xl p-3.5 mb-4 border border-black/5 shadow-apple-sm">
                  <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                    <StoryCircle isUser={true} onClick={() => setIsEarlyAccessOpen(true)} />
                    {stories.map((story) => (
                      <StoryCircle 
                        key={story.id} 
                        {...story} 
                        onClick={() => setSelectedChatId(story.name === 'sarah_j' ? 'sarah-jensen' : 'jam-aracan')}
                      />
                    ))}
                  </div>
                </section>

                {/* Posts Stream */}
                <section className="space-y-4">
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

              {/* Desktop Sticky Right-hand Panel (Trending & Instant Messaging) */}
              <aside className="hidden xl:flex flex-col w-80 2xl:w-96 border-l border-black/5 bg-white p-4 overflow-y-auto flex-shrink-0">
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-apple-subtext mb-3">
                    Suggested Creators
                  </h3>
                  <div className="space-y-3">
                    {stories.slice(0, 3).map((u) => (
                      <div key={u.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover" />
                          <div>
                            <p className="text-xs font-bold text-apple-text">{u.name}</p>
                            <p className="text-[11px] text-apple-subtext">Popular in Photography</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setIsEarlyAccessOpen(true)}
                          className="px-3 py-1 rounded-full border border-crimson text-crimson text-xs font-bold hover:bg-crimson hover:text-white transition-colors"
                        >
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini Chat Widget on Desktop */}
                <div className="pt-4 border-t border-black/5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-apple-subtext">
                      Recent Chats
                    </h3>
                    <button 
                      onClick={() => setActiveTab('chats')}
                      className="text-xs font-semibold text-crimson hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setActiveTab('chats');
                        setSelectedChatId('qonek-mega');
                      }}
                      className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-apple-bg text-left transition-colors cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-full bg-crimson flex items-center justify-center text-white text-xs font-bold">
                        Q
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-apple-text">Qonek Mega</p>
                        <p className="text-[11px] text-apple-subtext truncate">Okay bro</p>
                      </div>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {/* Profile / Settings View */}
          {activeTab === 'profile' && (
            <div className="w-full h-full">
              <SettingsView onBack={() => setActiveTab('chats')} />
            </div>
          )}
        </div>

        {/* Mobile & Tablet Floating Bottom Navigation Bar */}
        <div className="lg:hidden">
          <BottomNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onNewPostClick={() => setIsEarlyAccessOpen(true)}
          />
        </div>
      </div>

      {/* Early Access Portal Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}
