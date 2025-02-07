// 'use client';

// import { useSelector } from 'react-redux';
// import { RootState } from '@/store';
// import Overview from '@/components/MainDashboard/Overview';
// import CarList from '@/components/MainDashboard/CarList';
// import Customer from '@/components/MainDashboard/Customer';
// import RentalList from '@/components/MainDashboard/RentalList';
// import Logout from '@/components/MainDashboard/Logout';
// import Setting from '@/components/MainDashboard/Setting';
// import { ProductCar } from '@/model/ProductCar';
// import { UserData } from '@/model/UserData';
// import { Rental } from '@/model/Rental';
// import CarManagement from './MainDashboard/CarManagement';
// import CarForm from './CarForm';

// function Dashboard({
//   cars,
//   users,
//   rentals,
// }: {
//   cars: ProductCar[];
//   users: UserData[];
//   rentals: Rental[];
// }) {
//   const { refMain } = useSelector((state: RootState) => state.counterSlice);
//   return (
//     <>
//       {refMain.name === 'Overview' ? (
//         <Overview />
//       ) : refMain.name === 'Car List' ? (
//         <CarList cars={cars} />
//       ) : refMain.name === 'Customer' ? (
//         <Customer users={users} />
//       ) : refMain.name === 'Rental List' ? (
//         <RentalList users={users} cars={cars} rentals={rentals} />
//       ) : refMain.name === 'Logout' ? (
//         <Logout />
//       ) : refMain.name === 'Setting' ? (
//         <Setting />
//       ) : refMain.name === 'Car Management' && refMain.id ? (
//         <CarForm id={refMain.id} cars={cars} />
//       ) : refMain.name === 'Car Management' && !refMain.id ? (
//         <CarManagement />
//       ) : null}
//     </>
//   );
// }

// export default Dashboard;
