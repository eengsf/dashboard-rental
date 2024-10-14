'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function CheckSideBar() {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) {
    return <Sidebar />;
  }
  return null;
}
