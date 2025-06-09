import React, { useEffect } from "react";
// import { fetchProduct } from '../services/productService';
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/ProductSlice";

function ProductList() {
  // const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);
  const { term } = useSelector((state) => state.search);

  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(term.toLowerCase())
);

  // const loadProduct = async () => {
  //     const data = await fetchProduct();
  //     setProduct(data);
  //     console.log("Sản Phẩm: ", data);
  // }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-24">
      {filteredProducts.map((product) => (
        <ProductCard key={product} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
