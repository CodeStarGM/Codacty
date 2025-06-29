import Headings from "@/components/Headings";
import {
  Bot,
  Camera,
  ChartColumn,
  FileUser,
  GlobeLock,
  Handshake,
  KeyboardOff,
  Link,
  MailWarning,
  MonitorSmartphone,
  MonitorX,
  NotebookPen,
  NotepadText,
  ScanEye,
  ScanFace,
  ShieldCheck,
  ShieldUser,
  Sparkles,
  UserRoundSearch,
  Users,
} from "lucide-react";

export default function Home() {
  const problemStatements = [
    {
      title: "ATS systems reject great candidates",
      desc: "One formatting error and you're out, no evaluation of actual skill.",
      icon: <MonitorX className="size-6" />,
      bgClr: "bg-red-500/5",
    },

    {
      title: "Cheating is easier than ever",
      desc: "Second screens, phones, ChatGPT, and most tools never catch it.",
      icon: <Bot className="size-6" />,
      bgClr: "bg-cyan-500/5",
    },
    {
      title: "Camera-only monitoring doesn’t stop cheaters",
      desc: "It looks like proctoring. It’s not. People look off-screen all the time — and still pass.",
      icon: <ScanEye className="size-6" />,
      bgClr: "bg-purple-500/5",
    },
    {
      title: "Recruiters waste hours screening manually",
      desc: "Even when someone passes, your team spends hours reviewing basic skills.",
      icon: <UserRoundSearch className="size-6" />,
      bgClr: "bg-emerald-500/5",
    },
    {
      title: "Top candidates drop off when asked to record themselves",
      desc: "Surveillance-style assessments scare off your best, introverted, or privacy-aware talent.",
      icon: <ScanFace className="size-6" />,
      bgClr: "bg-pink-500/5",
    },
    {
      title: " Rejecting at scale becomes expensive and messy",
      desc: "Sending thousands of rejection emails every week costs money, creates inbox issues, and burdens your ops team.",
      icon: <MailWarning className="size-6" />,
      bgClr: "bg-orange-500/5",
    },
  ];

  return (
    <>
      <div className=" py-20 text-white  bg-primary flex flex-col space-y-10 items-center justify-center ">
        <div className="text-center relative">
          {/* images */}
          <img
            src="/person1.png"
            className="absolute  w-[17%] -left-[24%] -top-[10%]"
          />
          <img
            src="/person2.png"
            className="absolute w-[10%] -left-[15%] -bottom-[10%]"
          />
          <img
            src="/person3.png"
            className="absolute w-[10%] -right-[20%] top-[10%]"
          />
          <img
            src="/heartface.png"
            className="absolute w-[10%] -right-[2%] bottom-[2%]"
          />

          {/* images */}

          <span className="font-normal font-[family-name:var(--font-space-grotesk)]">
            {" "}
            AI-powered, Cheat-proof, Privacy-first,
          </span>
          <h1 className="font-extrabold text-7xl text-center relative ">
            We make cheating <br />
            in tech interviews <br />{" "}
            <span className="text-8xl">Impossible</span>
          </h1>
        </div>

        <div className="flex items-center justify-center flex-col">
          <p className="w-[70%] text-sm pb-10 text-center ">
            Codacty runs cheat-proof, AI-powered technical assessments that
            spotlight real skill, without storing video or invading candidate
            privacy.
          </p>
          <div className="space-x-4 ">
            <button className="bg-secondary px-8 py-2 rounded-full font-medium">
              Claim Now
            </button>
            <button className="border text-secondary border-secondary px-8 py-2 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* problem statement */}

      <div className=" p-14">
        <Headings
          title="Why technical hiring is broken"
          desc="You deserve better signal, not just more noise."
        />

        <div className="grid grid-cols-3 gap-3 ">
          {problemStatements.map((data, index) => (
            <div
              key={index}
              className={`hover:bg-gray-50  rounded-3xl p-8 space-x-2 flex items-start`}
            >
              <div> {data.icon}</div>
              <div className="space-y-1">
                <h3 className="font-bold  text-gray-800 ">{data.title}</h3>
                <p className="text-sm text-gray-700">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xl font-extrabold font-[family-name:var(--font-BG)] pt-8">
          Companies think they have a hiring pipeline{" "}
          <span className="text-white bg-primary px-2 rounded py-1">
            problem
          </span>{" "}
          What they really have is a{" "}
          <span className="text-white bg-primary px-2 rounded py-1">
            broken
          </span>{" "}
          filter.
        </p>
      </div>

      {/* problem statement */}

      {/* bento solution statement */}
      <div className=" py-14 px-40">
        <Headings
          title="How we fixes technical hiring"
          desc="We built what today’s hiring tools forgot: trust, accuracy, & privacy"
        />

        <div className="space-y-2">
          <div className="flex bg-[#F7F7F7] border items-center justify-around lg:flex-row-reverse flex-col gap-8 p-8 rounded-3xl ">
            <div className=" lg:w-[40%] lg:h-[40vh] rounded-2xl relative overflow-hidden">
              <img
                src="/fix1.png"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-4 lg:w-[50%]">
              <div className="">
                <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                  {" "}
                  AI-Powered{" "}
                  <span className="text-white bg-red-500 px-2 rounded">
                    Cheat
                  </span>{" "}
                  Detection
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  We don’t just record, we enforce.
                </p>
              </div>

              <p className="font-medium  text-gray-800 ">
                Codacty uses smart eye and gesture tracking to catch suspicious
                behavior in real time without recording video or taking
                screenshots. We lock tabs, block shortcuts, and instantly flag
                second devices, so you can trust every result.
              </p>

              <div className="w-fit px-6 py-2 border-r-[2px] text-green-800 border-l-[2px] border-green-500 bg-green-500/10">
                <p className="font-medium">
                  If you can cheat our tests, you deserve the job.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full gap-2 flex items-start justify-between">
            {/* section2 */}
            <div className="bg-[#F7F7F7] border w-full rounded-3xl p-6 flex items-center justify-center flex-col-reverse gap-8 h-full">
              <div className="w-full lg:h-[30vh] rounded-2xl relative overflow-hidden">
                <img
                  src="/fix2.png"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-4 ">
                <div>
                  <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                    {" "}
                    <span className="text-white bg-purple-500 px-2 rounded">
                      Privacy-First
                    </span>{" "}
                    by Design
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Security without surveillance.
                  </p>
                </div>
                <p className="font-medium  text-gray-800 ">
                  Codacty keeps everything private and is fully GDPR and CCPA
                  compliant. We never record videos or take screenshots. All
                  candidate information stays safe and under their control, so
                  you don’t have to worry about privacy issues.
                </p>

                <div className="w-fit px-6 py-2 border-r-[2px] text-green-800 border-l-[2px] border-green-500 bg-green-500/10">
                  <p className="font-medium">We win trust by respecting it.</p>
                </div>
              </div>
            </div>

            {/* section3 */}

            <div className="bg-[#F7F7F7] border w-full rounded-3xl p-6 flex items-center justify-center flex-col-reverse gap-8 h-full">
              <div className="w-full lg:h-[30vh] rounded-2xl relative overflow-hidden">
                <img
                  src="/fix3.jpeg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-darkText leading-none pb-1">
                    {" "}
                    Hire who can{" "}
                    <span className="text-white bg-pink-500 px-2 rounded">
                      do the job
                    </span>{" "}
                    not <br /> just pass a filter.
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Real Skill Insights.
                  </p>
                </div>

                <p className="font-medium  text-gray-800 ">
                  Codacty gives you clear assessment results and shows any
                  cheating activity. It automatically picks out the best
                  candidates and only shows you resumes that match what you
                  need. No extra work for your team.
                </p>

                <div className="w-fit px-6 py-2 border-r-[2px] text-green-800 border-l-[2px] border-green-500 bg-green-500/10">
                  <p className="font-medium">
                    No fluff, No filters, Just proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* solution statement */}

      {/* how it work */}

      <div className=" py-14 px-20">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-gray-800 text-5xl font-extrabold ">
              How it works?
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              You don’t need to review endless resumes or play ATS games that
              filter out great people for the wrong reasons. Just cut the noise
              and get resumes only for candidates who actually prove they’re
              qualified to do the work.
            </p>
          </div>

          <div>
            <img src="/abstractSquare.png" className="rounded-3xl" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 py-10">
          <div className=" font-[family-name:var(--font-BG)]">
            <h3 className="font-bold  text-darkText text-xl">
              <span className="text-5xl font-extrabold text-pink-500">1.</span>{" "}
              Create a Test
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              Choose from our question library or import your own challenges in
              minutes.
            </p>
          </div>
          {/* 2nd */}
          <div className=" font-[family-name:var(--font-BG)]">
            <h3 className="font-bold  text-darkText text-xl">
              <span className="text-5xl font-extrabold text-purple-500">
                2.{" "}
              </span>
              Invite Candidates
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              Generate a secure link and share it with candidates, or send the
              assessment by email.
            </p>
          </div>
          {/* 3rd */}
          <div className=" font-[family-name:var(--font-BG)]">
            <h3 className="font-bold  text-darkText text-xl">
              <span className="text-5xl font-extrabold text-green-500">3.</span>{" "}
              Get Results
            </h3>
            <p className="font-medium text-gray-700 text-balance">
              View scores, see any cheating alerts, and download your shortlist,
              all in one place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// font-[family-name:var(--font-geist-sans)]
