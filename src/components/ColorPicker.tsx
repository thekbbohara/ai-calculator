import { Dispatch, SetStateAction } from "react";

const colors = [
  "#FFFFFF", // 0 White
  "#059905", // 1 Green
  "#90EE90", // 2 Light Green
  "#0000FF", // 3 Blue
  "#00FFFF", // 4 Cyan
  "#FF0000", // 5 Red
  "#DC143C", // 6 Crimson
  "#FFFF00", // 7 Yellow
  "#FFA500", // 8 Orange
  "#EE82EE", // 9 Violet
];

export function ColorPicker({
  setSelectedColor,
  selectedColor,
}: {
  setSelectedColor: Dispatch<SetStateAction<string>>;
  selectedColor: string;
}) {
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-wrap gap-4  items-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 hover:shadow-glow"
          style={{
            backgroundColor: color,
            boxShadow:
              selectedColor === color ? "0 0 8px 5px " + color : "none",
          }}
          data-color={color}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
}
