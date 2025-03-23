"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useEffect, useState } from "react";

const TypeWriter = () => {
  const wordSets = [
    [{ text: "Software" }, { text: "Developer" }],
    [{ text: "Frontend" }, { text: "Developer" }],
    [{ text: "Backend" }, { text: "Developer" }],
    [{ text: "Full-Stack" }, { text: "Developer" }],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState(wordSets[0]);

  useEffect(() => {
    const totalCycleTime = 5000; // 2s forward + 1s hold + 2s reverse

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, totalCycleTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Change words *after* the reverse animation completes (exactly at 5s)
    const timeout = setTimeout(() => {
      setWords(wordSets[currentIndex]);
    }, 4000); // 2s forward + 1s hold + 1s into reverse

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return <TypewriterEffectSmooth words={words} />;
};

export default TypeWriter;
