import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html lang="en" suppressHydrationWarning>

      <body>

        <ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark', 'indigo', 'ocean-blue', 'crimson-red', 'emerald-green', 'amber-gold', 'midnight-purple', 'system']}>

          <div className="flex min-h-screen">

            {children}

          </div>

        </ThemeProvider>

      </body>

    </html>
  )
}