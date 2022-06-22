import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Basket from "./components/Basket";
import Detail from "./components/Detail";





function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Main/>}/>
      <Route path = "/Login" element = {<Login />}/>
      <Route path = "/Detail" element = {<Detail />}/>
      <Route path = "/Detail/:boardid" element = {<Detail />}/>
      <Route path = "/Basket" element = {<Basket />}/>
      <Route path = "/Signup" element = {<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
