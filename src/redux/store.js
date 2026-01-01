import { createStore } from "redux";
import { ProductReducer } from "./reducer/ProductReducer";

const Store = createStore(ProductReducer);
export default Store;
