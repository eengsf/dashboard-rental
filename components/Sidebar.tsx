'use client';

import { useSelector } from 'react-redux';
import SidebarMode from './Sidebar/SidebarMode';
import { RootState } from '@/store';

function Sidebar() {
  const { burger } = useSelector((state: RootState) => state.counterSlice);
  return (
    <div className="h-screen">
      <div className="w-56 h-full md:flex hidden flex-col gap-3 bg-custom-main1">
        <SidebarMode />
      </div>
      <div
        className={`w-56 h-screen md:hidden flex flex-col gap-3 bg-custom-main1 absolute transition-all duration-700 z-40 ${
          burger ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <SidebarMode />
      </div>
    </div>
  );
}

export default Sidebar;
