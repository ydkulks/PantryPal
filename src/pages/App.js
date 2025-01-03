import React from 'react';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Routes
import { BrowserRouter as BR, Routes, Route } from "react-router-dom";
// CSS
import "./style/Root/App.css";
// Pages
import NotFound from "./NotFound";
import NavBar from './Nav';
import Home from "./Home/Home";
import FooterSection from "./Footer";
import Terms from "./Terms";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Recipes from "./Protected/Recipes";
import Instructions from "./Protected/Instructions";
import SList from "./Protected/ShoppingList";

function App() {
  return (
    <BR>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Instructions" element={<Instructions />} />
        <Route path="/ShoppingList" element={<SList />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </BR>
  );
}

export default App;
