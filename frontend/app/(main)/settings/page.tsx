"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Sun, Moon, Monitor, Waves, Droplet, Flame, Leaf, Crown, MoonStar, Palette, CheckCircle2 } from "lucide-react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const [toast, setToast] = useState<{ message: string; visible: boolean } | null>(null)

  // Hydration mismatch से बचने के लिए
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-4 text-muted-foreground animate-pulse">Loading settings...</div>
  }

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

  const handleThemeChange = (value: string, name: string) => {
    setTheme(value)
    setToast({ message: `${name} Theme Applied!`, visible: true })
    
    // 1.5 सेकंड बाद टोस्ट को छुपाएं और पिछले पेज पर वापस (redirect) भेजें
    setTimeout(() => {
      setToast(prev => prev ? { ...prev, visible: false } : null)
      
      setTimeout(() => {
        router.back()
      }, 300) // एग्जिट एनीमेशन का समय
    }, 1500)
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="bg-card rounded-[2rem] p-6 md:p-8 shadow-sm border border-border/50">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
          <div className="p-4 bg-primary/10 text-primary rounded-2xl">
            <Palette size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Theme & Colors</h1>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              Customize your app's appearance and color palette
            </p>
          </div>
        </div>

        <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest">
          Color Presets
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {themeVariants.map((variant) => {
            const Icon = variant.icon
            const isActive = theme === variant.value

            return (
              <button
                key={variant.value}
                onClick={() => handleThemeChange(variant.value, variant.name)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 group ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                    : "border-border/50 bg-background hover:border-primary/40 hover:bg-accent/50 hover:scale-[1.02]"
                }`}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-inner border-2 border-background/50 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: variant.color }}
                >
                  <Icon size={22} className="text-white drop-shadow-md" />
                </div>
                <div className="text-left flex-1">
                  <span className={`block font-bold text-base ${isActive ? "text-primary" : "text-foreground"}`}>
                    {variant.name}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {variant.description}
                  </span>
                </div>
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,0,0,0.5)] mr-1" />
                )}
              </button>
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
          <div className="flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full shadow-2xl font-medium text-sm">
            <CheckCircle2 size={18} className="text-background" />
            {toast.message}
          </div>
        </div>
      )}
    </div>
  )
}