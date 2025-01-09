import React, { useState } from "react";

const RingSizeTool = () => {
  const [sizeInPixels, setSizeInPixels] = useState(50); // Size in pixels
  const [dpi, setDpi] = useState(96); // Default DPI (for calibration)
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const [screenSizeInches, setScreenSizeInches] = useState(""); // User input for screen size
  const [isDetailsChecked, setIsDetailsChecked] = useState(false);

  // Function to retrieve device details
  const checkDeviceDetails = () => {
    const width = screen.width;
    const height = screen.height;
    const dpr = window.devicePixelRatio;
    
    // Calculate DPI based on resolution and screen size (if user provides it)
    if (screenSizeInches) {
      const diagonalResolution = Math.sqrt(width * width + height * height);
      const calculatedDpi = diagonalResolution / parseFloat(screenSizeInches);
      setDpi(calculatedDpi);
    }

    // Set the device details state
    setScreenWidth(width);
    setScreenHeight(height);
    setDevicePixelRatio(dpr);
    setIsDetailsChecked(true);
  };

  const handleSizeChange = (e) => {
    setSizeInPixels(e.target.value);
  };

  const handleScreenSizeChange = (e) => {
    setScreenSizeInches(e.target.value);
  };

  const sizeInMm = ((sizeInPixels / dpi) * 25.4).toFixed(1); // Convert pixels to mm

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
            width: `${sizeInPixels}px`,
            height: `${sizeInPixels}px`,
          }}
        ></div>
      </div>

 {/* User Input for Screen Size (in inches) */}
 <div className="mt-6 text-center">
        <p className="text-gray-700">Enter your screen size (in inches, diagonal):</p>
        <input
          type="number"
          value={screenSizeInches}
          onChange={handleScreenSizeChange}
          className="mt-2 p-2 border border-gray-300 rounded"
          placeholder="Enter screen size"
        />
      </div>
      {/* Device Details */}
      <div className="mt-6 text-center">
        <button
          onClick={checkDeviceDetails}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Measurement
        </button>

        {/* {isDetailsChecked && (
          <div className="mt-4">
            <p>Screen Resolution: {screenWidth}x{screenHeight} px</p>
            <p>Device Pixel Ratio (DPR): {devicePixelRatio}</p>
            <p>Calculated DPI: {dpi.toFixed(1)}</p>
          </div>
        )} */}
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
    </div>
  );
};

export default RingSizeTool;
