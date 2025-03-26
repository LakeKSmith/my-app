
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import {assets} from '../assets/assets';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "The Interactive Portfolio of Lake Smith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth snap-y snap-mandatory">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}
      >
{/*         <Image src={assets.Background_1} alt="background" className='fixed w-full h-screen top-0 z-auto' />
 */}      <div className="fixed top-0 -z-10 w-full h-screen bg-gradient-to-r from-teal-950 via-green-950 to-emerald-800"></div>   
          {children}
      </body>
    </html>
  );
}
