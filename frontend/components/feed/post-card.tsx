import { Heart, MessageCircle, Send, MoreHorizontal, User } from "lucide-react"

interface PostCardProps {
  authorName: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  hasImage?: boolean;
}

export default function PostCard({ authorName, timeAgo, content, likes, comments, hasImage = true }: PostCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 text-zinc-900 dark:text-white shadow-sm transition-colors duration-300">
      
      {/* Header (User Info) */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0">
            {/* जब आपके पास असली इमेजेज हों, तो यहाँ next/image का इस्तेमाल करें */}
            <User className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">{authorName}</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{timeAgo}</p>
          </div>
        </div>
        <button className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content (Text) */}
      <div className="mb-4">
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {content}
        </p>
      </div>

      {/* Media (Image Placeholder) */}
      {hasImage && (
        <div className="w-full h-48 sm:h-64 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4 flex items-center justify-center border border-zinc-200 dark:border-zinc-700/50 transition-colors duration-300">
          <span className="text-zinc-500 dark:text-zinc-400 text-sm">Post Image / Video</span>
        </div>
      )}

      {/* Actions (Like, Comment, Share) */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
        <button className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-xs font-medium">{likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">{comments}</span>
        </button>
        <button className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-green-500 dark:hover:text-green-500 transition-colors">
          <Send className="w-5 h-5" />
          <span className="text-xs font-medium">Share</span>
        </button>
      </div>
    </div>
  )
}