// 'use client';

// import { ProductCar } from '@/model/ProductCar';
// import { Rental } from '@/model/Rental';
// import { UserData } from '@/model/UserData';
// import Image from 'next/image';
// import { BsSortUp } from 'react-icons/bs';
// import { IoIosArrowDown } from 'react-icons/io';
// // import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { RiFilter2Fill } from 'react-icons/ri';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { useState } from 'react';

// function Order({
//   users,
//   cars,
//   rentals,
// }: {
//   users: UserData[];
//   cars: ProductCar[];
//   rentals: Rental[];
// }) {
//   const [sorting, setSorting] = useState<string>('');
//   const [filtering, setFiltering] = useState<string>('');
//   const [showRentals, setShowRentals] = useState<Rental[]>(rentals);

//   const applySortingAndFiltering = (
//     rentals: Rental[],
//     sortType: string,
//     filterType: string
//   ) => {
//     let filteredRentals = [...rentals];

//     if (filterType === 'With Driver') {
//       filteredRentals = filteredRentals.filter((rental) => rental.withDriver);
//     } else if (filterType === 'Self Drive') {
//       filteredRentals = filteredRentals.filter((rental) => !rental.withDriver);
//     }

//     if (sortType === 'New') {
//       filteredRentals = filteredRentals.sort(
//         (a, b) => Number(b.startTime) - Number(a.startTime)
//       );
//     } else if (sortType === 'Old') {
//       filteredRentals = filteredRentals.sort(
//         (a, b) => Number(a.startTime) - Number(b.startTime)
//       );
//     } else if (sortType === 'Highest Price') {
//       filteredRentals = filteredRentals.sort(
//         (a, b) => b.totalPrice - a.totalPrice
//       );
//     } else if (sortType === 'Lowest Price') {
//       filteredRentals = filteredRentals.sort(
//         (a, b) => a.totalPrice - b.totalPrice
//       );
//     }

//     setShowRentals(filteredRentals);
//   };

//   const handleSort = (type: string) => {
//     setSorting(type);
//     applySortingAndFiltering(rentals, type, filtering);
//   };

//   const handleFilter = (type: string) => {
//     setFiltering(type);
//     applySortingAndFiltering(rentals, sorting, type);
//   };
//   return (
//     <div className="w-full h-full md:px-5 sm:px-3.5 px-0 pb-5 flex-grow  overflow-y-auto">
//       <div className="w-full h-full flex flex-col px-7 pt-3 bg-custom-light xs:shadow-lg shadow-none xs:rounded-lg rounded-none ">
//         <div className="w-full flex justify-between py-4">
//           <div className="flex flex-grow ">
//             <h2 className="font-bold text-custom-dark">All Rentals</h2>
//           </div>
//           <div className="flex gap-7 ">
//             <div className="flex gap-1 items-center">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="flex gap-1.5 items-center text-sm text-custom-main3">
//                     <BsSortUp size={18} className="text-custom-main3" />
//                     {sorting ? sorting : 'Sorting'} <IoIosArrowDown size={18} />
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-fit">
//                   <DropdownMenuLabel>Sorting</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuRadioGroup
//                     value={sorting ? sorting : 'New'}
//                     onValueChange={handleSort}
//                   >
//                     <DropdownMenuRadioItem value="New">
//                       New
//                     </DropdownMenuRadioItem>
//                     <DropdownMenuRadioItem value="Old">
//                       Old
//                     </DropdownMenuRadioItem>
//                     <DropdownMenuRadioItem value="Highest Price">
//                       Highest price
//                     </DropdownMenuRadioItem>
//                     <DropdownMenuRadioItem value="Lowest Price">
//                       Lowest price
//                     </DropdownMenuRadioItem>
//                   </DropdownMenuRadioGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//             <div className="flex gap-1 items-center">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="flex gap-1.5 items-center text-sm text-custom-main3">
//                     <RiFilter2Fill size={18} className="text-custom-main3" />
//                     {filtering ? filtering : 'Filtering'}{' '}
//                     <IoIosArrowDown size={18} />
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-fit">
//                   <DropdownMenuLabel>Filtering</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuRadioGroup
//                     value={filtering ? filtering : 'With Driver'}
//                     onValueChange={handleFilter}
//                   >
//                     <DropdownMenuRadioItem value="With Driver">
//                       With Driver
//                     </DropdownMenuRadioItem>
//                     <DropdownMenuRadioItem value="Self Drive">
//                       Self Drive
//                     </DropdownMenuRadioItem>
//                   </DropdownMenuRadioGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//         <div className={`flex w-full h-fit max-h-[calc(100%-110px)]`}>
//           <div className={`w-full h-full overflow-y-auto scrollbar-none `}>
//             <table
//               className={`w-full h-full whitespace-nowrap shrink-0 divide-y `}
//             >
//               <thead className="sticky -top-1 bg-custom-light">
//                 <tr>
//                   <th className={`text-start p-3 text-sm`}>No</th>
//                   <th className={`text-start p-3 text-sm`}>Name Car</th>
//                   <th className="text-start p-3 text-sm">Name</th>
//                   <th className={`text-start p-3 text-sm`}>Rental Start</th>
//                   <th className={`text-start p-3 text-sm`}>Rental End</th>
//                   <th className={`text-start p-3 text-sm`}>With Driver</th>
//                   <th className={`text-start p-3 text-sm`}>Total Cost</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y overflow-x-auto">
//                 {showRentals.map((item, index) => {
//                   const itemCar = cars.find((car) => car.id === item.carId);
//                   const itemUser = users.find(
//                     (user) => user.id === item.userId
//                   );
//                   return (
//                     <tr key={index}>
//                       <td className={`p-3 text-sm`}>{index + 1}</td>
//                       <td className="p-3 text-sm w-64 truncate">
//                         <div className="flex gap-2 items-center">
//                           <div className="w-12">
//                             <Image
//                               src={`${itemCar?.imageurl}`}
//                               alt="user"
//                               width={100}
//                               height={100}
//                               priority
//                               className="w-10 "
//                             />
//                           </div>
//                           {itemCar?.name}
//                         </div>
//                       </td>
//                       <td className={`p-3 text-sm`}>{itemUser?.name}</td>
//                       <td className={`p-3 text-sm`}>
//                         {item.startTime.replace('T', ' / ')}
//                       </td>
//                       <td className={`p-3 text-sm`}>
//                         {item.endTime.replace('T', ' / ')}
//                       </td>
//                       <td className={`p-3 text-sm`}>
//                         {item.withDriver ? 'Yes' : 'No'}
//                       </td>
//                       <td className={`p-3 text-sm`}>
//                         ${item.totalPrice} / {item.days} days
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         {/* <div className="flex sm:justify-end justify-between gap-8 py-3.5 ">
//           <span className="flex items-center gap-1 text-sm text-custom-main3">
//             Row per page: 5{' '}
//             <IoIosArrowDown size={18} className="text-sm text-custom-main3" />
//           </span>
//           <span className="flex items-center gap-1 text-sm text-custom-main3">
//             5 - 10 of 100{' '}
//             <IoIosArrowBack size={18} className="text-sm text-custom-main3" />{' '}
//             <IoIosArrowForward
//               size={18}
//               className="text-sm text-custom-main3"
//             />
//           </span>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Order;
