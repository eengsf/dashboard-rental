'use client';

import Image from 'next/image';
import { BsSortUp } from 'react-icons/bs';
import { RiFilter2Fill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { ProductCar } from '@/model/ProductCar';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRefMain } from '@/store/slice/counterSlice';

const CarList = ({ cars }: { cars: ProductCar[] }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const handleEdit = (id: string) => {
    setLoading({ ...loading, [id]: true });
    dispatch(setRefMain({ name: 'Car Management', id: id }));
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      'Apakah Anda yakin ingin menghapus data ini?'
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(`/api/productcar/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        router.refresh();
      } else {
        console.error('Error deleting car:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="w-full h-full md:px-5 sm:px-3.5 px-0 pb-5 flex-grow  overflow-y-auto">
      <div className="w-full h-full flex flex-col px-7 py-3 bg-custom-light shadow-lg xs:rounded-lg rounded-none">
        <div className="w-full flex justify-between py-4">
          <div className="flex flex-grow ">
            <h2 className="font-bold text-custom-dark">All Cars</h2>
          </div>
          <div className="flex gap-7">
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
        <div className={`flex w-full h-fit max-h-[calc(100%-70px)]`}>
          <div className={`w-full h-full overflow-y-auto scrollbar-none `}>
            <table
              className={`w-full h-full whitespace-nowrap shrink-0 divide-y`}
            >
              <thead className="sticky -top-1 bg-custom-light">
                <tr>
                  <th className="text-start p-3 text-sm">Name Brand</th>
                  <th className="text-start p-3 text-sm">Description</th>
                  <th className={`text-start p-3 text-sm`}>Specification</th>
                  <th className={`text-start p-3 text-sm`}>City</th>
                  <th className={`text-start p-3 text-sm`}>With Driver</th>
                  <th className={`text-start p-3 text-sm`}>Year</th>
                  <th className={`text-start p-3 text-sm`}>Price Hire</th>
                  <th className={`text-start p-3 text-sm`}>Status</th>
                  <th className={`text-start p-3 text-sm`}>Action</th>
                </tr>
              </thead>
              <tbody className="divide-y overflow-x-auto">
                {cars.map((item: ProductCar, index) => (
                  <tr key={index}>
                    <td className="p-3 text-sm w-full max-w-64 truncate">
                      <div className="flex gap-2 items-center">
                        <div className="w-12">
                          <Image
                            src={`${item.imageurl}`}
                            alt="user"
                            width={100}
                            height={100}
                            className="w-10 "
                          />
                        </div>
                        {item.name}
                      </div>
                    </td>
                    <td className={`p-3 text-sm w-full max-w-64 truncate`}>
                      {item.description}
                    </td>
                    <td className={`p-3 text-xs`}>
                      <div className="grid grid-cols-4 gap-2 w-full min-w-64">
                        <span className="bg-red-500 py-0.5 px-2 rounded-full text-center w-full">
                          {item.seat} seat
                        </span>
                        <span className="bg-yellow-500 py-0.5 px-2 rounded-full text-center w-full">
                          {item.typefuel}
                        </span>
                        <span className="bg-green-500 py-0.5 px-2 rounded-full text-center w-full">
                          {item.transmission}
                        </span>
                        <span className="bg-blue-500 py-0.5 px-2 rounded-full text-center w-full">
                          {item.ac ? 'AC' : 'Non AC'}
                        </span>
                      </div>
                    </td>
                    <td className={`p-3 text-sm`}>{item.city}</td>
                    <td className={`p-3 text-sm`}>
                      {item.withDriver ? 'Yes' : 'No'}
                    </td>
                    <td className={`p-3 text-sm`}>{item.yearProduction}</td>
                    <td className={`p-3 text-sm`}>${item.price}/hour</td>
                    <td className={`p-3 text-sm`}>availableStatus</td>

                    <td className={`p-3 text-sm`}>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEdit(item.id)}
                          disabled={loading[item.id]}
                        >
                          {loading[item.id] ? 'Loading...' : 'Edit'}
                        </Button>
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </div>
                    </td>
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

export default CarList;
