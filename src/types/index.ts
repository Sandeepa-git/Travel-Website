export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating?: number;
  category?: "islands" | "mountains" | "cities";
}

export interface TourPackage {
  id: string;
  slug: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  gallery: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
