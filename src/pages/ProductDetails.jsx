import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ArrowLeft, ShoppingCart } from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { getProductById } from "../features/products/ProductSlice";
import { addToCart } from "../features/products/CartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedProduct: product,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (status === "failed") {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error || "Something went wrong"}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link
            to={"/mini-shop/"}
            className="text-blue-500 hover:underline"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex items-center mb-6">
        <Link to={"/mini-shop/"}>
          <ArrowLeft className="hover:animate-pulse hover:scale-110 transition duration-300" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded">
          <img src={product.thumbnail} alt={product.name} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 font-semibold">{product.description}</p>
          <div className="mb-6">
            <span className="text-3xl font-bold">$ {product.price}</span>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">
              Category
            </h3>
            <span className="rounded-full inline-block bg-zinc-200 px-3">{product.category.toUpperCase()}</span>
          </div>
          <button className="w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center hover:bg-zinc-300 transistion duration-300" onClick={() => dispatch(addToCart(product))}>
            <ShoppingCart size={24} className="mx-4" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
