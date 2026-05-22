"use client"

import { useState } from "react"
import { MapPin, GraduationCap, Briefcase, Heart, Search, Ruler, CalendarHeart } from "lucide-react"

// डमी मैट्रिमोनी प्रोफाइल्स डेटा
const MATRIMONY_PROFILES = [
  {
    id: 1,
    name: "Priya Jhariya",
    gender: "bride",
    age: 26,
    height: "5'4\"",
    education: "M.Tech in Computer Science",
    profession: "Software Engineer",
    location: "Jabalpur, MP",
    image: "https://images.unsplash.com/photo-1583089892943-e02e5ee6f50b?auto=format&fit=crop&w=400&q=80", // डमी भारतीय महिला फोटो
  },
  {
    id: 2,
    name: "Rahul Jhariya",
    gender: "groom",
    age: 29,
    height: "5'10\"",
    education: "MBA in Finance",
    profession: "Bank Manager",
    location: "Bhopal, MP",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80", // डमी पुरुष फोटो
  },
  {
    id: 3,
    name: "Neha Patel",
    gender: "bride",
    age: 25,
    height: "5'3\"",
    education: "BDS",
    profession: "Dentist",
    location: "Indore, MP",
    image: "https://images.unsplash.com/photo-1615212555519-75a74e542ec5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Vikash Kumar",
    gender: "groom",
    age: 30,
    height: "5'11\"",
    education: "B.E. Mechanical",
    profession: "Business Owner",
    location: "Raipur, CG",
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=400&q=80",
  },
]

export default function MatrimonyPage() {
  const [filter, setFilter] = useState<"all" | "bride" | "groom">("all")

  // फिल्टर के आधार पर प्रोफाइल्स दिखाना
  const filteredProfiles = MATRIMONY_PROFILES.filter(
    (profile) => filter === "all" || profile.gender === filter
  )

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Matrimony</h1>
        <p className="text-muted-foreground text-sm">
          Find your perfect life partner within the community.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-card p-1 rounded-full border border-border shadow-sm">
        <button
          onClick={() => setFilter("all")}
          className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            filter === "all" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          All Profiles
        </button>
        <button
          onClick={() => setFilter("bride")}
          className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            filter === "bride" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Brides (कन्या)
        </button>
        <button
          onClick={() => setFilter("groom")}
          className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            filter === "groom" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Grooms (वर)
        </button>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filteredProfiles.map((profile) => (
          <div 
            key={profile.id} 
            className="bg-card rounded-[1.5rem] border border-border shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Photo Section */}
            <div className="relative h-64 overflow-hidden bg-secondary">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white drop-shadow-md">
                  {profile.name}
                </h3>
                <p className="text-white/80 text-sm font-medium flex items-center gap-1.5 mt-1">
                  <MapPin size={14} /> {profile.location}
                </p>
              </div>

              {/* Quick Info Badge (Age & Height) */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                 <span>{profile.age} Yrs</span>
                 <span className="w-1 h-1 bg-white/50 rounded-full" />
                 <span>{profile.height}</span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-5 space-y-3">
              <div className="flex items-start gap-3 text-sm text-foreground">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">{profile.education}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground">
                <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">{profile.profession}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-border flex gap-3">
                <button className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground py-2.5 rounded-xl font-semibold text-sm transition-colors duration-300">
                  View Profile
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-secondary text-muted-foreground hover:text-pink-500 hover:bg-pink-500/10 rounded-xl transition-colors duration-300">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}