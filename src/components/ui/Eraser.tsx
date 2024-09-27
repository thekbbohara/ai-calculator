"use client";

import { EraserIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Eraser({
  size = 20,
  selectedColor = "#FFFFFF",
  isErasing,
}: {
  size?: number;
  selectedColor?: string;
  isErasing: boolean;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Hide cursor for the entire page
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Restore cursor when component unmounts
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: isErasing ? selectedColor : "transparent",
        left: position.x - size / 2,
        top: position.y - size / 2,
        pointerEvents: "none",
        zIndex: 9999,
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EraserIcon size={size > 20 ? 20 : size - 5} />
    </div>
  );
}
