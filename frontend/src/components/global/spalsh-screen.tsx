"use client";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background";
import Image from "next/image";

const SplashScreen = () => {
  const textVariants = {
    hidden: { opacity: 0, x: 100, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0)",
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <WavyBackground className="w-full h-full flex justify-center gap-20">
      <motion.div
        initial={{ x: -200, opacity: 0, filter: "blur(10px) grayscale(100%)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0) grayscale(0%)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-[15vh]"
      >
        <img
          src="./assets/images/avatar.png"
          alt="avatar"
          className="w-[650px] h-[650px] drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start space-y-10 h-screen justify-center"
      >
        {["Hyy,", "I'm Prasad", "Welcome To My Space"].map((text, i) => (
          <motion.h1
            key={i}
            custom={i}
            variants={textVariants}
            className={`${
              i === 0
                ? "text-8xl font-rock"
                : i === 2
                ? "text-6xl font-rock"
                : "text-6xl ml-11 font-rock"
            } font-extrabold`}
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>
    </WavyBackground>
  );
};

export default SplashScreen;
