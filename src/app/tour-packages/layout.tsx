import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Packages & Travel Deals',
  description: 'Browse affordable and luxury tour packages. All-inclusive, honeymoon, adventure, and family packages with best price guarantee.',
  alternates: { canonical: 'https://wanderlust-travel.com/packages' },
  openGraph: {
    title: 'Tour Packages & Travel Deals | Wanderlust',
    description: 'Find the perfect tour package for every budget.',
    url: 'https://wanderlust-travel.com/packages',
    images: [{ url: '/og-packages.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
