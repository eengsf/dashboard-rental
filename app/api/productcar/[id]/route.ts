// app/api/cars/[id]/route.ts
import { db, storage } from '@/lib/firebase';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { ProductCar } from '@/model/ProductCar';

// Get product by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const docRef = doc(db, 'cars', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' });
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Check if document exists
    const docRef = doc(db, 'cars', id);
    const existingDoc = await getDoc(docRef);

    if (!existingDoc.exists()) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Delete the image from Firebase Storage
    const imageRef = ref(storage, `cars/${id}`);
    await deleteObject(imageRef).catch((error) => {
      console.warn('Error deleting image from storage:', error);
    });

    // Delete the Firestore document
    await deleteDoc(docRef);

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' });
  }
}

///////////////////////////////////////////////////////////////////////////

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const formData = await req.formData();

  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const yearProduction = formData.get('yearProduction') as string;
  const withDriver = formData.get('withDriver') === 'true';
  const price = parseFloat(formData.get('price') as string);
  const seat = parseInt(formData.get('seat') as string, 10);
  const transmission = formData.get('transmission') as string;
  const typefuel = formData.get('typefuel') as string;
  const ac = formData.get('ac') === 'true';

  const imageFile = formData.get('image') as Blob;

  try {
    const docRef = doc(db, 'cars', id);
    const existingDoc = await getDoc(docRef);

    if (!existingDoc.exists()) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const updates: Partial<ProductCar> = {
      name,
      description,
      yearProduction,
      withDriver,
      price,
      seat,
      transmission,
      typefuel,
      ac,
    };

    if (imageFile) {
      const imageRef = ref(storage, `cars/${id}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      updates.imageurl = imageUrl;
    }

    await updateDoc(docRef, updates);

    return NextResponse.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Failed to update product' });
  }
}
