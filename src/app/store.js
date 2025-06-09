import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice"
import searchReducer from "../features/products/SearchSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        search: searchReducer
    }
})

export default store