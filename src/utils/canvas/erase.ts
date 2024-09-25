import { MouseEvent, RefObject } from "react";

const erase = (
  event: MouseEvent<HTMLCanvasElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  eraserSize: number = 20, // Default eraser size
) => {
  const canvas = canvasRef.current;

  if (canvas) {
    const context = canvas.getContext("2d");

    if (context) {
      // Clear the specified rectangle area based on mouse position
      context.clearRect(
        event.nativeEvent.offsetX - eraserSize / 2, // Center the eraser
        event.nativeEvent.offsetY - eraserSize / 2,
        eraserSize,
        eraserSize,
      );
    } else {
      console.error("Unable to get canvas context.");
    }
  } else {
    console.error("Canvas reference is not available.");
  }
};

export default erase;
