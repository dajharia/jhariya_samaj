import Stories from "@/components/feed/stories"
import PostCard from "@/components/feed/post-card"
import FloatingButton from "@/components/feed/floating-button"

// डमी पोस्ट डेटा
const DUMMY_POSTS = [
  {
    id: 1,
    authorName: "Rahul Jhariya",
    timeAgo: "2 hours ago",
    content: "आज समाज की बैठक में वार्षिकोत्सव संबंधी बहुत ही महत्वपूर्ण विषयों पर चर्चा हुई। सभी सदस्यों का धन्यवाद! 🙏",
    likes: 124,
    comments: 32,
    hasImage: true,
  },
  {
    id: 2,
    authorName: "Priya Patel",
    timeAgo: "5 hours ago",
    content: "हमारे नए कम्युनिटी ऐप का डिज़ाइन बहुत अच्छा लग रहा है। सब लोग जुड़ते जा रहे हैं!",
    likes: 89,
    comments: 15,
    hasImage: false,
  },
  {
    id: 3,
    authorName: "Amit Kumar",
    timeAgo: "1 day ago",
    content: "आगामी रविवार को होने वाले खेलकूद समारोह में आप सभी आमंत्रित हैं।",
    likes: 256,
    comments: 45,
    hasImage: true,
  },
]

export default function HomePage() {
  return (
    // चैट पेज की तरह ही पैरेंट डिव में क्लीन 'space-y-4' का उपयोग किया है 
    // जो आपके लेआउट के फ्लो को बिल्कुल सीधा और सिमेट्रिकल रखेगा
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 pb-24">

      {/* Header Container - चैट पेज के पहले कार्ड की तरह अलाइनमेंट देगा */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-foreground">
          Community Feed
        </h1>
        <p className="text-muted-foreground text-sm">
          Latest updates from members
        </p>
      </div>

      {/* Stories - यह अब सीधे फीड के ग्रिड अलाइनमेंट में रहेगी */}
      <Stories />

      {/* Feed Container - चैट पेज की तरह ही 'space-y-3' का उपयोग किया है */}
      <div className="space-y-3">
        {DUMMY_POSTS.map((post) => (
          <PostCard
            key={post.id}
            authorName={post.authorName}
            timeAgo={post.timeAgo}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            hasImage={post.hasImage}
          />
        ))}
      </div>

      <FloatingButton />

    </div>
  )
}