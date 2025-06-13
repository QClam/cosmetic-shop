import axios from "axios"

const API_URL = 'https://dummyjson.com/products';

export const fetchProduct = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        return data.products;
    } catch (error) {
        console.error('Lỗi khi fetch sản phẩm:', error);
        return [];
    }
}

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`)
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Lỗi khi fetch sản phẩm:', error);
        return null;
    }
}