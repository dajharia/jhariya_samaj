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
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-zinc-950 border-t border-zinc-800 flex items-center justify-around z-50">

      {menu.map((item) => {

        const Icon = item.icon

        const active = pathname === item.href

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center text-xs gap-1 ${
              active
                ? "text-white"
                : "text-zinc-500"
            }`}
          >

            <Icon size={24} />

            <span>
              {item.name}
            </span>

          </Link>
        )
      })}

    </nav>
  )
}