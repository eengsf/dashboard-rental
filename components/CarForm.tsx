// 'use client';

// import { ProductCar } from '@/model/ProductCar';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// import { IoIosArrowDown } from 'react-icons/io';
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoIosArrowForward } from 'react-icons/io';
// import { FaImage } from 'react-icons/fa';
// import { useState } from 'react';
// import { RxCross2 } from 'react-icons/rx';
// import { Switch } from './ui/switch';
// import Image from 'next/image';
// import { useDispatch } from 'react-redux';
// import { setRefMain } from '@/store/slice/counterSlice';
// import { useRouter } from 'next/navigation';

// const CarForm = ({ id, cars }: { id: string; cars: ProductCar[] }) => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState<ProductCar>(
//     cars.find((car) => car.id === id) || ({} as ProductCar)
//   );
//   const [imageFile, setImageFile] = useState<File | null>(null);

//   const handleRemoveImage = () => {
//     setForm({ ...form, imageurl: '' });
//   };
//   const handlePlusMinus = (type: string) => {
//     if (type === 'minus') {
//       if (form.seat === 0) {
//         return;
//       }
//       setForm({ ...form, seat: form.seat - 1 });
//     }
//     if (type === 'plus') {
//       setForm({ ...form, seat: form.seat + 1 });
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     if (file) {
//       const filePreview = URL.createObjectURL(file);
//       setForm({ ...form, imageurl: filePreview });
//       setImageFile(file);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('description', form.description);
//     formData.append('yearProduction', form.yearProduction);
//     formData.append('withDriver', form.withDriver ? 'true' : 'false');
//     formData.append('price', form.price.toString());
//     formData.append('seat', form.seat.toString());
//     formData.append('transmission', form.transmission);
//     formData.append('typefuel', form.typefuel);
//     formData.append('ac', form.ac ? 'true' : 'false');
//     formData.append('imageurl', form.imageurl || '');
//     formData.append('city', form.city);
//     formData.append('status', form.status);

//     if (imageFile) {
//       formData.append('image', imageFile);
//     }

//     try {
//       const response = await fetch(`/api/productcar/${form.id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Car updated successfully');
//         router.refresh();
//         dispatch(setRefMain({ name: 'Car List', id: '' }));
//       } else {
//         console.error('Error updating car');
//       }
//     } catch (error) {
//       console.error('Error updating car:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full md:px-5 sm:px-3.5 px-0 overflow-y-auto">
//       <div className=" md:p-8 p-3.5 bg-custom-light shadow-lg xs:rounded-lg rounded-none">
//         <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <div className="flex items-center gap-5">
//             <h2 className="w-full text-xl font-bold justify-between">
//               Edit Car
//             </h2>

//             <button
//               type="submit"
//               disabled={loading}
//               className="py-2 px-5 rounded-lg bg-custom-main2 hover:bg-custom-main3 text-custom-main4 text-xs"
//             >
//               <span className="whitespace-nowrap">
//                 {loading ? 'Saving...' : 'Edit Car'}
//               </span>
//             </button>
//           </div>
//           <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
//             <div className="w-full flex flex-col gap-5 lg:order-1 order-2">
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="name-brand" className="text-sm font-semibold">
//                   Name brand
//                 </label>
//                 <Input
//                   id="name-brand"
//                   placeholder="Enter name brand"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="description" className="text-sm font-semibold">
//                   Description
//                 </label>
//                 <Textarea
//                   name="description"
//                   id="description"
//                   rows={3}
//                   placeholder="Enter description"
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm({ ...form, description: e.target.value })
//                   }
//                 ></Textarea>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="city" className="text-sm font-semibold">
//                   City
//                 </label>
//                 <Input
//                   id="city"
//                   placeholder="Enter city"
//                   value={form.city || ''}
//                   onChange={(e) => setForm({ ...form, city: e.target.value })}
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label
//                   htmlFor="year-production"
//                   className="text-sm font-semibold"
//                 >
//                   Year production
//                 </label>
//                 <Input
//                   id="year-production"
//                   type="text"
//                   placeholder="Enter year production"
//                   value={form.yearProduction}
//                   onChange={(e) =>
//                     setForm({ ...form, yearProduction: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="flex flex-wrap gap-5">
//                 <div className="w-fit flex gap-2 items-center">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <button className="flex gap-1 items-center text-sm font-semibold">
//                         Transmission <IoIosArrowDown size={18} />
//                       </button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="w-fit">
//                       <DropdownMenuLabel>Transmission</DropdownMenuLabel>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuRadioGroup
//                         value={form.transmission}
//                         onValueChange={(value) =>
//                           setForm({ ...form, transmission: value })
//                         }
//                       >
//                         <DropdownMenuRadioItem value="manual">
//                           Manual
//                         </DropdownMenuRadioItem>
//                         <DropdownMenuRadioItem value="matic">
//                           Matic
//                         </DropdownMenuRadioItem>
//                       </DropdownMenuRadioGroup>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <button className="flex gap-1 items-center text-sm font-semibold">
//                         Typefuel <IoIosArrowDown size={18} />
//                       </button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="w-fit">
//                       <DropdownMenuLabel>Typefuel</DropdownMenuLabel>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuRadioGroup
//                         value={form.typefuel}
//                         onValueChange={(value) =>
//                           setForm({ ...form, typefuel: value })
//                         }
//                       >
//                         <DropdownMenuRadioItem value="petrol">
//                           Petrol
//                         </DropdownMenuRadioItem>
//                         <DropdownMenuRadioItem value="electric">
//                           Electric
//                         </DropdownMenuRadioItem>
//                         <DropdownMenuRadioItem value="hybrid">
//                           Hybrid
//                         </DropdownMenuRadioItem>
//                       </DropdownMenuRadioGroup>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <label htmlFor="seat" className="text-sm font-semibold">
//                     Seat
//                   </label>
//                   <div className="flex items-center">
//                     <IoIosArrowBack
//                       size={18}
//                       onClick={() => handlePlusMinus('minus')}
//                       className="cursor-pointer "
//                     />
//                     <Input
//                       id="seat"
//                       type="text"
//                       value={form.seat}
//                       readOnly
//                       className="px-0 py-0 w-8 text-center border-none"
//                     />
//                     <IoIosArrowForward
//                       size={18}
//                       onClick={() => handlePlusMinus('plus')}
//                       className="cursor-pointer "
//                     />
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Switch
//                     id="ac"
//                     name="ac"
//                     checked={form.ac}
//                     onCheckedChange={() => setForm({ ...form, ac: !form.ac })}
//                   />
//                   <label htmlFor="ac" className="text-sm font-semibold">
//                     AC
//                   </label>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="price" className="text-sm font-semibold">
//                     Price hire
//                   </label>
//                   <div className="flex items-center gap-2">
//                     <Switch
//                       name="with-driver"
//                       id="with-driver"
//                       checked={form.withDriver}
//                       onCheckedChange={() =>
//                         setForm({ ...form, withDriver: !form.withDriver })
//                       }
//                     />
//                     <label
//                       htmlFor="with-driver"
//                       className="text-sm font-semibold"
//                     >
//                       With driver?
//                     </label>
//                   </div>
//                 </div>
//                 <Input
//                   id="price"
//                   type="number"
//                   min={0}
//                   placeholder="Enter price hire"
//                   value={form.price}
//                   onChange={(e) =>
//                     setForm({ ...form, price: parseInt(e.target.value) })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="w-full h-full flex flex-col gap-1 lg:order-2 order-1 ">
//               <h2 className="text-sm font-semibold">Upload Image</h2>
//               <div className="border border-dashed border-custom-main3 w-full lg:h-full h-80 flex flex-col gap-3 justify-center items-center rounded-lg relative overflow-hidden">
//                 <Input
//                   type="file"
//                   id="upload-image"
//                   onChange={handleFileChange}
//                   accept="image/png, image/jpeg, image/jpg"
//                   className="absolute w-[100%] h-[100%] opacity-0"
//                 />
//                 {form.imageurl ? (
//                   <>
//                     <Image
//                       src={`${form.imageurl ? form.imageurl : ''}`}
//                       alt="car"
//                       width={500}
//                       height={500}
//                       priority
//                       className="object-cover w-auto h-auto "
//                     />
//                     <button
//                       onClick={handleRemoveImage}
//                       className="absolute top-3 right-3"
//                     >
//                       <RxCross2 size={30} />
//                     </button>
//                   </>
//                 ) : (
//                   <div className="flex flex-col gap-1 items-center z-10 ">
//                     <FaImage size={30} className="text-custom-main3" />
//                     <p>
//                       <label
//                         htmlFor="upload-image"
//                         className="text-blue-700 underline cursor-pointer"
//                       >
//                         Click to upload
//                       </label>{' '}
//                       or drag and drop
//                     </p>
//                     <p>Max file size: 500kb</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CarForm;
