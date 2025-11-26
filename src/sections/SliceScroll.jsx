import React, { useEffect, useRef, useState } from "react";
import "./SliceScroll.css";

export default function SliceScroll() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  const words = [
    "WE DESIGN PREMIUM WEBSITES",
    "BOOST YOUR BRAND WITH SEO & MARKETING",
    "GET A MODERN WEBSITE — BUILT FOR FREE"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.min(
        Math.max((vh - rect.top) / vh, 0),
        words.length
      );

      const newIndex = Math.floor(progress);
      setIndex(newIndex >= words.length ? words.length - 1 : newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="slice-scroll-section" ref={sectionRef}>
      <div className="slice-sticky">
        {words.map((word, i) => (
          <h1
            key={i}
            className={`slice-word ${i === index ? "active" : ""}`}
          >
            {word}
          </h1>
        ))}
      </div>
    </div>
  );
}
