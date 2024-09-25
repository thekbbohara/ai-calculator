import { RefObject } from "react";
import { canvasToImage } from "./canvas";
import axios from "axios";

const calculate = async (canvasRef: RefObject<HTMLCanvasElement>) => {
  try {
    const base64Data = canvasToImage(canvasRef);
    if (!base64Data) {
      console.error("Failed to convert canvas to image");
      return;
    }
    const img = base64Data.split(",")[1];
    // Send the image to the backend API
    const response = await axios.post("http://localhost:3000/api/img-to-ans", {
      img, // Base64 string representation of the image
      mimeType: "image/jpeg",
      displayName: "draw to Calc",
    });
    // Log the response from the API
    console.log(response.data);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default calculate;
