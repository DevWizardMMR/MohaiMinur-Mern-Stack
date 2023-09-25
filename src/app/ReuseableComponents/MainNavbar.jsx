import Link from "next/link";
import React from "react";

const MainNavbar = () => {
  const ManuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Blog</Link>
      </li>
      <li>
        <Link href="/">Protfolio</Link>
      </li>
      <li>
        <Link href="/">Contact with me</Link>
      </li>
      <li>
        <Link href="/">About Me</Link>
      </li>
    </>
  );
  return (
    <div className="w-full border-b">
      <div className="navbar bg-transparent w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {ManuItems}
            </ul>
          </div>
          <Link href="/" className="font-bold">MohaiMinur</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{ManuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="font-Mooli font-bold px-4 py-2 bg-base-200 rounded-md hover:bg-base-300 hover:text-white">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
