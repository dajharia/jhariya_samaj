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

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>

      <body>

        <ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark', 'indigo', 'ocean-blue', 'crimson-red', 'emerald-green', 'amber-gold', 'midnight-purple', 'system']}>

          <div className="flex min-h-screen w-full overflow-x-hidden">

            {children}

          </div>

        </ThemeProvider>

      </body>

    </html>
  )
}