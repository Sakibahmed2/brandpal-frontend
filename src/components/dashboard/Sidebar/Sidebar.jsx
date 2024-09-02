"use client";

import cn from "@/utils/cn";
import {
  BadgeDollarSign,
  ChartPie,
  File,
  House,
  LogOut,
  MessageCircle,
  ReceiptText,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    id: 1,
    label: "Home",
    path: "/dashboard",
    icon: House,
  },
  {
    id: 2,
    label: "Analytics",
    path: "/dashboard/analytics",
    icon: ChartPie,
  },
  {
    id: 3,
    label: "Services",
    path: "/dashboard/services",
    icon: MessageCircle,
  },
  {
    id: 4,
    label: "Reports",
    path: "/dashboard/reports",
    icon: File,
  },
  {
    id: 4,
    label: "Offer",
    path: "/dashboard/offer",
    icon: BadgeDollarSign,
  },
  {
    id: 5,
    label: "Billing",
    path: "/dashboard/billing",
    icon: ReceiptText,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="drawer bg-gray-900 px-5 pb-5 h-screen w-72">
      <div className="text-3xl font-semibold mx-auto mt-10 ">
        <Link href="/" className="mt-10 py-5 px-10 bg-gray-800 rounded-lg">
          BRAND<span className="text-gray-500">PAL</span>
        </Link>
      </div>
      <ul className="p-4 space-y-6 ">
        {/* Sidebar content here */}

        {sidebarItems.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={cn(
              "flex items-center space-x-5 py-2 px-4 rounded-md",
              pathname === item.path
                ? "bg-gradient-to-r from-gray-600 to-gray-900 text-white"
                : ""
            )}
          >
            <item.icon />
            <p>{item.label}</p>
          </Link>
        ))}
      </ul>
      <hr className="border-gray-600" />
      <div className="space-y-5">
        <Link href={"/dashboard"} className="flex items-center space-x-5">
          <Settings />
          <p>Setting</p>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center space-x-5 text-red-500"
        >
          <LogOut />
          <p>Log out</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
