import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="mini-shop/" element={<Home />} />
        <Route path="mini-shop/product/:id" element={<ProductDetails />} />
        <Route path="mini-shop/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
