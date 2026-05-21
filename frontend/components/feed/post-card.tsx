import {
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react"

export default function PostCard() {

  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">

      {/* Header */}

      <div className="flex items-center gap-3 p-4">

        <div className="w-12 h-12 rounded-full bg-zinc-700" />

        <div>

          <h3 className="font-semibold">
            Dashrath Jharia
          </h3>

          <p className="text-sm text-zinc-400">
            2 hours ago
          </p>

        </div>

      </div>

      {/* Image */}

      <div className="aspect-square bg-zinc-800" />

      {/* Content */}

      <div className="p-4">

        <p className="text-zinc-200">
          Welcome to our community platform 🚀
        </p>

        {/* Actions */}

        <div className="flex items-center gap-6 mt-5 text-zinc-300">

          <button className="flex items-center gap-2">

            <Heart size={20} />

            <span>24</span>

          </button>

          <button className="flex items-center gap-2">

            <MessageCircle size={20} />

            <span>8</span>

          </button>

          <button>

            <Share2 size={20} />

          </button>

        </div>

      </div>

    </div>
  )
}