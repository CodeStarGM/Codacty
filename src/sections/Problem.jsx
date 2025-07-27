import React from "react";

export default function Problem() {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT: Sticky Headline + Subhead */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <p className="text-[#fc1] bg-purp w-fit font-semibold px-4 py-1 rounded-lg text-lg uppercase font-[family-name:var(--font-kaio)]">
            The Problem {":("}
          </p>
          <h3 className="font-[family-name:var(--font-kaio)] lg:text-5xl text-4xl font-extrabold text-purp leading-tight ">
            Hiring is{" "}
            <span className="inline-block rotate-[-6deg] text-red-600">B</span>
            <span className="inline-block rotate-[12deg] -translate-y-1 text-red-600">
              r
            </span>
            <span className="inline-block rotate-[2deg] skew-y-3 text-red-600">
              o
            </span>
            <span className="inline-block -rotate-[15deg] translate-y-2 text-red-600">
              k
            </span>
            <span className="inline-block rotate-[8deg] -translate-y-1 text-red-600">
              e
            </span>
            <span className="inline-block rotate-[-10deg] text-red-600">n</span>{" "}
            and It’s Costing You $$$
          </h3>
          <p className="text-xl text-gray-700 ">
            Tech companies pour billions into hiring every year and end up
            rewarding cheaters.
          </p>
        </div>

        {/* RIGHT: Scrollable Problem Points */}
        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Remote assessments are the norm. But{" "}
            <strong>1 in 2 candidates</strong> now use AI tools to cheat.
          </p>

          <p>
            <strong>FAANG recruiters</strong> have openly admitted candidates
            are getting hired using cheat tools like{" "}
            <span className="font-medium text-gray-800">Cluely</span> and
            <span className="font-medium text-gray-800"> InterviewCoder</span>.
          </p>

          <p>
            In a study by <strong>interviewing.io</strong>,{" "}
            <strong>81% of AI-assisted candidates</strong> passed interviews -
            <span className="italic text-gray-600">completely undetected</span>.
          </p>

          <p>
            Yet Traditional assessment tools still use <strong>outdated</strong>{" "}
            methods to prevent cheating and
            <strong> candidates</strong> are easily getting around them,
            <span className="text-red-600 font-semibold">
              {" "}
              It’s not enough.
            </span>
          </p>

          <div className="border-l-4 pl-4 border-primary bg-purp/5 rounded-md py-4">
            <p className="text-gray-800 text-base">
              <span className="font-bold text-purp text-lg ">The result?</span>
              <br />
              Bad hires, inflated salaries, lost engineering velocity.
              <br />
              And hours wasted screening unqualified resumes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
