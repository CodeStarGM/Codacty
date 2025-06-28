import Headings from "@/components/Headings";
import {
  Bot,
  Camera,
  FileUser,
  GlobeLock,
  Handshake,
  KeyboardOff,
  MailWarning,
  MonitorSmartphone,
  MonitorX,
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
      icon: <MonitorX className="size-8" />,
      bgClr: "bg-red-500/5",
    },

    {
      title: "Cheating is easier than ever",
      desc: "Second screens, phones, ChatGPT, and most tools never catch it.",
      icon: <Bot className="size-8" />,
      bgClr: "bg-cyan-500/5",
    },
    {
      title: "Camera-only monitoring doesn’t stop cheaters",
      desc: "It looks like proctoring. It’s not. People look off-screen all the time — and still pass.",
      icon: <ScanEye className="size-8" />,
      bgClr: "bg-purple-500/5",
    },
    {
      title: "Recruiters waste hours screening manually",
      desc: "Even when someone passes, your team spends hours reviewing basic skills.",
      icon: <UserRoundSearch className="size-8" />,
      bgClr: "bg-emerald-500/5",
    },
    {
      title: "Top candidates drop off when asked to record themselves",
      desc: "Surveillance-style assessments scare off your best, introverted, or privacy-aware talent.",
      icon: <ScanFace className="size-8" />,
      bgClr: "bg-pink-500/5",
    },
    {
      title: " Rejecting at scale becomes expensive and messy",
      desc: "Sending thousands of rejection emails every week costs money, creates inbox issues, and burdens your ops team.",
      icon: <MailWarning className="size-8" />,
      bgClr: "bg-orange-500/5",
    },
  ];

  return (
    <>
      <div className=" py-20 text-white  bg-[#220032] flex flex-col space-y-10 items-center justify-center ">
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
            <button className="bg-primary px-8 py-2 rounded-full font-medium">
              Claim Now
            </button>
            <button className="border text-primary border-primary px-8 py-2 rounded-full font-medium">
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
              className={`${data.bgClr} rounded-3xl p-8 space-y-3`}
            >
              {data.icon}
              <h3 className="font-bold text-xl  ">{data.title}</h3>
              <p className="">{data.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-5xl font-extrabold font-[family-name:var(--font-space-grotesk)] pt-8">
          Companies think they have a hiring pipeline problem. What they really
          have is a broken filter.
        </p>
      </div>

      {/* problem statement */}

      {/* solution statement */}
      <div className=" p-14">
        <Headings
          title="How we fixes technical hiring"
          desc="We built what today’s hiring tools forgot: trust, accuracy, & privacy"
        />

        <div className="space-y-28">
          <div className="flex items-center justify-center lg:flex-row flex-col gap-8">
            <div className=" lg:w-[40%] lg:h-[40vh] rounded-2xl relative overflow-hidden">
              <img
                src="/fix1.png"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                  {" "}
                  AI-Powered Cheat Detection
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  We don’t just record, we enforce.
                </p>
              </div>
              <ul className=" font-medium space-y-2 tracking-tight">
                <li className="flex items-center space-x-2">
                  <ScanEye className="size-5" />
                  <span>
                    Eye and gesture tracking to detect suspicious movement
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Camera className="size-5" />
                  <span>
                    No stored video, no screenshots, just real-time AI signals
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <KeyboardOff className="size-5" />
                  <span>Locks tab, clipboard, and keyboard shortcuts </span>
                </li>

                <li className="flex items-center space-x-2">
                  <MonitorSmartphone className="size-5" />
                  <span>Flags second-device behavior instantly </span>
                </li>
              </ul>

              <div className="w-fit px-6 py-2 border-r-[2px] text-purple-800 border-l-[2px] border-purple-500 bg-purple-500/10">
                <p className="font-medium">
                  If you can cheat our tests, you deserve the job.
                </p>
              </div>
            </div>
          </div>

          {/* section2 */}
          <div className="flex items-center justify-center lg:flex-row-reverse flex-col gap-8">
            <div className="lg:w-[40%] lg:h-[40vh] rounded-2xl relative overflow-hidden">
              <img
                src="/fix2.png"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="space-y-4 ">
              <div>
                <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                  {" "}
                  Privacy-First by Design
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  Security without surveillance.
                </p>
              </div>
              <ul className=" font-medium space-y-2 ">
                <li className="flex items-center space-x-2">
                  <GlobeLock className="size-5" />
                  <span>Fully GDPR & CCPA compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Camera className="size-5" />
                  <span>No invasive recordings or screenshots</span>
                </li>

                <li className="flex items-start space-x-2 tracking-tight">
                  <Handshake className="size-5" />
                  <span>
                    Candidate data stays in their hands, & out of your liability
                    zone
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <ShieldUser className="size-5" />
                  <span>Designed for privacy-conscious developers</span>
                </li>
              </ul>

              <div className="w-fit px-6 py-2 border-r-[2px] text-purple-800 border-l-[2px] border-purple-500 bg-purple-500/10">
                <p className="font-medium">We win trust by respecting it.</p>
              </div>
            </div>
          </div>

          {/* section3 */}

          <div className="flex items-center justify-center lg:flex-row flex-col gap-8">
            <div className=" lg:w-[40%] lg:h-[40vh] rounded-2xl relative overflow-hidden">
              <img src="/fix3.jpeg" className="object-cover h-full w-full" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-darkText font-[family-name:var(--font-BG)]">
                  {" "}
                  Hire who can do the job, not <br /> just pass a filter.
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  Real Skill Insights
                </p>
              </div>
              <ul className=" font-medium space-y-2 tracking-tight">
                <li className="flex items-center space-x-2">
                  <NotepadText className="size-5" />
                  <span>
                    Clean, readable score reports and cheat activity logs
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="size-5" />
                  <span>
                    Automatically shortlists only qualified candidates
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <FileUser className="size-5" />
                  <span>
                    See resumes only for candidates who meet your criteria
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <Users className="size-5" />
                  <span>Zero effort for your team </span>
                </li>
              </ul>

              <div className="w-fit px-6 py-2 border-r-[2px] text-purple-800 border-l-[2px] border-purple-500 bg-purple-500/10">
                <p className="font-medium">No fluff, No filters, Just proof.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* solution statement */}
    </>
  );
}

// font-[family-name:var(--font-geist-sans)]
