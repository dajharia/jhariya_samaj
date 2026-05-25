"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { Sun, Moon, Monitor, Waves, Droplet, Flame, Leaf, Crown, MoonStar, Palette, CheckCircle2, Globe, ArrowLeft } from "lucide-react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const [toast, setToast] = useState<{ message: string; visible: boolean } | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const themeVariants = [
    { name: "Light", value: "light", icon: Sun, description: "Default bright", color: "#6366f1" },
    { name: "Dark", value: "dark", icon: Moon, description: "Default dark", color: "#0f172a" },
    { name: "System", value: "system", icon: Monitor, description: "Auto match", color: "#64748b" },
    { name: "Indigo", value: "indigo", icon: Droplet, description: "Deep indigo", color: "#4f46e5" },
    { name: "Ocean Blue", value: "ocean-blue", icon: Waves, description: "Water vibes", color: "#0ea5e9" },
    { name: "Crimson", value: "crimson-red", icon: Flame, description: "Bold red", color: "#e11d48" },
    { name: "Emerald", value: "emerald-green", icon: Leaf, description: "Lush green", color: "#10b981" },
    { name: "Amber Gold", value: "amber-gold", icon: Crown, description: "Rich gold", color: "#f59e0b" },
    { name: "Midnight", value: "midnight-purple", icon: MoonStar, description: "Dark purple", color: "#7c3aed" },
  ]

  const showToast = (message: string) => {
    setToast({ message, visible: true })
    setTimeout(() => {
      setToast(prev => prev ? { ...prev, visible: false } : null)
    }, 2000)
  }

  const handleThemeChange = (value: string, name: string) => {
    setTheme(value)
    showToast(`${name} Theme Applied!`)
  }

  const handleLanguageChange = (lang: "en" | "hi") => {
    setLanguage(lang)
    showToast(lang === "hi" ? "भाषा बदलकर हिंदी कर दी गई है!" : "Language changed to English!")
  }

  // Fallback values for initial SSR render to prevent hydration freeze
  const currentTheme = mounted ? theme : "system"
  const currentLang = mounted ? language : "en"

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-full px-4 sm:px-6 pb-24 pt-2 sm:pt-4 relative z-10 pointer-events-auto">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="p-2 sm:p-2.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer touch-manipulation relative z-20"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      </div>

      {/* Language Settings */}
      <div className="bg-card rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-sm border border-border/50">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl">
            <Globe size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{t("Language")}</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              Choose your preferred language
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* English */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleLanguageChange("en")}
            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer touch-manipulation select-none relative z-20 ${
              currentLang === "en"
                ? "border-blue-500 bg-blue-500/5 shadow-md"
                : "border-border/50 bg-background hover:border-blue-500/40"
            }`}
          >
            <span className={`font-bold text-lg ${currentLang === "en" ? "text-blue-500" : "text-foreground"}`}>
              English
            </span>
            {currentLang === "en" && <CheckCircle2 className="text-blue-500" size={20} />}
          </div>

          {/* Hindi */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleLanguageChange("hi")}
            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer touch-manipulation select-none relative z-20 ${
              currentLang === "hi"
                ? "border-blue-500 bg-blue-500/5 shadow-md"
                : "border-border/50 bg-background hover:border-blue-500/40"
            }`}
          >
            <span className={`font-bold text-lg ${currentLang === "hi" ? "text-blue-500" : "text-foreground"}`}>
              हिंदी (Hindi)
            </span>
            {currentLang === "hi" && <CheckCircle2 className="text-blue-500" size={20} />}
          </div>
        </div>
      </div>
      
      {/* Theme Settings */}
      <div className="bg-card rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-sm border border-border/50">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="p-3 bg-primary/10 text-primary rounded-2xl">
            <Palette size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{t("Theme Settings") || "Theme & Colors"}</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              Customize your app's appearance
            </p>
          </div>
        </div>

        <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest">
          Color Presets
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {themeVariants.map((variant) => {
            const Icon = variant.icon
            const isActive = currentTheme === variant.value

            return (
              <div
                role="button"
                tabIndex={0}
                key={variant.value}
                onClick={() => handleThemeChange(variant.value, variant.name)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 group cursor-pointer touch-manipulation select-none relative z-20 ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                    : "border-border/50 bg-background hover:border-primary/40 hover:bg-accent/50 hover:scale-[1.02]"
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-inner border-2 border-background/50 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: variant.color }}
                >
                  <Icon size={18} className="text-white drop-shadow-md" />
                </div>
                <div className="text-left flex-1">
                  <span className={`block font-bold text-sm ${isActive ? "text-primary" : "text-foreground"}`}>
                    {variant.name}
                  </span>
                  <span className="block text-[11px] text-muted-foreground mt-0.5">
                    {variant.description}
                  </span>
                </div>
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,0,0,0.5)] mr-1" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Custom Toast Alert */}
      {toast && (
        <div 
          className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ${
            toast.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full shadow-2xl font-medium text-sm whitespace-nowrap">
            <CheckCircle2 size={18} className="text-background" />
            {toast.message}
          </div>
        </div>
      )}
    </div>
  )
}
