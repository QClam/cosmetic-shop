import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "../../services/productService";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const products = await fetchProduct();
    return products;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default productSlice.reducer