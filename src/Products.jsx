import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  return <div>{JSON.stringify(state)}</div>;
};

export default Products;
