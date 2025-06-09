import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img src={product.thumbnail} alt="Thumbnail" />
        <div className="bg-zinc-50 p-4">
          <h2 className="text-lg font-semibold my-4">{product.title}</h2>
          <p className="tetx-sm text-zinc-500 border-b-1 pb-4">{product.description.substring(0,55) + "..."}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">${product.price}</p>
            <Link>View Detail</Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
