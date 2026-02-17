import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Krishna Bantola — AI Engineer | Full Stack Developer | Android Engineer',
    short_name: 'Krishna Bantola',
    description:
      'AI-powered interactive portfolio of Krishna Bantola — AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru, India. Featuring intelligent chatbot, project showcases, hackathon achievements, and published Google Play Store apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    categories: [
      'portfolio',
      'technology',
      'artificial-intelligence',
      'developer-tools',
    ],
    lang: 'en-US',
    icons: [
      {
        src: '/favicon1.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/logo-krishna.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/krishna-photo-white.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
