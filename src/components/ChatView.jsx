import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Send, CheckCheck, Smile, X, Mic, Play, Pause, Grid, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaAttachmentDrawer from './MediaAttachmentDrawer';

export default function ChatView({ selectedChatId, onSelectChat, onBackToList, onStartCall }) {
  const [subTab, setSubTab] = useState('chats'); // 'chats' | 'group' | 'archive'
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isMediaDrawerOpen, setIsMediaDrawerOpen] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  // Extended Chat conversations matching all screenshots
  const [conversations, setConversations] = useState([
    {
      id: 'anike-vaccaro',
      name: 'Anike Vaccaro',
      handle: '@anikevaccaro',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Good, how’ve you been?',
      time: '5:23 PM',
      unread: 0,
      online: true,
      messages: [
        { id: 1, text: 'Hey, how’s it going?', time: '5:21 PM', isSent: true, status: 'read' },
        { id: 2, text: 'Good, how’ve you been?', time: '5:21 PM', isSent: false },
        { 
          id: 3, 
          type: 'media_photo',
          image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85&fit=crop',
          caption: 'Things have been slow with this lockdown...',
          time: '5:23 PM',
          isSent: true,
          status: 'read'
        },
        { id: 4, text: 'Good, how’ve you been?', time: '5:23 PM', isSent: false },
        { 
          id: 5, 
          type: 'voice_note',
          duration: '0:34',
          time: '5:23 PM',
          isSent: true,
          status: 'read'
        },
        { id: 6, text: 'Oh you matched with her? she’s a great Childhood friend of mine.', time: '5:25 PM', isSent: false },
        {
          id: 7,
          type: 'video',
          preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85&fit=crop',
          duration: '1:12',
          time: '5:26 PM',
          isSent: true,
          status: 'read'
        }
      ]
    },
    {
      id: 'rayna-manggo',
      name: 'Rayna manggo',
      handle: '@raynamanggo',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Typing....',
      isTyping: true,
      time: '11:34',
      unread: 0,
      online: true,
      messages: [
        { id: 1, text: 'Hey there!', time: '11:30 AM', isSent: false },
      ]
    },
    {
      id: 'james-vetrovs',
      name: 'James Vetrovs',
      handle: '@jamesv',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Typing....',
      isTyping: true,
      time: '11:34',
      unread: 0,
      online: true,
      messages: []
    },
    {
      id: 'craig-levin',
      name: 'Craig Levin',
      handle: '@craigl',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'See you soon',
      time: '11:34',
      unread: 4,
      online: true,
      messages: []
    },
    {
      id: 'hanna-schleifer',
      name: 'Hanna Schleifer',
      handle: '@hannas',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Nice to see you',
      time: '11:34',
      unread: 4,
      online: true,
      messages: []
    },
    {
      id: 'meyvis-notir',
      name: 'Meyvis Notir',
      handle: '@meyvis',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Okay',
      time: '11:34',
      unread: 4,
      online: true,
      messages: []
    },
    {
      id: 'jacky-notir',
      name: 'Jacky Notir',
      handle: '@jackyn',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'See ya !',
      time: '11:34',
      unread: 4,
      online: false,
      messages: []
    },
    {
      id: 'bruk-melton',
      name: 'Bruk Melton',
      handle: '@brukm',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'What time?',
      time: '11:34',
      unread: 0,
      online: false,
      messages: []
    },
    {
      id: 'nevats-menala',
      name: 'Nevats Menala',
      handle: '@nevats',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Where ya?',
      time: '11:34',
      unread: 2,
      online: true,
      messages: []
    }
  ]);

  const activeChat = conversations.find(c => c.id === selectedChatId) || (selectedChatId ? conversations[0] : null);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!messageInput.trim() || !activeChat) return;

    const newMsg = {
      id: Date.now(),
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
      status: 'sent'
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeChat.id) {
        return {
          ...c,
          lastMessage: newMsg.text,
          time: 'Just now',
          messages: [...(c.messages || []), newMsg]
        };
      }
      return c;
    }));

    setMessageInput('');
  };

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full flex bg-apple-bg overflow-hidden">
      {/* Master Chat List */}
      <div className={`w-full lg:w-80 xl:w-96 flex flex-col bg-white border-r border-black/5 ${
        activeChat ? 'hidden lg:flex' : 'flex'
      }`}>
        {/* Top Header */}
        <div className="p-4 bg-white border-b border-black/5 flex items-center justify-between">
          <h1 className="font-extrabold text-xl text-crimson tracking-tight">Qonek</h1>
          <div className="flex items-center gap-1.5 text-crimson">
            <button className="p-1.5 rounded-full hover:bg-black/5"><Search className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="p-3 bg-white border-b border-black/5">
          <div className="flex items-center bg-pink-50/80 p-1 rounded-full border border-pink-100/60">
            {['chats', 'group', 'archived'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSubTab(tab)}
                className={`flex-1 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                  subTab === tab
                    ? 'bg-crimson text-white shadow-crimson-glow/30'
                    : 'text-apple-subtext hover:text-apple-text'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chat List Items */}
        <div className="flex-1 overflow-y-auto divide-y divide-black/5">
          {filteredConversations.map((chat) => {
            const isSelected = activeChat?.id === chat.id;

            return (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-3.5 text-left transition-colors cursor-pointer ${
                  isSelected ? 'bg-crimson-50/70 border-l-4 border-crimson' : 'hover:bg-gray-50'
                }`}
              >
                {/* Avatar with Online/Offline Indicator */}
                <div className="relative w-12 h-12 rounded-full flex-shrink-0">
                  <img 
                    src={chat.avatar} 
                    alt={chat.name} 
                    className="w-full h-full rounded-full object-cover border border-black/5"
                  />
                  <span className={`absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                    chat.online ? 'bg-emerald-500' : 'bg-gray-400'
                  }`} />
                </div>

                {/* Info Snippet */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-sm font-bold text-apple-text truncate">
                      {chat.name}
                    </h3>
                    <span className="text-[11px] text-apple-subtext font-medium flex-shrink-0">
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs truncate pr-2 ${
                      chat.isTyping ? 'text-crimson font-semibold italic' : 'text-apple-subtext'
                    }`}>
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-crimson text-white text-[10px] font-bold shadow-crimson-glow/30">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Conversation Detail View */}
      <div className={`flex-1 flex flex-col bg-apple-bg ${
        !activeChat ? 'hidden lg:flex items-center justify-center' : 'flex'
      }`}>
        {activeChat ? (
          <>
            {/* Red Crimson Top Header (Matches Screenshot 3 & 4) */}
            <div className="h-16 px-4 bg-crimson text-white flex items-center justify-between sticky top-0 z-20 shadow-apple-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={onBackToList}
                  className="lg:hidden p-1.5 -ml-1 text-white font-bold text-xl hover:bg-white/10 rounded-full"
                >
                  ‹
                </button>
                <div className="relative w-10 h-10 rounded-full flex-shrink-0 border-2 border-white/40">
                  <img 
                    src={activeChat.avatar} 
                    alt={activeChat.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                  {activeChat.online && (
                    <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-crimson" />
                  )}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">{activeChat.name}</h2>
                  <p className="text-[11px] text-emerald-300 font-medium">
                    {activeChat.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>

              {/* Call & More Buttons */}
              <div className="flex items-center gap-1.5 text-white">
                <button 
                  onClick={() => onStartCall?.({ name: activeChat.name, isVideo: false })}
                  className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-white" />
                </button>
                <button 
                  onClick={() => onStartCall?.({ name: activeChat.name, isVideo: true })}
                  className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Video className="w-4 h-4 fill-white" />
                </button>
                <button className="w-9 h-9 rounded-xl hover:bg-white/15 flex items-center justify-center transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Thread Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-white">
              {/* Date Header Pill */}
              <div className="text-center my-1">
                <span className="px-4 py-1 rounded-full bg-gray-200 text-[11px] text-apple-subtext font-bold">
                  Today
                </span>
              </div>

              {(activeChat.messages || []).map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${msg.isSent ? 'items-end' : 'items-start'}`}
                >
                  {/* Photo Media Bubble (Matches Screenshot 3) */}
                  {msg.type === 'media_photo' ? (
                    <div className="max-w-[85%] sm:max-w-md bg-crimson rounded-3xl p-2.5 text-white shadow-apple-md">
                      <div className="rounded-2xl overflow-hidden mb-2 bg-black/10 aspect-[4/3]">
                        <img src={msg.image} alt="Post" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-xs font-medium px-2 py-1 leading-snug">{msg.caption}</p>
                    </div>
                  ) : msg.type === 'voice_note' ? (
                    /* Voice Note Waveform Player (Matches Screenshot 4) */
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-crimson text-white shadow-apple-sm max-w-[85%]">
                      <button
                        onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                        className="w-8 h-8 rounded-full bg-white text-crimson flex items-center justify-center flex-shrink-0 cursor-pointer"
                      >
                        {isPlayingVoice ? <Pause className="w-4 h-4 fill-crimson" /> : <Play className="w-4 h-4 fill-crimson ml-0.5" />}
                      </button>
                      
                      {/* Animated Sound Waveform Bars */}
                      <div className="flex items-center gap-1 h-6">
                        {[40, 70, 90, 60, 100, 45, 80, 55, 95, 35, 75, 50, 85].map((height, i) => (
                          <div
                            key={i}
                            className={`w-1 rounded-full transition-all duration-200 ${
                              isPlayingVoice ? 'bg-white animate-pulse' : 'bg-white/70'
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>

                      <span className="text-[11px] font-bold ml-1">{msg.duration}</span>
                    </div>
                  ) : msg.type === 'video' ? (
                    /* Video Preview Player (Matches Screenshot 4) */
                    <div className="max-w-[85%] sm:max-w-md bg-crimson rounded-3xl p-2 text-white shadow-apple-md">
                      <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center">
                        <img src={msg.preview} alt="Video" className="w-full h-full object-cover opacity-80" />
                        <button className="absolute w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center shadow-crimson-glow hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Standard Message Bubble */
                    <div className={`max-w-[80%] sm:max-w-md px-4 py-2.5 rounded-2xl text-sm font-semibold shadow-apple-sm ${
                      msg.isSent 
                        ? 'bg-crimson text-white rounded-br-xs' 
                        : 'bg-gray-100 text-apple-text rounded-bl-xs'
                    }`}>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-1 mt-1 px-1">
                    <span className="text-[10px] text-apple-subtext font-medium">{msg.time}</span>
                    {msg.isSent && (
                      <CheckCheck className="w-3 h-3 text-crimson stroke-[2.5]" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Media Attachment Drawer (Collapsible) */}
            <MediaAttachmentDrawer 
              isOpen={isMediaDrawerOpen} 
              onSelectAttachment={() => setIsMediaDrawerOpen(false)}
            />

            {/* Input Composer Dock (Matches Screenshots 3 & 4) */}
            <form 
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-black/5 flex items-center gap-2 sticky bottom-0 z-20"
            >
              <button 
                type="button"
                onClick={() => setIsMediaDrawerOpen(!isMediaDrawerOpen)}
                className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-colors cursor-pointer ${
                  isMediaDrawerOpen ? 'bg-crimson text-white border-crimson' : 'bg-gray-100 text-apple-text border-black/5 hover:bg-gray-200'
                }`}
                title="Attach Media"
              >
                {isMediaDrawerOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Grid className="w-5 h-5" />}
              </button>

              <div className="flex-1 relative flex items-center">
                <button 
                  type="button"
                  className="absolute left-3 text-crimson hover:scale-110 transition-transform"
                >
                  <Smile className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full py-2.5 pl-10 pr-4 rounded-2xl bg-gray-100 text-sm font-semibold text-apple-text placeholder-apple-subtext border-none focus:outline-none focus:ring-2 focus:ring-crimson/20"
                />
              </div>

              {messageInput.trim() ? (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="w-10 h-10 rounded-2xl bg-crimson text-white flex items-center justify-center shadow-crimson-glow cursor-pointer"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </motion.button>
              ) : (
                <button
                  type="button"
                  className="w-10 h-10 rounded-2xl bg-gray-100 text-crimson flex items-center justify-center hover:bg-crimson/10 transition-colors"
                >
                  <Mic className="w-5 h-5" />
                </button>
              )}
            </form>
          </>
        ) : (
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-crimson-50 text-crimson flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg text-apple-text mb-1">Select a Conversation</h3>
            <p className="text-xs text-apple-subtext max-w-xs mx-auto">
              Choose from your active messages or search for friends to start chatting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
