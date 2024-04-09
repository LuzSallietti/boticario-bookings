'use client';
import {  
  CalendarDaysIcon,
  HomeIcon  
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio', href: '/admin', icon: HomeIcon },
  {
    name: 'Reservas',
    href: '/admin/reservas',
    icon: CalendarDaysIcon,
  } 
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-emerald-50 p-3 text-sm font-medium hover:bg-emerald-100 hover:text-emerald-900 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-emerald-100 text-emerald-900': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}