"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Types

type MenuLink = {
  name: string;
  href?: string;
};

type MenuItemWithSubmenu = MenuLink & {
  submenu?: MenuLink[];
};

type Role = "USER" | "ADMIN" | "SUPERADMIN";

// Menu Config

const menuConfig: Record<Role, MenuItemWithSubmenu[]> = {
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
        { name: "View All Pdf", href: "/all-pdfs" },
      ],
    },
    { name: "Contact", href: "/show-contacts" },
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

export default function Navbar() {
  const { data: session } = useSession();
  const role = (session?.user?.role?.toUpperCase() as Role) || "USER";
  const menu = menuConfig[role] || [];

  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 hover:text-black">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <img
                  className="h-5 w-auto "
                  src="/perificio-logo.png"
                  alt="Perificio"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menu.map((item) => (
                  item.submenu ? (
                    <Menu key={item.name} as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex items-center text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                          {item.name}
                          <ChevronDownIcon className="ml-1 h-4 w-4" />
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {item.submenu.map((sub) => (
                          <MenuItem key={sub.name}>
                            <Link
                              href={sub.href || "#"}
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                              {sub.name}
                            </Link>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href || "#"}
                      className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex items-center gap-2 rounded-full bg-white text-sm">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <CgProfile className="w-8 h-8 text-black" />
                  )}</MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                {session?.user ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{session?.user?.name}</p>
                      <p className="text-xs text-gray-500">{session?.user?.email}</p>
                    </div>
                    <MenuItem>
                      <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Your Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem>
                    <Link
                      href="/sign-in"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {menu.map((item) => (
            item.submenu ? (
              <div key={item.name} className="space-y-1">
                <span className="block px-3 py-2 text-base font-medium text-black">
                  {item.name}
                </span>
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href || "#"}
                    className="block rounded-md px-5 py-2 text-sm font-medium text-black hover:bg-gray-100"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ) : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href || "#"}
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 hover:text-black"
              >
                {item.name}
              </DisclosureButton>
            )
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
