import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Container className="navbar bg-base-100">
      <div className="flex w-full justify-between items-center">
        <Link href="/">
          <p className="text-3xl lg:text-4xl font-semibold text-primary">
            BRAND<span className="text-secondary">PAL</span>
          </p>
        </Link>

        {/* Navbar for larger screens */}
        <div className="hidden md:flex">
          <ul className="menu-horizontal space-x-16 px-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 transition-all ease-in-out"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dropdown Menu on the Right for Mobile */}
        <div className="md:hidden flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary "
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
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 right-5 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              <div className="navbar-end">
                <button className="custom-primary-btn">Sign in</button>
              </div>
            </ul>
          </div>
        </div>

        {/* Sign in Button for Larger Screens */}
        <div className="hidden md:flex">
          <button className="custom-primary-btn">Sign in</button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
