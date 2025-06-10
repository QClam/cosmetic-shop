import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice"
import searchReducer from "../features/products/SearchSlice"
import cartReducer from "../features/products/CartSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        search: searchReducer,
        cart: cartReducer,
    }
})

export default store