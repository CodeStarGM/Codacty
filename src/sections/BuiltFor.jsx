import React from "react";

export default function BuiltFor() {
  return (
    <>
      <section className="bg-white text-gray-900 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font_k text-purp">
            Built for Startups, Scaleups & Enterprises
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're hiring for a team of 2 or 2,000, Codacty adapts to
            your workflow.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🎯 Solo Recruiters</h3>
              <p className="text-gray-700">
                Save hours by skipping unqualified applicants. Focus only on
                verified talent.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🚀 Startup CTOs</h3>
              <p className="text-gray-700">
                Hire fast, without sacrificing quality even if you're doing it
                all yourself.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🏢 HR at Scale</h3>
              <p className="text-gray-700">
                Assess thousands securely with AI-powered integrity and scalable
                automation.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-gray-800">
              We make your life easier and your engineering hires better.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
