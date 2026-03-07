import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Wanderlust Travel. Plan your custom tour, ask questions, or get travel advice from our expert team.',
  alternates: { canonical: 'https://wanderlust-travel.com/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
