import React from "react";

export default function Headings({ title, desc }) {
  return (
    <div className="w-full space-y-1 flex items-start justify-start flex-col py-10">
      <h3 className="text-4xl font-extrabold  text-gray-700 ">{title}</h3>
      <p className="font-medium text-gray-600">{desc}</p>
    </div>
  );
}
