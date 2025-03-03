"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";

const SplashScreen = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    anime({
      targets: pathRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <svg
      viewBox="0 0 500 200"
      width="500"
      height="200"
      fill="none"
      stroke="#3b82f6"
      strokeWidth=""
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        ref={pathRef}
        d="M20,100 C50,50 100,50 120,100 S180,150 200,100 S260,50 280,100 S340,150 360,100 S420,50 440,100"
        strokeDasharray="400"
        strokeDashoffset="400"
      />
    </svg>
  );
};

export default SplashScreen;
