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
    <section className=" text-[#240029] py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-[#32003b]/95 rounded-2xl grid md:grid-cols-2 items-center">
        {/* Left: Form */}
        <div className="text-white bg-transparent rounded-xl p-8 shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold font_k">Calculate Your ROI</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold">
                Weekly screening hours
              </label>
              <p className="text-sm text-gray-400 mb-2">
                Estimated time your team spends reviewing resumes & pre-screens
              </p>
              <input
                type="number"
                min="0"
                value={screeningHoursPerWeek}
                onChange={(e) => setScreeningHoursPerWeek(+e.target.value)}
                className="outline-none text-white w-full bg-[#2f003a] border border-purple-700 px-4 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-semibold">
                Hourly team rate ($)
              </label>
              <p className="text-sm text-gray-400 mb-2">
                Average cost of your hiring manager or interviewer's time
              </p>
              <input
                type="number"
                min="0"
                value={hrHourlyRate}
                onChange={(e) => setHrHourlyRate(+e.target.value)}
                className="outline-none w-full bg-[#2f003a] border border-purple-700 text-white  px-4 py-2 rounded-md"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-semibold">
                Estimated time savings
              </label>
              <p className="text-2xl font-bold text-[#fc1]">80%</p>
              <p className="text-sm text-gray-400">
                Based on actual Codacty users reducing resume screening and test
                review time
              </p>
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="bg-transparent text-white rounded-xl p-10 space-y-8 shadow-xl">
          <div>
            <h3 className="text-5xl font-bold font_k">{yearlyHoursSaved}</h3>
            <p className="text-sm mt-1">hours saved per year</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold font_k">${totalRoi}</h3>
            <p className="text-sm mt-1">Total yearly ROI with Codacty</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold font_k">96%</h3>
            <p className="text-sm mt-1">confidence boost in hiring decisions</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold font_k">99.9%</h3>
            <p className="text-sm mt-1">cheat-proof technical assessments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
