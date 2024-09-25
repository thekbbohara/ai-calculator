import { RefObject } from "react";

const resetCanvas = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const canvas = canvasRef.current;

  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // Clear the specified rectangle area based on mouse position
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      console.error("Unable to get canvas context.");
    }
  } else {
    console.error("Canvas reference is not available.");
  }
};

export default resetCanvas;
