import MobileNavbar from "@/components/layout/mobile-navbar"
import Topbar from "@/components/layout/topbar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <Topbar />

      <main className="flex-1 overflow-y-auto pb-24">

        <div className="p-4">

          {children}

        </div>

      </main>

      <MobileNavbar />

    </div>
  )
}