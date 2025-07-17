import React from "react";
import Headings from "./Headings";

export default function Features() {
  const featuresData = [
    {
      title: "  Smart Movement Detection",
      description: ` Our AI watches eye and gesture movement in real time without
                  saving video so you know exactly who's focused and
                  who's sneaking a second screen.`,
      imgSrc: "/f1.webp",
    },
    {
      title: "Secure, Locked Environment",
      description: `No copy-paste tricks. No tab switching. No keyboard shortcuts. We lock it all down so skills not hacks decide the outcome.`,
      imgSrc: "/f6.webp",
    },
    {
      title: "Only the Right Resumes",
      description: `You’ll only see resumes from candidates who actually qualify, so your team stops wasting time on unqualified or irrelevant profiles.`,
      imgSrc: "/f2.webp",
    },
    {
      title: "Fair, Human Centered Rejections",
      description: `No more auto rejecting based on a resume alone. Every candidate gets a real chance to prove themselves, so rejections feel fair not personal.  `,
      imgSrc: "/f5.webp",
    },
    {
      title: "3 Clicks. Done.",
      description: `Skip the setup headaches. Create an assessment, grab your secure link, and share it instantly. In no time, you’ll see qualified candidates flowing straight into your dashboard.`,
      imgSrc: "/f4.webp",
    },
    {
      title: "Clear Candidate Pipeline",
      description: `Track every candidate in one place with an easy board view. Move people through each stage from shortlisted to interviews so you always know exactly where everyone stands.`,
      imgSrc: "/f3.webp",
    },
  ];

  return (
    <>
      <div className=" py-14 px-20">
        <Headings
          title="Everything You Need to Hire Smarter"
          desc="Codacty makes it simple to test skills, prevent cheating, and hire the right people, all without the noise or hassle."
        />

        <div className="space-y-2">
          <div className="grid grid-cols-3 w-full gap-2 items-start justify-between">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] group hover:shadow-sm hover:shadow-secondary transition-all duration-300 hover:border-secondary  border w-full rounded-3xl p-6 flex items-center justify-center flex-col-reverse gap-8 h-full"
              >
                <div className="w-full lg:h-[30vh] rounded-2xl relative overflow-hidden">
                  <img
                    src={feature.imgSrc}
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                <div className="space-y-4 ">
                  <h3
                    className={`text-2xl font-bold text-gray-700 font-[family-name:var(--font-BG)]`}
                  >
                    {feature.title}
                    <div className="group-hover:w-[90%] h-[2px] w-[0px] transition-all duration-500 bg-secondary" />
                  </h3>
                  <p className="font-medium text-justify ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
