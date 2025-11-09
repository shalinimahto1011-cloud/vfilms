/**
 * Animated interactive background component.
 * Generates floating bubbles that disappear when hovered over.
 * Runs behind all sections to create a playful, dynamic aesthetic.
 */


import { useEffect, useState } from "react";

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // % across screen
      y: Math.random() * 100, // % down screen
      size: 8 + Math.random() * 20, // px
      duration: 6 + Math.random() * 10, // seconds
      delay: Math.random() * 5, // seconds
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setBubbles(newBubbles);
  }, []);

  const handleHover = (id) => {
    // remove bubble on hover
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--brand-bg)" }}
    >
      {bubbles.map((b) => (
        <span
          key={b.id}
          onMouseEnter={() => handleHover(b.id)}
          style={{
            left: `${b.x}vw`,
            top: `${b.y}vh`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
          className="absolute rounded-full bg-[var(--brand-red)] animate-float cursor-pointer"
        />
      ))}
    </div>
  );
}
