const initialState = {
  products: [],
  count: 0,
};

export const ProductReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    console.log("add to product reducer");
    return {
      products: [...state.products, action.payload],
    };
  } else if (action.type === "INCREAMENT") {
    console.log("state from reducer", state);
    return {
      ...state,
      count: state.count + 1,
    };
  } else {
    return state;
  }
};
