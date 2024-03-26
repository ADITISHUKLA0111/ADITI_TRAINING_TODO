import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoRedux",
  initialState: [],
  reducers: {
    addTodo(state, action){
      let [text,name,email,phone]=action.payload;
          const NewTodo={
          id:Math.random()*1000,
          text,
          name,
          email,
          phone,
          Complete:false
        };
      state.push(NewTodo);
    },
    toggleComplete(state, action){
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action){
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;