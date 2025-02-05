"use client"


import React, { useState } from "react";

const Sidebar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOccasionsOpen, setIsOccasionsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const toggleOccasionsDropdown = () => {
    setIsOccasionsOpen((prev) => !prev);
  };

  const toggleAccountDropdown = () => {
    setIsAccountOpen((prev) => !prev);
  };

  return (
    <div className="w-72 h-screen bg-blue-400 text-gray-900 p-6 space-y-6 shadow-lg">
      {/* Sidebar Header */}
      <div className="text-3xl font-extrabold tracking-wide text-gray-900">
        Dabbe Me Dabba 🎁
      </div>

      {/* Sidebar Navigation */}
      <div className="space-y-5">
        {/* Home */}
        <div className="flex items-center space-x-3 text-lg hover:text-gray-600 cursor-pointer">
          <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-yellow-400 font-bold">
            H
          </div>
          <span>Home</span>
        </div>

        {/* Categories Dropdown */}
        <div>
          <button
            onClick={toggleCategoriesDropdown}
            className="flex items-center justify-between w-full text-lg hover:text-gray-600"
          >
            <span>Gift Categories</span>
            <span>{isCategoriesOpen ? "▲" : "▼"}</span>
          </button>
          {isCategoriesOpen && (
            <div className="mt-2 ml-4 space-y-2 text-sm bg-gray-100 p-3 rounded">
              <a href="#" className="block hover:text-gray-700">
                Category 1
              </a>
              <a href="#" className="block hover:text-gray-700">
                Category 2
              </a>
              <a href="#" className="block hover:text-gray-700">
                Category 3
              </a>
              
            </div>
          )}
        </div>

        {/* Occasions Dropdown */}
        <div>
          <button
            onClick={toggleOccasionsDropdown}
            className="flex items-center justify-between w-full text-lg hover:text-gray-600"
          >
            <span>Occasions</span>
            <span>{isOccasionsOpen ? "▲" : "▼"}</span>
          </button>
          {isOccasionsOpen && (
            <div className="mt-2 ml-4 space-y-2 text-sm bg-gray-100 p-3 rounded">
              
              <a href="#" className="block hover:text-gray-700">
                Weddings
              </a>
              <a href="#" className="block hover:text-gray-700">
                Anniversaries
              </a>
              <a href="#" className="block hover:text-gray-700">
                Baby Showers
              </a>
              <a href="#" className="block hover:text-gray-700">
                Corporate Gifting
              </a>
              <a href="#" className="block hover:text-gray-700">
                Seasonal Festivals
              </a>
            </div>
          )}
        </div>

       

        {/* Cart */}
        <div className="flex items-center space-x-3 text-lg hover:text-gray-600 cursor-pointer">
          <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-yellow-400 font-bold">
            C
          </div>
          <span>My Cart</span>
        </div>

        {/* Contact Us */}
        <div className="flex items-center space-x-3 text-lg hover:text-gray-600 cursor-pointer">
          <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-yellow-400 font-bold">
            ?
          </div>
          <span>Contact Us</span>
        </div>

        {/* About Us */}
        <div className="flex items-center space-x-3 text-lg hover:text-gray-600 cursor-pointer">
          <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-yellow-400 font-bold">
            A
          </div>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

