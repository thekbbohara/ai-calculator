import { RefObject } from "react";
import { canvasToImage } from "./canvas";
import axios from "axios";

const calculate = async (
  canvasRef: RefObject<HTMLCanvasElement>,
): Promise<{ [key: string]: any } | null> => {
  try {
    const base64Data = canvasToImage(canvasRef);
    if (!base64Data) {
      console.error("Failed to convert canvas to image");
      return null;
    }
    const canvas = canvasRef.current;
    const canvasWidth = canvas?.clientWidth;
    const canvasHeight = canvas?.clientHeight;
    const img = base64Data.split(",")[1];
    // Send the image to the backend API
    const response = await axios.post("http://localhost:3000/api/img-to-ans", {
      canvasSize: { canvasHeight: canvasHeight, canvasWidth: canvasWidth },
      img, // Base64 string representation of the image
      mimeType: "image/jpeg",
      displayName: "draw to Calc",
    });
    // Log the response from the API
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export default calculate;
