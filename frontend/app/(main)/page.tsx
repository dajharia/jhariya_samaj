import Stories from "@/components/feed/stories"
import PostCard from "@/components/feed/post-card"
import FloatingButton from "@/components/feed/floating-button"

// डमी पोस्ट डेटा
const DUMMY_POSTS = [
  {
    id: 1,
    authorName: "Rahul Jhariya",
    timeAgo: "2 hours ago",
    content: "आज समाज की बैठक में बहुत ही महत्वपूर्ण विषयों पर चर्चा हुई। सभी सदस्यों का धन्यवाद! 🙏",
    likes: 124,
    comments: 32,
    hasImage: true,
  },
  {
    id: 2,
    authorName: "Priya Patel",
    timeAgo: "5 hours ago",
    content: "हमारे नए कम्युनिटी ऐप का डिज़ाइन बहुत अच्छा लग रहा है। सब लोग जुड़ते जा रहे हैं!",
    likes: 89,
    comments: 15,
    hasImage: false, // इस पोस्ट में इमेज नहीं होगी
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
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-foreground">
          Community Feed
        </h1>

        <p className="text-muted-foreground mt-1">
          Latest updates from members
        </p>

      </div>

      {/* Stories */}

      <Stories />

      {/* Feed */}

      <div className="space-y-5">

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