// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[94vh] flex items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-indigo-500 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <Image
              src="/assets/images/avatar1.svg" // make sure the path is correct (public/assets/images/)
              alt="Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6 px-4"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Hey, I'm <span className="text-indigo-500">Prasad</span> 👨‍💻
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
            I build beautiful, performant, and accessible web apps using
            Next.js, Tailwind CSS, and motion design.
          </p>
          <Button className="text-lg px-6 py-3 mt-2 flex items-center gap-2">
            View My Work <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
