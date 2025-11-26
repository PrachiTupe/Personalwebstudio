import React, { useEffect, useState } from "react";
import "./StickyWords.css";

export default function StickWords() {
  const words = ["ONE", "TWO", "THREE"]; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll + 40) {
        // Scroll down
        setIndex((prev) => Math.min(prev + 1, words.length - 1));
        lastScroll = current;
      } else if (current < lastScroll - 40) {
        // Scroll up
        setIndex((prev) => Math.max(prev - 1, 0));
        lastScroll = current;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="stick-wrap">
      <div className="stick-inner">
        <h1 key={index} className="word">
          {words[index]}
        </h1>
      </div>
    </section>
  );
}
