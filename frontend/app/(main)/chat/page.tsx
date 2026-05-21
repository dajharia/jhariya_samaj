export default function ChatPage() {

  return (
    <div className="space-y-4">

      <div className="bg-zinc-900 rounded-3xl p-4">

        <h2 className="text-xl font-semibold">
          Chats
        </h2>

      </div>

      <div className="space-y-3">

        {[1, 2, 3, 4].map((item) => (

          <div
            key={item}
            className="bg-zinc-900 rounded-2xl p-4 flex items-center gap-3"
          >

            <div className="w-14 h-14 rounded-full bg-zinc-700" />

            <div>

              <h3 className="font-medium">
                User {item}
              </h3>

              <p className="text-zinc-400 text-sm">
                Last message preview...
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}