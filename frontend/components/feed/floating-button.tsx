import { Plus } from "lucide-react"

export default function FloatingButton() {

  return (
    <button className="fixed bottom-24 right-5 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">

      <Plus size={30} />

    </button>
  )
}