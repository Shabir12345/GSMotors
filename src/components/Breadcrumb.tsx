'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items?: Breadcrumb[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  // Default breadcrumb from path if not provided
  let breadcrumbs: Breadcrumb[] = items || [];

  if (!items && pathname) {
    const pathSegments = pathname
      .split('/')
      .filter(segment => segment)
      .slice(0, -1); // Exclude last segment (current page)

    breadcrumbs = [];
    let href = '';

    // Add home
    breadcrumbs.push({ name: 'Home', href: '/' });

    // Add each path segment
    pathSegments.forEach((segment, index) => {
      href += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ name, href });
    });
  }

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-gray-500">/</span>
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-brand-accent font-semibold">{breadcrumb.name}</span>
          ) : (
            <Link
              href={breadcrumb.href}
              className="text-gray-400 hover:text-brand-accent transition-colors"
            >
              {breadcrumb.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
