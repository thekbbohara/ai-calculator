"use client";
import Header from "@/components/Header";
import Eraser from "@/components/ui/Eraser";
import {
  canvasSetup,
  draw,
  erase,
  startDrawing,
  startErasing,
} from "@/utils/canvas";
import { MouseEvent, useEffect, useRef, useState } from "react";
const page = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [mode, setMode] = useState<"erase" | "draw">("draw");
  const stopDrawing = () => {
    setIsErasing(false);
    setIsDrawing(false);
  };
  useEffect(() => {
    canvasSetup(canvasRef);
  }, []);
  return (
    <>
      {mode == "erase" && <Eraser isErasing={isErasing} />}
      <Header
        setMode={setMode}
        canvasRef={canvasRef}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setIsErasing={setIsErasing}
      />
      <canvas
        onMouseDown={(e: MouseEvent<HTMLCanvasElement>) => {
          if (mode == "erase") {
            startErasing(e, canvasRef, 20, setIsErasing);
          } else {
            startDrawing(e, canvasRef, setIsDrawing);
          }
        }}
        onMouseMove={(e: MouseEvent<HTMLCanvasElement>) => {
          if (mode == "draw") {
            draw(e, canvasRef, selectedColor, isDrawing);
          } else {
            erase(e, canvasRef, 20, isErasing);
          }
        }}
        onTouchEnd={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        ref={canvasRef}
      ></canvas>
    </>
  );
};

export default page;
