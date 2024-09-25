import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

const startDrawing = (
  e: MouseEvent<HTMLCanvasElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  setIsDrawing: Dispatch<SetStateAction<boolean>>,
) => {
  const canvas = canvasRef.current;
  if (canvas) {
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  }
};
export default startDrawing;
