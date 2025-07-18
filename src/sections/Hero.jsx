import Navbar from "@/components/Navbar";

import React from "react";

export default function Hero() {
  const CheatTools = [
    {
      name: "ChatGPT",
      logo: "/ctools/1.png",
    },
    {
      name: "Gemini",
      logo: "/ctools/2.png",
    },
    {
      name: "Cluely",
      logo: "/ctools/3.png",
    },
    {
      name: "Interview Coder",
      logo: "/ctools/4.png",
    },
    {
      name: "Claude AI",
      logo: "/ctools/5.png",
    },
    {
      name: "Perplexity AI",
      logo: "/ctools/6.png",
    },
    {
      name: "Cursor AI",
      logo: "/ctools/7.png",
    },
    {
      name: "and many more",
      logo: "/ctools/8.png",
    },
  ];

  return (
    <>
      <div className=" w-full h-full p-2">
        <div className="w-full h-full bg-gradient-to-br from-[#FFDDDE] via-[#FFF1BD] to-[#FFD84A] border rounded-3xl flex flex-col items-center justify-start py-2 md:py-4">
          <Navbar />

          {/* hero content */}

          <div className="flex flex-col items-center justify-center pt-14 pb-4 space-y-4 lg:space-y-8">
            <div className="w-fit flex items-center gap-2 px-1 py-1 rounded-full border border-borderClr text-sm">
              <span className="bg-black text-xs  text-white rounded-full px-2 py-0.5 ">
                NEW
              </span>

              <p className="pr-1"> AI-powered, Cheat-proof, Privacy-first </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-[family-name:var(--font-kaio)] text-[#240029] font-bold ">
              We make cheating <br />
              in tech interviews <br /> <span className="">Impossible</span>
            </h1>

            <h2 className="text-[#6E4D59] text-xl text-pretty max-w-xl md:max-w-4xl mx-auto text-center">
              Technical hiring is <strong>broken</strong>, 52% of candidates now
              use <strong>AI</strong> or second devices to{" "}
              <strong>cheat</strong> on assessments. Our platform makes that
              nearly <strong>Impossible</strong> - while fully respecting
              <strong> candidate privacy.</strong>
              <br />
              Find truly skilled engineers through smart, secure, and
              <strong> cheat-resistant</strong> assessments, no video
              recordings, no resume noise, just qualified talent.
            </h2>

            <div className="w-fit flex items-center rounded-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Business Email"
                className="outline-none py-2 px-4 rounded-l-full border border-borderClr"
              />
              <button className="px-4 py-2  font-medium rounded-r-full border border-[#D4AA53] text-[#240029] bg-[#fc1]">
                Join Waitlist
              </button>
            </div>

            {/* companies section */}
            <div className="space-y-4">
              <p className="text-[#6E4D59] text-sm text-center">
                Protected against the most common AI cheating tools and tactics.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                {CheatTools.map((tool, index) => (
                  <div class="has-tooltip">
                    <span class="tooltip rounded-full shadow-lg px-3 py-1 bg-[#240029] text-[#fc1] font-medium -ml-4 -mt-10">
                      {tool.name}
                    </span>
                    <img
                      key={index}
                      src={tool.logo}
                      className=" rounded-full size-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* hero content */}
        </div>
      </div>
    </>
  );
}

//************** */ OLD HERO COPIED ONE*************************8

// import Navbar from "@/components/Navbar";

// import React from "react";

// export default function Hero() {
//   return (
//     <>
//       <div className=" w-screen h-screen p-2">
//         <div className="w-full h-full bg-gradient-to-br from-[#FFDDDE] via-[#FFF1BD] to-[#FFD84A] border rounded-3xl flex flex-col items-center justify-start py-2 md:py-4">
//           <Navbar />

//           {/* hero content */}

//           <div className="flex flex-col items-center justify-center py-14 space-y-8">
//             <div className="w-fit flex items-center gap-2 px-1 py-1 rounded-full border border-borderClr text-sm">
//               <span className="bg-black text-xs  text-white rounded-full px-2 py-0.5 ">
//                 NEW
//               </span>

//               <p className="pr-1">Design showcase + themes </p>
//             </div>

//             <h1 className="text-7xl text-center font-[family-name:var(--font-kaio)]  font-bold ">
//               The Membership
//               <br />
//               Operating System
//             </h1>

//             <h2 className="text-[#6E4D59] text-lg text-pretty max-w-xl md:max-w-4xl mx-auto text-center">
//               Payments, auth, gating, CRM, email—it's all here. Ditch the cookie
//               cutter platforms and monetize your membership site, SaaS, course,
//               community, or association using your favorite tools.
//             </h2>

//             <div className="gap-4 flex items-center">
//               <button className="px-4 py-2  font-medium rounded-lg border border-[#D4AA53] text-[#240029] bg-[#fc1]">
//                 Sign up for free
//               </button>
//               <button className="text-[#240029]  font-medium px-4 py-2 rounded-lg border border-[#CCB2BA] bg-white">
//                 Is Outseta for me?
//               </button>
//             </div>

//             {/* companies section */}
//             <div className="space-y-4">
//               <p className="text-[#6E4D59] text-sm text-center">
//                 Integrate with nearly any tool or framework under the sun
//               </p>
//               <div className="flex items-center gap-8">
//                 <img src="/person2.png" className="size-12 rounded-full" />
//                 <img src="/person2.png" className="size-12 rounded-full" />
//                 <img src="/person2.png" className="size-12 rounded-full" />
//                 <img src="/person2.png" className="size-12 rounded-full" />
//                 <img src="/person2.png" className="size-12 rounded-full" />
//                 <img src="/person2.png" className="size-12 rounded-full" />
//               </div>
//             </div>
//           </div>

//           {/* hero content */}
//         </div>
//       </div>
//     </>
//   );
// }
