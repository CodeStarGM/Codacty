"use client";

import { LoaderPinwheel, Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import React from "react";

export default function JoinWaitlist() {
  const searchParams = useSearchParams();
  const businessEmail = searchParams.get("be");

  return (
    <>
      <div className=" w-full h-full p-2">
        <div className="w-full h-full bg-gradient-to-br from-[#FFDDDE] via-[#FFF1BD] to-[#FFD84A] border rounded-3xl flex flex-col items-center justify-start py-2 md:py-4">
          {/* navbar start */}
          <nav className="relative  bg-[#ffffff33] backdrop-blur-lg shadow-sm border border-[#2900291c] rounded-2xl px-2 py-3 md:py-2 flex items-center justify-between  w-[98%] lg:w-[90%]">
            <div className="flex items-center gap-2 ">
              <LoaderPinwheel className="size-8" />
              <p className="hidden lg:block font-[family-name:var(--font-kaio)] text-2xl">
                Codacty
              </p>
            </div>

            {/* cta buttons nav */}

            <div className="gap-2 flex items-center">
              {/* <button className="text-[#240029] text-[15px] font-medium px-2.5 py-1 rounded-lg border border-[#CCB2BA] bg-white">
            Log in
          </button> */}
              <Link
                href="/"
                className="px-4 py-1 text-[15px] font-medium rounded-lg border border-[#D4AA53] text-[#240029] bg-[#fc1] flex items-center space-x-1 group"
              >
                <span>Go Back</span>
                <MoveRight className="group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </div>
          </nav>
          {/* navbar end */}

          {/* hero content */}

          <div className="flex flex-col items-center justify-center pt-14 pb-4 space-y-4 lg:space-y-8">
            <div className="w-fit flex items-center gap-2 px-1 py-1 rounded-full border border-borderClr text-sm">
              <p className="pr-1">
                {" "}
                Only Interview the Right Candidates We Filter the Rest.{" "}
              </p>
            </div>

            {/* form start */}

            <form
              className=""
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="ffa365a7-dec3-46c4-8e7e-56c85903277d"
              />
              <input
                type="hidden"
                name="subject"
                value="Codacty Interview AI Waitlist Submission"
              />

              <div className="border-b border-gray-900/10 pb-12 ">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email*
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="email"
                        type="email"
                        required
                        defaultValue={businessEmail}
                        className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Company
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="company"
                        type="text"
                        className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Role / Job Title
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="role"
                        type="text"
                        className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Current Screening Method
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="current-screening-method"
                        type="text"
                        className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full ">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Biggest Hiring Pain
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="hiring-pain"
                        rows={3}
                        className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                        defaultValue={""}
                      />
                    </div>

                    <div className="h-4" />

                    <label className="space-x-1 mt-2">
                      <input
                        class="accent-yellow-500"
                        type="checkbox"
                        name="Discount-Box"
                      />
                      <span className="mt-3 text-sm/6 text-gray-600">
                        I want early access and 50% off for life
                      </span>
                    </label>
                  </div>
                  {/* checkbox */}

                  {/* checkbox */}
                </div>
              </div>

              <div className="p-2 flex items-center justify-center">
                <button
                  type="submit"
                  className="px-14 py-2  font-medium rounded-full border border-[#D4AA53] text-[#240029] bg-[#fc1]"
                >
                  Join Waitlist
                </button>
              </div>
            </form>

            {/* form end */}

            {/* companies section */}
          </div>

          {/* hero content */}
        </div>
      </div>
    </>
  );
}
