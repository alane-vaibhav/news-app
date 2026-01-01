const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    console.log("add to product reducer");
    return state;
  } else {
    return state;
  }
};
