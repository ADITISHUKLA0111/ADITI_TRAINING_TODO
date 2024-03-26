import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
 reducer: {
 todokey: todoReducer,
 },
});

export default store;