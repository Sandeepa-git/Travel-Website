import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Popular Travel Destinations',
  description: 'Explore the world\'s most breathtaking destinations. Asia, Europe, Africa, Americas — find your perfect getaway with Wanderlust Travel.',
  alternates: { canonical: 'https://wanderlust-travel.com/destinations' },
  openGraph: {
    title: 'Popular Travel Destinations | Wanderlust',
    description: 'Browse top-rated destinations worldwide.',
    url: 'https://wanderlust-travel.com/destinations',
    images: [{ url: '/og-destinations.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
