"use client"

import { useState } from "react"
import { MapPin, Search, Users, ShieldCheck, Award } from "lucide-react"

// समुदाय के सदस्यों का डाटा
const COMMUNITY_DATA = [
  {
    category: "संरक्षक एवं मार्गदर्शक",
    icon: ShieldCheck,
    members: [
      { role: "संरक्षक", name: "संतोष झारिया", location: "जबलपुर" },
      { role: "पूर्व मार्गदर्शक", name: "स्व.बी.एल.नागेन्द्र", location: "सिवनी" },
      { role: "पूर्व मार्गदर्शक", name: "अजय झारिया", location: "जबलपुर" },
      { role: "पूर्व मार्गदर्शक", name: "गोविंद झारिया", location: "नरसिंगपुर" },
      { role: "पूर्व मार्गदर्शक", name: "लक्ष्मी प्रसाद झारिया", location: "मंडला" },
      { role: "पूर्व मार्गदर्शक", name: "नरोत्तम झारिया", location: "डिंडोरी" },
      { role: "पूर्व मार्गदर्शक", name: "सुधा झारिया", location: "दमोह" },
      { role: "मार्गदर्शक", name: "देवेंद्र झारिया", location: "जबलपुर" },
      { role: "मार्गदर्शक", name: "एस.के. मेहरा", location: "नरसिंहपुर" },
      { role: "मार्गदर्शक", name: "किरत सिह मेहरा", location: "रायसेन" },
      { role: "मार्गदर्शक", name: "प्रभाकर मेहरा", location: "रायसेन" },
      { role: "मार्गदर्शक", name: "बसंत चौबे", location: "बालाघाट" },
      { role: "मार्गदर्शक", name: "गणेश चंदेल", location: "डिन्डोरी" },
      { role: "मार्गदर्शक", name: "श्यामलता झारिया", location: "मंडला" },
      { role: "मार्गदर्शक", name: "घनश्याम गजेंद्र", location: "सिवनी" },
    ]
  },
  {
    category: "प्रांतीय पदाधिकारी",
    icon: Award,
    members: [
      { role: "प्रांतीय अध्यक्ष", name: "ओमप्रकाश झारिया", location: "मंडला" },
      { role: "प्रांतीय उपाध्यक्ष", name: "राकेश चंदेला", location: "मंडला" },
      { role: "प्रांतीय उपाध्यक्ष", name: "विवेक सिह झारिया", location: "जबलपुर" },
      { role: "प्रांतीय सचिव", name: "सौरभ झारिया", location: "सिवनी" },
      { role: "प्रांतीय कोषाध्यक्ष", name: "दशरथ झारिया", location: "नैनपुर" },
      { role: "प्रांतीय संगठन सचिव", name: "आकाश(आशु) झारिया", location: "मंडला" },
      { role: "प्रांतीय सूत्रधार", name: "लालाप्रसाद झारिया", location: "डिंडौरी" },
      { role: "प्रांतीय मीडिया प्रभारी", name: "हरि मेहरा", location: "जबलपुर" },
      { role: "प्रांतीय कानूनी सलाहकार", name: "एड विनय झारिया", location: "डिंडोरी" },
      { role: "प्रांतीय कानूनी सलाहकार", name: "राजेश झारिया", location: "कान्हा(नेशनल पार्क)" },
      { role: "प्रांतीय सोशल मीडिया प्रभारी", name: "मुकेश झारिया", location: "मंडला" },
      { role: "प्रांतीय सोशल मीडिया प्रभारी", name: "लक्ष्मण झारिया", location: "सिवनी" },
    ]
  },
  {
    category: "प्रांतीय कार्यकारिणी सदस्य",
    icon: Users,
    members: [
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "अमन मेहरा", location: "सिहोरा" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "महेंद्र झारिया", location: "निवास" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "अजय मेहरा", location: "सुक्तरा" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "अभिषेक मेहरा", location: "सिवनी" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "आत्माराम झारिया", location: "मंडला" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "डॉ धर्मेन्द्र झारिया", location: "कटनी" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "विवेक झारिया", location: "कुंडम" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "देवेन्द्र कोराम", location: "नैनपुर" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "डॉ मुकेश झारिया", location: "अंजनिया" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "धर्मेन्द्र मेहरा", location: "सीहोर" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "विवेक झारिया", location: "छिंदवाड़ा" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "विशाल मेहरा", location: "धार" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "अमित मेहरा", location: "रायसेन उदयपुर" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "विमल झारिया", location: "इटारसी" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "खुशबू झारिया", location: "भोपाल" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "रीता झारिया", location: "बालाघाट" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "एड. अरविंद गवले", location: "जबलपुर" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "सचिन झारिया", location: "सिहोरा" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "पवन झारिया", location: "नरसिंहपुर" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "दुर्गेश झारिया", location: "केवलारी,सिवनी" },
      { role: "प्रांतीय कार्यकारिणी सदस्य", name: "राकेश मेहरा", location: "भोपाल" },
    ]
  },
  {
    category: "जिलाध्यक्ष",
    icon: MapPin,
    members: [
      { role: "जिलाध्यक्ष", name: "राकेश गोलेन्द्र", location: "बालाघाट" },
      { role: "जिलाध्यक्ष", name: "अयोध्या गवले (झारिया)", location: "डिंडोरी" },
      { role: "जिलाध्यक्ष", name: "जगमोहन मेहरा", location: "दमोह" },
      { role: "जिलाध्यक्ष", name: "Drxसतेंद्र खांडेल", location: "भोपाल" },
      { role: "जिलाध्यक्ष", name: "नीरज मेहरा", location: "होशंगाबाद" },
      { role: "जिलाध्यक्ष", name: "दीपक मेहरा", location: "सागर" },
      { role: "जिलाध्यक्ष", name: "तुलसी झारिया", location: "छिंदवाड़ा" },
      { role: "जिलाध्यक्ष", name: "गोपाल झारिया", location: "नरसिहपुर" },
      { role: "जिलाध्यक्ष", name: "टार्जन झारिया", location: "सिवनी" },
      { role: "जिलाध्यक्ष", name: "रविशंकर झारिया", location: "मंडला" },
      { role: "जिलाध्यक्ष", name: "दीपक गोहिया", location: "जबलपुर" },
      { role: "जिलाध्यक्ष", name: "नीरज मेहरा", location: "रायसेन" },
      { role: "जिलाध्यक्ष", name: "हरीश चंद झारिया", location: "उमरिया" },
    ]
  }
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-3 text-center mb-6 pt-4">
        <div className="mx-auto p-4 bg-primary/10 text-primary rounded-full w-fit">
          <Users size={36} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Community Directory
        </h1>
        <p className="text-muted-foreground">
          हमारे समाज के सम्माननीय पदाधिकारी एवं सदस्यगण
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto px-4 sm:px-0 mb-10">
        <div className="relative flex items-center w-full h-12 rounded-full shadow-sm bg-card border border-border/50 overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
          <div className="grid place-items-center h-full w-12 text-muted-foreground">
            <Search size={20} />
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-foreground bg-transparent pr-4"
            type="text"
            placeholder="नाम, पद या जिले से खोजें..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Categories & Members Mapping */}
      <div className="space-y-10 px-2 sm:px-0">
        {COMMUNITY_DATA.map((group, index) => {
          
          // सर्च फ़िल्टर 
          const filteredMembers = group.members.filter((m) => 
            m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.role.toLowerCase().includes(searchQuery.toLowerCase())
          )

          // अगर सर्च करने पर इस केटेगरी में कोई नहीं मिला तो इसे छुपा दें
          if (filteredMembers.length === 0) return null

          const GroupIcon = group.icon

          return (
            <section key={index} className="space-y-5">
              <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                <GroupIcon className="text-primary w-5 h-5" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{group.category}</h2>
                <span className="ml-auto bg-secondary text-muted-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  {filteredMembers.length}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredMembers.map((member, mIdx) => (
                  <div key={mIdx} className="bg-card border border-border/50 rounded-[1.5rem] p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    
                    {/* Auto-generated Initial Avatar */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-secondary">
                      <img 
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(member.name)}&backgroundColor=0ea5e9,6366f1,8b5cf6,ec4899,f59e0b&textColor=ffffff`} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <h3 className="font-bold text-foreground text-[13px] sm:text-sm leading-tight mb-1">{member.name}</h3>
                    <span className="text-[10px] sm:text-xs font-semibold text-primary px-2 py-0.5 bg-primary/10 rounded-full mb-2 line-clamp-1 w-full">{member.role}</span>
                    <div className="flex items-center text-[11px] sm:text-xs text-muted-foreground gap-1 mt-auto">
                      <MapPin size={12} className="shrink-0" />
                      <span className="truncate">{member.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>

    </div>
  )
}