import React, { useEffect, useState } from 'react'
import { fetchProduct } from '../services/productService';
import ProductCard from './ProductCard';

function ProductList() {

    const [products, setProduct] = useState([]);

    const loadProduct = async () => {
        const data = await fetchProduct();
        setProduct(data);
        console.log("Sản Phẩm: ", data);
    }

    useEffect(() => {
        loadProduct();
    },[])

  return (
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-24'>
     {products.map((product) => (
        <ProductCard key={product} product={product}/>
     ))}
    </div>
  )
}

export default ProductList