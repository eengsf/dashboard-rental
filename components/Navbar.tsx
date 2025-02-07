'use client';

import Image from 'next/image';

import { IoNotifications } from 'react-icons/io5';
import { TbMinusVertical } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import Hamburger from './Hamburger';
import Search from './Navbar/Search';
import { RootState } from '@/store';

function Navbar() {
  const { refMain } = useSelector((state: RootState) => state.counterSlice);
  return (
    <div className="flex flex-shrink-0 justify-between h-16 w-full items-center md:px-5 px-3.5 ">
      <div className="flex items-center gap-3">
        <Hamburger />
        <h2 className="font-bold text-xl text-custom-dark">{refMain.name}</h2>
      </div>
      <div className="flex gap-5 items-center">
        <Search />
        <div className="flex items-center">
          <IoNotifications
            size={20}
            className="text-custom-main3 cursor-pointer"
          />
          <TbMinusVertical
            size={30}
            className="text-custom-main3 sm:block hidden"
          />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="md:block hidden">Shofiyul Fuad</span>
          <Image
            src="/user.png"
            width={30}
            height={30}
            alt="profile"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
