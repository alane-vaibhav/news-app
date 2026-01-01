export const ProductAction = (details) => {
  return {
    type: "ADD_TO_PRODUCT",
    payload: details,
  };
};

export const IncreamentAction = () => {
  return {
    type: "INCREAMENT",
  };
};

export const AddToCartAction = () => {
  return {
    type: "ADD_TO_CART",
  };
};
