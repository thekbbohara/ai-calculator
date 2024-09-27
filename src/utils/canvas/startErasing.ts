import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";
const startErasing = (
  e: MouseEvent<HTMLCanvasElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  eraserSize: number = 20,
  setIsErasing: Dispatch<SetStateAction<boolean>>,
) => {
  const canvas = canvasRef.current;
  if (canvas) {
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.clearRect(
        e.nativeEvent.offsetX - eraserSize / 2,
        e.nativeEvent.offsetY - eraserSize / 2,
        eraserSize,
        eraserSize,
      );
      setIsErasing(true);
    }
  }
};
export default startErasing;
