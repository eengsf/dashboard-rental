// import { db } from '@/lib/firebase';
// import { UserData } from '@/model/UserData';
// import { collection, getDocs } from 'firebase/firestore';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const userDocs = await getDocs(collection(db, 'users'));

//     const users = userDocs.docs.map((doc) => {
//       const data = doc.data() as UserData;
//       return { ...data, id: doc.id };
//     });

//     return NextResponse.json(users);
//   } catch (error) {
//     console.error('Error fetching cars:', error);
//     return NextResponse.json({ error: 'Failed to fetch cars' });
//   }
// }
