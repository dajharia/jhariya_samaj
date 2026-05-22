"use client"

import Image from "next/image"
import Link from "next/link"
import { Bell, Search, BookOpen, Heart, Settings, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Topbar() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Hydration mismatch से बचने के लिए
  useEffect(() => setMounted(true), [])

  const isDarkMode = theme === "dark" || resolvedTheme === "dark"

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm transition-all duration-300">
      
      {/* Top section: Logo & Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/logo.webp" 
            alt="Jhariya Samaj Logo" 
            width={36} 
            height={36} 
            className="rounded-full object-cover border border-border bg-secondary"
          />
          <h1 className="text-xl font-bold text-foreground tracking-wide">
            Jhariya Samaj
          </h1>
        </Link>

        {/* Actions (Search, Notifications, Theme, Settings) */}
        <div className="flex items-center space-x-3 text-muted-foreground">
          <Link href="/search" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:text-foreground hover:bg-accent transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link href="/notifications" className="relative w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:text-foreground hover:bg-accent transition-colors">
            <Bell className="w-5 h-5" />
            {/* Unread notification dot */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border border-background transition-colors duration-300"></span>
          </Link>
          <button 
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="cursor-pointer w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:text-foreground hover:bg-accent transition-colors"
          >
            {mounted ? (isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />) : <span className="w-5 h-5" />}
          </button>
          <Link href="/settings" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:text-foreground hover:bg-accent transition-colors">
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom section: Scrollable Categories */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-muted-foreground">
        <Link href="/history" className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors whitespace-nowrap">
          <BookOpen size={16} />
          <span className="text-sm font-medium">History & Culture</span>
        </Link>
        <Link href="/matrimony" className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors whitespace-nowrap">
          <Heart size={16} />
          <span className="text-sm font-medium">Matrimony</span>
        </Link>
        <Link href="/events" className="px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors whitespace-nowrap text-sm font-medium">
          Events
        </Link>
        <Link href="/community" className="px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors whitespace-nowrap text-sm font-medium">
          Community
        </Link>
        <Link href="/blog" className="px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors whitespace-nowrap text-sm font-medium">
          News
        </Link>
      </div>

    </header>
  )
}