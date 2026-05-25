"use client"

import { useState, useEffect } from "react"
import { Wifi, WifiOff } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [show, setShow] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Initial state check
    setIsOnline(navigator.onLine)
    
    // Show toast immediately if app starts offline
    if (!navigator.onLine) {
      setShow(true)
    }

    const handleOnline = () => {
      setIsOnline(true)
      setShow(true)
      setTimeout(() => setShow(false), 3000) // Hide green toast after 3 seconds
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShow(true) // Red offline toast stays until network comes back
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!show) return null

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg transition-all animate-in fade-in slide-in-from-top-4 duration-300 ${isOnline ? 'bg-green-500 shadow-[0_4px_14px_rgba(34,197,94,0.3)]' : 'bg-red-500 shadow-[0_4px_14px_rgba(239,68,68,0.3)]'}`}>
      {isOnline ? <Wifi size={16} /> : <WifiOff size={16} />}
      <span className="whitespace-nowrap">{isOnline ? t("Connected to Internet") : t("No Internet Connection")}</span>
    </div>
  )
}