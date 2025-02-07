import Dashboard from '@/components/Dashboard';
import { ProductCar } from '@/model/ProductCar';

const fetchCars = async (): Promise<ProductCar[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productcar`,
      {
        cache: 'no-store',
      }
    );
    const cars = await response.json();
    return cars;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const fetchUsers = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/userdata`,
      {
        cache: 'no-store',
      }
    );
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};
const fetchRentals = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/rental`,
      {
        cache: 'no-store',
      }
    );
    const rentals = await response.json();
    return rentals;
  } catch (error) {
    console.error(error);
  }
};

const Page = async () => {
  const cars = await fetchCars();
  const users = await fetchUsers();
  const rentals = await fetchRentals();

  if (!cars || !users || !rentals) {
    return <p>Loading...</p>;
  }

  return <Dashboard cars={cars} users={users} rentals={rentals} />;
};

export default Page;
