"use client";
import { useState, useEffect } from "react";
import { api } from "../../api/product-api";

import ProductCard from "../ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // setLoading(true);
    const response = await api.get("products");
    const { data } = response;
    setProducts(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((productItem) => {
          return <ProductCard key={productItem.id} {...productItem} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
