"use client";
import { useState } from "react";

export default function ROICalculator() {
  const [screeningHoursPerWeek, setScreeningHoursPerWeek] = useState(10);
  const [hrHourlyRate, setHrHourlyRate] = useState(50);

  const timeSavedRatio = 0.8; // Codacty saves ~80% of screening time
  const yearlyHoursSaved = (
    screeningHoursPerWeek *
    timeSavedRatio *
    52
  ).toFixed(1);

  const annualTimeCostSavings = (
    parseFloat(yearlyHoursSaved) * hrHourlyRate
  ).toFixed(0);

  const softwareSavings = 3000; // ATS + testing tool + manual effort replacement
  const totalRoi = (
    parseFloat(annualTimeCostSavings) + softwareSavings
  ).toLocaleString();

  return (
    <section className="bg-[#fef8f6] text-[#240029] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Form */}
        <div className="bg-white rounded-xl p-8 shadow-xl space-y-6">
          <h2 className="text-3xl font-bold">Calculate Your ROI</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold">
                Weekly screening hours
              </label>
              <p className="text-sm text-gray-600 mb-2">
                Estimated time your team spends reviewing resumes & pre-screens
              </p>
              <input
                type="number"
                min="0"
                value={screeningHoursPerWeek}
                onChange={(e) => setScreeningHoursPerWeek(+e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-semibold">
                Hourly team rate ($)
              </label>
              <p className="text-sm text-gray-600 mb-2">
                Average cost of your hiring manager or interviewer's time
              </p>
              <input
                type="number"
                min="0"
                value={hrHourlyRate}
                onChange={(e) => setHrHourlyRate(+e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-semibold">
                Estimated time savings
              </label>
              <p className="text-xl font-bold text-[#aa006f]">80%</p>
              <p className="text-sm text-gray-600">
                Based on actual Codacty users reducing resume screening and test
                review time
              </p>
            </div>
          </div>

          <div className="bg-[#fff1e6] p-4 rounded-lg text-sm border border-[#f2c194]">
            Teams using Codacty save an average of
            <span className="font-semibold"> $3,000/year </span>
            in tools and manual hours — by replacing ATS, test platforms, and
            manual filtering.
          </div>
        </div>

        {/* Right: Results */}
        <div className="bg-[#32003b] text-white rounded-xl p-10 space-y-8 shadow-xl">
          <div>
            <h3 className="text-5xl font-bold">{yearlyHoursSaved}</h3>
            <p className="text-sm mt-1">hours saved per year</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">${totalRoi}</h3>
            <p className="text-sm mt-1">Total yearly ROI with Codacty</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">96%</h3>
            <p className="text-sm mt-1">confidence boost in hiring decisions</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">99.9%</h3>
            <p className="text-sm mt-1">cheat-proof technical assessments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
