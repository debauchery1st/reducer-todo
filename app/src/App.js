import React, { useState } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducers/Todo.reducer";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [tasks, dispatch] = useReducer(reducer, [initialState]);
  const [state, setState] = useState({ tasks, inputValue: "" });
  const handleChange = e => {
    setState({ tasks, inputValue: e.currentTarget.value });
  };
  const handleCompletness = task => {
    dispatch({ type: "TOGGLE", payload: task });
    setState({ tasks: state.tasks, inputValue: state.inputValue });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: state.inputValue });
    setState({ tasks: state.tasks, inputValue: "" }); // clear input
  };
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList tasks={tasks} handler={handleCompletness} />
      <input
        placeholder="new task"
        onChange={handleChange}
        value={state.inputValue}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default App;
