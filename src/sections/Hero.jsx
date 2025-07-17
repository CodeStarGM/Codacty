import { LoaderPinwheel } from "lucide-react";
import React from "react";

export default function Hero() {
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
      <div className="w-screen h-screen p-2">
        <div className="w-full h-full bg-gradient-to-br from-[#FFDDDE] via-[#FFF1BD] to-[#FFD84A] border rounded-3xl flex flex-col items-center justify-start py-4">
          <nav className="bg-[#ffffff33] backdrop-blur-lg shadow-sm border border-[#2900291c] rounded-2xl px-2 py-2 flex items-center justify-between w-[90%]">
            <div className="flex items-center gap-2 ">
              <LoaderPinwheel className="size-8" />
              <p className="font-[family-name:var(--font-kaio)] text-2xl">
                Codacty
              </p>
            </div>

            <ul className="flex items-center gap-2">
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
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
