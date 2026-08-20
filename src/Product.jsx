import React from 'react';
import {Link} from 'react-router-dom';

function Product({ title, log, price, thumbnail, sku }) {

  return (
    
<div className="bg-white grid grid-cols-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 max-w-[250px]">

  <div className="overflow-hidden">
    <img
      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
      src={thumbnail}
      alt={title}
    />
  </div> 

  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
      {title}
    </h2>

    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
      {log}
    </p>

    <div className="mt-3">
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
        ₹{price}
      </span>
    </div>

    <div className="flex items-center gap-2 mt-4">
      <input
        type="number"
        defaultValue="1"
        min="1"
        max="10"
        className="w-14 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
      />

      <Link className="flex-1 bg-black text-white p-2 h-10 rounded-lg font-medium hover:bg-gray-800 transition-colors"
       to={`/ProductDetail/${sku}`}>
        View Detail
      </Link>


    </div>
  </div>



    </div>
  );
}

export default Product;