import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ShoppingCart, User } from "lucide-react";

import logo from "../assets/Logo/Logo.png";

import { setSearchTerm } from "../features/products/SearchSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.term);

  //User Toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Menu trái */}
          <div className="flex space-x-6">
            <Link
              to={"cosmetics-shop/"}
              className="text-gray-700 hover:text-blue-600 hover:underline transition"
            >
              Home
            </Link>
            <Link
              to={"cosmetics-shop/"}
              className="text-gray-700 hover:text-blue-600 hover:underline transition"
            >
              About
            </Link>
            <Link
              to={"cosmetics-shop/"}
              className="text-gray-700 hover:text-blue-600 hover:underline transition"
            >
              FAQs
            </Link>
            <Link
              to={"cosmetics-shop/"}
              className="text-gray-700 hover:text-blue-600 hover:underline transition"
            >
              Contact
            </Link>
          </div>

          {/* Menu phải */}
          <div
            className={`${
              isOpen
                ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                : "hidden"
            }`}
          >
            <Link
              to={"cosmetics-shop/"}
              className="text-gray-700 hover:text-blue-600"
            >
              Sign
            </Link>
            <Link
              to={"cosmetics-shop/"}
              className="text-gray-700 hover:text-blue-600"
            >
              My Account
            </Link>
          </div>
          <User
            size={40}
            className="bg-gray-200 text-black p-2 cursor-pointer"
            onClick={handleToggle}
          />
        </div>
        <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 gap-4">
          <Link>
            <img src={logo} alt="" className="w-72 h-12" />
          </Link>
          <form action="" className="w-1/2 sm:block hidden">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-3 px-3 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
          <Link>
            <ShoppingCart
              size={54}
              className="rounded-full bg-gray-100 cursor-pointer px-3 py-2"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
