'use client';

import { ProductCar } from '@/model/ProductCar';
import { Rental } from '@/model/Rental';
import { UserData } from '@/model/UserData';
import Image from 'next/image';
import { BsSortUp } from 'react-icons/bs';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from 'react-icons/io';
import { RiFilter2Fill } from 'react-icons/ri';

function Order({
  users,
  cars,
  rentals,
}: {
  users: UserData[];
  cars: ProductCar[];
  rentals: Rental[];
}) {
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
                  <th className={`text-start p-3 text-sm`}>Product Car</th>
                  <th className="text-start p-3 text-sm">Name</th>
                  <th className={`text-start p-3 text-sm`}>Rental Start</th>
                  <th className={`text-start p-3 text-sm`}>Rental End</th>
                  <th className={`text-start p-3 text-sm`}>With Driver</th>
                  <th className={`text-start p-3 text-sm`}>Total Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y overflow-x-auto">
                {rentals.map((item, index) => {
                  const itemCar = cars.find((car) => car.id === item.carId);
                  const itemUser = users.find(
                    (user) => user.id === item.userId
                  );
                  return (
                    <tr key={index}>
                      <td className="p-3 text-sm w-full max-w-64 truncate">
                        <div className="flex gap-2 items-center">
                          <div className="w-12">
                            <Image
                              src={`${itemCar?.imageurl}`}
                              alt="user"
                              width={100}
                              height={100}
                              className="w-10 "
                            />
                          </div>
                          {itemCar?.name}
                        </div>
                      </td>
                      <td className={`p-3 text-sm`}>{itemUser?.name}</td>
                      <td className={`p-3 text-sm`}>
                        {item.startTime.replace('T', ' / ')}
                      </td>
                      <td className={`p-3 text-sm`}>
                        {item.endTime.replace('T', ' / ')}
                      </td>
                      <td className={`p-3 text-sm`}>
                        {item.withDriver ? 'Yes' : 'No'}
                      </td>
                      <td className={`p-3 text-sm`}>
                        ${item.totalPrice} / {item.days} days
                      </td>
                    </tr>
                  );
                })}
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
}

export default Order;
