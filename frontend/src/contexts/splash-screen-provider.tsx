"use client";
import SplashScreen from "@/components/global/spalsh-screen";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);
  return <>{showSplash ? <SplashScreen /> : children}</>;
};

export default SplashScreenProvider;
