import { Plus, User } from "lucide-react"

export default function Stories() {
  // स्टोरीज़ के लिए डमी डेटा 
  const storyUsers = [
    { id: 1, name: "Rahul", hasUnseen: true },
    { id: 2, name: "Priya", hasUnseen: true },
    { id: 3, name: "Amit", hasUnseen: false },
    { id: 4, name: "Neha", hasUnseen: false },
    { id: 5, name: "Vikash", hasUnseen: false },
    { id: 6, name: "Pooja", hasUnseen: false },
  ]

  return (
    <div className="flex gap-4 overflow-x-auto w-full pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

      {/* Add Story Button (Current User) */}
      <div className="flex flex-col items-center min-w-[72px] cursor-pointer shrink-0">
        <div className="relative w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transition-colors duration-300">
          <User className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-[2px] border-2 border-white dark:border-black transition-colors duration-300">
            <Plus className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
        </div>
        <p className="text-xs mt-2 text-zinc-700 dark:text-zinc-300 font-medium">
          Your Story
        </p>
      </div>

      {/* Other Users' Stories */}
      {storyUsers.map((user) => (
        <div
          key={user.id}
          className="flex flex-col items-center min-w-[72px] cursor-pointer shrink-0"
        >
          <div className={`w-16 h-16 rounded-full p-[2px] ${user.hasUnseen ? 'bg-gradient-to-tr from-pink-500 to-orange-400' : 'bg-zinc-200 dark:bg-zinc-700'} transition-colors duration-300`}>
            {/* User Avatar Placeholder */}
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center border-2 border-white dark:border-black transition-colors duration-300">
              <User className="w-7 h-7 text-zinc-400 dark:text-zinc-600" />
            </div>
          </div>
          
          <p className="text-xs mt-2 text-zinc-700 dark:text-zinc-300 truncate w-full text-center">
            {user.name}
          </p>
        </div>
      ))}
    </div>
  )
}