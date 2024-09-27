import { RefObject } from "react";

export default function canvasResizeEvent(
  canvasRef: RefObject<HTMLCanvasElement>,
) {
  window.addEventListener("resize", () => {
    console.log("hello word");
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary canvas to store the current content
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");
    if (!tempContext) return null;
    // Store the current canvas content
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempContext.drawImage(canvas, 0, 0);

    // Resize the original canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Redraw the content from the temporary canvas
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(tempCanvas, 0, 0);
    console.log({ tempContext, ctx });
  });
}
