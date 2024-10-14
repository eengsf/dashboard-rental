export interface Rental {
  id: string;
  carId: string;
  userId: string;

  wilayah: string;
  days: number;
  startTime: string;
  endTime: string;
  totalPrice: number;
  withDriver: boolean;

  createdAt: Date;
}
