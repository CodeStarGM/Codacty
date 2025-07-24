import React from "react";

export default function CTA() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#FFDDDE] via-[#FFF1BD] to-[#FFD84A] border rounded-3xl text-gray-900 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font_k text-purp">
            Sign Up Early to Save{" "}
            <span className="text-white  bg-green-500 px-2 rounded-xl">
              50%
            </span>{" "}
            on Your First Plan
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            We’re not live yet but the game is about to change.
            <br />
            If you’re tired of AI-fueled fraud in hiring, jump on the waitlist.
          </p>

          <div className="w-fit mx-auto flex items-center rounded-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Business Email"
              className="outline-none py-2 px-4 rounded-l-full border border-borderClr"
            />
            <button className="px-4 py-2 font-medium rounded-r-full border border-[#D4AA53] text-[#240029] bg-[#fc1]">
              Join Waitlist
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            No spam. Just real updates and early access when we’re ready.
          </p>
        </div>
      </section>
    </>
  );
}
