import React from "react";
import Headings from "./Headings";

export default function Solutions() {
  return (
    <>
      <div className=" py-14 px-40">
        <Headings
          title="How we fixes technical hiring"
          desc="We built what today’s hiring tools forgot: trust, accuracy, & privacy"
        />

        <div className="space-y-2">
          <div className="flex bg-[#F7F7F7] border items-center justify-around lg:flex-row-reverse flex-col gap-8 p-8 rounded-3xl ">
            <div className=" lg:w-[40%] lg:h-[40vh] rounded-2xl relative overflow-hidden">
              <img
                src="/fix1.png"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-4 lg:w-[50%]">
              <div className="">
                <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                  {" "}
                  AI-Powered{" "}
                  <span className="text-white bg-red-500 px-2 rounded">
                    Cheat
                  </span>{" "}
                  Detection
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  We don’t just record, we enforce.
                </p>
              </div>

              <p className="font-medium  text-gray-800 ">
                codis uses smart eye and gesture tracking to catch suspicious
                behavior in real time without recording video or taking
                screenshots. We lock tabs, block shortcuts, and instantly flag
                second devices, so you can trust every result.
              </p>

              <div className="w-fit px-6 py-2 border-r-[2px] text-green-800 border-l-[2px] border-green-500 bg-green-500/10">
                <p className="font-medium">
                  If you can cheat our tests, you deserve the job.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full gap-2 flex items-start justify-between">
            {/* section2 */}
            <div className="bg-[#F7F7F7] border w-full rounded-3xl p-6 flex items-center justify-center flex-col-reverse gap-8 h-full">
              <div className="w-full lg:h-[30vh] rounded-2xl relative overflow-hidden">
                <img
                  src="/fix2.png"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-4 ">
                <div>
                  <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                    {" "}
                    <span className="text-white bg-purple-500 px-2 rounded">
                      Privacy-First
                    </span>{" "}
                    by Design
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Security without surveillance.
                  </p>
                </div>
                <p className="font-medium  text-gray-800 ">
                  codis keeps everything private and is fully GDPR and CCPA
                  compliant. We never record videos or take screenshots. All
                  candidate information stays safe and under their control, so
                  you don’t have to worry about privacy issues.
                </p>

                <div className="w-fit px-6 py-2 border-r-[2px] text-green-800 border-l-[2px] border-green-500 bg-green-500/10">
                  <p className="font-medium">We win trust by respecting it.</p>
                </div>
              </div>
            </div>

            {/* section3 */}

            <div className="bg-[#F7F7F7] border w-full rounded-3xl p-6 flex items-center justify-center flex-col-reverse gap-8 h-full">
              <div className="w-full lg:h-[30vh] rounded-2xl relative overflow-hidden">
                <img
                  src="/fix3.jpeg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-darkText leading-none pb-1">
                    {" "}
                    Hire who can{" "}
                    <span className="text-white bg-pink-500 px-2 rounded">
                      do the job
                    </span>{" "}
                    not <br /> just pass a filter.
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Real Skill Insights.
                  </p>
                </div>

                <p className="font-medium  text-gray-800 ">
                  codis gives you clear assessment results and shows any
                  cheating activity. It automatically picks out the best
                  candidates and only shows you resumes that match what you
                  need. No extra work for your team.
                </p>

                <div className="w-fit px-6 py-2 border-r-[2px] text-green-800 border-l-[2px] border-green-500 bg-green-500/10">
                  <p className="font-medium">
                    No fluff, No filters, Just proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
