// import { db } from '@/lib/firebase';
// import { Rental } from '@/model/Rental';
// import { collection, getDocs } from 'firebase/firestore';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const rentalDocs = await getDocs(collection(db, 'rental'));

//     const rentals = rentalDocs.docs.map((doc) => {
//       const data = doc.data() as Rental;
//       return { ...data, id: doc.id };
//     });

//     return NextResponse.json(rentals);
//   } catch (error) {
//     console.error('Error fetching rentals:', error);
//     return NextResponse.json({ error: 'Failed to fetch rentals' });
//   }
// }
