import React from "react";

export default function YCHook() {
  return (
    <>
      <section
        id="about"
        className="bg-[#240029] text-white py-20 px-6 md:px-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font_k">
            We’re Not Just Another Hiring Tool.
            <br />
            We’re Redefining How Engineering Talent Is Found.
          </h2>

          <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Hiring is broken we’re not patching it, we’re rebuilding it.
          </p>

          <div className="space-y-6 text-left max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-purple-100">
                💸{" "}
                <span className="font-medium text-white">
                  Bad hires cost companies millions —
                </span>{" "}
                but the screening tools haven't evolved.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-purple-100">
                🤖{" "}
                <span className="font-medium text-white">
                  AI has made cheating trivial —
                </span>{" "}
                but most tools can’t detect it, let alone prevent it.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-purple-100">
                ⚡{" "}
                <span className="font-medium text-white">
                  We enable faster, fairer, cheat-proof hiring —
                </span>{" "}
                by building for the AI-native world.
              </p>
            </div>
          </div>

          <p className="mt-16 text-xl font-semibold text-white">
            It’s not just a better test it’s a smarter way to find real talent.
          </p>
        </div>
      </section>
    </>
  );
}
