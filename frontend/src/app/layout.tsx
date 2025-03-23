import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreenProvider from "@/contexts/splash-screen-provider";
import MainNavbar from "@/components/global/navbar/main-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prasad Ghosh",
  description: "Prasad's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreenProvider>
          <div className="h-screen w-screen overflow-y-auto relative">
            <MainNavbar />
            {children}
          </div>
        </SplashScreenProvider>
      </body>
    </html>
  );
}
