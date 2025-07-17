import Navbar from "@/components/Navbar";

import React from "react";

export default function Hero() {
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

            <h2 className="text-[#6E4D59] text-lg text-pretty max-w-xl md:max-w-4xl mx-auto text-center">
              Codacty runs cheat-proof, AI-powered technical assessments that
              spotlight real skill, without storing video or invading candidate
              privacy.
            </h2>

            <div className="gap-4 flex items-center">
              <button className="px-4 py-2  font-medium rounded-lg border border-[#D4AA53] text-[#240029] bg-[#fc1]">
                Sign up for free
              </button>
              <button className="text-[#240029]  font-medium px-4 py-2 rounded-lg border border-[#CCB2BA] bg-white">
                Founder Story?
              </button>
            </div>

            {/* companies section */}
            <div className="space-y-4">
              <p className="text-[#6E4D59] text-sm text-center">
                Integrate with nearly any tool or framework under the sun
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                <img src="/person2.png" className="size-12 rounded-full" />
                <img src="/person2.png" className="size-12 rounded-full" />
                <img src="/person2.png" className="size-12 rounded-full" />
                <img src="/person2.png" className="size-12 rounded-full" />
                <img src="/person2.png" className="size-12 rounded-full" />
                <img src="/person2.png" className="size-12 rounded-full" />
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
