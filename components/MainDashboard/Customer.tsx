'use client';

import Image from 'next/image';
import { UserData } from '@/model/UserData';

const Customer = ({ users }: { users: UserData[] }) => {
  return (
    <div className="w-full h-full md:px-5 sm:px-3.5 px-0 pb-5 flex-grow  overflow-y-auto">
      <div className="w-full h-full flex flex-col px-7 pt-3 bg-custom-light xs:shadow-lg shadow-none xs:rounded-lg rounded-none ">
        <div className="w-full flex justify-between py-4">
          <div className="flex flex-grow ">
            <h2 className="font-bold text-custom-dark">All Customers</h2>
          </div>
        </div>
        <div className={`flex w-full h-fit max-h-[calc(100%-110px)]`}>
          <div className={`w-full h-full overflow-y-auto scrollbar-none `}>
            <table
              className={`w-full h-full whitespace-nowrap shrink-0 divide-y `}
            >
              <thead className="sticky -top-1 bg-custom-light">
                <tr>
                  <th className="text-start p-3 text-sm">No</th>
                  <th className="text-start p-3 text-sm">Name</th>
                  <th className={`text-start p-3 text-sm`}>Email</th>
                  <th className={`text-start p-3 text-sm`}>Phone</th>
                  <th className={`text-start p-3 text-sm`}>Address</th>
                  <th className={`text-start p-3 text-sm`}>No SIM</th>
                  <th className={`text-start p-3 text-sm`}>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y overflow-x-auto">
                {users.map((item: UserData, index) => (
                  <tr key={index}>
                    <td className={`p-3 text-sm`}>{index + 1}</td>
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
                        priority
                        className="rounded-full w-7 h-7"
                      />
                      {item.name}
                    </td>
                    <td className={`p-3 text-sm`}>{item.email}</td>
                    <td className={`p-3 text-sm`}>{item.phone}</td>
                    <td className={`p-3 text-sm`}>{item.address}</td>
                    <td className={`p-3 text-sm`}>{item.noSIM}</td>
                    <td className={`p-3 text-sm`}>active</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
