import Navbar from "@/components/Navbar";

import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" w-screen h-screen p-2">
        <div className="w-full h-full bg-gradient-to-br from-[#FFDDDE] via-[#FFF1BD] to-[#FFD84A] border rounded-3xl flex flex-col items-center justify-start py-2 md:py-4">
          <Navbar />
        </div>
      </div>
    </>
  );
}
