import "./App.css";
import Navbar from "./component/Navbar";
import Category from "./component/category";
import { NewsContextProvider } from "./pages/Context";
import Footer from "./pages/Footer";
import News from "./pages/News";

let api_key = "757cf010ffe34503afaa7b5c62726cf0";
function App() {
  return (
    <NewsContextProvider>
      <Navbar className={"sticky top-0 z-20"} />
      <Category className="py-10 sticky top-14 z-10 bg-base-100" />
      <News />
      <Footer />
    </NewsContextProvider>
  );
}

export default App;
