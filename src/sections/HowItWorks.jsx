import React from "react";

export default function HowItWorks() {
  return (
    <>
      <div className=" py-14 px-20">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-gray-800 text-5xl font-extrabold ">
              How it works?
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              You don’t need to review endless resumes or play ATS games that
              filter out great people for the wrong reasons. Just cut the noise
              and get resumes only for candidates who actually prove they’re
              qualified to do the work.
            </p>
          </div>

          <div>
            <img src="/abstractSquare.png" className="rounded-3xl" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 py-10">
          <div className=" font-[family-name:var(--font-BG)]">
            <h3 className="font-bold  text-darkText text-xl">
              <span className="text-5xl font-extrabold text-pink-500">1.</span>{" "}
              Create a Test
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              Choose from our question library or import your own challenges in
              minutes.
            </p>
          </div>
          {/* 2nd */}
          <div className=" font-[family-name:var(--font-BG)]">
            <h3 className="font-bold  text-darkText text-xl">
              <span className="text-5xl font-extrabold text-purple-500">
                2.{" "}
              </span>
              Invite Candidates
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              Generate a secure link and share it with candidates, or send the
              assessment by email.
            </p>
          </div>
          {/* 3rd */}
          <div className=" font-[family-name:var(--font-BG)]">
            <h3 className="font-bold  text-darkText text-xl">
              <span className="text-5xl font-extrabold text-green-500">3.</span>{" "}
              Get Results
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              View scores, see any cheating alerts, and download your shortlist,
              all in one place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
