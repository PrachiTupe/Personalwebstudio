import React, { useEffect, useRef, useState } from "react";
import "./ToolsScroll.css";

import icon1 from "../icons/tools/t1.svg";
import icon2 from "../icons/tools/t2.svg";
import icon3 from "../icons/tools/t3.svg";
import icon4 from "../icons/tools/t4.svg";
import icon5 from "../icons/tools/t5.svg";
import icon6 from "../icons/tools/t6.svg";

export default function ToolsScroll() {
  const rowRef = useRef(null);
  const rectangleRef = useRef(null);
  const [maxOffset, setMaxOffset] = useState(0);

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const repeatedIcons = [...icons, ...icons, ...icons]; // repeat for smooth movement
  const infiniteRow = [...repeatedIcons, ...repeatedIcons]; // duplicated belt

  useEffect(() => {
    if (rowRef.current && rectangleRef.current) {
      const rowWidth = rowRef.current.scrollWidth;
      const rectWidth = rectangleRef.current.offsetWidth;
      const initialOffset = rectWidth; // start fully off-screen right
      const maxMove = -rowWidth + rectWidth; // max left movement
      setMaxOffset({ initialOffset, maxMove });
    }
  }, []);

  useEffect(() => {
    if (!maxOffset) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let move = maxOffset.initialOffset - scrollY * 0.4; // scroll left as user scrolls down
      if (move < maxOffset.maxMove) move = maxOffset.maxMove; // clamp to max left
      rowRef.current.style.transform = `translateX(${move}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxOffset]);

  return (
    <section className="tools-scroll-section">
      <div className="tools-scroll-rectangle" ref={rectangleRef}>
        <div className="tools-scroll-row" ref={rowRef}>
          {infiniteRow.map((src, index) => (
            <img key={index} src={src} alt="tool-icon" className="tool-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}
