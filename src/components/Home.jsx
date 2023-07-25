import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
const Home = () => {
  //const [products, setProducts] = useState([]);
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log("products", products);
  // const fetchProducts = async () => {
  //   const { data } = await axios.get("https://fakestoreapi.com/products");
  //   setProducts(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div className="pt-2">
      <h1>Products list</h1>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
