"use client";
import React, { useState } from "react";
import { CircleX, LoaderPinwheel, Menu } from "lucide-react";

export default function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(true);

  const navigationLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "How it works",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];
  return (
    <>
      <nav className="relative  bg-[#ffffff33] backdrop-blur-lg shadow-sm border border-[#2900291c] rounded-2xl px-2 py-3 md:py-2 flex items-center justify-between  w-[98%] lg:w-[90%]">
        {toggleMobileMenu && (
          <div className=" space-y-4 rounded-3xl p-4 lg:hidden bg-white h-screen w-full fixed top-0 left-0">
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--font-kaio)] text-2xl">
                Nav Menu
              </p>
              <button
                onClick={() => {
                  setToggleMobileMenu(false);
                }}
              >
                <CircleX className="size-8" />
              </button>
            </div>

            <ul
              onClick={() => {
                setToggleMobileMenu(false);
              }}
              className="flex flex-col items-start justify-start gap-4"
            >
              {navigationLinks.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-black/5 text-lg text-[#240029]/90 cursor-pointer px-2 py-1 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-2 ">
          <LoaderPinwheel className="size-8" />
          <p className="hidden lg:block font-[family-name:var(--font-kaio)] text-2xl">
            Codacty
          </p>
        </div>

        <ul className="hidden lg:flex items-center gap-2">
          {navigationLinks.map((item, index) => (
            <li
              key={index}
              className="hover:bg-black/5 text-[15px] text-[#240029]/90 cursor-pointer px-2 py-1 rounded-lg transition-all duration-300"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* cta buttons nav */}

        <div className="gap-2 flex items-center">
          <button className="text-[#240029] text-[15px] font-medium px-2.5 py-1 rounded-lg border border-[#CCB2BA] bg-white">
            Log in
          </button>
          <button className="px-2.5 py-1 text-[15px] font-medium rounded-lg border border-[#D4AA53] text-[#240029] bg-[#fc1]">
            Sign up
          </button>

          <button
            onClick={() => {
              setToggleMobileMenu(!toggleMobileMenu);
            }}
            className="lg:hidden flex"
          >
            <Menu className="size-8" />
          </button>
        </div>
      </nav>
    </>
  );
}
