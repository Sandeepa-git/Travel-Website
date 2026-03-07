export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating?: number;
}

export interface TourPackage {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  gallery: string[];
}

export const destinations: Destination[] = [
  {
    id: "bali-indonesia",
    name: "Bali, Indonesia",
    description: "Experience the magic of the Island of Gods with its lush rice terraces and stunning beaches.",
    image: "/images/destinations/bali.jpg",
    rating: 4.8
  },
  {
    id: "santorini-greece",
    name: "Santorini, Greece",
    description: "Iconic white buildings overlooking the deep blue Aegean Sea. A romantic paradise.",
    image: "/images/destinations/santorini.jpg",
    rating: 4.9
  },
  {
    id: "kyoto-japan",
    name: "Kyoto, Japan",
    description: "Step back in time through historic temples, traditional tea houses, and serene gardens.",
    image: "/images/destinations/kyoto.jpg",
    rating: 4.7
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps, Switzerland",
    description: "Breathtaking mountain peaks, crystal clear lakes, and luxury alpine resorts.",
    image: "/images/destinations/swiss-alps.jpg",
    rating: 4.9
  }
];

export const tourPackages: TourPackage[] = [
  {
    id: "tropical-escape-bali",
    name: "7-Day Tropical Escape in Bali",
    description: "A complete tour of Bali's most famous spots including Ubud, Canggu, and Uluwatu. Experience culture and relaxation.",
    duration: "7 Days / 6 Nights",
    price: 1299,
    image: "/images/packages/bali-package.jpg",
    highlights: ["Ubud Sacred Monkey Forest", "Tegallalang Rice Terrace", "Uluwatu Temple Sunset", "Nusa Penida Boat Trip"],
    gallery: [
      "/images/packages/bali-package.jpg",
      "/images/packages/bali-gallery-1.jpg",
      "/images/packages/bali-gallery-2.jpg"
    ]
  },
  {
    id: "greek-islands-odyssey",
    name: "10-Day Greek Islands Odyssey",
    description: "Explore the ancient history of Athens followed by the stunning beauty of Mykonos and Santorini.",
    duration: "10 Days / 9 Nights",
    price: 2499,
    image: "/images/packages/greece-package.jpg",
    highlights: ["Acropolis Guided Tour", "Sunset in Oia (Santorini)", "Mykonos Beach Clubs", "Traditional Island Dinner"],
    gallery: [
      "/images/packages/greece-package.jpg",
      "/images/packages/greece-gallery-1.jpg",
      "/images/packages/greece-gallery-2.jpg"
    ]
  },
  {
    id: "japanese-cultural-tour",
    name: "12-Day Japanese Cultural Immersion",
    description: "Experience the contrast of ultra-modern Tokyo and the traditional soul of Kyoto and Osaka.",
    duration: "12 Days / 11 Nights",
    price: 3899,
    image: "/images/packages/japan-package.jpg",
    highlights: ["Shinkansen Bullet Train", "Tea Ceremony in Kyoto", "Mount Fuji View", "Tokyo Shibuya Crossing"],
    gallery: [
      "/images/packages/japan-package.jpg",
      "/images/packages/japan-gallery-1.jpg",
      "/images/packages/japan-gallery-2.jpg"
    ]
  }
];
