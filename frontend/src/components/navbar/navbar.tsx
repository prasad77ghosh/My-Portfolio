"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  House,
  User,
  BriefcaseBusiness,
  FileText,
  NotebookPen,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const getGlowClass = (path: string): string => {
    return path === pathname
      ? "text-glow dark:text-glow"
      : "text-neutral-500 dark:text-neutral-300";
  };

  const links = [
    {
      title: "Home",
      icon: <House className={`h-full w-full ${getGlowClass("/")}`} />,
      href: "/",
    },
    {
      title: "About",
      icon: <User className={`h-full w-full ${getGlowClass("/about")}`} />,
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: (
        <BriefcaseBusiness
          className={`h-full w-full ${getGlowClass("/portfolio")}`}
        />
      ),
      href: "/portfolio",
    },
    {
      title: "Blogs",
      icon: <FileText className={`h-full w-full ${getGlowClass("/blogs")}`} />,
      href: "/blogs",
    },
    {
      title: "Notes",
      icon: (
        <NotebookPen className={`h-full w-full ${getGlowClass("/notes")}`} />
      ),
      href: "/notes",
    },
    {
      title: "Setting",
      icon: (
        <Settings
          className={`h-full w-full ${getGlowClass(
            "#"
          )} animate-spin duration-[2000ms] ease-linear`}
        />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full fixed bottom-13">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
