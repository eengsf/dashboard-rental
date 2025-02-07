'use client';

import { FaChartPie, FaCar, FaIdCard } from 'react-icons/fa';
import { MdMarkunreadMailbox } from 'react-icons/md';
import { BsBorderStyle } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBurger } from '@/store/slice/counterSlice';
import { setRefMain } from '@/store/slice/counterSlice';

import { AppDispatch, RootState } from '@/store';

const ListSidebar = ({
  icon,
  label,
  active,
  setActive,
  dispatch,
}: {
  icon: JSX.Element;
  label: string;
  active: string;
  setActive: (label: string) => void;
  dispatch: AppDispatch;
}) => {
  const isActive = active === label;

  const handleClick = () => {
    setActive(label);
    dispatch(setBurger(false));
    dispatch(
      setRefMain({
        name: label,
        id: '',
      })
    );
  };

  return (
    <span
      className={`flex gap-3 border-s-4 py-3 px-5 cursor-pointer ${
        isActive
          ? 'border-custom-light text-custom-light bg-custom-main2'
          : 'border-transparent text-custom-main3 bg-none'
      }`}
      onClick={() => handleClick()}
    >
      {icon}
      {label}
    </span>
  );
};

function SidebarMode() {
  const [active, setActive] = useState('Overview');
  const dispatch = useDispatch();
  const { refMain } = useSelector((state: RootState) => state.counterSlice);

  return (
    <>
      <div className="h-16 w-full flex justify-center items-center">
        <h1 className="text-white font-bold text-2xl">Carentall</h1>
      </div>
      <hr />
      <div className="flex flex-col py-3">
        <ListSidebar
          icon={<FaChartPie size={20} />}
          label="Overview"
          active={active}
          setActive={setActive}
          dispatch={dispatch}
        />
        <ListSidebar
          icon={<FaCar size={20} />}
          label="Car List"
          active={refMain.id ? 'Car Management' : active}
          setActive={setActive}
          dispatch={dispatch}
        />
        <ListSidebar
          icon={<MdMarkunreadMailbox size={20} />}
          label="Car Management"
          active={refMain.id ? 'Car Management' : active}
          setActive={setActive}
          dispatch={dispatch}
        />
        <ListSidebar
          icon={<FaIdCard size={20} />}
          label="Customer"
          active={active}
          setActive={setActive}
          dispatch={dispatch}
        />
        <ListSidebar
          icon={<BsBorderStyle size={20} />}
          label="Rental List"
          active={active}
          setActive={setActive}
          dispatch={dispatch}
        />
      </div>
      <hr />
      <div className="flex flex-col py-3">
        <ListSidebar
          icon={<IoSettingsSharp size={20} />}
          label="Setting"
          active={active}
          setActive={setActive}
          dispatch={dispatch}
        />
        <ListSidebar
          icon={<MdLogout size={20} />}
          label="Logout"
          active={active}
          setActive={setActive}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}

export default SidebarMode;
