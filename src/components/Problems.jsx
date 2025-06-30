import React from "react";
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
import Headings from "./Headings";

export default function Problems() {
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
    </>
  );
}
