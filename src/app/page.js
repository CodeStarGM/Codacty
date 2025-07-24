import BuiltFor from "@/sections/BuiltFor";
import Cheated from "@/sections/Cheated";
import CTA from "@/sections/CTA";
import FixHiring from "@/sections/FixHiring";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import PriceCalculator from "@/sections/PriceCalculator";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import YCHook from "@/sections/YCHook";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <Problem />

      <Cheated />

      <Solution />

      <FixHiring />

      <BuiltFor />

      <YCHook />

      <PriceCalculator />

      <div className="p-4">
        <CTA />
      </div>

      <Footer />
    </>
  );
}

// font-[family-name:var(--font-geist-sans)]
