import { Bot, FileUser, ShieldCheck } from "lucide-react";
import React from "react";

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT: Sticky Headline + Subhead */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <p className="text-[#fc1] bg-purp w-fit font-semibold px-4 py-1 rounded-lg text-lg uppercase font-[family-name:var(--font-kaio)]">
            The Solution {":)"}
          </p>
          <h3 className="font-[family-name:var(--font-kaio)] text-4xl lg:text-5xl font-extrabold text-purp leading-tight ">
            <span className="text-green-500">Finally,</span> A Hiring Platform
            That Sends You Real Engineers - Not Good Cheaters
          </h3>
          <p className="text-xl text-gray-700">
            We built the cheat-resistant, privacy-first technical assessment
            system. Built for teams who want real skill <br />
            not résumé fluff or AI trickery.
          </p>
        </div>

        {/* RIGHT: Scrollable Problem Points */}
        <div className="space-y-8 leading-relaxed">
          {/* box */}
          <div className="space-y-8 bg-pink-500/5 rounded-3xl p-4">
            <div>
              <Bot className="size-8 my-1 text-pink-600" />
              <h4 className=" font-bold text-xl">
                AI-Powered Cheat Prevention
              </h4>
              <p>We don’t just block, we outsmart.</p>
            </div>

            {/* list */}
            <div className="leading-relaxed space-y-2">
              <p>🔒 Detects second-device usage and switching behavior</p>
              <p>
                🤖 Neutralizes AI tools like Cluely & InterviewCoder they simply
                don’t work on our platform.
              </p>
              <p>👀 Gesture + focus tracking via webcam no recordings, ever</p>
              <p>💻 Locks tabs, clipboard, and keyboard shortcuts</p>
            </div>

            <div className="border-l-4 pl-4 border-pink-500 bg-pink-500/10 rounded-md py-4">
              <p className="text-gray-800 text-base">
                If you can cheat our tests, you probably deserve the job
              </p>
            </div>
          </div>
          {/* box */}

          {/* box 2 */}
          <div className="space-y-8 bg-purple-500/5 rounded-3xl p-4">
            <div>
              <FileUser className="size-8 my-1 text-purple-600" />
              <h4 className=" font-bold text-xl">
                Skill-First, Not Resume-First
              </h4>
              <p>Hire based on ability not buzzwords or browser tricks.</p>
            </div>

            {/* list */}
            <div className="leading-relaxed space-y-2">
              <p>
                ✅ Only shows candidates who pass all others are filtered out
              </p>
              <p>📄 View resumes after passing the test, not before</p>
              <p>📊 Auto-shortlisting based on verified skill, not hype</p>
              <p>🤖 Zero manual review needed just the real talent</p>
            </div>

            <div className="border-l-4 pl-4 border-purple-500 bg-purple-500/10 rounded-md py-4">
              <p className="text-gray-800 text-base">
                No fluff. No filters. Just qualified people.
              </p>
            </div>
          </div>
          {/* box 2 */}

          {/* box 3 */}
          <div className="space-y-8 bg-green-500/5 rounded-3xl p-4">
            <div>
              <ShieldCheck className="size-8 my-1 text-green-600" />
              <h4 className=" font-bold text-xl">Privacy-First by Design</h4>
              <p>Secure. Private. Built with developer trust in mind.</p>
            </div>

            {/* list */}
            <div className="leading-relaxed space-y-2">
              <p>🧘 No video recordings, no screenshots ever</p>
              <p>👁️‍🗨️ Smart tracking that respects boundaries</p>
              <p>🧾 Fully GDPR & CCPA compliant</p>
              <p>📁 Candidate data is never stored unnecessarily</p>
            </div>

            <div className="border-l-4 pl-4 border-green-500 bg-green-500/10 rounded-md py-4">
              <p className="text-gray-800 text-base">
                We win trust by respecting it.
              </p>
            </div>
          </div>
          {/* box 3 */}
        </div>
      </div>
    </section>
  );
}
