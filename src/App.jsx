import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import OurStore from "./components/OurStore";
import Menu from "./components/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="our-store" element={<OurStore />}></Route>
        <Route path="menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
