import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/navbar";
import Shumline from "./Components/shumline";
import Footer from "./Components/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Church of Shum",
  description: "made with nextjs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    
        
        <body className="flex min-h-screen flex-col ml-10 mr-10 mt-10">
          <Navbar></Navbar>
          <div className="flex grow flex-row  pb-5">
            <div className="w-full">
              {children}
            </div>
            <div className="pl-5 ml-auto">
              <Shumline></Shumline>
            </div>
          </div>
          <Footer></Footer>
        
        
        </body>
    </html>
  );
}
