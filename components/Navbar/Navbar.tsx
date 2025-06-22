"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { ChevronDownIcon } from '@heroicons/react/20/solid' ;

type MenuItem = {
  name: string;
  href?: string;
  submenu?: MenuItem[];
};

const menuConfig: Record<string, MenuItem[]> = {
  USER: [
    { name: "Home", href: "/" },
    {
      name: "Taxation",
      submenu: [
        { name: "Direct Tax", href: "/direct-tax" },
        { name: "InDirect Tax", href: "/indirect-tax" },
        { name: "NCA", href: "/nca" },
        { name: "RERA", href: "/rera" },
        { name: "FEMA", href: "/fema" },
      ],
    },
    {
      name: "Wealth",
      submenu: [
        { name: "Invest", href: "/invest" },
        { name: "Real Estate", href: "/real-estate" },
        { name: "NRI", href: "/nri" },
      ],
    },
    { name: "Insurance", href: "/insurance" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  ADMIN: [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    {
      name: "Posts",
      submenu: [{ name: "Create New Post", href: "/create-post" }],
    },
    {
      name: "Files",
      submenu: [
        { name: "Upload Pdf", href: "/upload-pdf" },
        { name: "View All Pdf", href: "/view-pdf" },
      ],
    },
    { name: "Contact", href: "/show-contact" },
  ],
  SUPERADMIN: [
    { name: "Home", href: "/" },
    { name: "Insurance Master", href: "/superadmin/insurance" },
    { name: "Tax Controls", href: "/superadmin/taxation" },
    { name: "Wealth System", href: "/superadmin/wealth" },
    { name: "Settings", href: "/superadmin/settings" },
    { name: "Logs", href: "/superadmin/logs" },
  ],
};

const Navbar = () => {
  const { data: session } = useSession();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   console.log("Session Data:", session);
const role = session?.user?.role || "USER";
const menu = menuConfig[role];

  // console.log("User Role:", role);
  // console.log("Session Data:", session?.user);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Perificio
      </Link>

      {/* Menu - Desktop */}
      <div className="hidden md:flex gap-x-6 text-gray-700 text-sm font-medium relative">
        {menu.map((item) =>
          item.submenu ? (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-blue-500">
                {item.name}
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              {activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md z-10 w-40">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href || "#"}
                      className="block px-4 py-2 text-sm hover:bg-blue-50"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href || "#"}
              className="hover:text-blue-500"
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* Right - Profile or Login */}
      <div className="hidden md:flex items-center gap-x-4">
        {!session?.user ? (
          <Link href="/sign-in">
            <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
              Login
            </div>
          </Link>
        ) : (
          <div className="relative">
            <button onClick={() => setActiveDropdown("profile")}>
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <CgProfile className="w-8 h-8 text-gray-600" />
              )}
            </button>
            {activeDropdown === "profile" && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-10">
                <div className="p-4 border-b">
                  <p className="font-medium text-sm">{session.user.name}</p>
                  <p className="text-xs text-gray-500">{session.user.email}</p>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
