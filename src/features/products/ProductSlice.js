import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct, fetchProductById } from "../../services/productService";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const products = await fetchProduct();
    return products;
})

export const getProductById = createAsyncThunk('products/fetchProductById', async (id) => {
    const product = await fetchProductById(id);
    return product;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selectedProduct: null,
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
            .addCase(getProductById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedProduct = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

export default productSlice.reducer