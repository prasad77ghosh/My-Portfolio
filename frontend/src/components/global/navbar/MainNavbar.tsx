"use client";

import React from "react";
import {
  House,
  User,
  BriefcaseBusiness,
  FileText,
  NotebookPen,
  Settings,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export type LinkType = {
  title: string;
  icon?: React.ReactNode;
  href: string;
};
const MainNavbar = () => {
  const links: LinkType[] = [
    {
      title: "Home",
      icon: <House size={16} />,
      href: "/",
    },
    {
      title: "About",
      icon: <User size={17} />,
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: <BriefcaseBusiness size={16} />,
      href: "/portfolio",
    },
    {
      title: "Blogs",
      icon: <FileText size={16} />,
      href: "/blogs",
    },
    {
      title: "Notes",
      icon: <NotebookPen size={16} />,
      href: "/notes",
    },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-12 flex items-center px-10 border-b-[0.1px] border-b-gray-600"
    >
      <div className="basis-[15%] border-r-[0.5px] border-b-gray-600 h-full flex items-center">
        <h1 className="text-xl font-rock ml-6">Prasad Ghosh</h1>
      </div>

      <div className="basis-[65%] h-full">
        <div className="w-[70%] flex justify-between px-2 h-full">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="border-r-[0.5px] border-b-gray-600 flex items-center justify-center w-full h-full"
            >
              <div className="flex items-center gap-3">
                {link.icon}
                {link.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="basis-[20%] h-full flex items-center">
        <div className="flex w-full h-full">
          <div className="flex-1 flex items-center justify-center gap-3 cursor-pointer border-x border-gray-600 h-full">
            <Settings size={18} />
            <p>Setting</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-3 cursor-pointer h-full">
            <MessageCircle size={18} />
            <p>Connect</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainNavbar;
