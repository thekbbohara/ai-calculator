"use client";
import Header from "@/components/Header";
import Eraser from "@/components/ui/Eraser";
import { calculate } from "@/utils";
import {
  canvasSetup,
  draw,
  erase,
  resetCanvas,
  startDrawing,
  writeAnswer,
} from "@/utils/canvas";
import { MouseEvent, useEffect, useRef, useState } from "react";
const page = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const stopDrawing = () => {
    setIsDrawing(false);
    setIsErasing(false);
  };
  useEffect(() => {
    canvasSetup(canvasRef);
  }, []);
  return (
    <>
      {isErasing && <Eraser />}
      <Header
        resetCanvas={() => {
          resetCanvas(canvasRef);
        }}
        calculate={async () => {
          const data = await calculate(canvasRef);
          if (data != null) {
            console.log(typeof data);
            const msg = JSON.parse(data.message);
            console.log("data.message", typeof msg);
            console.log(msg, msg[0]);
            const { expr, result } = msg[0];
            writeAnswer(canvasRef, `${expr} = ${result}`);
          }
        }}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setIsDrawing={setIsDrawing}
        setIsErasing={setIsErasing}
      />
      <canvas
        onMouseDown={(e: MouseEvent<HTMLCanvasElement>) => {
          if (!isErasing) {
            startDrawing(e, canvasRef, setIsDrawing);
          }
        }}
        onMouseMove={(e: MouseEvent<HTMLCanvasElement>) => {
          if (isDrawing) {
            draw(e, canvasRef, selectedColor, isDrawing);
          }
          if (isErasing) {
            erase(e, canvasRef);
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
