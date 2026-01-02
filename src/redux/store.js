import { combineReducers, createStore, compose } from "redux";
import { ProductReducer } from "./reducer/ProductReducer";
import { AddToCartReducer } from "./reducer/AddToCartReducer";

const rootReducer = combineReducers({
  ProductReducer,
  AddToCartReducer,
});
const Store = createStore(
  rootReducer,

  //to add devtool extension

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  //if any middleware used then
  // compose(
  //         applyMiddleware(...middleware),
  //         ReactReduxDevTools)
  // )
);

export default Store;
