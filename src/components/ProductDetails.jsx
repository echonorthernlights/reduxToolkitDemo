import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
const ProductDetails = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  // useEffect(() => {
  //   const res = products.find((p) => p.id === id);
  //   setProduct(res);
  //   console.log(product);
  // }, [id, product]);

  // const fetchProductDetails = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://fakestoreapi.com/products/${productId}`
  //     );
  //     setProduct(data);
  //   } catch (err) {
  //     console.log(err.error);
  //   }
  // };
  // useEffect(() => {
  //   fetchProductDetails(productId);
  // }, [productId]);
  return (
    <>
      {product && (
        <div className="container mt-2">
          <div className="row">
            <div className="col-4">
              <img
                src={product.image}
                className=""
                style={{ height: "250px" }}
              />
            </div>
            <div className="col-8">
              <h1>{product.title}</h1>
              <h2>$ {product.price}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
