import MobileNavbar from "@/components/layout/mobile-navbar"
import Topbar from "@/components/layout/topbar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

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