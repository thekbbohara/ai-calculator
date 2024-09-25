import { MouseEvent, RefObject } from "react";

const draw = (
  e: MouseEvent<HTMLCanvasElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  selectedColor: string,
  isDrawing: boolean,
) => {
  if (!isDrawing) {
    return;
  }
  const canvas = canvasRef.current;
  if (canvas) {
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = selectedColor;
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  }
};
export default draw;
