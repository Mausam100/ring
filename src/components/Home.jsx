import React, { useState } from "react";
import CanvasContainer from "./CanvasContainer";
import { FaBars } from "react-icons/fa"; // For the hamburger icon

const Home = () => {
  const [metalType, setMetalType] = useState("gold"); // Default metal type
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMetalTypeChange = (newMetalType) => {
    setMetalType(newMetalType);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="w-full h-screen bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300 flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full p-5 bg-white shadow-lg flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-thin italic text-gray-800">Zennah Jewellery</h1>
        </div>
        <div className="">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        {/* Hamburger Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-0 bg-white w-48 p-4 shadow-lg rounded-lg">
            <ul>
              <li className="py-2 text-gray-700">Home</li>
              <li className="py-2 text-gray-700">Shop</li>
              <li className="py-2 text-gray-700">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:py-10 sm:px-20 px-6 py-10 gap-10">
        <div className="sm:w-1/2 w-full h-[78vh] border-2 border-black">
          <CanvasContainer metalType={metalType} />
        </div>

        <div className="sm:w-1/2 w-full text-center sm:text-left">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Explore our exclusive jewelry collection</h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the elegance and craftsmanship of Zennha's unique designs. Our rings are made with the finest metals and are perfect for any occasion.
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-700">Customize Your Ring</h3>
            <p className="text-md text-gray-500 mb-4">Choose from a variety of luxurious metals to create the perfect look.</p>

            {/* Buttons for selecting metal */}
            <div className="flex justify-center gap-8">
              <button
                className="bg-[#ffd600] hover:bg-[#af991a] rounded-full p-6"
                onClick={() => handleMetalTypeChange("gold")}
              ></button>
              <button
                className="bg-[#d1838e] hover:bg-[#975862] rounded-full p-6"
                onClick={() => handleMetalTypeChange("roseGold")}
              ></button>
              <button
                className="bg-[#6E6E6E] hover:bg-[#565555] rounded-full p-6"
                onClick={() => handleMetalTypeChange("oxidizedSilver")}
              ></button>
              <button
                className="bg-[#8A8A8A] hover:bg-[#5b5b5b] rounded-full p-6"
                onClick={() => handleMetalTypeChange("brushedTitanium")}
              ></button>
            </div>

            <div className="mt-10">
              <button className="bg-[#7a7a78] text-white py-2 px-6 rounded-lg hover:bg-[#af991a]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
