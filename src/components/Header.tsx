import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { ColorPicker } from "./ColorPicker";
import { EraserIcon } from "lucide-react";

const Header = ({
  selectedColor,
  setSelectedColor,
  setIsDrawing,
  setIsErasing,
  resetCanvas,
}: {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  setIsDrawing: Dispatch<SetStateAction<boolean>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
  resetCanvas: () => void;
}) => {
  return (
    <header className=" py-2 absolute w-full top-0 mx-auto">
      <div className="flex items-center justify-evenly">
        <Button variant="outline" onClick={resetCanvas}>
          reset
        </Button>
        <div className="flex gap-4">
          <ColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsDrawing(false);
              setIsErasing(true);
            }}
          >
            <EraserIcon />
          </Button>
        </div>
        <Button variant="destructive">run</Button>
      </div>
    </header>
  );
};

export default Header;
