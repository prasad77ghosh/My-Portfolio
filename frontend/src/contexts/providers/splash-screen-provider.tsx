"use client";
import SplashScreen from "@/components/global/spalsh-screen";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
    } else {
      setShowSplash(false);
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

  if (showSplash) {
    return <SplashScreen />;
  }

  return <>{children}</>;
};

export default SplashScreenProvider;
