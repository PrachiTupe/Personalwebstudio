import React from "react";
import LogoMarquee from "./LogoMarquee";

export default function Partners() {
  return (
    <section className="w-full py-16 bg-black" id="partners">
      <h2 className="text-3xl font-bold text-center  text-white">
        Our Official Partners
      </h2>

      <div className="max-w-6xl mx-auto">
        <LogoMarquee />
      </div>
    </section>
  );
}
