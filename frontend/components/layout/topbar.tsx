"use client"

import Image from "next/image"
import Link from "next/link"
import { Bell, BookOpen, Heart, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import NetworkStatus from "./network-status"
import PwaInstaller from "./pwa-installer"

interface NavLink {
  href: string
  label: string
  icon?: React.ReactNode
  hoverBg: string
  hoverText: string
}

// common mobile-friendly button base
const actionBtnBase =
  "inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary " +
  "text-muted-foreground transition-all duration-300 cursor-pointer select-none";

export default function Topbar() {
  const [mounted, setMounted] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)
  const { t } = useLanguage()

  // Hydration mismatch से बचने के लिए
  useEffect(() => {
    setMounted(true)
  }, [])

  // Navigation links
  const categoryLinks: NavLink[] = [
    { href: "/history", label: t("History & Culture"), icon: <BookOpen size={14} />, hoverBg: "hover:bg-indigo-500/10", hoverText: "hover:text-indigo-500" },
    { href: "/matrimony", label: t("Matrimony"), icon: <Heart size={14} />, hoverBg: "hover:bg-pink-500/10", hoverText: "hover:text-pink-500" },
    { href: "/events", label: t("Events"), hoverBg: "hover:bg-orange-500/10", hoverText: "hover:text-orange-500" },
    { href: "/community", label: t("Community"), hoverBg: "hover:bg-green-500/10", hoverText: "hover:text-green-500" },
    { href: "/blog", label: t("News"), hoverBg: "hover:bg-blue-500/10", hoverText: "hover:text-blue-500" },
    { href: "/settings", label: t("Theme Settings"), icon: <Settings size={14} />, hoverBg: "hover:bg-gray-500/10", hoverText: "hover:text-foreground" },
  ]

  const renderCategoryLink = (link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      className={
        "group flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary " +
        "border border-transparent transition-all duration-300 whitespace-nowrap " +
        "flex-shrink-0 text-xs sm:text-sm font-medium " +
        link.hoverBg + " " + link.hoverText
      }
    >
      {link.icon && (
        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0">
          {link.icon}
        </span>
      )}
      <span>{link.label}</span>
    </Link>
  )

  return (
    <header
      className="sticky top-0 z-50 w-full max-w-[100vw] bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm transition-all duration-300"
    >
      <PwaInstaller />
      <NetworkStatus />

      {/* Top section: Logo & Actions */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2.5 sm:py-3 gap-1">
        {/* Logo & Brand Name */}
        <Link
          href="/"
          className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1 mr-1"
          aria-label="Jhariya Samaj Home"
        >
          <div className="relative overflow-hidden rounded-full border border-border bg-secondary shrink-0 w-8 h-8 sm:w-9 sm:h-9">
            <Image
              src="/logo.webp"
              alt="Jhariya Samaj Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1
            suppressHydrationWarning
            className="text-[15px] sm:text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent tracking-wide truncate"
          >
            {t("Jhariya Samaj")}
          </h1>
        </Link>

        {/* Actions (Notifications) */}
        <div className="flex items-center text-muted-foreground shrink-0 ml-auto relative z-[9999] pr-2 sm:pr-4">
          {/* Bell Icon -> Navigates to Notifications */}
          <Link
            href="/notifications"
            className={
              actionBtnBase +
              " sm:hover:bg-amber-500/10 sm:hover:text-amber-500 sm:hover:shadow-[0_0_10px_rgba(245,158,11,0.2)] relative"
            }
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 pointer-events-none" />
            {hasNotifications && (
              <span
                className="absolute top-1 right-1 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full border border-background animate-pulse pointer-events-none"
                aria-hidden="true"
              />
            )}
          </Link>
        </div>
      </div>

      {/* Bottom section: Scrollable Categories */}
      <nav
        className="flex gap-1.5 sm:gap-2 overflow-x-auto px-3 sm:px-4 pb-2.5 sm:pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-muted-foreground"
        aria-label="Category Navigation"
      >
        {categoryLinks.map(renderCategoryLink)}
      </nav>
    </header>
  )
}