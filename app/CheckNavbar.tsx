'use client';

import { usePathname } from 'next/navigation';
// import Navbar from '@/components/Navbar';

export default function CheckNavbar() {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) {
    // return <Navbar />;
  }
  return null;
}
