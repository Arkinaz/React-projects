import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Details from "./components/pages/details/details";
import Error from "./components/pages/eroor/error";
import Home from "./components/pages/home/home";
import Products from "./components/pages/products/products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
