import React, { useEffect, useState } from "react";
import "./FakeNotification.css";
import bluetick from "../icons/bluetick.svg";

const names = [
  "Aarav Shah",
  "Rohit Verma",
  "Neha Singh",
  "Pooja Mehta",
  "Aditi Sharma",
  "Karan Patel",
  "Rahul Nair",
  "Sneha Iyer",
  "Vikram Rao",
  "Harsh Tiwari",
  "Om Mahadik"
];

export default function FakeNotification() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [timeText, setTimeText] = useState("");

  const getTimeAgo = () => {
    const random = Math.random();
    if (random < 0.5) return "just now";
    if (random < 0.8) return "1 min ago";
    return `${Math.floor(Math.random() * 5) + 2} mins ago`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
  
      setUser(randomName);
      setTimeText(getTimeAgo());
      setShow(true);
  
      // show for 15 seconds
      setTimeout(() => setShow(false), 15000);
    }, 20000); // show every 20 sec
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="fake-noti-container">
      <div className={`fake-noti ${show ? "show" : ""}`}>
        <div className="noti-icon">
          <img src={bluetick} alt="tick" />
        </div>

        <div className="noti-text">
          <div className="main-msg">
            {user} registered for the free guidance session
          </div>
          <div className="time-msg">{timeText}</div>
        </div>
      </div>
    </div>
  );
}
