import { RefObject } from "react";

const writeAnswer = (canvasRef: RefObject<HTMLCanvasElement>, data: string) => {
  const canvas = canvasRef.current;
  console.log(data);
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Optional: Clear the canvas if you want to reset previous content

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.font = "30px Arial"; // Adjust font size and style as needed
      ctx.fillStyle = "white"; // Adjust color as needed
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Write the text at the center of the canvas
      ctx.fillText(data, canvas.width / 2, canvas.height / 2);
    }
  }
};

export default writeAnswer;
