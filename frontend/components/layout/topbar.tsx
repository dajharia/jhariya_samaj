"use client"

import Link from "next/link"

import {
  Bell,
  Search,
  BookOpen,
  Heart,
} from "lucide-react"

export default function Topbar() {

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">

      {/* Main Topbar */}

      <div className="h-16 px-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-2"
        >

          <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold">

            JS

          </div>

          <div>

            <h1 className="text-lg font-bold leading-none">
              Jhariya
            </h1>

            <p className="text-xs text-zinc-400">
              Samaj
            </p>

          </div>

        </Link>

        {/* Right Actions */}

        <div className="flex items-center gap-2">

          {/* Notifications */}

          <Link
            href="/notifications"
            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center relative"
          >

            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />

          </Link>

          {/* Search */}

          <Link
            href="/search"
            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center"
          >

            <Search size={20} />

          </Link>

          {/* Avatar */}

          <Link
            href="/profile"
            className="w-10 h-10 rounded-full bg-zinc-700 border border-zinc-600"
          />

        </div>

      </div>

      {/* Secondary Navigation */}

      <div className="flex gap-3 overflow-x-auto px-4 pb-3">

        {/* History */}

        <Link
          href="/history"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 whitespace-nowrap"
        >

          <BookOpen size={16} />

          <span className="text-sm">
            History & Culture
          </span>

        </Link>

        {/* Matrimony */}

        <Link
          href="/matrimony"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 whitespace-nowrap"
        >

          <Heart size={16} />

          <span className="text-sm">
            Matrimony
          </span>

        </Link>

        {/* Events */}

        <Link
          href="/community"
          className="px-4 py-2 rounded-full bg-zinc-900 whitespace-nowrap text-sm"
        >

          Events

        </Link>

        {/* Community */}

        <Link
          href="/community"
          className="px-4 py-2 rounded-full bg-zinc-900 whitespace-nowrap text-sm"
        >

          Community

        </Link>

        {/* News */}

        <Link
          href="/blog"
          className="px-4 py-2 rounded-full bg-zinc-900 whitespace-nowrap text-sm"
        >

          News

        </Link>

      </div>

    </header>
  )
}