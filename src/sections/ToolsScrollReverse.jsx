import React, { useEffect, useRef, useState } from "react";
import "./ToolsScrollReverse.css";

import icon1 from "../icons/tools/t7.svg";
import icon2 from "../icons/tools/t8.svg";
import icon3 from "../icons/tools/t9.svg";
import icon4 from "../icons/tools/t10.svg";
import icon5 from "../icons/tools/t11.svg";
import icon6 from "../icons/tools/t12.svg";

export default function ToolsScrollReverse() {
  const rowRef = useRef(null);
  const rectangleRef = useRef(null);
  const [maxOffset, setMaxOffset] = useState(0);

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const repeatedIcons = [...icons, ...icons, ...icons, ...icons]; // repeat for smooth movement

  useEffect(() => {
    if (rowRef.current && rectangleRef.current) {
      const rowWidth = rowRef.current.scrollWidth;
      const rectWidth = rectangleRef.current.offsetWidth;
      const initialOffset = -rowWidth; // start fully left
      const maxMove = 0; // stop at 0 so it doesn't leave rectangle
      setMaxOffset({ initialOffset, maxMove });
    }
  }, []);

  useEffect(() => {
    if (!maxOffset) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let move = maxOffset.initialOffset + scrollY * 0.4; // calculate move
      if (move > maxOffset.maxMove) move = maxOffset.maxMove; // clamp
      rowRef.current.style.transform = `translateX(${move}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxOffset]);

  return (
    <section className="tools-scroll-reverse-section">
      <div className="tools-scroll-rectangle-reverse" ref={rectangleRef}>
        <div className="tools-scroll-reverse-row" ref={rowRef}>
          {repeatedIcons.map((src, index) => (
            <img key={index} src={src} alt="tool-icon" className="tool-icon-reverse" />
          ))}
        </div>
      </div>
    </section>
  );
}
