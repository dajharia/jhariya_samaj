import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jhariya Samaj',
    short_name: 'Jhariya Samaj',
    description: 'Official App for Jhariya Samaj Community',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/logo.webp', // आपका वर्तमान लोगो इस्तेमाल कर रहे हैं
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/logo.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  }
}