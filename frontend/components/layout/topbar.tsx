"use client"

import Image from "next/image"
import Link from "next/link"
import { Bell, Search, BookOpen, Heart, Settings, Moon, Sun, Palette, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef, useCallback } from "react"

interface NavLink {
  href: string
  label: string
  icon?: React.ReactNode
  color: string
  colorClass: string
}

export default function Topbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)
  const settingsRef = useRef<HTMLDivElement>(null)

  // Hydration mismatch से बचने के लिए
  useEffect(() => {
    setMounted(true)
  }, [])

  // Click outside handler को optimize किया
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false)
      }
    }

    if (!isSettingsOpen) return

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside, { passive: true })

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isSettingsOpen])

  const isDarkMode = theme === "dark"

  // Navigation links को constant में रखा
  const categoryLinks: NavLink[] = [
    { href: "/history", label: "History & Culture", icon: <BookOpen size={14} />, color: "indigo", colorClass: "indigo-500" },
    { href: "/matrimony", label: "Matrimony", icon: <Heart size={14} />, color: "pink", colorClass: "pink-500" },
    { href: "/events", label: "Events", color: "orange", colorClass: "orange-500" },
    { href: "/community", label: "Community", color: "green", colorClass: "green-500" },
    { href: "/blog", label: "News", color: "blue", colorClass: "blue-500" },
  ]

  const settingsLinks: NavLink[] = [
    { href: "/settings", label: "Theme Settings", icon: <Palette size={16} />, color: "primary", colorClass: "primary" },
    { href: "/community", label: "Community", icon: <Users size={16} />, color: "green", colorClass: "green-500" },
  ]

  const handleSettingsClose = useCallback(() => {
    setIsSettingsOpen(false)
  }, [])

  const handleThemeToggle = useCallback(() => {
    setTheme(isDarkMode ? "light" : "dark")
  }, [isDarkMode, setTheme])

  const renderCategoryLink = (link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      className={`group flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary hover:bg-${link.colorClass}/10 hover:text-${link.colorClass} border border-transparent transition-all duration-300 whitespace-nowrap flex-shrink-0 text-xs sm:text-sm font-medium`}
    >
      {link.icon && <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0">{link.icon}</span>}
      <span>{link.label}</span>
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm transition-all duration-300">
      
      {/* Top section: Logo & Actions */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 gap-2">
        {/* Logo & Brand Name */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink-0"
          aria-label="Jhariya Samaj Home"
        >
          <div className="relative overflow-hidden rounded-full border border-border bg-secondary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300 w-7 h-7 sm:w-9 sm:h-9">
            <Image 
              src="/logo.webp" 
              alt="Jhariya Samaj Logo" 
              width={36} 
              height={36} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
          <h1 className="hidden sm:block text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent tracking-wide">
            Jhariya Samaj
          </h1>
        </Link>

        {/* Actions (Search, Notifications, Theme, Settings) */}
        <div className="flex items-center gap-1 sm:gap-1.5 text-muted-foreground ml-auto flex-shrink-0">
          {/* Search */}
          <Link 
            href="/search" 
            className="group w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          {/* Notifications */}
          <Link 
            href="/notifications" 
            className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 hover:shadow-[0_0_10px_rgba(245,158,11,0.2)]"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            {/* Unread notification dot */}
            {hasNotifications && (
              <span 
                className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full border border-background animate-pulse"
                aria-hidden="true"
              />
            )}
          </Link>

          {/* Theme Toggle Button */}
          <button 
            onClick={handleThemeToggle}
            className="group w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-[0_0_10px_rgba(var(--primary),0.2)]"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {mounted && isDarkMode ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
            ) : mounted ? (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 group-hover:-rotate-12 transition-transform duration-500" />
            ) : (
              <div className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          
          {/* Settings Button & Dropdown */}
          <div className="relative" ref={settingsRef}>
            <button 
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="group w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-500/10 hover:text-foreground transition-all duration-300 hover:shadow-[0_0_10px_rgba(107,114,128,0.2)]"
              aria-label="Settings"
              aria-expanded={isSettingsOpen}
              aria-haspopup="true"
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-500" />
            </button>

            {isSettingsOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-44 sm:w-48 bg-card border border-border/50 rounded-xl shadow-lg z-[100] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                role="menu"
              >
                {settingsLinks.map((link, index) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    onClick={handleSettingsClose}
                    className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-foreground hover:bg-secondary transition-colors ${
                      index > 0 ? "border-t border-border/30" : ""
                    }`}
                    role="menuitem"
                  >
                    <span className="text-primary flex-shrink-0">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom section: Scrollable Categories */}
      <nav className="flex gap-1.5 sm:gap-2 overflow-x-auto px-3 sm:px-4 pb-2.5 sm:pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-muted-foreground" aria-label="Category Navigation">
        {categoryLinks.map(renderCategoryLink)}
      </nav>

    </header>
  )
}
