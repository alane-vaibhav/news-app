import { combineReducers, createStore } from "redux";
import { ProductReducer } from "./reducer/ProductReducer";
import { AddToCartReducer } from "./reducer/AddToCartReducer";

const rootReducer = combineReducers({
  ProductReducer,
  AddToCartReducer,
});
const Store = createStore(rootReducer);

export default Store;
