import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import CreateTodo from "./pages/createtodo";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="createtodo" element={<CreateTodo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
