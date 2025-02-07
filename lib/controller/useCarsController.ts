// import { useEffect, useState } from 'react';
// import {
//   collection,
//   query,
//   limit,
//   startAfter,
//   getDocs,
//   DocumentSnapshot,
//   orderBy,
//   endBefore,
// } from 'firebase/firestore';
// import { db } from '../firebase';
// import { ProductCar } from '@/model/ProductCar';

// export const useCarsController = () => {
//   const [cars, setCars] = useState<ProductCar[]>([]);
//   const [lastVisible, setLastVisible] = useState<DocumentSnapshot>();
//   const [firstVisible, setFirstVisible] = useState<DocumentSnapshot>();
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true); // Mengatur apakah ada lebih banyak data untuk diambil

//   useEffect(() => {
//     fetchCars(); // Load data awal saat komponen pertama kali dirender
//   }, []);

//   const fetchCars = async () => {
//     setLoading(true);
//     try {
//       const carCollection = collection(db, 'cars');
//       const q = query(carCollection, orderBy('createAt', 'desc'), limit(5));

//       const snapshot = await getDocs(q);
//       if (snapshot.empty) {
//         setHasMore(false);
//         return;
//       }

//       const newCars = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as ProductCar[];

//       setCars(newCars);
//       setLastVisible(snapshot.docs[snapshot.docs.length - 1]); // Dokumen terakhir di halaman ini
//       setFirstVisible(snapshot.docs[0]); // Dokumen pertama di halaman ini

//       if (snapshot.docs.length < 5) {
//         setHasMore(false); // Jika jumlah dokumen kurang dari 5, tidak ada lagi data
//       }
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchMoreCars = async () => {
//     if (!lastVisible) return; // Jika tidak ada data lagi, hentikan

//     setLoading(true);
//     try {
//       const carCollection = collection(db, 'cars');
//       const q = query(
//         carCollection,
//         orderBy('createAt', 'desc'),
//         startAfter(lastVisible),
//         limit(5)
//       );

//       const snapshot = await getDocs(q);
//       if (snapshot.empty) {
//         setHasMore(false);
//         return;
//       }

//       const moreCars = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as ProductCar[];

//       setCars((prevCars) => [...prevCars, ...moreCars]); // Tambahkan data baru ke list yang ada
//       setLastVisible(snapshot.docs[snapshot.docs.length - 1]); // Dokumen terakhir di halaman ini

//       if (snapshot.docs.length < 5) {
//         setHasMore(false); // Jika jumlah dokumen kurang dari 5, tidak ada lagi data
//       }
//     } catch (error) {
//       console.error('Error fetching more cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPreviousCars = async () => {
//     if (!firstVisible) return; // Jika tidak ada data sebelumnya, hentikan

//     setLoading(true);
//     try {
//       const carCollection = collection(db, 'cars');
//       const q = query(
//         carCollection,
//         orderBy('createAt', 'desc'),
//         endBefore(firstVisible),
//         limit(5)
//       );

//       const snapshot = await getDocs(q);
//       if (snapshot.empty) {
//         setHasMore(false);
//         return;
//       }

//       const prevCars = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as ProductCar[];

//       setCars(prevCars.reverse()); // Tambahkan data baru ke list yang ada dan reverse untuk urutan yang benar
//       setLastVisible(snapshot.docs[snapshot.docs.length - 1]); // Dokumen terakhir di halaman ini
//       setFirstVisible(snapshot.docs[0]); // Dokumen pertama di halaman ini

//       if (snapshot.docs.length < 5) {
//         setHasMore(false); // Jika jumlah dokumen kurang dari 5, tidak ada lagi data
//       }
//     } catch (error) {
//       console.error('Error fetching previous cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     hasMore,
//     cars,
//     loading,
//     fetchMoreCars,
//     fetchPreviousCars,
//     firstVisible,
//     lastVisible,
//   };
// };
