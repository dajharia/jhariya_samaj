"use client"

import { Newspaper, Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  // Dummy Blog Data
  const blogPosts = [
    {
      id: 1,
      title: "समाज की वार्षिक बैठक और आगामी योजनाएं 2024",
      excerpt: "इस वर्ष की वार्षिक बैठक में समाज के विकास, शिक्षा और रोजगार के नए अवसरों पर विस्तार से चर्चा की गई। जानें क्या रहे मुख्य बिंदु...",
      category: "News",
      date: "24 May 2024",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "शिक्षा के क्षेत्र में झारिया समाज के युवाओं की शानदार सफलता",
      excerpt: "हमारे समाज के प्रतिभावान छात्र-छात्राओं ने इस वर्ष की बोर्ड और प्रतियोगी परीक्षाओं में उत्कृष्ट प्रदर्शन किया है। उनकी सफलता की कहानी पढ़ें।",
      category: "Education",
      date: "18 May 2024",
      readTime: "3 min read",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "सांस्कृतिक धरोहर: हमारे पुराने रीति-रिवाज और उनका महत्व",
      excerpt: "आधुनिक युग में हम तेजी से आगे बढ़ रहे हैं, लेकिन हमारी जड़ें और पुराने रीति-रिवाज आज भी हमें एक-दूसरे से जोड़े रखते हैं। आइए जानें इनका महत्व।",
      category: "Culture",
      date: "10 May 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1605814578508-4d56417fae7b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "स्वास्थ्य शिविर का सफल आयोजन",
      excerpt: "समाज की ओर से आयोजित निशुल्क स्वास्थ्य जांच शिविर में 500 से अधिक लोगों ने लाभ उठाया। देखिए शिविर की कुछ खास झलकियां।",
      category: "Events",
      date: "02 May 2024",
      readTime: "2 min read",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full overflow-x-hidden px-4 sm:px-6 pb-24">
      
      {/* Page Header */}
      <div className="flex flex-col gap-3 text-center mb-10 pt-4">
        <div className="mx-auto p-4 bg-blue-500/10 text-blue-500 rounded-full w-fit">
          <Newspaper size={36} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          News & Blog
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Stay updated with the latest news, articles, and announcements from Jhariya Samaj.
        </p>
      </div>

      {/* Blog List Section */}
      <div className="grid grid-cols-1 gap-6 md:max-w-4xl md:mx-auto">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="group bg-card rounded-2xl md:rounded-[2rem] p-4 md:p-5 shadow-sm border border-border/50 flex flex-col sm:flex-row gap-5 transition-all duration-300 hover:shadow-md hover:border-primary/30"
          >
            {/* Post Image */}
            <div className="w-full sm:w-48 md:w-64 h-48 sm:h-auto shrink-0 rounded-xl overflow-hidden relative">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-bold rounded-full text-primary border border-primary/20">
                {post.category}
              </div>
            </div>

            {/* Post Content */}
            <div className="flex flex-col justify-center flex-1 py-1">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>

              <Link href={`/blog/${post.id}`} className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors w-fit">
                Read Article <ChevronRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  )
}