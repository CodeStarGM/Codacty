import { CircleCheckBig, Wrench } from "lucide-react";
import React from "react";

export default function FixHiring() {
  return (
    <>
      <section className="bg-[#240029] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-kaio)]">
            The Time to Fix Hiring Is Now
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            The tech hiring world is changing fast and the cracks are showing
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#2F0A3B] rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
              <p className="text-3xl font-semibold text-pink-400 mb-2 font_k">
                $4.8B
              </p>
              <p className="text-lg text-gray-200">
                Projected market size of technical hiring tools by 2032
              </p>
            </div>

            <div className="bg-[#2F0A3B] rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
              <p className="text-3xl font-semibold text-pink-400 mb-2 font_k">
                5× Increase
              </p>
              <p className="text-lg text-gray-200">
                Rise in cheating since ChatGPT, especially in remote tests
              </p>
            </div>

            <div className="bg-[#2F0A3B] rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
              <p className="text-3xl font-semibold text-pink-400 mb-2 font_k">
                60%
              </p>
              <p className="text-lg text-gray-200">
                Engineering teams say they waste time on unqualified candidates
              </p>
            </div>
          </div>

          <div className="mt-16  mx-auto text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl font_k md:text-3xl font-semibold text-white mb-4">
              Codacty Solves All 3:
            </h3>

            <ul className=" text-lg gap-4 flex-wrap text-gray-200 flex  items-start justify-center">
              <li className="flex items-center gap-2">
                <CircleCheckBig className="fill-green-500/50 stroke-green-400 size-8" />{" "}
                <span> Fair, fast hiring</span>
              </li>

              <li className="flex items-center gap-2">
                <CircleCheckBig className="fill-green-500/50 stroke-green-400 size-8" />{" "}
                <span> Secure, privacy-respecting assessments</span>
              </li>

              <li className="flex items-center gap-2">
                <CircleCheckBig className="fill-green-500/50 stroke-green-400 size-8" />{" "}
                <span> 100% skills-first pipeline</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
