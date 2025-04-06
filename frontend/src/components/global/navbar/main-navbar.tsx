"use client";

import React, { useState } from "react";
import {
  House,
  User,
  BriefcaseBusiness,
  FileText,
  NotebookPen,
  Settings,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type LinkType = {
  title: string;
  icon?: React.ReactNode;
  href: string;
};

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links: LinkType[] = [
    { title: "Home", icon: <House size={16} />, href: "/" },
    { title: "About", icon: <User size={17} />, href: "/about" },
    {
      title: "Portfolio",
      icon: <BriefcaseBusiness size={16} />,
      href: "/portfolio",
    },
    { title: "Blogs", icon: <FileText size={16} />, href: "/blogs" },
    { title: "Notes", icon: <NotebookPen size={16} />, href: "/notes" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-12 flex items-center px-4 lg:px-10 border-b border-gray-600 fixed top-0 left-0 z-50"
      >
        {/* Brand */}
        <div className="basis-[50%] md:basis-[15%] border-r border-gray-600 h-full flex items-center">
          <h1 className="text-xl font-rock ml-4 md:ml-6">Prasad Ghosh</h1>
        </div>

        {/* Desktop Nav Links (show from md and up) */}
        <div className="hidden md:flex basis-[65%] h-full">
          <div className="w-[70%] flex justify-between px-2 h-full">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="border-r border-gray-600 flex items-center justify-center w-full h-full"
              >
                <div className="flex items-center gap-2">
                  {link.icon}
                  <p className="text-sm">{link.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (show from md and up) */}
        <div className="hidden md:flex basis-[20%] h-full items-center">
          <div className="flex w-full h-full">
            <div className="flex-1 flex items-center justify-center gap-2 cursor-pointer border-x border-gray-600 h-full">
              <Settings size={18} />
              <p className="text-sm">Setting</p>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 cursor-pointer h-full">
              <MessageCircle size={18} />
              <p className="text-sm">Connect</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button (only on small screens) */}
        <div className="flex md:hidden ml-auto pr-2">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav Slide-out (only below md) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-12 left-0 w-full bg-black border-b border-gray-600 z-40 md:hidden"
          >
            <div className="flex flex-col px-4 py-2 space-y-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 border-b border-gray-700"
                >
                  {link.icon}
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700">
                <Settings size={18} />
                <span className="text-sm">Setting</span>
              </div>
              <div className="flex items-center gap-3 py-2">
                <MessageCircle size={18} />
                <span className="text-sm">Connect</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavbar;
