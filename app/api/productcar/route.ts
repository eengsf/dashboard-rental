import { db, storage } from '@/lib/firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ProductCar } from '@/model/ProductCar';

export async function GET() {
  try {
    const carDocs = await getDocs(collection(db, 'cars'));

    const cars = carDocs.docs.map((doc) => {
      const data = doc.data() as ProductCar;
      return { ...data, id: doc.id };
    });

    return NextResponse.json(cars);
  } catch (error) {
    console.error('Error fetching rentals:', error);
    return NextResponse.json({ error: 'Failed to fetch rentals' });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const yearProduction = formData.get('yearProduction') as string;
    const withDriver = formData.get('withDriver') === 'true';
    const price = parseFloat(formData.get('price') as string);
    const seat = parseInt(formData.get('seat') as string, 10);
    const transmission = formData.get('transmission') as string;
    const typefuel = formData.get('typefuel') as string;
    const ac = formData.get('ac') === 'true';
    const city = formData.get('city') as string;

    const imageFile = formData.get('image') as Blob;

    const newCar = {
      name,
      description,
      yearProduction,
      withDriver,
      price,
      seat,
      transmission,
      typefuel,
      ac,
      city,
      createAt: new Date(),
    };

    const docRef = await addDoc(collection(db, 'cars'), newCar);

    const imageRef = ref(storage, `cars/${docRef.id}`);
    await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);

    await updateDoc(doc(db, 'cars', docRef.id), {
      id: docRef.id,
      imageurl: imageUrl,
    });

    return NextResponse.json({ message: 'Car added successfully' });
  } catch (error) {
    console.error('Error adding car:', error);
    return NextResponse.json({ error: 'Failed to add car' });
  }
}
