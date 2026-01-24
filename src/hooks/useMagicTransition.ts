import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const COLORS = [
  "255, 99, 132",  // pink
  "255, 206, 86",  // yellow
  "75, 192, 192",  // mint
  "54, 162, 235",  // blue
  "153, 102, 255", // purple
  "255, 159, 64",  // orange
];

export const useMagicTransition = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("span");
      const size = Math.random() * 32 + 18;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      bubble.className = "magic-bubble";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.setProperty("--bubble-color", color);
      bubble.style.animationDelay = `${Math.random()}s`;

      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 4200);
    }
  }, [pathname]);
};
