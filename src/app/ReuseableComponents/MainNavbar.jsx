"use client"
import { Switch } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";

const MainNavbar = () => {
  const [enabled, setEnabled] = useState(false)

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
          <Link href="/" className="font-bold font-Mooli text-2xl">
            MohaiMinur
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{ManuItems}</ul>
        </div>
        <div className="navbar-end gap-5">
          <Link
            href="/"
            className="font-Mooli font-bold px-4 py-2 bg-base-200 rounded-md hover:bg-base-300 hover:text-white"
          >
            Login
          </Link>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-gray-200" : "bg-gray-700"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
