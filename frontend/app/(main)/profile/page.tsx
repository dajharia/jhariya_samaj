"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { 
  User, Shield, Users, FileText, Trash2, Edit, LogOut, 
  MapPin, Phone, Mail, CheckCircle, Search, AlertTriangle, MessageCircle 
} from "lucide-react"

export default function ProfilePage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'profile' | 'members' | 'content'>('profile')

  // Dummy Members Data
  const [members, setMembers] = useState([
    { id: 1, name: "राहुल झारिया", phone: "+91 98765 43210", role: "Member", status: "Active", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" },
    { id: 2, name: "सुनील कुमार", phone: "+91 98765 43211", role: "Moderator", status: "Active", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fit=crop&w=100&h=100" },
    { id: 3, name: "अमित मेहरा", phone: "+91 98765 43212", role: "Member", status: "Warning", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100" },
    { id: 4, name: "नेहा झारिया", phone: "+91 98765 43213", role: "Member", status: "Active", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100" },
  ])

  // Dummy Content Data
  const [contents, setContents] = useState([
    { id: 1, type: "Blog", title: "अनावश्यक विज्ञापन पोस्ट", author: "अज्ञात", date: "24 May 2024", reports: 5 },
    { id: 2, type: "Feed", title: "आज का सुविचार (Spam)", author: "राहुल झारिया", date: "23 May 2024", reports: 2 },
    { id: 3, type: "Chat", title: "Spam message link in group", author: "अमित मेहरा", date: "22 May 2024", reports: 8 },
  ])

  const handleDeleteMember = (id: number) => {
    if(confirm("क्या आप सच में इस सदस्य को हटाना चाहते हैं?")) {
      setMembers(members.filter(m => m.id !== id))
    }
  }

  const handleDeleteContent = (id: number) => {
    if(confirm("क्या आप इस पोस्ट/कंटेंट को डिलीट करना चाहते हैं?")) {
      setContents(contents.filter(c => c.id !== id))
    }
  }

  return (
    <div className="flex flex-col w-full h-full min-h-[calc(100vh-80px)] bg-background animate-in fade-in duration-500 pb-24 sm:pb-8">
      
      {/* Cover Profile Header */}
      <div className="relative w-full h-32 sm:h-48 bg-gradient-to-r from-primary to-purple-600">
        <div className="absolute -bottom-12 left-4 sm:left-8 flex items-end gap-4">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-background bg-secondary overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300" alt="Admin" className="w-full h-full object-cover" />
          </div>
          <div className="mb-2 sm:mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground drop-shadow-sm flex items-center gap-2">
              विकास झारिया <CheckCircle size={18} className="text-blue-500 fill-blue-500/20" />
            </h1>
            <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-white bg-primary px-2.5 py-0.5 rounded-full shadow-sm">
              <Shield size={12} /> {t("Admin Dashboard")}
            </span>
          </div>
        </div>
      </div>

      {/* Top Margin to adjust for floating avatar */}
      <div className="h-16 sm:h-20 w-full"></div>

      {/* Navigation Tabs */}
      <div className="px-4 sm:px-8 mb-6">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 p-1 bg-secondary/50 rounded-2xl border border-border/50">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'profile' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <User size={16} /> {t("Profile")}
          </button>
          <button 
            onClick={() => setActiveTab('members')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'members' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Users size={16} /> {t("Manage Members")}
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'content' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <FileText size={16} /> {t("Manage Content")}
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="px-4 sm:px-8 flex-1">
        
        {/* Panel 1: Profile Info */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <div className="bg-card rounded-3xl p-5 sm:p-6 border border-border/50 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-foreground border-b border-border/50 pb-3">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary"><Phone size={16} /></div>
                  <span className="flex-1 font-medium text-foreground">+91 98765 00000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary"><Mail size={16} /></div>
                  <span className="flex-1 font-medium text-foreground">admin@jhariyasamaj.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary"><MapPin size={16} /></div>
                  <span className="flex-1 font-medium text-foreground">जबलपुर, मध्य प्रदेश, भारत</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                <Edit size={16} /> Edit Profile Details
              </button>
            </div>

            <button className="w-full py-3 sm:py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 border border-red-500/20">
              <LogOut size={18} /> {t("Logout")}
            </button>
          </div>
        )}

        {/* Panel 2: Manage Members */}
        {activeTab === 'members' && (
          <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input type="text" placeholder="सदस्य खोजें..." className="w-full bg-card border border-border/50 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            
            {members.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground text-sm">कोई सदस्य नहीं मिला।</div>
            ) : (
              <div className="space-y-3">
                {members.map(member => (
                  <div key={member.id} className="bg-card flex items-center gap-3 p-3 rounded-2xl border border-border/50 shadow-sm">
                    <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full object-cover bg-secondary" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-sm truncate flex items-center gap-1.5">
                        {member.name} 
                        {member.status === 'Warning' && <AlertTriangle size={12} className="text-amber-500" />}
                      </h3>
                      <p className="text-xs text-muted-foreground">{member.phone}</p>
                      <span className="inline-block mt-1 text-[10px] bg-secondary px-2 py-0.5 rounded-full">{member.role}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-2 shrink-0">
                      <button className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                        <Edit size={14} />
                      </button>
                      <button 
                        onClick={() => handleDeleteMember(member.id)}
                        className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Panel 3: Manage Content (Feed/Blog/Chat) */}
        {activeTab === 'content' && (
          <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs sm:text-sm p-3 rounded-xl flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <p>नीचे दी गई सूची में यूज़र्स द्वारा रिपोर्ट किए गए अवांछित (Spam) पोस्ट या चैट्स हैं। आप इन्हें सीधे यहाँ से हटा सकते हैं।</p>
            </div>

            {contents.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground text-sm flex flex-col items-center justify-center gap-2">
                <CheckCircle size={32} className="text-green-500 opacity-50" />
                सब कुछ साफ है! कोई अवांछित कंटेंट नहीं।
              </div>
            ) : (
              <div className="space-y-3 mt-4">
                {contents.map(content => (
                  <div key={content.id} className="bg-card flex flex-col gap-3 p-4 rounded-2xl border border-border/50 shadow-sm relative overflow-hidden group">
                    {/* Red indicator line on left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1
                            ${content.type === 'Blog' ? 'bg-blue-500/10 text-blue-500' : content.type === 'Feed' ? 'bg-purple-500/10 text-purple-500' : 'bg-pink-500/10 text-pink-500'}`}
                          >
                            {content.type === 'Chat' ? <MessageCircle size={10}/> : <FileText size={10}/>} {content.type}
                          </span>
                          <span className="text-[10px] text-red-500 font-medium bg-red-500/10 px-2 py-0.5 rounded-full">
                            {content.reports} Reports
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground text-sm line-clamp-2 leading-snug">"{content.title}"</h3>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end border-t border-border/50 pt-2.5 mt-1">
                      <div className="text-xs text-muted-foreground">
                        <span>Posted by <strong className="text-foreground">{content.author}</strong></span>
                        <span className="mx-1">•</span>
                        <span>{content.date}</span>
                      </div>
                      <button 
                        onClick={() => handleDeleteContent(content.id)}
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}