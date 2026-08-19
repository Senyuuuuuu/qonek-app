import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PostCard({ post, onCommentClick, onShareClick }) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes || 128);
  const [isSaved, setIsSaved] = useState(post.isSaved || false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-2xl md:rounded-3xl border border-black/5 shadow-apple-sm overflow-hidden mb-4 transition-shadow hover:shadow-apple-md"
    >
      {/* Post Header */}
      <header className="flex items-center justify-between px-4 py-3.5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-black/5 p-[1px] bg-gradient-to-tr from-crimson to-amber-500 flex-shrink-0">
            <img 
              src={post.user.avatar} 
              alt={post.user.name} 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-apple-text tracking-tight hover:underline cursor-pointer">
                {post.user.name}
              </span>
              {post.user.verified && (
                <span className="w-4 h-4 rounded-full bg-crimson text-white text-[9px] font-bold flex items-center justify-center">
                  ✓
                </span>
              )}
            </div>
            <p className="text-[12px] text-apple-subtext">
              @{post.user.handle} · {post.timestamp}
            </p>
          </div>
        </div>

        <button className="p-1.5 rounded-full text-apple-subtext hover:text-apple-text hover:bg-black/5 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </header>

      {/* Post Media - Natural Candid Photography */}
      {post.image && (
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-gray-100 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.caption || "Post photo"} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Post Content */}
      <div className="px-4 pt-3.5 pb-2">
        {post.caption && (
          <p className="text-sm text-apple-text leading-relaxed">
            <span className="font-semibold mr-1.5">{post.user.handle}</span>
            {post.caption}
          </p>
        )}
        {post.tags && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs font-medium text-crimson hover:underline cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post Actions Bar */}
      <footer className="px-4 py-3 flex items-center justify-between border-t border-black/5 mt-1">
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.8 }}
            onClick={toggleLike}
            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
              isLiked ? 'text-crimson' : 'text-apple-subtext hover:text-apple-text'
            }`}
          >
            <Heart className={`w-5 h-5 transition-transform ${isLiked ? 'fill-crimson stroke-crimson scale-110' : ''}`} />
            <span>{likesCount.toLocaleString()}</span>
          </motion.button>

          <button 
            onClick={onCommentClick}
            className="flex items-center gap-1.5 text-xs font-semibold text-apple-subtext hover:text-apple-text transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{post.commentsCount || 18}</span>
          </button>

          <button 
            onClick={onShareClick}
            className="p-1 text-apple-subtext hover:text-apple-text transition-colors"
          >
            <Send className="w-5 h-5 -rotate-12" />
          </button>
        </div>

        <motion.button 
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsSaved(!isSaved)}
          className={`p-1 transition-colors ${
            isSaved ? 'text-crimson' : 'text-apple-subtext hover:text-apple-text'
          }`}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-crimson stroke-crimson' : ''}`} />
        </motion.button>
      </footer>
    </motion.article>
  );
}
