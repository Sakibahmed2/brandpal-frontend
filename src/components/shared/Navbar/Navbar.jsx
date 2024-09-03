"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = true;

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Service", path: "/service" },
    { title: "About us", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();

  const authButtons = (
    <>
      {user ? (
        <>
          {" "}
          <Link href="/register">
            <button className="bg-primary text-white rounded-lg px-4 py-2">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-secondary text-white rounded-lg px-4 py-2">
              Login
            </button>
          </Link>{" "}
        </>
      ) : (
        <>
          <Link href="/">
            <button className="bg-red-50 font-semibold border-2 border-red-500 rounded-md px-8 py-2">
              Logout
            </button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="px-4 mx-auto fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <Container>
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link href="/">
            <p className="text-3xl lg:text-4xl font-semibold text-primary cursor-pointer">
              BRAND<span className="text-secondary">PAL</span>
            </p>
          </Link>

          {/* Navbar for larger screens */}
          <div className="hidden lg:flex space-x-10">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <p
                  className={cn(
                    "hover:text-orange-500 transition-all ease-in-out cursor-pointer",
                    pathname === item.path && "text-orange-500"
                  )}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Sign in Button for Larger Screens */}
          <div className="hidden lg:flex gap-2">{authButtons}</div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden rounded-lg p-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <p className="text-center text-gray-800 hover:text-orange-500 transition-all ease-in-out cursor-pointer">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
              <div className="flex flex-col gap-3 mt-4 justify-center items-center">
                {authButtons}
              </div>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
