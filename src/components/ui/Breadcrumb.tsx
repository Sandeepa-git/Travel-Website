"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-6 py-4">
      <ol className="flex items-center gap-2 flex-wrap text-sm font-medium">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-muted hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
            aria-label="Home"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-muted/50" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary dark:text-white font-bold">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
