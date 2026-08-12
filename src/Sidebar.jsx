 import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Sidebar() {

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 shadow-2xl">

      <h1 className="text-3xl font-bold mb-10 border-b border-gray-700 pb-4">
        Amazon Clone
      </h1>

      <div className="flex flex-col gap-4">
        <Link  to="/" className="bg-gray-800 hover:bg-green-400 hover:text-black transition-all duration-300 px-4 py-3 rounded-xl font-semibold shadow-md">🛍 Product List </Link>
        <Link to="/ProductDetail" className="bg-gray-800 hover:bg-green-400 hover:text-black transition-all duration-300 px-4 py-3 rounded-xl font-semibold shadow-md"> Product Details
        </Link>
      </div>
 
    </div>
  );
}

export default Sidebar;