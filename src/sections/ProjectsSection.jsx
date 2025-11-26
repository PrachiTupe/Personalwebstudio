import React, { useRef, useEffect } from "react";
import "./ProjectsSection.css";

// Import videos
import v1 from "../videos/v1.mp4";
import v2 from "../videos/v2.mp4";
import v3 from "../videos/v3.mp4";

const projects = [
  {
    id: 1,
    video: v1,
    title: "S-Home",
    subtitle:
      "A smart home management website that allows users to control and monitor devices, automate routines, and make their home more efficient and connected.",
  },
  {
    id: 2,
    video: v2,
    title: "Unique",
    subtitle:
      "A user-friendly car rental platform that lets customers browse, book, and manage rental vehicles easily, with features for both users and administrators",
  },
  {
    id: 3,
    video: v3,
    title: "Monex",
    subtitle:
      "A comprehensive financial solutions website providing tools for budgeting, tracking expenses, and managing investments securely and efficiently.",
  },
];

export default function ProjectsSection() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video) => {
        if (!video) return;

        const rect = video.getBoundingClientRect();
        const videoMid = rect.top + rect.height / 2;
        const screenMid = window.innerHeight / 2;

        // If the middle of video is near the middle of screen, play it continuously
        if (Math.abs(videoMid - screenMid) < rect.height / 2) {
          if (video.paused) video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Trigger on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="projects-section">
      <h2 className="section-heading">Our Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={proj.id} className="project-card">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={proj.video}
              muted
              loop
            ></video>
            <div className="project-text">
              <h3>{proj.title}</h3>
              <p>{proj.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
