"use client"

import { Search, MoreVertical, Edit } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ChatPage() {
  const { t } = useLanguage()
  // Dummy Chat Data (Added isOnline property)
  const chatList = [
    {
      id: 1,
      name: "राहुल झारिया",
      message: "भाई, कल की मीटिंग का क्या समय है?",
      time: "10:45 AM",
      unread: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
      isOnline: true,
    },
    {
      id: 2,
      name: "समाज ग्रुप (Community)",
      message: "सुनील: कृपया सभी लोग समय पर आएं।",
      time: "कल",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fit=crop&w=100&h=100",
      isOnline: false,
    },
    {
      id: 3,
      name: "अमित कुमार",
      message: "ठीक है, मैं पहुँच जाऊंगा।",
      time: "मंगलवार",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
      isOnline: true,
    },
    {
      id: 4,
      name: "नेहा झारिया",
      message: "क्या आप मुझे वो तस्वीरें भेज सकते हैं?",
      time: "सोमवार",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100",
      isOnline: false,
    },
    {
      id: 5,
      name: "विशाल",
      message: "धन्यवाद!",
      time: "रविवार",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100",
      isOnline: true,
    }
  ]

  return (
    <div className="flex flex-col w-full h-full min-h-[calc(100vh-80px)] bg-background animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 sm:py-4 bg-card border-b border-border/50 shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t("Chats")}</h1>
        <div className="flex items-center gap-2 sm:gap-4 text-muted-foreground">
          <button className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary">
            <Search size={20} />
          </button>
          <button className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Chat List Section */}
      <div className="flex-1 overflow-y-auto pb-24 sm:pb-8">
        {chatList.map((chat, index) => (
          <div 
            key={chat.id}
            className={`group flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer transition-colors active:bg-secondary ${
              index !== chatList.length - 1 ? 'border-b border-border/30' : ''
            }`}
          >
            {/* Avatar with Online Indicator */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-secondary border border-border/50">
                <img 
                  src={chat.avatar} 
                  alt={chat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Online Green Dot */}
              {chat.isOnline && (
                <span className="absolute bottom-0 right-0 sm:bottom-0.5 sm:right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full shadow-sm z-10"></span>
              )}
            </div>

            {/* Chat Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-1">
                <h2 className="font-semibold text-foreground text-sm sm:text-base truncate">
                  {chat.name}
                </h2>
                <span className={`text-xs whitespace-nowrap ml-2 ${chat.unread > 0 ? 'text-green-500 font-medium' : 'text-muted-foreground'}`}>
                  {chat.time}
                </span>
              </div>
              
              <div className="flex justify-between items-center gap-2">
                <p className="text-xs sm:text-sm text-muted-foreground truncate line-clamp-1">
                  {chat.message}
                </p>
                {chat.unread > 0 && (
                  <span className="shrink-0 bg-green-500 text-white text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full shadow-sm">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button (New Chat) */}
      <button 
        className="fixed bottom-24 sm:bottom-10 right-4 sm:right-8 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-[0_4px_14px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 z-20"
        aria-label="New Chat"
      >
        <Edit size={24} />
      </button>
      
    </div>
  )
}