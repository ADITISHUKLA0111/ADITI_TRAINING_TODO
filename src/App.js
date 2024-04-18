import React from "react";

import Todo from "./Components/Todo";
import Display from "./Components/Display";
import Header from "./Components/Header.js";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (<>
  
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/lists" element={<Display />} />
         
      </Routes>
   
    </>
  );
};
export default App;
