import React from "react";

export default function Cheated() {
  return (
    <section>
      <div className="bg-[#240029] text-white border flex flex-col items-center border-purple-900 py-20 px-10 w-full space-y-10">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-5xl font-bold font-[family-name:var(--font-kaio)]">
            We Cheated the {"“"}Uncheatable{"”"}
          </h2>
          <p className="text-purple-200 text-lg font-medium max-w-2xl mx-auto">
            We tested popular coding platforms using the same tools candidates
            are using every day.
          </p>
        </div>

        {/* Logos section */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img src="/ot/1.png" alt="TestGorilla" className="h-8  " />
          <img src="/ot/2.png" alt="Coderbyte" className="h-8  " />
          <img
            src="/ot/3.png"
            alt="Qualified.io"
            className="h-10 bg-gray-100 rounded-lg  "
          />
          <img src="/ot/4.png" alt="HackerRank" className="h-6 " />

          <div className="cursor-pointer hover:bg-purple-500 text-purple-400 hover:text-white px-2 py-0.5 bg-[#2f003a] border border-purple-700  rounded-lg">
            <p className="font-medium text-lg "> 20+ more</p>
          </div>
        </div>

        {/* Result block */}
        <div className="bg-[#2f003a] border border-purple-700 rounded-2xl max-w-2xl p-6 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-white">What We Found</h3>
          <ul className="space-y-3  text-purple-200 ">
            <li className="flex items-start space-x-2">
              <span className="text-purple-400 font-bold">→</span>
              <span>
                AI tools like Cluely and InterviewCoder passed them with ease
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400 font-bold">→</span>
              <span>
                Using two devices is the easiest way to pass, even a phone as
                the second device is enough to cheat undetected.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400 font-bold">→</span>
              <span>
                Even platforms with webcam checks? We covered the cam and still
                got through
              </span>
            </li>

            <li className="flex items-start space-x-2">
              <span className="text-purple-400 font-bold">→</span>
              <span>
                In some cases, the systems even “rewarded” AI answers with top
                scores
              </span>
            </li>

            <li className="flex items-start space-x-2">
              <span className="text-purple-400 font-bold">→</span>
              <span>
                Not a single test flagged or failed, even when cheating was
                blatant
              </span>
            </li>
          </ul>

          <div className="bg-red-400/20 text-red-500 font-semibold text-sm px-4 py-2 w-fit border-l-4 border-red-500 rounded">
            Anyone with basic tools can cheat and still get shortlisted.
          </div>
        </div>

        {/* Why it matters */}
        <div className="space-y-4 text-center">
          <h3 className="text-4xl font-[family-name:var(--font-kaio)] font-bold text-white">
            Why This Matters?
          </h3>
          <p className="text-purple-200 text-xl max-w-3xl mx-auto">
            If we can bypass these platforms with basic tools, your candidates
            can too. These systems weren’t{" "}
            <span className="text-2xl">built</span> for an AI-native world{" "}
            {"---> "}
            but
            <span className="text-2xl font-semibold text-[#fc1]">
              {" "}
              Codacty
            </span>{" "}
            is.
          </p>
          {/* <p className="font-semibold text-green-300 bg-green-900/40 border-l-4 border-green-500 px-6 py-2 inline-block rounded">
            Codacty neutralizes second devices, AI answers, and
            attention-hopping — before the test even starts.
          </p> */}
        </div>
      </div>
    </section>
  );
}
