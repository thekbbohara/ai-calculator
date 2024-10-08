import React, { MouseEvent, useEffect } from "react";
import {
  canvasResizeEvent,
  canvasSetup,
  draw,
  erase,
  startDrawing,
  startErasing,
} from "@/utils/canvas";
import { CanvasProps } from "@/types/canvas";
import { startTouchDrawing } from "@/utils/canvas/startDrawing";
import { touchDraw } from "@/utils/canvas/draw";

const Canvas: React.FC<CanvasProps> = ({
  canvasRef,
  selectedColor,
  isDrawing,
  setIsDrawing,
  isErasing,
  setIsErasing,
  mode,
}) => {
  useEffect(() => {
    canvasSetup(canvasRef);
    canvasResizeEvent(canvasRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const stopDrawing = () => {
    setIsDrawing(false);
    setIsErasing(false);
  };

  return (
    <canvas
      onTouchStart={(e) => {
        startTouchDrawing(e, canvasRef, setIsDrawing)
      }}
      onTouchMove={(e) => {
        touchDraw(e, canvasRef, selectedColor, isDrawing)
      }}
      ref={canvasRef}
      onMouseDown={(e: MouseEvent<HTMLCanvasElement>) => {
        if (mode === "erase") {
          startErasing(e, canvasRef, 20, setIsErasing);
        } else {
          startDrawing(e, canvasRef, setIsDrawing);
        }
      }}
      onMouseMove={(e: MouseEvent<HTMLCanvasElement>) => {
        if (mode === "draw") {
          draw(e, canvasRef, selectedColor, isDrawing);
        } else {
          erase(e, canvasRef, 20, isErasing);
        }
      }}
      onTouchCancel={stopDrawing}
      onMouseOut={stopDrawing}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
};

export default Canvas;
