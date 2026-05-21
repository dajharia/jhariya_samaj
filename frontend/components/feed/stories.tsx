export default function Stories() {

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">

      {[1, 2, 3, 4, 5].map((item) => (

        <div
          key={item}
          className="flex flex-col items-center min-w-[72px]"
        >

          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 p-[2px]">

            <div className="w-full h-full rounded-full bg-zinc-900" />

          </div>

          <p className="text-xs mt-2 text-zinc-300">
            User {item}
          </p>

        </div>

      ))}

    </div>
  )
}