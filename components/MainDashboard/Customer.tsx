'use client';

import Image from 'next/image';
import { BsSortUp } from 'react-icons/bs';
import { RiFilter2Fill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { UserData } from '@/model/UserData';

const Customer = ({ users }: { users: UserData[] }) => {
  return (
    <div className="w-full h-full md:px-5 sm:px-3.5 px-0 pb-5 flex-grow  overflow-y-auto">
      <div className="w-full h-full flex flex-col px-7 pt-3 bg-custom-light xs:shadow-lg shadow-none xs:rounded-lg rounded-none ">
        <div className="w-full flex justify-between py-4">
          <div className="flex flex-grow ">
            <h2 className="font-bold text-custom-dark">All Cars</h2>
          </div>
          <div className="flex gap-7 ">
            <div className="flex gap-1 items-center">
              <BsSortUp size={18} className="text-custom-main3" />
              <p className="text-sm text-custom-main3 xs:block hidden">
                Sorting
              </p>
              <IoIosArrowDown size={18} className="text-custom-main3" />
            </div>
            <div className="flex gap-1 items-center">
              <RiFilter2Fill size={18} className="text-custom-main3" />
              <p className="text-sm text-custom-main3 xs:block hidden">
                Filtering
              </p>
              <IoIosArrowDown size={18} className="text-custom-main3" />
            </div>
          </div>
        </div>
        <div className={`flex w-full h-fit max-h-[calc(100%-110px)]`}>
          <div className={`w-full h-full overflow-y-auto scrollbar-none `}>
            <table
              className={`w-full h-full whitespace-nowrap shrink-0 divide-y `}
            >
              <thead className="sticky -top-1 bg-custom-light">
                <tr>
                  <th className="text-start p-3 text-sm">Name</th>
                  <th className={`text-start p-3 text-sm`}>Email</th>
                  <th className={`text-start p-3 text-sm`}>Phone</th>
                  <th className={`text-start p-3 text-sm`}>Address</th>
                  <th className={`text-start p-3 text-sm`}>No SIM</th>
                  <th className={`text-start p-3 text-sm`}>Status</th>
                  <th className={`text-start p-3 text-sm`}>Action</th>
                </tr>
              </thead>
              <tbody className="divide-y overflow-x-auto">
                {users.map((item: UserData, index) => (
                  <tr key={index}>
                    <td className="flex items-center gap-2 p-3 text-sm truncate">
                      <Image
                        src={`${
                          item.profilePhotoUrl
                            ? item.profilePhotoUrl
                            : '/user.png'
                        }`}
                        alt="user"
                        width={20}
                        height={20}
                        className="rounded-full w-7 h-7"
                      />
                      {item.name}
                    </td>
                    <td className={`p-3 text-sm`}>{item.email}</td>
                    <td className={`p-3 text-sm`}>{item.phone}</td>
                    <td className={`p-3 text-sm`}>{item.address}</td>
                    <td className={`p-3 text-sm`}>{item.noSIM}</td>
                    <td className={`p-3 text-sm`}>active</td>
                    <td className={`p-3 text-sm`}>edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex sm:justify-end justify-between gap-8 py-3.5 ">
          <span className="flex items-center gap-1 text-sm text-custom-main3">
            Row per page: 5{' '}
            <IoIosArrowDown size={18} className="text-sm text-custom-main3" />
          </span>
          <span className="flex items-center gap-1 text-sm text-custom-main3">
            5 - 10 of 100{' '}
            <IoIosArrowBack size={18} className="text-sm text-custom-main3" />{' '}
            <IoIosArrowForward
              size={18}
              className="text-sm text-custom-main3"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Customer;
