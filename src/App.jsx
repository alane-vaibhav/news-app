import "./App.css";
import Navbar from "./component/Navbar";
import Category from "./component/category";
import { NewsContextProvider } from "./pages/Context";
import Footer from "./pages/Footer";
import News from "./pages/News";
import { useSelector, useDispatch } from "react-redux";
import { IncreamentAction, ProductAction } from "./redux/action/productAction";
import Products from "./Products";
function App() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  console.log("STATE", state);

  const handleAddToProduct = () => {
    dispatch(
      ProductAction({
        id: 1,
        name: "Samsung",
      })
    );
  };

  const handleAddToIncreament = () => {
    dispatch(IncreamentAction());
  };

  const countState = useSelector((state) => state.count);
  console.log("countState", countState);
  return (
    // <NewsContextProvider>
    //   <Navbar className={"sticky top-0 z-20"} />
    //   <Category className="py-10 sticky top-14 z-10 bg-base-100" />
    //   <News />
    //   <Footer />
    // </NewsContextProvider>
    <>
      <>Hello</>
      <button onClick={handleAddToProduct}>Click</button>
      <button onClick={handleAddToIncreament}>Count</button>
      {countState}
      <Products />
    </>
  );
}

export default App;
