import Image from "next/image";

export default function Home() {
  return (
    <div className=" py-20 text-black flex flex-col space-y-10 items-center justify-center ">
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

        <span className="font-normal">
          {" "}
          AI-powered, Cheat-proof, Privacy-first,
        </span>
        <h1 className="font-extrabold text-7xl text-center relative">
          We make cheating <br />
          in tech interviews <br /> <span className="text-8xl">Impossible</span>
        </h1>
      </div>

      <div className="flex items-center justify-center flex-col">
        <p className="w-[70%] text-sm pb-10 text-center">
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
  );
}

// font-[family-name:var(--font-geist-sans)]
