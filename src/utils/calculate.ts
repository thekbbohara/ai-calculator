import { RefObject } from "react";
import { canvasToImage } from "./canvas";
import axios from "axios";

const calculate = async (
  canvasRef: RefObject<HTMLCanvasElement>,
): Promise<{ message: string } | null> => {
  const {HOST}=process.env
  try {
    const base64Data = canvasToImage(canvasRef);
    if (!base64Data) {
      console.error("Failed to convert canvas to image");
      return {
        message: JSON.stringify([
          { expr: "Error", answer: "Failed to convert canvas to image" },
        ]),
      };
    }
    const img = base64Data.split(",")[1];
    // Send the image to the backend API
    const response = await axios.post(`${HOST}/api/img-to-ans`, {
      img, // Base64 string representation of the image
      mimeType: "image/jpeg",
      displayName: "draw to Calc",
    });
    // Log the response from the API
    return response.data;
  } catch (error) {
    console.error("Error converting into image", error);
    return {
      message: JSON.stringify([
        { expr: "Error", answer: "Error converting into image" },
      ]),
    };
  }
};

export default calculate;
