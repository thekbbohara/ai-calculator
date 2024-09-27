"use client";
import Canvas from "@/components/canvas/Canvas";
import Header from "@/components/Header";
import Eraser from "@/components/ui/Eraser";
import { useRef, useState } from "react";
const Page = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [mode, setMode] = useState<"erase" | "draw">("draw");
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

      <Canvas
        mode={mode}
        canvasRef={canvasRef}
        isDrawing={isDrawing}
        isErasing={isErasing}
        selectedColor={selectedColor}
        setIsDrawing={setIsDrawing}
        setIsErasing={setIsErasing}
      />
    </>
  );
};

export default Page;
