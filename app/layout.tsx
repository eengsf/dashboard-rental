import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ProviderStore from './ProviderStore';
import CheckSideBar from './CheckSideBar';
import CheckNavbar from './CheckNavbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderStore>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-custom-dark `}
        >
          <div className="w-screen h-full flex bg-custom-main4 relative">
            <CheckSideBar />
            <div className="md:w-fit w-full h-screen flex flex-col md:gap-5 gap-1 md:flex-grow overflow-y-auto">
              <CheckNavbar />
              {children}
            </div>
          </div>
        </body>
      </ProviderStore>
    </html>
  );
}
