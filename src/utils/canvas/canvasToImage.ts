import { RefObject } from "react";

const canvasToImage = (canvasRef: RefObject<HTMLCanvasElement>): string => {
  const canvas = canvasRef.current;
  if (!canvas) return "null";
  const image = canvas.toDataURL("image/png");
  return image;
};
export default canvasToImage;
