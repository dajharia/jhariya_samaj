"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Home,
  Users,
  MessageCircle,
  Newspaper,
  User,
} from "lucide-react"

export default function MobileNavbar() {

  const pathname = usePathname()

  const menu = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Community",
      href: "/community",
      icon: Users,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: Newspaper,
    },
    {
      name: "Chat",
      href: "/chat",
      icon: MessageCircle,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
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
                ? "text-primary font-medium"
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
                className={`absolute inset-0 bg-primary/30 blur-md rounded-full transition-all duration-300 z-0 ${
                  active ? "opacity-100 scale-150" : "opacity-0 scale-50"
                }`} 
              />
              
              <Icon size={24} className="relative z-10" />
            </div>

            {/* Label with subtle slide up */}
            <span className={`transition-all duration-300 ${
              active ? "opacity-100 translate-y-0" : "opacity-80 translate-y-0.5"
            }`}>
              {item.name}
            </span>

            {/* Active Bottom Dot Indicator */}
            <span 
              className={`absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300 ${
                active ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />

          </Link>
        )
      })}

    </nav>
  )
}