import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import AppTest from "./pages/TestModel";
// import AppCatalog from "./pages/AddCatalog";
import AddCatalog from "./pages/AddCatalog";
import RatingsPage from "./pages/RatingsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      {/* <Route path="/addproduct" element={<AddProduct />} /> */}
      <Route path="/apptest" element={<AppTest />} /> 
      <Route path="/addcatalog" element={< AddCatalog/>} /> 
      <Route path="/ratings" element={< RatingsPage/>} /> 

    </Routes>
  );
}
export default App;
