import Stories from "@/components/feed/stories"
import PostCard from "@/components/feed/post-card"
import FloatingButton from "@/components/feed/floating-button"

export default function HomePage() {

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Community Feed
        </h1>

        <p className="text-zinc-400 mt-1">
          Latest updates from members
        </p>

      </div>

      {/* Stories */}

      <Stories />

      {/* Feed */}

      <div className="space-y-5">

        <PostCard />
        <PostCard />
        <PostCard />

      </div>

      <FloatingButton />

    </div>
  )
}