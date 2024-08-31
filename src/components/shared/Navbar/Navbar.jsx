import React from "react";
import Container from "../../ui/Container";
import Link from "next/link";

const navBtn = (
  <>
    <Link href="/register">
      <button className="custom-primary-btn">Sign up</button>
    </Link>
    <Link href="/login">
      <button className="custom-secondary-btn">Login</button>
    </Link>
  </>
);

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
    <div className="navbar px-4 mx-auto fixed top-0 left-0 right-0 z-50 bg-white">
      <Container>
        <div className="flex w-full justify-between items-center">
          <Link href="/">
            <p className="text-3xl lg:text-4xl font-semibold text-primary">
              BRAND<span className="text-secondary">PAL</span>
            </p>
          </Link>

          {/* Navbar for larger screens */}
          <div className="hidden lg:flex">
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
          <div className="lg:hidden flex items-center ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-md dropdown-content bg-white/50 backdrop-blur-md rounded-box z-[1] mt-3 right-5 w-52 p-2 shadow flex flex-col items-center"
              >
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
                <div className="navbar-end flex flex-col gap-3 mt-2">
                  {navBtn}
                </div>
              </ul>
            </div>
          </div>

          {/* Sign in Button for Larger Screens */}
          <div className="hidden lg:flex gap-2">{navBtn}</div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
