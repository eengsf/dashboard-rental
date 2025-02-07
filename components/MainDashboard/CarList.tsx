'use client';

import Image from 'next/image';
import { BsSortUp } from 'react-icons/bs';
import { RiFilter2Fill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { ProductCar } from '@/model/ProductCar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRefMain } from '@/store/slice/counterSlice';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const CarList = ({ cars }: { cars: ProductCar[] }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
  const [sorting, setSorting] = useState<string>('');
  const [filtering, setFiltering] = useState<string>('');
  const [showCars, setShowCars] = useState<ProductCar[]>(cars);

  const applySortingAndFiltering = (
    cars: ProductCar[],
    sortType: string,
    filterType: string
  ) => {
    let filteredCars = [...cars];

    if (filterType === 'With Driver') {
      filteredCars = filteredCars.filter((car) => car.withDriver);
    } else if (filterType === 'Self Drive') {
      filteredCars = filteredCars.filter((car) => !car.withDriver);
    } else if (filterType === '2 Seat') {
      filteredCars = filteredCars.filter((car) => car.seat === 2);
    } else if (filterType === '4 Seat') {
      filteredCars = filteredCars.filter((car) => car.seat === 4);
    } else if (filterType === '6 Seat') {
      filteredCars = filteredCars.filter((car) => car.seat === 6);
    }

    if (sortType === 'New') {
      filteredCars = filteredCars.sort(
        (a, b) => Number(b.yearProduction) - Number(a.yearProduction)
      );
    } else if (sortType === 'Old') {
      filteredCars = filteredCars.sort(
        (a, b) => Number(a.yearProduction) - Number(b.yearProduction)
      );
    } else if (sortType === 'Highest Price') {
      filteredCars = filteredCars.sort((a, b) => b.price - a.price);
    } else if (sortType === 'Lowest Price') {
      filteredCars = filteredCars.sort((a, b) => a.price - b.price);
    }

    setShowCars(filteredCars);
  };

  const handleSort = (type: string) => {
    setSorting(type);
    applySortingAndFiltering(cars, type, filtering);
  };

  const handleFilter = (type: string) => {
    setFiltering(type);
    applySortingAndFiltering(cars, sorting, type);
  };

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex gap-1.5 items-center text-sm text-custom-main3">
                    <BsSortUp size={18} className="text-custom-main3" />
                    {sorting ? sorting : 'Sorting'} <IoIosArrowDown size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit">
                  <DropdownMenuLabel>Sorting</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={sorting}
                    onValueChange={handleSort}
                  >
                    <DropdownMenuRadioItem value="New">
                      New
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Old">
                      Old
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Highest Price">
                      Highest price
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Lowest Price">
                      Lowest price
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-1 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex gap-1.5 items-center text-sm text-custom-main3">
                    <RiFilter2Fill size={18} className="text-custom-main3" />
                    {filtering ? filtering : 'Filtering'}{' '}
                    <IoIosArrowDown size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit">
                  <DropdownMenuLabel>Filtering</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={filtering}
                    onValueChange={handleFilter}
                  >
                    <DropdownMenuRadioItem value="With Driver">
                      With Driver
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Self Drive">
                      Self Drive
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="2 Seat">
                      2 Seat
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="4 Seat">
                      4 Seat
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="6 Seat">
                      6 Seat
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
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
                  <th className="text-start p-3 text-sm">No</th>
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
                {showCars.map((item: ProductCar, index) => (
                  <tr key={index}>
                    <td className={`p-3 text-sm`}>{index + 1}</td>
                    <td className="p-3 text-sm w-64 truncate">
                      <div className="flex gap-2 items-center">
                        <div className="w-12">
                          <Image
                            src={`${item.imageurl}`}
                            alt="user"
                            width={100}
                            height={100}
                            priority
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
                    <td className={`p-3 text-sm`}>ready</td>

                    <td className={`p-3 text-sm`}>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(item.id)}
                          disabled={loading[item.id]}
                          className="border-2 border-blue-500 p-1 rounded-full hover:bg-blue-500 text-blue-500 hover:text-white"
                        >
                          <span>
                            <RiEdit2Fill size={20} />
                          </span>
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="border-2 border-red-500 p-1 rounded-full hover:bg-red-500 text-red-500 hover:text-white"
                        >
                          <span>
                            <MdDelete size={20} />
                          </span>
                        </button>
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
