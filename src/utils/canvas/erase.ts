import { MouseEvent, RefObject } from "react";
const erase = (
  e: MouseEvent<HTMLCanvasElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  eraserSize: number,
  isDrawing: boolean,
) => {
  if (!isDrawing) {
    return;
  }
  const canvas = canvasRef.current;
  if (canvas) {
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.clearRect(
        e.nativeEvent.offsetX - eraserSize / 2, // Center the eraser
        e.nativeEvent.offsetY - eraserSize / 2,
        eraserSize,
        eraserSize,
      );
    }
  }
};
export default erase;
