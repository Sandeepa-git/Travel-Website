import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import FeaturedPackages from "@/components/FeaturedPackages";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wanderlust — Explore the World's Best Destinations",
  description:
    "Discover stunning travel destinations, curated tour packages, and unforgettable experiences with Wanderlust. Your journey of a thousand miles starts here.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeaturedDestinations />
      <FeaturedPackages />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
