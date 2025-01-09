import React, { useState } from "react";

const RingSizeTool = () => {
  const [size, setSize] = useState(50);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-4">
      <h1 className="text-3xl font-extrabold text-blue-600">
        Ring Size Measuring Tool
      </h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Place your ring on the screen and adjust the circle size until it fits
        perfectly inside your ring. The size will be displayed in millimeters.
      </p>

      {/* Ring Measuring Container */}
      <div className="relative flex justify-center items-center mt-6 w-full max-w-md h-72 bg-white shadow-xl rounded-lg border border-gray-200">
        <div
          className="border-4 border-blue-500 rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        ></div>
      </div>

      {/* Slider and Size Display */}
      <div className="mt-8 w-full max-w-lg px-4">
        <input
          type="range"
          min="10"
          max="200"
          value={size}
          onChange={handleSizeChange}
          className="w-full appearance-none h-2 bg-blue-300 rounded-lg cursor-pointer"
        />
        <p className="text-gray-700 mt-4 text-center text-lg">
          Ring Size:{" "}
          <span className="font-bold text-blue-600">{size}</span> mm
        </p>
      </div>
    </div>
  );
};

export default RingSizeTool;
 
