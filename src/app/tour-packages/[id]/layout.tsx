import { Metadata } from 'next'
import { tourPackages } from "@/data/travel"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = tourPackages.find((p) => p.id === params.id)
  
  if (!pkg) {
    return {
      title: 'Package Not Found | Wanderlust Travel',
      description: 'The tour package you are looking for does not exist.',
    }
  }

  return {
    title: pkg.name,
    description: pkg.description.slice(0, 160),
    alternates: { canonical: `https://wanderlust-travel.com/tour-packages/${params.id}` },
    openGraph: {
      title: `${pkg.name} | Wanderlust Travel`,
      description: pkg.description.slice(0, 160),
      images: [{ url: pkg.image, width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
