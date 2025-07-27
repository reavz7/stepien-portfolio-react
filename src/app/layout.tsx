import type { Metadata } from "next";
// In next js we can actually IMPORT THE FONTS FROM GOOGLE??? WHAT, thats super cool
import { Inter, Calistoga } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import { twMerge } from 'tailwind-merge'
import "./globals.css";


// configuration of fonts look, insane feature
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--latin-serif', weight: ['400'] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stepien- Portfolio",
  description: "A Stepien Kamil portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body
        className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
