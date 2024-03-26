import React from "react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Todo from "./Components/Todo";
import Display from "./Components/Display";
import Header from "./Components/Header.js";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (<>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/lists" element={<Display />} />
      </Routes>
    </Provider>
    </>
  );
};
export default App;
