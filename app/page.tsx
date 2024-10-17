'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaApple } from 'react-icons/fa';

function Page() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    router.push('/dashboard');
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-custom-main4">
        <div className="w-full xs:max-w-96 xs:h-fit h-full flex flex-col gap-5 bg-custom-light xs:border border-none xs:rounded-xl rounded-none xs:shadow-lg shadow-none xs:p-7 p-5">
          <div className="flex flex-col items-center gap-5">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-custom-main1">
                Welcome back
              </h2>
              <p className="text-xs text-custom-main2">
                Sementara waktu langsung login saja
              </p>
            </div>
          </div>

          <form action="" onSubmit={handleLogin}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label className="font-semibold">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={'admin@gmail.com'}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="font-semibold">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={'password123'}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  disabled
                />
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" className="cursor-pointer" />
                    <Label className="font-semibold">Remember me</Label>
                  </div>
                  <p className="text-sm hover:text-custom-main1 cursor-pointer">
                    Forgot Password?
                  </p>
                </div>
              </div>
              <Button
                type="submit"
                size={'lg'}
                disabled={loading}
                className="bg-gradient-to-r from-custom-main1 to-custom-main4"
              >
                {loading ? 'Loading...' : 'Login'}{' '}
              </Button>
            </div>
          </form>

          <div className="flex items-center">
            <div className="flex-grow border-t border-custom-main2"></div>
            <span className="text-sm text-custom-main2 mx-4">or</span>
            <div className="flex-grow border-t border-custom-main2"></div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Button
              variant={'secondary'}
              size={'lg'}
              className="flex gap-1 items-center"
              disabled={loading}
            >
              <FaApple size={25} />
              Continue with Apple
            </Button>
            <Button
              variant={'secondary'}
              size={'lg'}
              className="flex gap-1 items-center"
              disabled={loading}
            >
              <Image src="/google.png" alt="google" width={28} height={28} />
              {loading ? 'Logging in with Google...' : 'Continue with Google'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
