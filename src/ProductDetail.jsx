 import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { getProductList } from "./api";

function ProductDetail() {
  const { sku } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductList().then((response) => {
      const item = response.data.products.find((p) => String(p.sku) === String(sku));
      setProduct(item);
    });
  }, [sku]);

  if (!product) {
    return <h1 className="text-2xl font-bold">Loading...</h1>;
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[220px] flex flex-col items-start">
        <img
          className="w-full h-40 rounded-lg"
          src={product.thumbnail}
        />

        <h1 className="text-lg font-bold mt-3">{product.title}</h1>
        <h2 className="text-gray-500 text-sm">{product.log}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {product.description}
        </p>

        <h2 className="text-green-600 font-bold mt-2">
          ${product.price}
        </h2>
      </div>


      <Link className="m-6 text-3xl" to="/">
        <IoArrowBack />
      </Link>
    </>
  );
}

export default ProductDetail;