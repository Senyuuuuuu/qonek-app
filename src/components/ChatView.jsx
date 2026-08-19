import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Send, CheckCheck, Smile, Image as ImageIcon, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChatView({ selectedChatId, onSelectChat, onBackToList }) {
  const [subTab, setSubTab] = useState('chats'); // 'chats' | 'group' | 'archive'
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  
  // Real conversation dataset matching user's screenshots
  const [conversations, setConversations] = useState([
    {
      id: 'qonek-mega',
      name: 'Qonek Mega',
      handle: '@qonekmega',
      avatar: null, // SVG logo avatar
      isAppOfficial: true,
      lastMessage: 'Okay bro',
      time: 'Just now',
      unread: 0,
      online: true,
      messages: [
        { id: 1, text: 'Hello', time: '09:32 AM', isSent: false },
        { id: 2, text: 'yes', time: '09:32 AM', isSent: true, status: 'read' },
        { id: 3, text: 'Hello bro', time: '03:09 PM', isSent: false },
        { id: 4, text: 'Great shopify', time: '07:36 AM', isSent: true, status: 'read' },
        { id: 5, text: 'Hi', time: '10:39 AM', isSent: true, status: 'read' },
        { id: 6, text: 'Yes bro', time: '10:40 AM', isSent: false },
        { id: 7, text: 'Testing the app bro from QChat', time: '10:41 AM', isSent: true, status: 'read' },
        { id: 8, text: 'IOS', time: '10:41 AM', isSent: true, status: 'read' },
        { id: 9, text: 'Okay bro', time: '10:41 AM', isSent: false },
      ]
    },
    {
      id: 'jam-aracan',
      name: 'Jam Aracan',
      handle: '@jamaracan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Last Message',
      time: '14 D',
      unread: 1,
      online: false,
      messages: [
        { id: 1, text: 'Hey, are the designs finalized for QChat?', time: '02:15 PM', isSent: false },
        { id: 2, text: 'Yes! All Apple HIG guidelines and Framer motion physics are implemented.', time: '02:20 PM', isSent: true, status: 'read' },
        { id: 3, text: 'Check out the responsive demo across iPhone, iPad, and MacBook.', time: '02:21 PM', isSent: true, status: 'read' },
        { id: 4, text: 'Last Message', time: '04:10 PM', isSent: false },
      ]
    },
    {
      id: 'sarah-jensen',
      name: 'Sarah Jensen',
      handle: '@sarah_j',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&crop=face',
      isAppOfficial: false,
      lastMessage: 'Afternoon bliss in Paris ☀️',
      time: '2m',
      unread: 3,
      online: true,
      messages: [
        { id: 1, text: 'Hey Mahmudul! Did you see my story?', time: '11:00 AM', isSent: false },
        { id: 2, text: 'Afternoon bliss in Paris ☀️', time: '11:02 AM', isSent: false },
      ]
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
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));

    setMessageInput('');

    // Simulated auto-reply
    setTimeout(() => {
      setConversations(prev => prev.map(c => {
        if (c.id === activeChat.id) {
          return {
            ...c,
            messages: [
              ...c.messages,
              {
                id: Date.now() + 1,
                text: 'Got your message on QChat! Fast response test ✅',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isSent: false
              }
            ]
          };
        }
        return c;
      }));
    }, 1200);
  };

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full flex bg-apple-bg overflow-hidden">
      {/* Conversation Master List */}
      <div className={`w-full lg:w-80 xl:w-96 flex flex-col bg-white border-r border-black/5 ${
        activeChat ? 'hidden lg:flex' : 'flex'
      }`}>
        {/* Sub Navigation Tabs */}
        <div className="p-3 bg-white border-b border-black/5">
          <div className="flex items-center bg-gray-100 p-1 rounded-full">
            {['chats', 'group', 'archive'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSubTab(tab)}
                className={`flex-1 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                  subTab === tab
                    ? 'bg-crimson text-white shadow-apple-sm'
                    : 'text-apple-subtext hover:text-apple-text'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2.5 bg-white border-b border-black/5">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-apple-subtext absolute left-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chats or users..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-100/90 text-sm text-apple-text placeholder-apple-subtext border-none focus:outline-none focus:ring-2 focus:ring-crimson/20 transition-all"
            />
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
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full flex-shrink-0">
                  {chat.isAppOfficial ? (
                    <div className="w-full h-full rounded-full bg-crimson flex items-center justify-center shadow-crimson-glow/30">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 44 44" fill="none">
                        <circle cx="15" cy="22" r="3" fill="currentColor"/>
                        <circle cx="22" cy="22" r="3" fill="currentColor"/>
                        <circle cx="29" cy="22" r="3" fill="currentColor"/>
                        <path d="M8 10 Q22 6 36 10 Q40 22 36 34 L28 38 L22 34 Q8 38 8 22 Z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                      </svg>
                    </div>
                  ) : (
                    <img 
                      src={chat.avatar} 
                      alt={chat.name} 
                      className="w-full h-full rounded-full object-cover border border-black/5"
                    />
                  )}
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                  )}
                </div>

                {/* Conversation Snippet */}
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
                    <p className="text-xs text-apple-subtext truncate pr-2">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-crimson text-white text-[10px] font-bold">
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
            {/* Chat Detail Header */}
            <div className="h-16 px-4 bg-white/90 backdrop-blur-xl border-b border-black/5 flex items-center justify-between sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={onBackToList}
                  className="lg:hidden p-1.5 -ml-1 text-crimson font-bold text-lg hover:bg-black/5 rounded-full"
                >
                  ‹
                </button>
                <div className="relative w-10 h-10 rounded-full flex-shrink-0">
                  {activeChat.isAppOfficial ? (
                    <div className="w-full h-full rounded-full bg-crimson flex items-center justify-center shadow-crimson-glow/30">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 44 44" fill="none">
                        <circle cx="15" cy="22" r="3" fill="currentColor"/>
                        <circle cx="22" cy="22" r="3" fill="currentColor"/>
                        <circle cx="29" cy="22" r="3" fill="currentColor"/>
                      </svg>
                    </div>
                  ) : (
                    <img 
                      src={activeChat.avatar} 
                      alt={activeChat.name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  )}
                  {activeChat.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-apple-text">{activeChat.name}</h2>
                  <p className="text-[11px] text-emerald-600 font-medium">
                    {activeChat.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>

              {/* Call & More Buttons */}
              <div className="flex items-center gap-1.5 text-crimson">
                <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-black/5 transition-colors text-apple-subtext">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Thread Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="text-center my-2">
                <span className="px-3 py-1 rounded-full bg-black/5 text-[11px] text-apple-subtext font-medium">
                  Encrypted Direct Message
                </span>
              </div>

              {activeChat.messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${msg.isSent ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[78%] sm:max-w-md px-4 py-2.5 rounded-2xl text-sm font-medium shadow-apple-sm ${
                    msg.isSent 
                      ? 'bg-crimson text-white rounded-br-xs' 
                      : 'bg-white text-apple-text rounded-bl-xs border border-black/5'
                  }`}>
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 px-1">
                    <span className="text-[10px] text-apple-subtext font-medium">{msg.time}</span>
                    {msg.isSent && (
                      <CheckCheck className="w-3 h-3 text-crimson stroke-[2.5]" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Composer Bar */}
            <form 
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-black/5 flex items-center gap-2 sticky bottom-0 z-20"
            >
              <button 
                type="button"
                className="p-2 rounded-full text-apple-subtext hover:text-crimson hover:bg-black/5 transition-colors"
              >
                <Smile className="w-5 h-5" />
              </button>
              <button 
                type="button"
                className="p-2 rounded-full text-apple-subtext hover:text-crimson hover:bg-black/5 transition-colors"
              >
                <ImageIcon className="w-5 h-5" />
              </button>

              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Write your message..."
                className="flex-1 py-2 px-4 rounded-full bg-apple-bg text-sm text-apple-text placeholder-apple-subtext border-none focus:outline-none focus:ring-2 focus:ring-crimson/20"
              />

              {messageInput.trim() ? (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="w-10 h-10 rounded-full bg-crimson text-white flex items-center justify-center shadow-crimson-glow/40 cursor-pointer"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </motion.button>
              ) : (
                <button
                  type="button"
                  className="p-2 rounded-full text-apple-subtext hover:text-crimson hover:bg-black/5 transition-colors"
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
