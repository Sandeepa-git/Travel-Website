import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ScrollToTop";
import RouteScrollTop from "@/components/RouteScrollTop";
import Preloader from "@/components/ui/Preloader";
import "../styles/index.css";
import Providers from "./providers";
import { dmSans, playfair } from "./fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  // ── BASIC ──────────────────────────────────────────
  metadataBase: new URL('https://wanderlust-travel.com'),
  title: {
    default: 'Wanderlust | Luxury Travel & Tour Packages',
    template: '%s | Wanderlust Travel'
  },
  description: 'Discover handpicked travel destinations and luxury tour packages worldwide. Book your dream vacation with Wanderlust — expert guides, best prices, unforgettable experiences.',
  keywords: [
    // Trending 2025 travel keywords:
    'luxury travel packages 2025',
    'best travel destinations 2025',
    'affordable tour packages',
    'honeymoon packages',
    'adventure travel tours',
    'family vacation packages',
    'solo travel destinations',
    'cultural travel experiences',
    'eco tourism packages',
    'last minute travel deals',
    'budget travel packages',
    'international tour packages',
    'beach vacation packages',
    'mountain trekking tours',
    'Europe tour packages',
    'Asia travel packages',
    'Maldives honeymoon packages',
    'Bali travel packages',
    'Dubai tour packages',
    'Sri Lanka travel packages',
    'travel agency online booking',
    'all inclusive vacation packages',
    'group tour packages',
    'backpacking destinations',
    'travel experiences 2025',
  ],
  authors: [{ name: 'Wanderlust Travel', url: 'https://wanderlust-travel.com' }],
  creator: 'Wanderlust Travel',
  publisher: 'Wanderlust Travel',
  category: 'Travel & Tourism',
  
  // ── OPEN GRAPH (Facebook, LinkedIn, WhatsApp) ──────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wanderlust-travel.com',
    siteName: 'Wanderlust Travel',
    title: 'Wanderlust | Luxury Travel & Tour Packages',
    description: 'Discover handpicked destinations and luxury tours. Book your dream trip today.',
  },

  // ── TWITTER / X CARD ──────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@WanderlustTravel',
    creator: '@WanderlustTravel',
    title: 'Wanderlust | Luxury Travel & Tour Packages',
    description: 'Handpicked destinations & luxury tour packages worldwide.',
  },

  // ── ROBOTS ────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // ── ICONS ─────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',

  // ── VERIFICATION ──────────────────────────────────
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_ID',
    // yandex: 'YOUR_YANDEX_ID',
  },

  // ── ALTERNATE / CANONICAL ─────────────────────────
  alternates: {
    canonical: 'https://wanderlust-travel.com',
    languages: {
      'en-US': 'https://wanderlust-travel.com',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Wanderlust Travel',
  url: 'https://wanderlust-travel.com',
  logo: 'https://wanderlust-travel.com/logo.png',
  description: 'Luxury travel packages and tour experiences worldwide',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Travel Street',
    addressLocality: 'Your City',
    addressCountry: 'LK'
  },
  telephone: '+94-XX-XXX-XXXX',
  sameAs: [
    'https://facebook.com/wanderlusttravel',
    'https://instagram.com/wanderlusttravel',
    'https://twitter.com/wanderlusttravel',
    'https://youtube.com/wanderlusttravel'
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '324'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <body className={cn(dmSans.variable, playfair.variable, "antialiased")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <RouteScrollTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
