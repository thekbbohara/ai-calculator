import { RefObject } from "react";

const writeAnswer = (
  canvasRef: RefObject<HTMLCanvasElement>,
  data: {
    expr: string;
    answer: string;
    fontSize: number;
    coordinates: { x: number; y: number };
  }[],
) => {
  const canvas = canvasRef.current;
  console.log(data);
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Optional: Clear the canvas if you want to reset previous content
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      data.forEach((res) => {
        ctx.font = `${res?.fontSize}px Arial`; // Adjust font size and style as needed
        ctx.fillStyle = "white"; // Adjust color as needed
        ctx.fillText(
          `${res?.expr}=${res?.answer}`,
          res?.coordinates.x,
          res?.coordinates.y + 50,
        );
        // ctx.fillText(res?.answer, res?.coordinates.x, res?.coordinates.y);
      });
    }
  }
};

export default writeAnswer;
