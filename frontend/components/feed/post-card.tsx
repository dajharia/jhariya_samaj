"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"

interface PostCardProps {
  authorName: string
  timeAgo: string
  content: string
  likes: number
  comments: number
  hasImage: boolean
}

export default function PostCard({
  authorName,
  timeAgo,
  content,
  likes,
  comments,
  hasImage,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLike = () => {
    const newState = !isLiked
    setIsLiked(newState)
    setLikeCount(newState ? likeCount + 1 : likeCount - 1)
    
    // ट्रिगर एनीमेशन इफ़ेक्ट
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-4 shadow-sm transition-all hover:shadow-md">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden shrink-0 border border-border/50">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${authorName.replace(' ', '')}`} alt={authorName} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">{authorName}</h3>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <button className="text-muted-foreground hover:bg-secondary p-1.5 rounded-full transition-colors active:scale-90">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm text-foreground mb-3 leading-relaxed">{content}</p>

      {/* Image Placeholder */}
      {hasImage && (
        <div className="w-full h-48 sm:h-64 bg-secondary rounded-xl mb-3 overflow-hidden border border-border/50">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" alt="Post content" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Interaction Buttons (Like, Comment, Share) */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
        
        {/* Like Button with Animation */}
        <button onClick={handleLike} className={`group flex items-center gap-1.5 text-sm transition-colors ${isLiked ? 'text-pink-500' : 'text-muted-foreground hover:text-pink-500'}`}>
          <div className={`relative p-2 rounded-full transition-transform active:scale-75 ${isLiked ? 'bg-pink-500/10' : 'group-hover:bg-pink-500/10'}`}>
            <Heart size={18} className={`transition-all duration-300 ${isLiked ? 'fill-pink-500 scale-110' : 'scale-100'}`} />
            {isAnimating && isLiked && (
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="absolute w-full h-full border-2 border-pink-400 rounded-full animate-ping opacity-75"></span>
              </span>
            )}
          </div>
          <span className="font-medium min-w-[2ch]">{likeCount}</span>
        </button>

        {/* Comment Button */}
        <button className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-blue-500 transition-colors ml-2">
          <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-transform active:scale-75">
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-medium">{comments}</span>
        </button>

        {/* Share Button */}
        <button className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-green-500 transition-colors ml-auto">
          <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-transform active:scale-75">
            <Share2 size={18} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
        </button>

      </div>
    </div>
  )
}