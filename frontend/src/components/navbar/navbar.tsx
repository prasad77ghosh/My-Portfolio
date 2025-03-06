import { FloatingDock } from "@/components/ui/floating-dock";
import {
  House,
  User,
  BriefcaseBusiness,
  FileText,
  NotebookPen,
  Settings,
} from "lucide-react";
import { headers } from "next/headers";

export async function Navbar() {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");

  console.log("PATHNAME", pathname);

  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300 " />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: (
        <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/portfolio",
    },

    {
      title: "Blogs",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "blogs",
    },

    {
      title: "Notes",
      icon: (
        <NotebookPen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/notes",
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
    <div className="flex items-center justify-center w-full fixed bottom-13">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
