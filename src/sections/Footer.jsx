import { LoaderPinwheel } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 text-gray-900 px-10 py-4">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Vibe Line */}
          <div className="flex items-center lg:flex-row flex-col gap-6 text-sm ">
            <LoaderPinwheel className="size-10" />
            <p className="text-center md:text-left text-sm text-gray-500">
              Fake candidates hate us. Real teams love us.
            </p>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 Codacty. All rights reserved.
          </div>

          {/* Right: Links */}
        </div>

        {/* Bottom: Copyright */}
      </footer>
    </>
  );
}
