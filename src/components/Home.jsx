import React, { useState } from "react";
import CanvasContainer from "./CanvasContainer";

const Home = () => {
  const [model, setModel] = useState("Model1");
  const [color, setColor] = useState("#FFD700");

  const handleModelChange = (modelName) => {
    setModel(modelName);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <main className="w-full h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600">
      <div className="w-full h-[92vh] sm:flex justify-between">
        <CanvasContainer model={model} color={color} />
        <div className="flex sm:flex-col gap-8 ml-4  justify-center items-center pr-20">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleModelChange("Model1")}
          >
            Ring 1
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleModelChange("Model2")}
          >
            Ring 2
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center  gap-8">
        <button className="bg-[#FFD700] hover:bg-[#af991a] rounded-full p-6" onClick={() => handleColorChange("#FFD700")}></button>
        <button className="bg-[#B76E79] hover:bg-[#975862] rounded-full p-6" onClick={() => handleColorChange("#B76E79")}></button>
        <button className="bg-[#6E6E6E] hover:bg-[#565555] rounded-full p-6" onClick={() => handleColorChange("#6E6E6E")}></button>
        <button className="bg-[#8A8A8A] hover:bg-[#5b5b5b] rounded-full p-6" onClick={() => handleColorChange("#8A8A8A")}></button>
      </div>
    </main>
  );
};

export default Home;
