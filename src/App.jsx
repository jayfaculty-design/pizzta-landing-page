import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
