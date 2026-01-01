import "./App.css";
import Navbar from "./component/Navbar";
import Category from "./component/category";
import { NewsContextProvider } from "./pages/Context";
import Footer from "./pages/Footer";
import News from "./pages/News";
import { useSelector, useDispatch } from "react-redux";
import { ProductAction } from "./redux/action/productAction";
function App() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  console.log("STATE", state);
  return (
    // <NewsContextProvider>
    //   <Navbar className={"sticky top-0 z-20"} />
    //   <Category className="py-10 sticky top-14 z-10 bg-base-100" />
    //   <News />
    //   <Footer />
    // </NewsContextProvider>
    <>
      <>Hello</>
      <button onClick={() => dispatch(ProductAction())}>Click</button>
    </>
  );
}

export default App;
