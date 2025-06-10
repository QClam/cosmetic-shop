import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/mini-shop/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img src={product.thumbnail} alt="Thumbnail" />
        <div className="bg-zinc-50 p-4">
          <h2 className="font-semibold my-4">{product.title}</h2>
          <p className="tetx-sm text-zinc-500 border-b-1 pb-4">{product.description.substring(0,50) + "..."}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">${product.price}</p>
            <p>View Detail</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
