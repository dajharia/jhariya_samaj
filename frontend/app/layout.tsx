import "./globals.css"

export const metadata = {
  title: "Jhariya Samaj",
  description: "Community Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="bg-black text-white">

        <div className="flex min-h-screen">

          {children}

        </div>

      </body>

    </html>
  )
}