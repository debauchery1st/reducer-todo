import React from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducers/Todo.reducer";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, [initialState]);
  const handleComplete = item => {
    const newTodo = dispatch({ type: "TOGGLE", payload: item });
    console.log(newTodo);
  };
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList tasks={state} handler={handleComplete} />
      <input placeholer="new task" onClick={() => ""} />
      <button>add</button>
    </div>
  );
}

export default App;
