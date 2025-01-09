import React, { useState } from "react";

const RingSizeTool = () => {
  const [sizeInPixels, setSizeInPixels] = useState(50); // Size of the ring in pixels

  const handleSizeChange = (e) => {
    setSizeInPixels(e.target.value);
  };

  const sizeInMm = ((sizeInPixels / 200) * 50).toFixed(1); // Convert size to mm, assuming 200px = 50mm in real size

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-4">
      <h1 className="text-3xl font-extrabold text-blue-600">
        Ring Size Measuring Tool
      </h1>

      <p className="text-gray-600 mt-2 text-center max-w-md">
        Place your ring on the screen and adjust the circle size until it fits
        perfectly inside your ring. The size will be displayed in millimeters.
      </p>

      {/* Fixed Size Box for Ring Measurement */}
      <div className="relative flex justify-center items-center mt-6 w-[200px] h-[200px] bg-white shadow-xl rounded-lg border border-gray-200">
        <div
          className="border-4 border-blue-500 rounded-full"
          style={{
            width: `${sizeInPixels}px`,
            height: `${sizeInPixels}px`,
          }}
        ></div>
      </div>

      {/* Slider and Size Display */}
      <div className="mt-8 w-full max-w-lg px-4">
        <input
          type="range"
          min="10"
          max="200"
          value={sizeInPixels}
          onChange={handleSizeChange}
          className="w-full appearance-none h-2 bg-blue-300 rounded-lg cursor-pointer"
        />
        <p className="text-gray-700 mt-4 text-center text-lg">
          Ring Size:{" "}
          <span className="font-bold text-blue-600">{sizeInMm}</span> mm
        </p>
      </div>
    </div>
  );
};

export default RingSizeTool;
