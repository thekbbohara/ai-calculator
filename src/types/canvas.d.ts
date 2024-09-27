import { Dispatch, RefObject, SetStateAction } from "react";

export interface CanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  selectedColor: string;
  isDrawing: boolean;
  setIsDrawing: Dispatch<SetStateAction<boolean>>;
  isErasing: boolean;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
  mode: "erase" | "draw";
}
