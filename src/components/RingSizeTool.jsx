import React, { useState } from "react";

const RingSizeTool = () => {
  const [sizeInPixels, setSizeInPixels] = useState(50); // Size in pixels
  const [dpi, setDpi] = useState(96); // Default DPI (for calibration)
  const [isCalibrating, setIsCalibrating] = useState(true); // Calibration flag

  const handleSizeChange = (e) => {
    setSizeInPixels(e.target.value);
  };

  const handleDpiChange = (e) => {
    setDpi(e.target.value);
  };

  const handleCalibration = () => {
    setIsCalibrating(false);
  };

  const sizeInMm = ((sizeInPixels / dpi) * 25.4).toFixed(1); // Convert pixels to mm

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-4">
      <h1 className="text-3xl font-extrabold text-blue-600">
        Ring Size Measuring Tool
      </h1>

      {isCalibrating ? (
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            To ensure accurate measurement, please enter your screen's DPI:
          </p>
          <input
            type="number"
            value={dpi}
            onChange={handleDpiChange}
            className="mt-4 p-2 border border-gray-300 rounded"
            placeholder="Enter your screen DPI"
          />
          <button
            onClick={handleCalibration}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Start Measuring
          </button>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mt-2 text-center max-w-md">
            Place your ring on the screen and adjust the circle size until it fits
            perfectly inside your ring. The size will be displayed in millimeters.
          </p>

          {/* Ring Measuring Container */}
          <div className="relative flex justify-center items-center mt-6 w-full max-w-md h-72 bg-white shadow-xl rounded-lg border border-gray-200">
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
              max="500"
              value={sizeInPixels}
              onChange={handleSizeChange}
              className="w-full appearance-none h-2 bg-blue-300 rounded-lg cursor-pointer"
            />
            <p className="text-gray-700 mt-4 text-center text-lg">
              Ring Size:{" "}
              <span className="font-bold text-blue-600">{sizeInMm}</span> mm
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default RingSizeTool;
