import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/products/CartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <p className="text-zinc-400">
          Add some Product to Your Cart to see them here
        </p>
        <Link to="/mini-shop/" className="text-blue-500 hover:underline">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <Link to={`/mini-shop/product/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </Link>

              <div className="flex-1">
                <Link
                  to={`/mini-shop/product/${item.id}`}
                  className="font-semibold hover:text-blue-400 hover:underline transition"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="hover:bg-zinc-100 rounded p-1 transition"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(0, item.quantity - 1),
                        })
                      )
                    }
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-gray-700">{item.quantity}</span>
                  <button
                    className="hover:bg-zinc-100 rounded p-1 transition"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    <Plus size={16} />
                  </button>
                  <div>
                    <button className="hover:scale-110 transition ml-4" onClick={() => dispatch(removeFromCart(item.id))}>
                      <Trash2 size={20} color="red" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:col-span-1 ">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-200 py-2 rounded font-semibold hover:bg-zinc-300 transition hover:scale-110">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
