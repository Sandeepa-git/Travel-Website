export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating?: number;
  longDescription?: string;
  highlights?: string[];
  gallery?: string[];
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
    longDescription: "Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII warship. Onshore, the lush jungle shelters stone temples and mischievous monkeys. The 'cultural capital' of Ubud is the perfect place to see a cultural dance performance, take a batik or silver-smithing workshop, or invigorate your mind and body in a yoga class.",
    image: "/images/destinations/bali.jpg",
    rating: 4.8,
    highlights: ["Ubud Rice Terraces", "Uluwatu Temple", "Seminyak Beaches", "Scuba Diving in Tulamben"],
    gallery: ["/images/destinations/bali.jpg", "/images/destinations/bali.jpg", "/images/destinations/bali.jpg"]
  },
  {
    id: "santorini-greece",
    name: "Santorini, Greece",
    description: "Iconic white buildings overlooking the deep blue Aegean Sea. A romantic paradise.",
    longDescription: "Even if you’ve never been to this Cyclades island in the Aegean Sea, you’d still recognize it immediately—candy-colored houses carved into cliffs, sapphire-blue waters, gleaming white buildings topped with half-spheres the color of a stormy sky. Santorini is one of the world's most popular travel destinations for a reason: it's incredibly beautiful. Whether you're exploring the ruins of Akrotiri, lounging on a red sand beach, or watching the sunset from Oia, you'll be captivated by its charm.",
    image: "/images/destinations/santorini.jpg",
    rating: 4.9,
    highlights: ["Sunset in Oia", "Fira to Oia Hike", "Red Beach", "Ancient Akrotiri"],
    gallery: ["/images/destinations/santorini.jpg", "/images/destinations/santorini.jpg", "/images/destinations/santorini.jpg"]
  },
  {
    id: "kyoto-japan",
    name: "Kyoto, Japan",
    description: "Step back in time through historic temples, traditional tea houses, and serene gardens.",
    longDescription: "Kyoto was the capital of Japan for over a millennium, and it remains the country's cultural and spiritual heart. Home to thousands of Buddhist temples, Shinto shrines, and traditional wooden houses, Kyoto offers a glimpse into Japan's rich history. From the golden Kinkaku-ji temple to the thousands of vermillion torii gates at Fushimi Inari Shrine, every corner of Kyoto tells a story. Don't miss the chance to experience a traditional tea ceremony or walk through the bamboo groves of Arashiyama.",
    image: "/images/destinations/kyoto.jpg",
    rating: 4.7,
    highlights: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)", "Gion District"],
    gallery: ["/images/destinations/kyoto.jpg", "/images/destinations/kyoto.jpg", "/images/destinations/kyoto.jpg"]
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps, Switzerland",
    description: "Breathtaking mountain peaks, crystal clear lakes, and luxury alpine resorts.",
    longDescription: "The Swiss Alps are a playground for outdoor enthusiasts and luxury seekers alike. Whether you're skiing in Zermatt, hiking in the Jungfrau region, or taking a scenic train ride on the Glacier Express, the majesty of the mountains is ever-present. With world-class resorts, charming alpine villages, and some of the most stunning lakes in Europe, the Swiss Alps offer an unforgettable escape from the everyday. Experience the perfect blend of adventure and relaxation in one of the world's most beautiful mountain ranges.",
    image: "/images/destinations/swiss-alps.jpg",
    rating: 4.9,
    highlights: ["Matterhorn Views", "Jungfraujoch Jungfrau-Aletsch", "Lake Lucerne", "Interlaken Adventure"],
    gallery: ["/images/destinations/swiss-alps.jpg", "/images/destinations/swiss-alps.jpg", "/images/destinations/swiss-alps.jpg"]
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
