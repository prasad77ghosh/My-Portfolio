import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  House,
  User,
  BriefcaseBusiness,
  FileText,
  NotebookPen,
  Settings,
} from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Portfolio",
      icon: (
        <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Blogs",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Notes",
      icon: (
        <NotebookPen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Setting",
      icon: (
        <Settings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full fixed bottom-20">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
