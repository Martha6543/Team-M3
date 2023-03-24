/** @format */

import "./App.css";
//import "./Home.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product.js";
import Climbing from "./pages/Climbing/Climbing.js";
import Running from "./pages/Running/Running.js";
import Football from "./pages/Football/Football.js";
import Tennis from "./pages/Tennis/Tennis.js";
import Hiking from "./pages/Hiking/Hiking.js";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home/Home.js";
import Account from "./pages/Account/Account.js";
import Contact from "./pages/Contact/Contact.js";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About/About.js";

function App() {
  return (
    <div className="App">
      <Navbar />
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/running" element={<Running />} />
      <Route path="/climbing" element={<Climbing />} />
      <Route path="/football" element={<Football />} />
      <Route path="/tennis" element={<Tennis />} />
      <Route path="/hiking" element={<Hiking />} />
      <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
