import React from "react";

export default function Headings({ title, desc }) {
  return (
    <div className="w-full flex items-center justify-center flex-col py-10">
      <h3 className="text-4xl font-extrabold   ">{title}</h3>
      <p className="">{desc}</p>
    </div>
  );
}
