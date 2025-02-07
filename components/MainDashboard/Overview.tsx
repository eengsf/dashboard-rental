// import { BsCurrencyDollar } from 'react-icons/bs';
// import { FiUsers } from 'react-icons/fi';
// import { CiCreditCard1 } from 'react-icons/ci';
// import { IoCarSportOutline } from 'react-icons/io5';
// import ChartOverview from './Overview/ChartOverview';

// const summary = [
//   {
//     name: 'Total Revenue',
//     value: '$4,572.89',
//     persentase: '19.8%',
//     icon: <BsCurrencyDollar size={18} />,
//   },
//   {
//     name: 'Subscriptions',
//     value: '+125',
//     persentase: '101.7%',
//     icon: <FiUsers size={18} />,
//   },
//   {
//     name: 'Order',
//     value: '+73',
//     persentase: '25.5%',
//     icon: <CiCreditCard1 size={18} />,
//   },
//   {
//     name: 'Available',
//     value: '11',
//     persentase: '3',
//     icon: <IoCarSportOutline size={18} />,
//   },
// ];
// const summary2 = [
//   {
//     name: 'Lorem Ipsum',
//     value: '5,528',
//   },
//   {
//     name: 'Dolor Sit Amet',
//     value: '3,725',
//   },
//   {
//     name: 'Consectetur Adipisicing',
//     value: '21m',
//   },
//   {
//     name: 'Sunt Sapiente',
//     value: '87%',
//   },
// ];

// function Overview() {
//   return (
//     <div className="w-full h-full flex flex-col md:px-5 px-0 overflow-x-hidden ">
//       <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:gap-5 gap-2 pb-5 md:px-0 px-3.5">
//         {summary.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-1 p-4 border border-custom-main3 rounded-lg cursor-pointer bg-custom-light shadow-md "
//           >
//             <div className="flex justify-between items-center">
//               <h2 className="text-sm truncate">{item.name}</h2>
//               {item.icon}
//             </div>
//             <span className="text-2xl font-semibold">{item.value}</span>
//             <span className="text-xs text-custom-main3">
//               +{item.persentase} from last month
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="w-full grid md:grid-cols-4 grid-cols-1 md:divide-x divide-x-0 md:divide-y-0 divide-y divide-custom-main3 md:border border-custom-main3 mb-5 rounded-lg md:shadow-md shadow-none">
//         <div className="flex flex-col col-span-3 p-5 gap-5">
//           <div className="flex flex-col">
//             <h2 className="text-sm text-custom-dark font-bold">Overview</h2>
//             <p className="text-xs text-custom-main3">
//               Lorem ipsum dolor sit amet.
//             </p>
//           </div>
//           <ChartOverview />
//         </div>
//         <div className="col-span-1 grid grid-cols-1 divide-y divide-custom-main3">
//           {summary2.map((item, index) => (
//             <div
//               key={index}
//               className="w-full flex flex-col gap-1 items-center justify-center p-3"
//             >
//               <h2 className="text-sm text-custom-main3">{item.name}</h2>
//               <p className="text-2xl font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Overview;
