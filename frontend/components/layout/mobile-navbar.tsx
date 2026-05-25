"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"

import {
  Home,
  Users,
  MessageCircle,
  Newspaper,
  User,
} from "lucide-react"

export default function MobileNavbar() {

  const pathname = usePathname()
  const { t } = useLanguage()

  const menu = [
    {
      name: t("Home"),
      href: "/",
      icon: Home,
      color: "text-blue-500",
      glow: "bg-blue-500/30",
    },
    {
      name: t("Community"),
      href: "/community",
      icon: Users,
      color: "text-green-500",
      glow: "bg-green-500/30",
    },
    {
      name: t("Blog"),
      href: "/blog",
      icon: Newspaper,
      color: "text-orange-500",
      glow: "bg-orange-500/30",
    },
    {
      name: t("Chat"),
      href: "/chat",
      icon: MessageCircle,
      color: "text-pink-500",
      glow: "bg-pink-500/30",
    },
    {
      name: t("Profile"),
      href: "/profile",
      icon: User,
      color: "text-purple-500",
      glow: "bg-purple-500/30",
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background/70 backdrop-blur-xl border-t border-border/50 flex items-center justify-around z-50 transition-all duration-300">

      {menu.map((item) => {

        const Icon = item.icon

        const active = pathname === item.href

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative flex flex-col items-center justify-center w-16 text-xs gap-1 transition-all duration-300 group ${
              active
                ? "font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >

            {/* Icon Container with Floating & Scale Effect */}
            <div
              className={`relative flex items-center justify-center transition-all duration-300 ${
                active ? "-translate-y-1 scale-110" : "translate-y-0 scale-100 group-hover:-translate-y-0.5"
              }`}
            >
              {/* Glow Effect for Active Tab */}
              <div 
                className={`absolute inset-0 blur-md rounded-full transition-all duration-300 z-0 ${item.glow} ${
                  active ? "opacity-100 scale-150" : "opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100"
                }`} 
              />
              
              <Icon size={24} className={`relative z-10 transition-colors duration-300 ${active ? item.color : `group-hover:${item.color}`}`} />
            </div>

            {/* Label with subtle slide up */}
            <span className={`transition-all duration-300 ${
              active ? `${item.color} opacity-100 translate-y-0 drop-shadow-sm` : "opacity-80 translate-y-0.5 group-hover:opacity-100"
            }`}>
              {item.name}
            </span>

            {/* Active Bottom Dot Indicator */}
            <span 
              className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full transition-all duration-300 ${item.color.replace('text-', 'bg-')} ${
                active ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />

          </Link>
        )
      })}

    </nav>
  )
}