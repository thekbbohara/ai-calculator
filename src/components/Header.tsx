import React, { Dispatch, RefObject, SetStateAction } from "react";
import { Button } from "./ui/button";
import { ColorPicker } from "./ColorPicker";
import { EraserIcon } from "lucide-react";
import { resetCanvas } from "@/utils/canvas";
import RunDialog from "./RunDialog";

const Header = ({
  selectedColor,
  setSelectedColor,
  setIsErasing,
  canvasRef,
  setMode,
}: {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
  setMode: Dispatch<SetStateAction<"erase" | "draw">>;
  canvasRef: RefObject<HTMLCanvasElement>;
}) => {
  return (
    <header className=" py-2 absolute w-full top-0 mx-auto">
      <div className="flex items-center justify-evenly">
        <Button
          variant="outline"
          onClick={() => {
            resetCanvas(canvasRef);
          }}
        >
          reset
        </Button>
        <div className="flex gap-4">
          <ColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setMode={setMode}
            setIsErasing={setIsErasing}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsErasing(true);
              setMode("erase");
            }}
          >
            <EraserIcon />
          </Button>
        </div>
        {/*{" "}
        <Button
          variant="destructive"
          onClick={async () => {
            const data = await calculate(canvasRef);
            if (data != null) {
              const msg = JSON.parse(data.message);
              console.log(msg);
              writeAnswer(canvasRef, msg);
            }
          }}
        >
          run
        </Button>{" "}
        */}
        <RunDialog canvasRef={canvasRef} />
      </div>
    </header>
  );
};

export default Header;
